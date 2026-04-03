import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { PostService } from '../../services/post.service';
import { ReactionService } from '../../services/reaction.service';
import { AuthService } from '../../services/auth.service';
import { UserPreferencesService } from '../../services/user-preferences.service';
import { Post } from '../../models/post.model';
import { ReactionType } from '../../models/reaction.model';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  post: Post | null = null;
  loading = false;
  activeReactions = new Set<ReactionType>();

  readonly reactionList: { type: ReactionType; emoji: string; label: string }[] = [
    { type: 'LIKE', emoji: '👍', label: 'like' },
    { type: 'LOVE', emoji: '❤️', label: 'love' },
    { type: 'WOW',  emoji: '🚀', label: 'wow' },
    { type: 'HAHA', emoji: '👏', label: 'haha' },
  ];

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private reactionService: ReactionService,
    private authService: AuthService,
    private userPrefs: UserPreferencesService
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam ? Number(idParam) : 0;

    if (!id) {
      return;
    }

    this.loading = true;
    this.postService.getPostById(id).subscribe({
      next: (post) => {
        this.post = post;
        this.activeReactions = new Set<ReactionType>(
          (post.userReactions ?? []) as ReactionType[]
        );
        this.userPrefs.markAsRead(post.id);
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  getTitle(post: Post): string {
    return post.subject?.trim() || 'Sem titulo';
  }

  getPrimaryTopic(post: Post): string | null {
    return post.topics && post.topics.length > 0 ? post.topics[0] : null;
  }

  getTotalReactions(post: Post): number {
    const like = post.reactions?.like ?? 0;
    const love = post.reactions?.love ?? 0;
    const wow = post.reactions?.wow ?? 0;
    const haha = post.reactions?.haha ?? 0;
    return like + love + wow + haha;
  }

  commentsLabel(post: Post): string {
    const count = post.commentsCount ?? 0;
    return count > 0 ? `${count} comentarios` : 'nenhum comentario';
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  reactionCount(type: ReactionType): number {
    if (!this.post?.reactions) return 0;
    const key = type.toLowerCase() as keyof typeof this.post.reactions;
    return this.post.reactions[key] ?? 0;
  }

  react(type: ReactionType): void {
    if (!this.post || !this.isLoggedIn()) return;

    const isActive = this.activeReactions.has(type);
    const reactions = { ...this.post.reactions };
    const delta = isActive ? -1 : 1;

    this.applyDelta(reactions, type, delta);

    if (isActive) {
      this.activeReactions.delete(type);
    } else {
      this.activeReactions.add(type);
    }
    this.post = { ...this.post, reactions };

    const request$: Observable<unknown> = isActive
      ? this.reactionService.removeReaction(this.post.id, type)
      : this.reactionService.react(this.post.id, type);

    request$.subscribe({
      error: () => {
        // Rollback: reverte a atualização otimista em caso de erro da API
        this.applyDelta(reactions, type, -delta);
        if (isActive) {
          this.activeReactions.add(type);
        } else {
          this.activeReactions.delete(type);
        }
        if (this.post) this.post = { ...this.post, reactions };
      }
    });
  }

  private applyDelta(reactions: Post['reactions'], type: ReactionType, delta: number): void {
    if (type === 'LIKE') reactions.like = Math.max(0, reactions.like + delta);
    if (type === 'LOVE') reactions.love = Math.max(0, reactions.love + delta);
    if (type === 'WOW')  reactions.wow  = Math.max(0, reactions.wow  + delta);
    if (type === 'HAHA') reactions.haha = Math.max(0, reactions.haha + delta);
  }
}

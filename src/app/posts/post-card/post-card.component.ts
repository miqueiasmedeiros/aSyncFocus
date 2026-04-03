import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Post } from '../../models/post.model';
import { ReactionType } from '../../models/reaction.model';
import { PostService } from '../../services/post.service';
import { ReactionService } from '../../services/reaction.service';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnChanges {
  @Input() post!: Post;
  @Input() currentUserId = '';
  @Input() currentUserName = '';
  @Output() postUpdated = new EventEmitter<Post>();
  @Output() postDeleted = new EventEmitter<number>();

  activeReactions = new Set<ReactionType>();

  constructor(
    private postService: PostService,
    private reactionService: ReactionService,
    private router: Router
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['post'] && changes['post'].firstChange) {
      this.activeReactions = new Set<ReactionType>(
        (this.post.userReactions ?? []) as ReactionType[]
      );
    }
  }

  canEdit(): boolean {
    const isOwnerById = this.post.author?.id === this.currentUserId;
    const hasNameMatch =
      this.currentUserName.length > 0 && this.post.author?.name === this.currentUserName;

    return Boolean(isOwnerById || hasNameMatch);
  }

  getTitle(): string {
    const subject = this.post.subject?.trim();
    if (subject) {
      return subject;
    }
    const fallback = this.post.content?.trim() || '';
    return fallback ? fallback.split('\n')[0] : 'Sem titulo';
  }

  getExcerpt(): string {
    const body = this.post.content?.trim() || '';
    if (!body) {
      return '';
    }
    return body.length > 260 ? `${body.slice(0, 260)}...` : body;
  }

  getTopics(): string[] {
    return this.post.topics ?? [];
  }

  getTopicsLine(): string {
    return this.getTopics().join(' • ');
  }

  commentsLabel(): string {
    const count = this.post.commentsCount ?? 0;
    return count > 0 ? `${count} comentarios` : 'nenhum comentario';
  }

  editPost(): void {
    this.router.navigate(['/posts', this.post.id, 'edit']);
  }

  deletePost(): void {
    const confirmed = window.confirm('Delete this post?');
    if (!confirmed) {
      return;
    }

    this.postService.deletePost(this.post.id).subscribe({
      next: () => this.postDeleted.emit(this.post.id)
    });
  }

  react(type: ReactionType): void {
    const isActive = this.activeReactions.has(type);
    const reactions = { ...this.post.reactions };
    const delta = isActive ? -1 : 1;

    // Optimistic update — atualiza UI antes da resposta da API
    this.applyDelta(reactions, type, delta);
    if (isActive) {
      this.activeReactions.delete(type);
    } else {
      this.activeReactions.add(type);
    }
    const userReactions = [...this.activeReactions] as string[];
    this.post = { ...this.post, reactions, userReactions };
    this.postUpdated.emit(this.post);

    const request$: Observable<unknown> = isActive
      ? this.reactionService.removeReaction(this.post.id, type)
      : this.reactionService.react(this.post.id, type);

    request$.subscribe({
      error: () => {
        // Rollback em caso de erro
        const rollback = { ...this.post.reactions };
        this.applyDelta(rollback, type, -delta);
        if (isActive) {
          this.activeReactions.add(type);
        } else {
          this.activeReactions.delete(type);
        }
        const rollbackUserReactions = [...this.activeReactions] as string[];
        this.post = { ...this.post, reactions: rollback, userReactions: rollbackUserReactions };
        this.postUpdated.emit(this.post);
      }
    });
  }

  updateCommentsCount(count: number): void {
    this.post = { ...this.post, commentsCount: count };
    this.postUpdated.emit(this.post);
  }

  private applyDelta(reactions: Post['reactions'], type: ReactionType, delta: number): void {
    if (type === 'LIKE') {
      reactions.like = Math.max(0, reactions.like + delta);
    }
    if (type === 'LOVE') {
      reactions.love = Math.max(0, reactions.love + delta);
    }
    if (type === 'WOW') {
      reactions.wow = Math.max(0, reactions.wow + delta);
    }
    if (type === 'HAHA') {
      reactions.haha = Math.max(0, reactions.haha + delta);
    }
  }
}

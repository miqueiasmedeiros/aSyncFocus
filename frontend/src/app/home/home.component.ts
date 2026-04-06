import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { PostService } from '../services/post.service';
import { AuthService } from '../services/auth.service';
import { UserPreferencesService } from '../services/user-preferences.service';
import { Post } from '../models/post.model';
import { User } from '../models/user.model';

export type FeedView = 'todos' | 'meus-topicos' | 'nao-lidos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  allPosts: Post[] = [];
  currentUser: User | null = null;
  loading = false;

  view: FeedView = 'todos';
  searchQuery = '';

  private paramsSub?: Subscription;

  constructor(
    private postService: PostService,
    private authService: AuthService,
    private userPrefs: UserPreferencesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.currentUser = this.authService.getCurrentUser();
    this.loadFeed();

    this.paramsSub = this.route.queryParams.subscribe(params => {
      this.view = (params['view'] as FeedView) || 'todos';
      this.searchQuery = params['q'] || '';
    });
  }

  ngOnDestroy(): void {
    this.paramsSub?.unsubscribe();
  }

  loadFeed(): void {
    this.loading = true;
    this.postService.getFeed().subscribe({
      next: (posts) => {
        this.allPosts = posts;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  get filteredPosts(): Post[] {
    let posts = this.allPosts;

    if (this.view === 'meus-topicos') {
      const followed = this.userPrefs.getFollowedTopics();
      if (followed.length > 0) {
        posts = posts.filter((p) =>
          (p.topics ?? []).some((t) => followed.includes(t))
        );
      }
    } else if (this.view === 'nao-lidos') {
      posts = posts.filter((p) => !this.userPrefs.isRead(p.id));
    }

    const q = this.searchQuery.trim().toLowerCase();
    if (q) {
      posts = posts.filter(
        (p) =>
          p.subject?.toLowerCase().includes(q) ||
          p.content?.toLowerCase().includes(q) ||
          p.author?.name?.toLowerCase().includes(q) ||
          (p.topics ?? []).some((t) => t.toLowerCase().includes(q))
      );
    }

    return posts;
  }

  get unreadCount(): number {
    return this.allPosts.filter((p) => !this.userPrefs.isRead(p.id)).length;
  }

  get hasFollowedTopics(): boolean {
    return this.userPrefs.getFollowedTopics().length > 0;
  }

  handlePostUpdated(post: Post): void {
    this.allPosts = this.allPosts.map((item) => (item.id === post.id ? post : item));
  }

  handlePostDeleted(postId: number): void {
    this.allPosts = this.allPosts.filter((item) => item.id !== postId);
  }

  trackByPostId(_index: number, post: Post): number {
    return post.id;
  }
}

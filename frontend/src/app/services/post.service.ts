import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../../environments/environment';
import { Post } from '../models/post.model';

interface PostPayload {
  subject: string;
  content: string;
  topics: string[];
  imageUrl?: string;
}

interface PostResponse {
  id: number;
  userId: number;
  authorName: string;
  authorAvatarUrl?: string | null;
  subject: string;
  content: string;
  topics: string[];
  imageUrl?: string | null;
  createdAt: string;
  updatedAt: string;
  commentsCount?: number;
  likeCount?: number;
  loveCount?: number;
  wowCount?: number;
  hahaCount?: number;
  userReactions?: string[];
}

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private http: HttpClient) {}

  getFeed(): Observable<Post[]> {
    return this.http
      .get<PostResponse[]>(`${environment.apiUrl}/posts`)
      .pipe(map((posts) => posts.map((post) => this.mapPost(post))));
  }

  getPostById(id: number): Observable<Post> {
    return this.http
      .get<PostResponse>(`${environment.apiUrl}/posts/${id}`)
      .pipe(map((post) => this.mapPost(post)));
  }

  createPost(payload: PostPayload): Observable<Post> {
    return this.http
      .post<PostResponse>(`${environment.apiUrl}/posts`, payload)
      .pipe(map((post) => this.mapPost(post)));
  }

  updatePost(id: number, payload: PostPayload): Observable<Post> {
    return this.http
      .put<PostResponse>(`${environment.apiUrl}/posts/${id}`, payload)
      .pipe(map((post) => this.mapPost(post)));
  }

  deletePost(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/posts/${id}`);
  }

  private mapPost(post: PostResponse): Post {
    const like = post.likeCount ?? 0;
    const love = post.loveCount ?? 0;
    const wow = post.wowCount ?? 0;
    const haha = post.hahaCount ?? 0;

    return {
      id: post.id,
      author: {
        id: String(post.userId),
        name: post.authorName,
        email: '',
        avatarUrl: post.authorAvatarUrl ?? undefined
      },
      subject: post.subject,
      content: post.content,
      topics: post.topics ?? [],
      createdAt: post.createdAt,
      reactions: {
        like,
        love,
        wow,
        haha
      },
      commentsCount: post.commentsCount ?? 0,
      imageUrl: post.imageUrl ?? undefined,
      userReactions: post.userReactions ?? []
    };
  }
}

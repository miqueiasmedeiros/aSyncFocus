import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../../environments/environment';
import { Comment } from '../models/comment.model';

interface CommentPayload {
  postId: number;
  comment: string;
}

interface CommentResponse {
  id: number;
  postId: number;
  userId: number;
  authorName: string;
  authorAvatarUrl?: string | null;
  comment: string;
  createdAt: string;
}

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  constructor(private http: HttpClient) {}

  listByPost(postId: number): Observable<Comment[]> {
    return this.http
      .get<CommentResponse[]>(`${environment.apiUrl}/comments/${postId}`)
      .pipe(map((comments) => comments.map((comment) => this.mapComment(comment))));
  }

  addComment(postId: number, payload: { content: string }): Observable<Comment> {
    const body: CommentPayload = {
      postId,
      comment: payload.content
    };

    return this.http
      .post<CommentResponse>(`${environment.apiUrl}/comments`, body)
      .pipe(map((comment) => this.mapComment(comment)));
  }

  updateComment(commentId: number, content: string): Observable<Comment> {
    return this.http
      .put<CommentResponse>(`${environment.apiUrl}/comments/${commentId}`, { comment: content })
      .pipe(map((comment) => this.mapComment(comment)));
  }

  deleteComment(commentId: number): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/comments/${commentId}`);
  }

  private mapComment(comment: CommentResponse): Comment {
    return {
      id: comment.id,
      author: {
        id: String(comment.userId),
        name: comment.authorName,
        email: '',
        avatarUrl: comment.authorAvatarUrl ?? undefined
      },
      content: comment.comment,
      createdAt: comment.createdAt
    };
  }
}

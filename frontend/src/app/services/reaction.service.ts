import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ReactionType } from '../models/reaction.model';

interface ReactionResponse {
  id: number;
  postId: number;
  userId: number;
  type: ReactionType;
}

@Injectable({
  providedIn: 'root'
})
export class ReactionService {
  constructor(private http: HttpClient) {}

  react(postId: number, type: ReactionType): Observable<ReactionResponse> {
    return this.http.post<ReactionResponse>(`${environment.apiUrl}/reactions`, {
      postId,
      type
    });
  }

  removeReaction(postId: number, type: ReactionType): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/reactions/${postId}`, {
      params: { type }
    });
  }
}

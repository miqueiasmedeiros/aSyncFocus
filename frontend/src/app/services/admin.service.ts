import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface AdminUser {
  id: number;
  name: string;
  email: string;
  avatarUrl?: string | null;
  role: string;
  mustChangePassword: boolean;
  createdAt: string;
}

export interface AdminPost {
  id: number;
  subject: string;
  content: string;
  createdAt: string;
  user: { id: number; name: string; avatarUrl?: string | null };
  topics: { topic: string }[];
}

export interface CreateUserPayload {
  name: string;
  email: string;
  password: string;
  role: string;
}

@Injectable({ providedIn: 'root' })
export class AdminService {
  private base = `${environment.apiUrl}/admin`;

  constructor(private http: HttpClient) {}

  getUsers(): Observable<AdminUser[]> {
    return this.http.get<AdminUser[]>(`${this.base}/users`);
  }

  createUser(payload: CreateUserPayload): Observable<AdminUser> {
    return this.http.post<AdminUser>(`${this.base}/users`, payload);
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.base}/users/${id}`);
  }

  editUser(id: number, payload: { name: string; email: string; role: string }): Observable<AdminUser> {
    return this.http.put<AdminUser>(`${this.base}/users/${id}`, payload);
  }

  getPosts(): Observable<AdminPost[]> {
    return this.http.get<AdminPost[]>(`${this.base}/posts`);
  }

  deletePost(id: number): Observable<void> {
    return this.http.delete<void>(`${this.base}/posts/${id}`);
  }
}

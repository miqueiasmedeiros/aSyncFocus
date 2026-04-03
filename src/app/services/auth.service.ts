import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, switchMap, tap } from 'rxjs';
import { environment } from '../../environments/environment';
import { User } from '../models/user.model';

interface AuthResponse {
  token: string;
  tokenType: string;
}

interface MessageResponse {
  message: string;
}

interface LoginPayload {
  email: string;
  password: string;
}

interface RegisterPayload {
  name: string;
  email: string;
  password: string;
}

interface ProfileUpdatePayload {
  name: string;
  avatarUrl?: string;
}

interface UserProfileResponse {
  id: number;
  name: string;
  email: string;
  avatarUrl?: string | null;
  role?: string;
  mustChangePassword?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenKey = 'corpnet_token';
  private userKey = 'corpnet_user';
  private currentUserSubject = new BehaviorSubject<User | null>(this.getStoredUser());
  currentUser$ = this.currentUserSubject.asObservable();

  constructor(private http: HttpClient) {}

  login(payload: LoginPayload): Observable<UserProfileResponse> {
    return this.http
      .post<AuthResponse>(`${environment.apiUrl}/auth/login`, payload)
      .pipe(
        tap((response) => localStorage.setItem(this.tokenKey, response.token)),
        switchMap(() => this.http.get<UserProfileResponse>(`${environment.apiUrl}/users/me`)),
        tap((profile) => this.storeUser(profile))
      );
  }

  register(payload: RegisterPayload): Observable<MessageResponse> {
    return this.http.post<MessageResponse>(`${environment.apiUrl}/auth/register`, payload);
  }

  verifyEmail(token: string): Observable<MessageResponse> {
    return this.http.get<MessageResponse>(`${environment.apiUrl}/auth/verify`, {
      params: { token }
    });
  }

  resendVerification(email: string): Observable<MessageResponse> {
    return this.http.get<MessageResponse>(`${environment.apiUrl}/auth/resend`, {
      params: { email }
    });
  }

  updateProfile(payload: ProfileUpdatePayload): Observable<UserProfileResponse> {
    return this.http
      .put<UserProfileResponse>(`${environment.apiUrl}/users/me`, payload)
      .pipe(tap((response) => this.storeUser(response)));
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.userKey);
    this.currentUserSubject.next(null);
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }

  isAdmin(): boolean {
    return this.currentUserSubject.value?.role === 'ADMIN';
  }

  mustChangePassword(): boolean {
    return this.currentUserSubject.value?.mustChangePassword === true;
  }

  changePassword(password: string): Observable<UserProfileResponse> {
    return this.http
      .put<UserProfileResponse>(`${environment.apiUrl}/users/me/change-password`, { password })
      .pipe(tap((profile) => this.storeUser(profile)));
  }

  private storeUser(profile: UserProfileResponse): void {
    const user: User = {
      id: String(profile.id),
      name: profile.name,
      email: profile.email,
      avatarUrl: profile.avatarUrl ?? undefined,
      role: profile.role,
      mustChangePassword: profile.mustChangePassword
    };
    localStorage.setItem(this.userKey, JSON.stringify(user));
    this.currentUserSubject.next(user);
  }

  private getStoredUser(): User | null {
    const stored = localStorage.getItem(this.userKey);
    if (!stored) {
      return null;
    }
    try {
      return JSON.parse(stored) as User;
    } catch {
      return null;
    }
  }
}

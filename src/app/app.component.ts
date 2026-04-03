import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';
import { User } from './models/user.model';

export type FeedView = 'todos' | 'meus-topicos' | 'nao-lidos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  user$: Observable<User | null> = this.authService.currentUser$;

  selectedView: FeedView = 'todos';
  searchQuery = '';

  readonly viewLabels: Record<FeedView, string> = {
    'todos': 'Todos os posts',
    'meus-topicos': 'Meus tópicos',
    'nao-lidos': 'Não lidos'
  };

  constructor(public authService: AuthService, private router: Router) {}

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  getInitials(name?: string): string {
    if (!name) {
      return 'U';
    }
    const parts = name.trim().split(' ').filter(Boolean);
    if (parts.length === 1) {
      return parts[0].slice(0, 2).toUpperCase();
    }
    return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
  }

  setView(view: FeedView): void {
    this.selectedView = view;
    this.router.navigate(['/home'], {
      queryParams: { view, q: this.searchQuery || null },
      queryParamsHandling: 'merge'
    });
  }

  search(): void {
    this.router.navigate(['/home'], {
      queryParams: { q: this.searchQuery || null, view: this.selectedView },
      queryParamsHandling: 'merge'
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminService, AdminUser, AdminPost } from '../services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  users: AdminUser[] = [];
  posts: AdminPost[] = [];
  loadingUsers = false;
  loadingPosts = false;
  activeTab: 'users' | 'posts' = 'users';

  showCreateForm = false;
  creating = false;

  editingUserId: number | null = null;
  saving = false;

  createForm = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    role: ['USER', Validators.required]
  });

  editForm = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    role: ['USER', Validators.required]
  });

  constructor(
    private adminService: AdminService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loadUsers();
    this.loadPosts();
  }

  loadUsers(): void {
    this.loadingUsers = true;
    this.adminService.getUsers().subscribe({
      next: (users) => { this.users = users; this.loadingUsers = false; },
      error: () => { this.loadingUsers = false; }
    });
  }

  loadPosts(): void {
    this.loadingPosts = true;
    this.adminService.getPosts().subscribe({
      next: (posts) => { this.posts = posts; this.loadingPosts = false; },
      error: () => { this.loadingPosts = false; }
    });
  }

  submitCreateUser(): void {
    if (this.createForm.invalid) return;
    this.creating = true;
    this.adminService.createUser(this.createForm.getRawValue()).subscribe({
      next: (user) => {
        this.users = [user, ...this.users];
        this.creating = false;
        this.showCreateForm = false;
        this.createForm.reset({ role: 'USER' });
        this.snackBar.open('Usuário criado. Ele deverá trocar a senha no primeiro acesso.', 'Fechar', { duration: 3500 });
      },
      error: () => {
        this.creating = false;
        this.snackBar.open('Falha ao criar usuário.', 'Fechar', { duration: 2500 });
      }
    });
  }

  startEdit(user: AdminUser): void {
    this.editingUserId = user.id;
    this.editForm.setValue({ name: user.name, email: user.email, role: user.role });
  }

  cancelEdit(): void {
    this.editingUserId = null;
  }

  submitEdit(): void {
    if (this.editForm.invalid || !this.editingUserId) return;
    this.saving = true;
    this.adminService.editUser(this.editingUserId, this.editForm.getRawValue()).subscribe({
      next: (updated) => {
        this.users = this.users.map((u) => u.id === updated.id ? updated : u);
        this.saving = false;
        this.editingUserId = null;
        this.snackBar.open('Usuário atualizado.', 'Fechar', { duration: 2000 });
      },
      error: () => {
        this.saving = false;
        this.snackBar.open('Falha ao atualizar usuário.', 'Fechar', { duration: 2500 });
      }
    });
  }

  deleteUser(user: AdminUser): void {
    if (!confirm(`Excluir o usuário "${user.name}"? Esta ação não pode ser desfeita.`)) return;
    this.adminService.deleteUser(user.id).subscribe({
      next: () => {
        this.users = this.users.filter((u) => u.id !== user.id);
        this.snackBar.open('Usuário excluído.', 'Fechar', { duration: 2000 });
      },
      error: () => this.snackBar.open('Falha ao excluir usuário.', 'Fechar', { duration: 2500 })
    });
  }

  deletePost(post: AdminPost): void {
    if (!confirm(`Excluir o post "${post.subject}"?`)) return;
    this.adminService.deletePost(post.id).subscribe({
      next: () => {
        this.posts = this.posts.filter((p) => p.id !== post.id);
        this.snackBar.open('Post excluído.', 'Fechar', { duration: 2000 });
      },
      error: () => this.snackBar.open('Falha ao excluir post.', 'Fechar', { duration: 2500 })
    });
  }

  getTopics(post: AdminPost): string {
    return post.topics.map((t) => t.topic).join(', ');
  }
}

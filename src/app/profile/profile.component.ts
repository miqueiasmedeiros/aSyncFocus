import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../services/auth.service';
import { UploadService } from '../services/upload.service';
import { UserPreferencesService, ALL_TOPICS } from '../services/user-preferences.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  loading = false;
  uploadingAvatar = false;
  avatarPreview = '';

  allTopics = ALL_TOPICS;
  topicsSaved = false;

  form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: [{ value: '', disabled: true }],
    avatarUrl: ['', [Validators.maxLength(500)]]
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private uploadService: UploadService,
    private userPrefs: UserPreferencesService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    const user = this.authService.getCurrentUser();
    if (user) {
      this.form.patchValue({
        name: user.name,
        email: user.email,
        avatarUrl: user.avatarUrl || ''
      });
      this.avatarPreview = user.avatarUrl || '';
    }
  }

  onAvatarUrlInput(): void {
    const url = this.form.get('avatarUrl')?.value?.trim() || '';
    this.avatarPreview = url;
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) {
      return;
    }

    const file = input.files[0];
    input.value = '';

    if (!file.type.startsWith('image/')) {
      this.snackBar.open('Selecione um arquivo de imagem.', 'Fechar', { duration: 2500 });
      return;
    }

    // Preview local imediato
    const reader = new FileReader();
    reader.onload = (e) => {
      this.avatarPreview = e.target?.result as string;
    };
    reader.readAsDataURL(file);

    // Upload real para o servidor
    this.uploadingAvatar = true;
    this.uploadService.uploadImage(file).subscribe({
      next: (url) => {
        this.uploadingAvatar = false;
        this.avatarPreview = url;
        this.form.patchValue({ avatarUrl: url });
        this.snackBar.open('Foto carregada. Clique em Salvar para confirmar.', 'Fechar', { duration: 3000 });
      },
      error: () => {
        this.uploadingAvatar = false;
        this.avatarPreview = this.form.get('avatarUrl')?.value || '';
        this.snackBar.open('Falha ao enviar a imagem. Tente novamente.', 'Fechar', { duration: 2500 });
      }
    });
  }

  save(): void {
    if (this.form.invalid) {
      this.snackBar.open('Verifique os campos antes de salvar.', 'Fechar', { duration: 2500 });
      return;
    }

    this.loading = true;
    const value = this.form.getRawValue();
    this.authService.updateProfile({
      name: value.name,
      avatarUrl: value.avatarUrl || undefined
    }).subscribe({
      next: () => {
        this.loading = false;
        this.snackBar.open('Perfil atualizado com sucesso.', 'Fechar', { duration: 2500 });
      },
      error: () => {
        this.loading = false;
        this.snackBar.open('Falha ao atualizar o perfil.', 'Fechar', { duration: 2500 });
      }
    });
  }

  isTopicFollowed(topic: string): boolean {
    return this.userPrefs.isFollowing(topic);
  }

  toggleTopic(topic: string, checked: boolean): void {
    const current = this.userPrefs.getFollowedTopics();
    const updated = checked
      ? Array.from(new Set([...current, topic]))
      : current.filter((t) => t !== topic);
    this.userPrefs.setFollowedTopics(updated);
    this.topicsSaved = true;
    setTimeout(() => (this.topicsSaved = false), 2000);
  }
}

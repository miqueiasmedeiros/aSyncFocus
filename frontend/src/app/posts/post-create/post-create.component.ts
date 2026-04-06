import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PostService } from '../../services/post.service';
import { PostFormValue } from '../post-form/post-form.component';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent {
  submitting = false;

  constructor(
    private postService: PostService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  handleSave(payload: PostFormValue): void {
    this.submitting = true;
    this.postService.createPost(payload).subscribe({
      next: (post) => {
        this.submitting = false;
        this.snackBar.open('Post publicado.', 'Fechar', { duration: 2500 });
        this.router.navigate(['/posts', post.id]);
      },
      error: () => {
        this.submitting = false;
        this.snackBar.open('Falha ao publicar o post.', 'Fechar', { duration: 2500 });
      }
    });
  }
}

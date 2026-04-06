import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PostService } from '../../services/post.service';
import { PostFormValue } from '../post-form/post-form.component';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.scss']
})
export class PostEditComponent implements OnInit {
  submitting = false;
  loading = true;
  postId: number | null = null;
  initialValue?: PostFormValue;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postService: PostService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam ? Number(idParam) : NaN;
    if (!id || Number.isNaN(id)) {
      this.router.navigate(['/home']);
      return;
    }

    this.postId = id;
    this.postService.getPostById(id).subscribe({
      next: (post: Post) => {
        this.initialValue = {
          subject: post.subject,
          content: post.content,
          topics: post.topics ?? []
        };
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.snackBar.open('Nao foi possivel carregar o post.', 'Fechar', { duration: 2500 });
        this.router.navigate(['/home']);
      }
    });
  }

  handleSave(payload: PostFormValue): void {
    if (!this.postId) {
      return;
    }

    this.submitting = true;
    this.postService.updatePost(this.postId, payload).subscribe({
      next: (post) => {
        this.submitting = false;
        this.snackBar.open('Post atualizado.', 'Fechar', { duration: 2500 });
        this.router.navigate(['/posts', post.id]);
      },
      error: () => {
        this.submitting = false;
        this.snackBar.open('Falha ao atualizar o post.', 'Fechar', { duration: 2500 });
      }
    });
  }
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CommentService } from '../../services/comment.service';
import { AuthService } from '../../services/auth.service';
import { Comment } from '../../models/comment.model';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent implements OnInit {
  @Input() postId = 0;
  @Output() countChanged = new EventEmitter<number>();

  comments: Comment[] = [];
  loading = false;
  currentUserId = '';

  editingId: number | null = null;
  editControl = new FormControl('', [Validators.required, Validators.maxLength(1000)]);
  savingEdit = false;
  deletingId: number | null = null;

  constructor(
    private commentService: CommentService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.currentUserId = this.authService.getCurrentUser()?.id ?? '';
    this.loadComments();
  }

  loadComments(): void {
    if (!this.postId) {
      return;
    }

    this.loading = true;
    this.commentService.listByPost(this.postId).subscribe({
      next: (comments) => {
        this.comments = comments;
        this.loading = false;
        this.countChanged.emit(this.comments.length);
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  handleCommentAdded(comment: Comment): void {
    this.comments = [...this.comments, comment];
    this.countChanged.emit(this.comments.length);
  }

  isOwner(comment: Comment): boolean {
    return comment.author.id === this.currentUserId;
  }

  startEdit(comment: Comment): void {
    this.editingId = comment.id;
    this.editControl.setValue(comment.content);
  }

  cancelEdit(): void {
    this.editingId = null;
    this.editControl.reset();
  }

  saveEdit(comment: Comment): void {
    if (this.editControl.invalid) {
      return;
    }

    this.savingEdit = true;
    const newContent = this.editControl.value!.trim();
    this.commentService.updateComment(comment.id, newContent).subscribe({
      next: (updated) => {
        this.comments = this.comments.map((c) => (c.id === updated.id ? updated : c));
        this.editingId = null;
        this.editControl.reset();
        this.savingEdit = false;
      },
      error: () => {
        this.savingEdit = false;
      }
    });
  }

  deleteComment(comment: Comment): void {
    this.deletingId = comment.id;
    this.commentService.deleteComment(comment.id).subscribe({
      next: () => {
        this.comments = this.comments.filter((c) => c.id !== comment.id);
        this.countChanged.emit(this.comments.length);
        this.deletingId = null;
      },
      error: () => {
        this.deletingId = null;
      }
    });
  }
}

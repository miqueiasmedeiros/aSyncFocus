import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CommentService } from '../../services/comment.service';
import { Comment } from '../../models/comment.model';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss']
})
export class CommentFormComponent {
  @Input() postId = 0;
  @Output() commentAdded = new EventEmitter<Comment>();

  submitting = false;
  form = this.fb.nonNullable.group({
    content: ['', [Validators.required, Validators.maxLength(300)]]
  });

  constructor(private fb: FormBuilder, private commentService: CommentService) {}

  submit(): void {
    if (this.form.invalid || !this.postId) {
      return;
    }

    this.submitting = true;
    this.commentService.addComment(this.postId, this.form.getRawValue()).subscribe({
      next: (comment) => {
        this.commentAdded.emit(comment);
        this.form.reset();
        this.submitting = false;
      },
      error: () => {
        this.submitting = false;
      }
    });
  }
}

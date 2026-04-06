import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CommentListComponent } from './comment-list/comment-list.component';
import { CommentFormComponent } from './comment-form/comment-form.component';

@NgModule({
  declarations: [CommentListComponent, CommentFormComponent],
  imports: [SharedModule],
  exports: [CommentListComponent, CommentFormComponent]
})
export class CommentsModule {}

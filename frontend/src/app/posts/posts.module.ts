import { NgModule } from '@angular/core';
import { PostCardComponent } from './post-card/post-card.component';
import { PostFormComponent } from './post-form/post-form.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostCreateComponent } from './post-create/post-create.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { SharedModule } from '../shared/shared.module';
import { CommentsModule } from '../comments/comments.module';

@NgModule({
  declarations: [
    PostCardComponent,
    PostFormComponent,
    PostDetailComponent,
    PostCreateComponent,
    PostEditComponent
  ],
  imports: [SharedModule, CommentsModule],
  exports: [PostCardComponent, PostFormComponent, PostDetailComponent]
})
export class PostsModule {}

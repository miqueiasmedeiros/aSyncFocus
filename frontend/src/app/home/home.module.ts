import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { PostsModule } from '../posts/posts.module';
import { CommentsModule } from '../comments/comments.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [SharedModule, PostsModule, CommentsModule]
})
export class HomeModule {}

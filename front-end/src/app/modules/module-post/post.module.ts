import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';

import { PostsComponent } from './posts/posts.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostHeaderComponent } from './post-header/post-header.component';
import { BoxPostComponent } from './posts/box-post/box-post.component';

@NgModule({
  declarations: [
    PostsComponent,
    PostDetailComponent,
    PostHeaderComponent,
    BoxPostComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    PostsComponent,
    PostHeaderComponent
  ]
})
export class PostModule { }

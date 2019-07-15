import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsComponent } from './posts/posts.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostHeaderComponent } from './post-header/post-header.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    PostsComponent, 
    PostDetailComponent, 
    PostHeaderComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    PostsComponent,
    PostHeaderComponent
  ]
})
export class PostModule { }
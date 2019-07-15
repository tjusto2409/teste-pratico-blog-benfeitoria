// Modulo Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modulo da aplicação
import { SharedModule } from '../../shared/shared.module';

// Components
import { HomeComponent } from './home/home.component';
import { PostModule } from '../module-post/post.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PostModule
  ]
})
export class HomeModule { }

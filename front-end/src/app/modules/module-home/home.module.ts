// Modulo Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

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
    HttpClientModule,
    SharedModule,
    PostModule
  ]
})
export class HomeModule { }

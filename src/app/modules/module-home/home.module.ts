// Modulo Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modulo da aplicação
import { SharedModule } from '../../shared/shared.module';

// Components
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginasComponent } from './paginas/paginas.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    PaginasComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class PaginasModule { }

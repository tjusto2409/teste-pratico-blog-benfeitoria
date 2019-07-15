import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { PostComponent } from './admin/post/post.component';
import { UsuarioComponent } from './admin/usuario/usuario.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [LoginComponent, PostComponent, UsuarioComponent, AdminComponent],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }

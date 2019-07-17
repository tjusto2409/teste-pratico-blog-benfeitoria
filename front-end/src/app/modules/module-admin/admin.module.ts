// Modulo Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modulo da aplicação
import { AdminRoutingModule } from './admin-routing.module';

// Components
import { LoginComponent } from './login/login.component';
import { PostsComponent } from './admin/posts/posts.component';
import { UsuarioComponent } from './admin/usuario/usuario.component';
import { AdminComponent } from './admin/admin.component';
import { DefaultComponent } from './admin/default/default.component';


@NgModule({
  declarations: [
    LoginComponent, 
    PostsComponent, 
    UsuarioComponent, 
    AdminComponent, DefaultComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]  
})
export class AdminModule { }

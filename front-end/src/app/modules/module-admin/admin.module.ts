// Modulos Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// Modulos da aplicação
import { AdminRoutingModule } from './admin-routing.module';
import { PostModule } from './../module-post/post.module';

import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

// Components
import { LoginComponent } from './login/login.component';
import { PostsComponent } from './admin/posts/posts.component';
import { UsuarioComponent } from './admin/usuario/usuario.component';
import { AdminComponent } from './admin/admin.component';
import { DefaultComponent } from './admin/default/default.component';
import { EditorComponent } from './admin/posts/editor/editor.component';

// Serviços
import { AuthService } from '../../core/guards/auth.service';

@NgModule({
  declarations: [
    LoginComponent,
    PostsComponent,
    UsuarioComponent,
    DefaultComponent,
    AdminComponent,
    EditorComponent
  ],
  providers: [
    AuthService
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CKEditorModule,
    AdminRoutingModule,
    PostModule
  ]
})
export class AdminModule { }

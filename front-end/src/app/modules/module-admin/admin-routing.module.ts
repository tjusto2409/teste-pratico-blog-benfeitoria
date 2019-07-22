import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsuarioComponent } from './admin/usuario/usuario.component';
import { AdminComponent } from './admin/admin.component';
import { DefaultComponent } from './admin/default/default.component';
import { PostsComponent } from './admin/posts/posts.component';
import { EditorComponent } from './admin/posts/editor/editor.component';

const adminRoutes: Routes = [
  { path: 'admin', component: AdminComponent, children: [
    // { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'dashboard', component: DefaultComponent },
    { path: 'usuario', component: UsuarioComponent },
    { path: 'posts', component: PostsComponent },    
    { path: 'posts/adicionar', component: EditorComponent },
    { path: 'posts/editar/:id', component: EditorComponent }
  ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }

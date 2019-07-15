import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsuarioComponent } from './admin/usuario/usuario.component';
import { PostsComponent } from '../module-post/posts/posts.component';
import { AdminComponent } from './admin/admin.component';
import { DefaultComponent } from './admin/default/default.component';

const adminRoutes: Routes = [
  { path: 'admin', component: AdminComponent, children:[
    { path: '', component: DefaultComponent },
    { path: 'usuario', component: UsuarioComponent },
    { path: 'post', component: PostsComponent },
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

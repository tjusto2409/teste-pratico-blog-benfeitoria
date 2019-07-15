import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsuarioComponent } from './admin/usuario/usuario.component';
import { AdminComponent } from './admin/admin.component';
import { DefaultComponent } from './admin/default/default.component';
import { PostsComponent } from './admin/posts/posts.component';

const adminRoutes: Routes = [
  { path: 'admin', component: AdminComponent, children:[
    { path: '', component: DefaultComponent },
    { path: 'usuario', component: UsuarioComponent },
    { path: 'posts', component: PostsComponent },
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

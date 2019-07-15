import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

// Path
import { PageNotFoundComponent } from '../../shared/page-not-found/page-not-found.component';
import { HomeComponent } from '../../modules/module-home/home/home.component';
import { PostDetailComponent } from '../../modules/module-post/post-detail/post-detail.component';

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'post-detail/:id', component: PostDetailComponent },
    { path: '**', component: PageNotFoundComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
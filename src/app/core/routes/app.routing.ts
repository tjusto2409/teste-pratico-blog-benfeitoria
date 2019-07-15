import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

// Path
import { PageNotFoundComponent } from '../../shared/page-not-found/page-not-found.component';
import { HomeComponent } from '../../modules/module-home/home/home.component';

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: '**', component: PageNotFoundComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { OnboardComponent } from './onboard/onboard.component';
import { PagesComponent } from './pages/pages.component';
import { LoginGuard } from './services/service.index';



const appRoutes: Routes = [
    { path: 'onboard', component: OnboardComponent },
    { path: 'login', component: LoginComponent },
    { path: '',
    component: PagesComponent,
    canActivate: [LoginGuard],
    loadChildren: './pages/pages.module#PagesModule'},
    { path: '**', redirectTo: '/login', pathMatch: 'full' },
];


export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true });

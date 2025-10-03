import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { About } from './components/about/about';

export const routes: Routes = [
    // {path:'', component:Home},
    // {path:'about',component:About}

    //lazy loading
    {path: '', loadComponent: () => import('./components/home/home').then(m => m.Home)},
    {path: 'about', loadComponent: () => import('./components/about/about').then(m => m.About)},
    {path:'admin', loadComponent:()=> import('./admin/admin').then(m =>m.Admin)}

];

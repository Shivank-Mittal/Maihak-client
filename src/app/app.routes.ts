import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { MenuDetailComponent } from './pages/menu-detail/menu-detail.component';

export const routes: Routes = [
   {path: 'home', component: HomeComponent },
   {path: 'menu', component: MenuComponent},
   {path: 'menu-info', component: MenuDetailComponent},
   {path: '', redirectTo: '/home', pathMatch: 'full' } 
];

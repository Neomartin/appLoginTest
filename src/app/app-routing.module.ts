import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
// Components
import { LoginComponent } from './pages/login/login.component';
//Guard
import { LoginGuard } from './core/guards/login.guard';
import { PAGES_ROUTES } from './pages/pages.routes';

const routes: Routes = [
  { path:  '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PAGES_ROUTES
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

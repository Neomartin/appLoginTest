import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const childRoutes: Routes = [
    { path: 'home', component: HomeComponent, data: { title: 'Home'} },
]

@NgModule({
    imports: [
        RouterModule.forChild(childRoutes),
    ],
    exports: [ RouterModule ]
})
export class ChildRoutesModule {}


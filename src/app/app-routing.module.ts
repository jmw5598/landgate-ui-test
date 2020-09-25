import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { 
    path: 'home', 
    component: HomeComponent
  },
  {
    path: 'people',
    loadChildren: () => import('./components/people-ngrx/people-ngrx.module')
      .then(m => m.PeopleNgrxModule)
  },
  {
    path: '', 
    redirectTo: '/home', 
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleGuard } from './guards/people.guard';
import { PeopleNgrxComponent } from './people-ngrx.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [PeopleGuard],
    component: PeopleNgrxComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PeopleNgrxRoutingModule { }
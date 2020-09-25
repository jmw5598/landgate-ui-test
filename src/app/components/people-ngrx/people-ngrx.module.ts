import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PeopleNgrxComponent } from './people-ngrx.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromPeople from './ngrx/reducers/people.reducer';
import { PeopleEffects } from './ngrx/effects/people.effects';
import { PeopleNgrxRoutingModule } from './people-ngrx-routing.module';
import { PersonComponent } from './components/person/person.component';

@NgModule({
  declarations: [
    PeopleNgrxComponent,
    PersonComponent
  ],
  exports: [
    PeopleNgrxComponent
  ],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    PeopleNgrxRoutingModule,
    StoreModule.forFeature(
      fromPeople.peopleFeatureKey, 
      fromPeople.reducer
    ), 
    EffectsModule.forFeature([
      PeopleEffects
    ])
  ]
})
export class PeopleNgrxModule {
}

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { switchMap, map, catchError } from 'rxjs/operators';
import {EMPTY, of} from 'rxjs';

import * as PeopleActions from '../actions/people.actions';
import {loadedPeople} from '../actions/people.actions';

import { PeopleService } from '../../../../services/people.service'
import { PersonModel } from 'src/app/models/person-model';


@Injectable()
export class PeopleEffects {

  loadPeoples$ = createEffect(() => this.actions$.pipe(
    ofType(PeopleActions.loadPeoples),
    switchMap(() => this.peopleService.getPeople().pipe(
      map((people: PersonModel[]) => loadedPeople(people))
    ))
  ));

  updatePerson$ = createEffect(() => this.actions$.pipe(
    ofType(PeopleActions.updatePerson),
    switchMap(({person}) => this.peopleService.updatePerson(person).pipe(
      map((person: PersonModel) => PeopleActions.updatePersonSuccess(person))
    ))
  ));

  constructor(
    private actions$: Actions,
    private peopleService: PeopleService
  ) {}

}

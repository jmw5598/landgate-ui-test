import { createAction, props } from '@ngrx/store';
import {PersonModel} from '../../../../models/person-model';

// This is a request
export const loadPeoples = createAction(
  '[People] Load Peoples'
);

// This is a load success
export const loadedPeople = createAction(
  '[People] Loaded',
  (people: PersonModel[]) => ({people})
)

export const updatePerson = createAction(
  '[People] Update Person',
  (person: PersonModel) => ({person})
);

export const updatePersonSuccess = createAction(
  '[People] Update Person Success',
  (person: PersonModel) => ({person})
);

import { Action, createReducer, on } from '@ngrx/store';
import { PersonModel } from 'src/app/models/person-model';
import * as PeopleActions from '../actions/people.actions';

export const peopleFeatureKey = 'people';

// TODO: Need to add People to the store and initialize it.
export interface State {
  people: PersonModel[]
}

export const initialState: State = {
  people: null
};


export const reducer = createReducer(
  initialState,
  on(PeopleActions.loadPeoples, state => state),
  on(PeopleActions.loadedPeople, (state, { people }) => {
    return {
      ...state,
      people: people
    };
  }),
  on(PeopleActions.updatePersonSuccess, (state, { person }) => {
    const updatedPeople: PersonModel[] = state.people.map(e => {
      if (e.id === person.id) return person;
      return e;
    })
    return {
      ...state,
      people: updatedPeople,
    }
  })
);


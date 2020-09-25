import { Component, OnInit } from '@angular/core';

import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { fadeAnimation } from 'src/app/animations/fade.animation';
import { PersonModel } from 'src/app/models/person-model';
import { AppState } from '../../reducers/index';
import { updatePerson } from './ngrx/actions/people.actions';
import { selectPeople } from './ngrx/selectors/people.selectors';

@Component({
  selector: 'app-people-component',
  templateUrl: './people-ngrx.component.html',
  styleUrls: ['./people-ngrx.component.scss'],
  animations: [fadeAnimation]
})
export class PeopleNgrxComponent implements OnInit {
  public people$: Observable<PersonModel[]>;

  // TODO: Include the Store and get the data from the NgrxStore
  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.people$ = this.store.pipe(select(selectPeople))
  }

  public onSavePerson(person: PersonModel): void {
    this.store.dispatch(updatePerson(person));
  }
}

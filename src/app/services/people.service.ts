import { Injectable } from '@angular/core';
import {delay, filter} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {PersonModel} from '../models/person-model';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor() { }

  private mockPeopleList: PersonModel[] = [
    {id: 1, firstName: 'John', lastName: 'Doe', age: +'21', jobTitle: 'Wanna be Signer'},
    {id: 2, firstName: 'Jane', lastName: 'Doe', age: +'22', jobTitle: 'Signer'},
    {id: 3, firstName: 'Bob', lastName: 'Barker', age: +'80', jobTitle: 'TV Host'},
    {id: 4, firstName: 'John', lastName: 'Doe', age: +'21', jobTitle: 'Wanna be Signer'},
  ];


  getPeople(): Observable<PersonModel[]> {
    // TODO: Finish this implementation using the data from mockPeopleList
    // of(true).pipe(delay(100))
    return of(
      this.mockPeopleList.map(e => ({ ...e }))
    ).pipe(delay(100));
  }

  updatePerson(person: PersonModel): Observable<PersonModel> {
    let existingPerson: PersonModel = this.mockPeopleList.find(e => e.id === person.id);
    if (existingPerson) {
      Object.assign(existingPerson, person);
    }
    return of({...existingPerson}).pipe(delay(100));
  }
}

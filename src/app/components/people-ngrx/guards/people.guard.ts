import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { tap, filter, take, catchError, switchMap } from 'rxjs/operators';

import { select, Store } from '@ngrx/store';
import { AppState } from '../../../reducers';
import { PersonModel } from 'src/app/models/person-model';
import { selectPeople } from '../ngrx/selectors/people.selectors';
import { loadPeoples } from '../ngrx/actions/people.actions';

@Injectable({
  providedIn: 'root'
})
export class PeopleGuard implements CanActivate {
  constructor(private store: Store<AppState>) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    return this.getPeopleFromStoreOrApi().pipe(
      switchMap(() => of(true)),
      catchError(() => of(false))
    );
  }

  private getPeopleFromStoreOrApi(): Observable<PersonModel[]> {
    return this.store.pipe(
      select(selectPeople),
      tap((people: PersonModel[]) => {
        if (!people) {
          this.store.dispatch(loadPeoples())
        }
      }),
      filter((people: PersonModel[]) => !!people),
      take(1)
    );
  }
}

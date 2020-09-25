import { TestBed, async, inject } from '@angular/core/testing';

import { PeopleGuard } from './people.guard';

describe('PeopleGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PeopleGuard]
    });
  });

  it('should ...', inject([PeopleGuard], (guard: PeopleGuard) => {
    expect(guard).toBeTruthy();
  }));
});

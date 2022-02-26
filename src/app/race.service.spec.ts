import { TestBed } from '@angular/core/testing';

import { RaceService } from './race.service';

describe('RaceService', () => {
  let service: RaceService;

  beforeEach(() => TestBed.configureTestingModule({}));

  beforeEach(() => (service = TestBed.inject(RaceService)));

  it('should list races', () => {
    const races = service.list();
    expect(races.length).withContext('The service should return five races for the `list()` method').toBe(5);
  });
});

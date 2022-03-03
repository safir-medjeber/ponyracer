import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { RacesComponent } from './races.component';
import { RaceService } from '../race.service';
import { RaceModel } from '../models/race.model';

describe('RacesComponent', () => {
  const service = jasmine.createSpyObj<RaceService>('RaceService', ['list']);

  beforeEach(() =>
    TestBed.configureTestingModule({
      declarations: [RacesComponent],
      providers: [{ provide: RaceService, useValue: service }]
    })
  );

  it('should display every race name in a title', () => {
    service.list.and.returnValue(
      of([{ name: 'Lyon' }, { name: 'Los Angeles' }, { name: 'Sydney' }, { name: 'Tokyo' }, { name: 'Casablanca' }] as Array<RaceModel>)
    );

    const fixture = TestBed.createComponent(RacesComponent);
    fixture.detectChanges();

    expect(service.list).toHaveBeenCalled();

    expect(fixture.componentInstance.races).withContext('You need to have a field `races` initialized with 5 races').not.toBeNull();
    expect(fixture.componentInstance.races.length).withContext('You need to have a field `races` initialized with 5 races').toBe(5);
    expect(fixture.componentInstance.races[0].name).toBe('Lyon');
    expect(fixture.componentInstance.races[1].name).toBe('Los Angeles');
    expect(fixture.componentInstance.races[2].name).toBe('Sydney');
    expect(fixture.componentInstance.races[3].name).toBe('Tokyo');
    expect(fixture.componentInstance.races[4].name).toBe('Casablanca');

    const element = fixture.nativeElement;
    const raceNames = element.querySelectorAll('h2');
    expect(raceNames.length).withContext('You should have four `h2` elements').toBe(4);
    expect(raceNames[0].textContent).toContain('Lyon');
    expect(raceNames[1].textContent).toContain('Los Angeles');
    expect(raceNames[2].textContent).toContain('Sydney');
    expect(raceNames[3].textContent).toContain('Tokyo');
  });
});

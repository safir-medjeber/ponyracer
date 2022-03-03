import { Injectable } from '@angular/core';
import { RaceModel } from './models/race.model';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RaceService {
  constructor() {}

  list(): Observable<RaceModel[]> {
    return of([{ name: 'Lyon' }, { name: 'Los Angeles' }, { name: 'Sydney' }, { name: 'Tokyo' }, { name: 'Casablanca' }]).pipe(delay(500));
  }
}

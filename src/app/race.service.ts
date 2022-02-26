import { Injectable } from '@angular/core';
import { RaceModel } from './models/race.model';

@Injectable({
  providedIn: 'root'
})
export class RaceService {
  constructor() {}

  list(): RaceModel[] {
    return [{ name: 'Tokyo' }, { name: 'Paris' }];
  }
}

import { Component, OnInit } from '@angular/core';
import { RaceModel } from '../models/race.model';
import { RaceService } from '../race.service';

@Component({
  selector: 'pr-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.css']
})
export class RacesComponent implements OnInit {
  races: RaceModel[] = [];
  constructor(private raceService: RaceService) {}

  ngOnInit(): void {
    this.raceService.list().subscribe(race => (this.races = race));
  }
}

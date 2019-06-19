import { Component, OnInit } from '@angular/core';

import { Character, Profession } from '../characters/character';
import { CharacterService } from '../characters/character.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  heroes: Character[] = [];
  villains: Character[] = [];

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
    this.heroes = this.characterService.getActiveCharacters(Profession.hero);
    this.villains = this.characterService.getActiveCharacters(Profession.villain);
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Character } from '../character';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent implements OnInit {
  character: Character;
  smallImg: Boolean = true;
  showWaldo: Boolean = true;
  id: number;

  constructor(
    private characterService: CharacterService,
    private activatedRoute: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.id = +this.activatedRoute.snapshot.paramMap.get("id");
    this.character = this.characterService.getCharacter(this.id);
  }

  save(): void {
    this.characterService.update(this.character);
    this.goBack();
  }

  delete(character: Character): void {
    this.characterService.delete(character.id);
    this.goBack();
  }

  goBack(): void {
    this.location.back();
  }
}

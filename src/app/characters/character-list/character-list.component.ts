import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Character } from '../character';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {
  characters: Character[] = [];
  profession: String;

  constructor(private activatedRoute: ActivatedRoute,
    private characterService: CharacterService) { }

  ngOnInit() {
    this.profession = this.activatedRoute.snapshot.data['profession'];
    this.characters = this.characterService.getCharacters(this.profession);
  }
}

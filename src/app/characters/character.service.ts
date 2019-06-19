import { Injectable } from '@angular/core';

import { Character, Profession, Status } from './character';
import { CHARACTERS } from './mock-characters';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor() { }

  getCharacters(profession: any): Character[] {
    return CHARACTERS
      .filter(character => character.profession === profession)
      .sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
  }

  getActiveCharacters(profession: any): Character[] {
    return CHARACTERS
      .filter(character => character.profession === profession && character.status === Status.active)
      .sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
  }

  getCharacter(id: number): Character {
    return CHARACTERS.find(character => character.id == id);
  }

  update(modifiedCharacter: Character): void {
    const index: number = CHARACTERS.findIndex(character => character.id == modifiedCharacter.id);
    CHARACTERS[index] = modifiedCharacter;
  }

  delete(id: number): void {
    const index: number = CHARACTERS.findIndex(character => character.id == id);
    CHARACTERS.splice(index, 1);
  }
}

import { Injectable } from '@angular/core';

import { Character, Profession, Status } from './character';
import { CHARACTERS } from './mock-characters';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor() { }

  getCharacters(profession: any): Character[] {
    return CHARACTERS.slice(0, 5);
  }
}

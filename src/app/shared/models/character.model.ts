export interface CharacterModel {
  gameCode: string;
  code: string;
  name: string;
  imageUrl: string | undefined;
  cardImageUrl: string | undefined;
  element: string;
  type: string;
  rarity: string;
  enhanced: boolean;
  skillDescription: string;
}

export interface CharacterImageModel {
  gameCode: string;
  characterCode: string;
  imageUrl: string;
  type: string;
}

export class Character implements CharacterModel {
  gameCode = '';
  code = '';
  name = '';
  imageUrl = undefined;
  cardImageUrl = undefined;
  element = '';
  type = '';
  rarity = '';
  enhanced = false;
  skillDescription = '';

  constructor(code = '', name = '') {
    this.code = code;
    this.name = name;
  }
}
export interface PetModel {
  gameCode: string;
  code: string;
  name: string;
  imageUrl: string | undefined;
  rarity: string;
}

export class Pet implements PetModel {
  gameCode = '';
  code = '';
  name = '';
  imageUrl = undefined;
  rarity = '';

  constructor(code = '', name = '') {
    this.code = code;
    this.name = name;
  }
}
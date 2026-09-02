import { SafeHtml } from "@angular/platform-browser";

export interface SetModel {
  gameCode: string;
  code: string;
  name: string;
  category: string;
  imageUrl: string;
  rarity: string;
  effects: SetEffectModel[];
}

export interface SetEffectModel {
  gameCode: string;
  setCode: string;
  label: string;
  requiredPiece: string;
  description: string;
  formattedDescription?: SafeHtml
}

export class SetClass implements SetModel {
  gameCode = '';
  code = '';
  name = '';
  category = '';
  imageUrl = '';
  rarity = '';
  effects: SetEffectModel[] = [];

  constructor(code = '', name = '') {
    this.code = code;
    this.name = name;
  }
}
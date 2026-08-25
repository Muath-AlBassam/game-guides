import { SafeHtml } from "@angular/platform-browser";

export interface WeaponModel {
  gameCode: string;
  code: string;
  name: string;
  type: string;
  secondaryStat: string;
  effect: string;
  imageUrl: string;
  rarity: string;
  formattedEffect?: SafeHtml
}

export class Weapon implements WeaponModel {
  gameCode: string = '';
  code: string = '';
  name: string = '';
  type: string = '';
  secondaryStat: string = '';
  effect: string = '';
  imageUrl: string = '';
  rarity: string = '';

  constructor(code: string, name: string) {
    this.code = code;
    this.name = name;
  }
}
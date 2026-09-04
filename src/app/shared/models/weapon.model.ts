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
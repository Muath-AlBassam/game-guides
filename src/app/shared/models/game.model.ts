export interface GameModel {
  code: string;
  label: string;
  style: string;
  teamSize: number;
  hasPet: boolean;
  iconUrl: string;
  logoUrl: string;
  backgroundUrl: string;
  guideUrl: string;
  isActive: boolean;
}

export class GameClass implements GameModel {
  code = '';
  label = '';
  style = '';
  teamSize = 0;
  hasPet = false;
  iconUrl = '';
  logoUrl = '';
  backgroundUrl = '';
  guideUrl = '';
  isActive = false;

  constructor(code = '', label = '') {
    this.code = code;
    this.label = label;
  }
}
export interface TeamModel {
  gameCode: string;
  code: string;
  category: string;
  name?: string;
  speciality: string;
  iconUrl: string;
  pet: string;
  tags: string[];
  order: number;
  characters: TeamCharacterModel[];
}

export interface TeamCharacterModel {
  gameCode: string;
  teamCode: string;
  name: string;
  roleCode: string;
  roleDescription?: string;
  isMain: boolean;
  replacements: string[];
}

export class Team implements TeamModel {
  gameCode = '';
  code = '';
  category = '';
  name = '';
  speciality = '';
  iconUrl = '';
  pet = '';
  tags: string[] = [];
  order = 0;
  characters: TeamCharacterModel[] = [];

  constructor(code: string, name: string) {
    this.code = code;
    this.name = name;
  }
}
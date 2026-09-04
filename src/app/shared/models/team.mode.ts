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
  roleDescriptionList?: string[];
  isMain: boolean;
  replacements: string[];
}
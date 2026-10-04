import { CharacterModel } from "./character.model";

export interface TeamModel {
  gameCode: string;
  code: string;
  category: string;
  name?: string;
  iconUrl: string;
  pet: string;
  tags: string[];
  order: number;
  members: TeamMemberModel[];
}

export interface TeamMemberModel {
  gameCode: string;
  teamCode: string;
  characterCode: string;
  roleCode: string;
  isMain: boolean;
  replacements: TeamMemberReplacementModel[];

  character?: CharacterModel;
}

export interface TeamMemberReplacementModel {
  gameCode: string;
  teamCode: string;
  characterCode: string;
  replacementCode: string;
  roleCode: string;
  notes: string;
}
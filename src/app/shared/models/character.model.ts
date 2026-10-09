export interface CharacterModel {
  gameCode: string;
  code: string;
  name: string;
  imagePFP: CharacterImageModel | undefined;
  imageCard: CharacterImageModel | undefined;
  element: string;
  type: string;
  rarity: string;
  enhanced: boolean;
  skillDescriptionList: string[];
}

export interface CharacterImageModel {
  gameCode: string;
  characterCode: string;
  imageUrl: string;
  type: string;
  startX: number,
  startY: number,
  width: number,
  height: number
}

export interface BuildModel {
  gameCode: string;
  character: string;
  weapons: {
    name: string;
  }[];
  sets: {
    name: string;
    equippedPieces: string;
  }[];
}

export interface BuildFlatModel {
  gameCode: string;
  character: string;
  type: string;
  name: string;
  equippedPieces: string;
}
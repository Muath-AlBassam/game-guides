export interface NoteModel {
  gameCode: string;
  ownerCode: string;
  ownerType: string;
  notes: {
    text: string
  }[];
}
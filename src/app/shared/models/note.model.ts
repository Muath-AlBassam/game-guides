import { SafeHtml } from "@angular/platform-browser";

export interface NoteModel {
  gameCode: string;
  ownerCode: string;
  ownerType: string;
  title: string;
  text: string;
  isActive: boolean;

  formattedTitle?: SafeHtml;
  formattedText?: SafeHtml;
}
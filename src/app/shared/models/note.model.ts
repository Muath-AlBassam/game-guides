import { SafeHtml } from "@angular/platform-browser";

export interface NoteModel {
  gameCode: string;
  ownerCode: string;
  ownerType: string;
  title: string;
  text: string;

  formattedTitle?: SafeHtml;
  formattedText?: SafeHtml;
}
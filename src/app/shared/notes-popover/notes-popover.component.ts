import { Component, Input, OnInit } from '@angular/core';
import { NotesService } from '../../services/notes.service';
import { Utils } from '../../utils/utils';

@Component({
  selector: 'app-notes-popover',
  templateUrl: './notes-popover.component.html',
  styleUrl: './notes-popover.component.css'
})
export class NotesPopoverComponent implements OnInit {

  @Input() gameCode: any = null;
  @Input() teamCode: any = null;
  @Input() iconSize: number = 25;
  @Input() position: string = 'superscript'; // inline, superscript

  notes: any = null;

  constructor(private notesService: NotesService) { }

  ngOnInit(): void {

  }

  loadData() {
    this.notes = this.formatNotes(this.notesService.getAllByTeam(this.gameCode, this.teamCode));
  }

  formatNotes(notesList: any[]) {
    let formatted = null;
    if (notesList && notesList?.length > 0) {
      let fromattedList = notesList.map(n => {
        return `<li>${this.formatText(n.text)}</li>`;
      });
      formatted = `<ul>${fromattedList.join('')}</ul>`
    }
    return formatted;
  }

  formatText(text: any) {
    if (text == null) {
      return text;
    }
    // img_***_img => image
    return String(text)
      .replace(/img_(.*?)_img/g, (match, capture) => `<img src='${Utils.appendRepoUrl(capture)}' width='20' />`);
  }
}

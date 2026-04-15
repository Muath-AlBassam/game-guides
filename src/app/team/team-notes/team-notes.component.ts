import { Component, Input, OnInit } from '@angular/core';
import { NotesService } from '../../services/notes.service';
import { NoteUtils } from '../../utils/note-utils';

@Component({
  selector: 'app-team-notes',
  templateUrl: './team-notes.component.html',
  styleUrl: './team-notes.component.css'
})
export class TeamNotesComponent implements OnInit {

  @Input() gameCode: any = null;
  @Input() teamCode: any = null;

  notes: any[] = [];
  formattedNotes: any[] = [];

  constructor(private notesService: NotesService, private noteUtils: NoteUtils) { }

  ngOnInit(): void {
    this.loadNotes();
    this.formatNotes();
  }

  loadNotes() {
    this.notes = this.notesService.getAllByTeam(this.gameCode, this.teamCode);
  }

  formatNotes() {
    if (this.notes && this.notes?.length > 0) {
      this.formattedNotes = this.notes.map(n => this.noteUtils.format(n.text, this.gameCode));
    }
  }
}

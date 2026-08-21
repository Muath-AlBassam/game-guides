import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../services/notes.service';
import { TextUtils } from '../../utils/text-utils';

@Component({
  selector: 'app-game-notes',
  templateUrl: './game-notes.component.html',
  styleUrl: './game-notes.component.css'
})
export class GameNotesComponent implements OnInit {

  notes: any[] = [];
  formattedNotes: any[] = [];

  constructor(private notesService: NotesService, private textUtils: TextUtils) {}

  ngOnInit(): void {
    this.loadGameNotes();
    this.formatNotes();
  }

  loadGameNotes() {
    this.notes = this.notesService.getAllByOwnerType('GAME');
  }

  formatNotes() {
    if (this.notes && this.notes?.length > 0) {
      this.formattedNotes = this.notes.map(n => this.textUtils.formatAndColorize(n.text, n.gameCode));
    }
  }

}

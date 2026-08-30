import { Component, Input, OnInit } from '@angular/core';
import { NotesService } from '../../../shared/api/notes.service';
import { TextUtils } from '../../../shared/utils/text-utils';
import { StoreKeys, StoreService } from '../../../shared/services/store.service';
import { NoteModel } from '../../../shared/models/note.model';

@Component({
  selector: 'app-team-notes',
  templateUrl: './team-notes.component.html',
  styleUrl: './team-notes.component.css'
})
export class TeamNotesComponent implements OnInit {

  @Input() teamCode!: string;

  notes: NoteModel[] = [];

  constructor(
    private notesService: NotesService,
    private textUtils: TextUtils,
    private store: StoreService
  ) {}

  ngOnInit(): void {
    this.loadNotes();
    this.formatNotes();
  }

  loadNotes(): void {
    this.notes = this.notesService.getAllByOwnerTypeAndCode('TEAM', this.teamCode);
  }

  formatNotes(): void {
    if (this.notes && this.notes?.length > 0) {
      const gameCode = this.store.get(StoreKeys.GAME_CODE);
      this.notes.forEach(n => {
        if (n.title) {
          n.formattedTitle = this.textUtils.format(n.title, gameCode);
        }
        n.formattedText = this.textUtils.formatAndColorize(n.text, gameCode);
      });
    }
  }
}

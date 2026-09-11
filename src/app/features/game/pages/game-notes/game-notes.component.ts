import { Component, OnInit } from '@angular/core';
import { NotesService } from '@shared/api/notes.service';
import { TextUtils } from '@shared/utils/text-utils';
import { StoreKeys, StoreService } from '@shared/services/store.service';
import { NoteModel } from '@shared/models/note.model';
import { BreadcrumbsService } from '@shared/services/breadcrumbs.service';

@Component({
  selector: 'app-game-notes',
  templateUrl: './game-notes.component.html',
  styleUrl: './game-notes.component.css'
})
export class GameNotesComponent implements OnInit {

  notes: NoteModel[] = [];

  constructor(
    private notesService: NotesService,
    private textUtils: TextUtils,
    private store: StoreService,
    private breadcrumbsService: BreadcrumbsService,
  ) {}

  ngOnInit(): void {
    this.breadcrumbsService.notesList();
    this.loadGameNotes();
    this.formatNotes();
  }

  loadGameNotes(): void {
    this.notes = this.notesService.getAllByOwnerType('GAME');
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

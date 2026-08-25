import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../../shared/api/notes.service';
import { TextUtils } from '../../../shared/utils/text-utils';
import { StoreKeys, StoreService } from '../../../shared/services/store.service';
import { SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-game-notes',
  templateUrl: './game-notes.component.html',
  styleUrl: './game-notes.component.css'
})
export class GameNotesComponent implements OnInit {

  notes: { text: string }[] = [];
  formattedNotes: SafeHtml[] = [];

  constructor(
    private notesService: NotesService,
    private textUtils: TextUtils,
    private store: StoreService
  ) {}

  ngOnInit(): void {
    this.loadGameNotes();
    this.formatNotes();
  }

  loadGameNotes(): void {
    this.notes = this.notesService.getAllByOwnerType('GAME');
  }

  formatNotes(): void {
    if (this.notes && this.notes?.length > 0) {
      const gameCode = this.store.get(StoreKeys.GAME_CODE);
      this.formattedNotes = this.notes.map(n => this.textUtils.formatAndColorize(n.text, gameCode));
    }
  }

}

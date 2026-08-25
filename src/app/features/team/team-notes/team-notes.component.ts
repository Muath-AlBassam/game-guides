import { Component, Input, OnInit } from '@angular/core';
import { NotesService } from '../../../shared/api/notes.service';
import { TextUtils } from '../../../shared/utils/text-utils';
import { SafeHtml } from '@angular/platform-browser';
import { StoreKeys, StoreService } from '../../../shared/services/store.service';

@Component({
  selector: 'app-team-notes',
  templateUrl: './team-notes.component.html',
  styleUrl: './team-notes.component.css'
})
export class TeamNotesComponent implements OnInit {

  @Input() teamCode!: string;

  notes: { text: string }[] = [];
  formattedNotes: SafeHtml[] = [];

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
      this.formattedNotes = this.notes.map(n => this.textUtils.formatAndColorize(n.text, gameCode));
    }
  }
}

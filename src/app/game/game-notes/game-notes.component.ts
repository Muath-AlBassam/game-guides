import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../services/notes.service';
import { RouteService } from '../../services/route.service';
import { TextUtils } from '../../utils/text-utils';

@Component({
  selector: 'app-game-notes',
  templateUrl: './game-notes.component.html',
  styleUrl: './game-notes.component.css'
})
export class GameNotesComponent implements OnInit {

  gameCode: any = null;
  notes: any[] = [];
  formattedNotes: any[] = [];

  constructor(private routeService: RouteService, private notesService: NotesService, private textUtils: TextUtils) {}

  async ngOnInit(): Promise<void> {
    this.gameCode = await this.routeService.getActiveGame();
    this.loadGameNotes();
    this.formatNotes();
  }

  loadGameNotes() {
    this.notes = this.notesService.getAllByGame(this.gameCode);
  }

  formatNotes() {
    if (this.notes && this.notes?.length > 0) {
      this.formattedNotes = this.notes.map(n => this.textUtils.formatAndColorize(n.text, this.gameCode));
    }
  }

}

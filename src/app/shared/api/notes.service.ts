import { Injectable } from '@angular/core';
import { DataClientService } from '@shared/api/data-client.service';
import { StoreKeys, StoreService } from '@shared/services/store.service';
import { NoteModel } from '@shared/models/note.model';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  notesList: NoteModel[] = [];

  constructor(
    private dataClient: DataClientService,
    private store: StoreService
  ) {
    this.dataClient.sheetLoaded$.subscribe(res => {
      if (res) this.fetchData();
    });
  }

  private fetchData(): void {
    this.dataClient.loadData('NOTES').then(notes => {
      this.notesList = notes.map((n: any) => ({
        gameCode: n.GAME_CODE,
        ownerCode: n.OWNER_CODE,
        ownerType: n.OWNER_TYPE,
        title: n.TITLE,
        text: n.TEXT
      }));
    });
  }

  getAllByOwnerType(type: string): NoteModel[] {
    const gameCode = this.store.get(StoreKeys.GAME_CODE);
    return this.notesList
      .filter(n => n.gameCode == gameCode && n.ownerType == type);
  }

  getAllByOwnerTypeAndCode(ownerType: string, ownerCode: string): NoteModel[] {
    const gameCode = this.store.get(StoreKeys.GAME_CODE);
    return this.notesList
      .filter(n => n.gameCode == gameCode && n.ownerType == ownerType && n.ownerCode == ownerCode);
  }
}

import { Injectable } from '@angular/core';
import { DataClientService } from './data-client.service';
import { Utils } from '../utils/utils';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  notesList: any[] = [];

  constructor(private dataClient: DataClientService) {
    this.dataClient.sheetLoaded$.subscribe(res => {
      if (res) this.fetchData();
    });
  }

  fetchData() {
    this.dataClient.loadData('NOTES').then(notes => {
      const flatList = notes.map((n: any) => ({
        gameCode: n.GAME_CODE, ownerCode: n.OWNER_CODE, ownerType: n.OWNER_TYPE, text: n.TEXT
      }));

      const grouped = Utils.groupBy(flatList, 'gameCode', 'ownerCode');
      grouped.forEach((val, key) => {
        this.notesList.push({
          gameCode: val[0].gameCode,
          ownerCode: val[0].ownerCode,
          ownerType: val[0].ownerType,
          notes: val.map((n: any) => ({ text: n.text })),
        });
      })
    });
  }

  getAllByTeam(gameCode: any, teamCode: any) {
    const data = this.notesList
      .find(n => n.gameCode == gameCode && n.ownerCode == teamCode && n.ownerType == 'TEAM');
    return data ? data.notes : null;
  }
}

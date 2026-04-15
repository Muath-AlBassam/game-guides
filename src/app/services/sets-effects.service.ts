import { Injectable } from '@angular/core';
import { DataClientService } from './data-client.service';

@Injectable({
  providedIn: 'root'
})
export class SetsEffectsService {

  setsEffectsList: any[] = [];

  constructor(private dataClient: DataClientService) {
    this.dataClient.sheetLoaded$.subscribe(res => {
      if (res) this.fetchData();
    });
  }

  fetchData() {
    this.dataClient.loadData('SETS_EFFECTS').then(sets => {
      this.setsEffectsList = sets.map((s: any) => ({
        gameCode: s.GAME_CODE,
        code: s.CODE,
        label: s.LABEL,
        description: s.DESCRIPTION
      }));
    });
  }

  getOne(gameCode: any, code: any) {
    return this.setsEffectsList.filter(s => s.gameCode == gameCode && s.code == code);
  }
}

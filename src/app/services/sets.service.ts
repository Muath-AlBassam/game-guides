import { Injectable } from '@angular/core';
import { DataClientService } from './data-client.service';
import { Utils } from '../utils/utils';

@Injectable({
  providedIn: 'root'
})
export class SetsService {

  setsList: any[] = [];
  setsEffectsList: any[] = [];

  constructor(private dataClient: DataClientService) {
    this.dataClient.sheetLoaded$.subscribe(res => {
      if (res) this.fetchData();
    });
  }

  private fetchData() {
    this.dataClient.loadData(['SETS', 'SETS_EFFECTS']).then(resMap => {
      this.mapEffects(resMap);
      this.mapSets(resMap);
    });
  }

  private mapEffects(resMap: any) {
    this.setsEffectsList = resMap.get('SETS_EFFECTS').map((s: any) => ({
      gameCode: s.GAME_CODE,
      code: s.CODE,
      label: s.LABEL,
      requiredPiece: s.REQUIRED_PIECE,
      description: s.DESCRIPTION
    }));
  }

  private mapSets(resMap: any) {
    this.setsList = resMap.get('SETS').map((s: any) => ({
      gameCode: s.GAME_CODE,
      code: s.CODE,
      name: s.NAME,
      type: s.TYPE,
      imageUrl: Utils.appendRepoUrl(s.IMAGE_URL),
      rarity: s.RARITY,
      effects: this.setsEffectsList.filter(e => e.gameCode == s.GAME_CODE && e.code == s.CODE)
    }));
  }

  getAll(gameCode: any) {
    return this.setsList.filter(s => s.gameCode == gameCode);
  }

  getAllOrdered(gameCode: any) {
    return this.getAll(gameCode).sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
  }

  getOne(gameCode: any, code: any) {
    const data = this.setsList.find(s => s.gameCode == gameCode && s.code == code);
    return data ?? { code: code, name: code }
  }
}

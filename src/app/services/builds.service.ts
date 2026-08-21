import { Injectable } from '@angular/core';
import { DataClientService } from './data-client.service';
import { Utils } from '../utils/utils';
import { StoreKeys, StoreService } from './store.service';

@Injectable({
  providedIn: 'root'
})
export class BuildsService {

  buildsList: any[] = [];
  flatList: any[] = [];

  constructor(private dataClient: DataClientService, private store: StoreService) {
    this.dataClient.sheetLoaded$.subscribe(res => {
      if (res) this.fetchData();
    });
  }

  private fetchData() {
    this.dataClient.loadData('BUILDS').then(builds => {
      this.flatList = builds.map((b: any) => ({
        gameCode: b.GAME_CODE,
        character: b.CHARACTER_CODE,
        type: b.TYPE,
        name: b.NAME,
        equppiedPieces: b.EQUIPPED_PIECES
      }));

      const grouped = Utils.groupBy(this.flatList, 'gameCode', 'character');
      // loop through object variables and read list items
      grouped.forEach((val, key) => {
        this.buildsList.push({
          gameCode: val[0].gameCode,
          character: val[0].character,
          weapons: val.filter((w: any) => w.type === 'WEAPON')?.map((w: any) => ({ name: w.name })),
          sets: val.filter((s: any) => s.type === 'SET')?.map((s: any) => ({ name: s.name, equppiedPieces: String(s.equppiedPieces) }))
        });
      });
    });
  }

  getByCharacter(characterName: any) {
    const gameCode = this.store.get(StoreKeys.GAME_CODE);
    return this.buildsList.find(b => b.gameCode == gameCode && b.character == characterName);
  }

  getEquippedBy(name: any, type: 'WEAPON' | 'SET') {
    const gameCode = this.store.get(StoreKeys.GAME_CODE);
    return this.flatList
      .filter(b => b.gameCode == gameCode && b.type == type && b.name == name)
      .map(b => b.character);
  }

  countBySet(set: any) {
    const gameCode = this.store.get(StoreKeys.GAME_CODE);
    return this.flatList
      .filter(b => b.gameCode == gameCode && b.type == 'SET' && b.name == set)
      .length;
  }
}

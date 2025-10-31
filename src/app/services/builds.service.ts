import { Injectable } from '@angular/core';
import { DataClientService } from './data-client.service';
import { Utils } from '../utils/utils';

@Injectable({
  providedIn: 'root'
})
export class BuildsService {

  buildsList: any[] = [];
  flatList: any[] = [];

  constructor(private dataClient: DataClientService) {
    this.dataClient.sheetLoaded$.subscribe(res => {
      if (res) this.fetchData();
    });
  }

  fetchData() {
    this.dataClient.loadData('BUILDS').then(builds => {
      this.flatList = builds.map((b: any) => ({
        gameCode: b.GAME_CODE, character: b.CHARACTER_CODE, type: b.TYPE, name: b.NAME, pieceCount: b.COUNT
      }));

      const grouped = Utils.groupBy(this.flatList, 'gameCode', 'character');
      // loop through object variables and read list items
      grouped.forEach((val, key) => {
        this.buildsList.push({
          gameCode: val[0].gameCode,
          character: val[0].character,
          weapons: val.filter((w: any) => w.type === 'WEAPON')?.map((w: any) => ({ name: w.name })),
          sets: val.filter((s: any) => s.type === 'SET')?.map((s: any) => ({ name: s.name, pieceCount: s.pieceCount }))
        });
      });
    });
  }

  getByCharacter(gameCode: any, characterName: any) {
    return this.buildsList.find(b => b.gameCode == gameCode && b.character == characterName);
  }

  countByWeapon(gameCode: any, weapon: any) {
    return this.flatList
      .filter(b => b.gameCode == gameCode && b.type == 'WEAPON' && b.name == weapon)
      .length;
  }

  countBySet(gameCode: any, set: any) {
    return this.flatList
      .filter(b => b.gameCode == gameCode && b.type == 'SET' && b.name == set)
      .length;
  }
}

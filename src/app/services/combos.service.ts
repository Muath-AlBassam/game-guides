import { Injectable } from '@angular/core';
import { DataClientService } from './data-client.service';
import { Utils } from '../utils/utils';

@Injectable({
  providedIn: 'root'
})
export class CombosService {

  combosList: any[] = [];

  constructor(private dataClient: DataClientService) {
    this.dataClient.sheetLoaded$.subscribe(res => {
      if (res) this.fetchData();
    });
  }

  fetchData() {
    this.dataClient.loadData('COMBOS').then(combos => {
      const flatList = combos.map((c: any) => ({
        gameCode: c.GAME_CODE, character: c.CHARACTER_CODE, combo: c.COMBO
      }));

      const grouped = Utils.groupBy(flatList, 'gameCode', 'character');
      grouped.forEach((val, key) => {
        this.combosList.push({
          gameCode: val[0].gameCode,
          character: val[0].character,
          combos: val.map((c: any) => c.combo.split(',')),
        });
      })
    });
  }

  getAllByCharacter(gameCode: any, characterName: any) {
    return this.combosList.find(c => c.gameCode == gameCode && c.character == characterName)?.combos;
  }
}

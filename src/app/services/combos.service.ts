import { Injectable } from '@angular/core';
import { DataClientService } from './data-client.service';
import { Utils } from '../utils/utils';
import { StoreKeys, StoreService } from './store.service';

@Injectable({
  providedIn: 'root'
})
export class CombosService {

  combosList: any[] = [];

  constructor(private dataClient: DataClientService, private store: StoreService) {
    this.dataClient.sheetLoaded$.subscribe(res => {
      if (res) this.fetchData();
    });
  }

  private fetchData() {
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

  getAllByCharacter(characterName: any) {
    const gameCode = this.store.get(StoreKeys.GAME_CODE);
    return this.combosList.find(c => c.gameCode == gameCode && c.character == characterName)?.combos;
  }
}

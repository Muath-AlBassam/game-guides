import { Injectable } from '@angular/core';
import { DataClientService } from './data-client.service';
import { Utils } from '../utils/utils';
import { StoreKeys, StoreService } from './store.service';
import { Constants } from '../utils/constants';

@Injectable({
  providedIn: 'root'
})
export class WeaponsService {

  weaponsList: any[] = [];

  constructor(private dataClient: DataClientService, private store: StoreService) {
    this.dataClient.sheetLoaded$.subscribe(res => {
      if (res) this.fetchData();
    });
  }

  private fetchData() {
    this.dataClient.loadData('WEAPONS').then(weapons => {
      this.weaponsList = weapons.map((w: any) => ({
        gameCode: w.GAME_CODE,
        code: w.CODE,
        name: w.NAME,
        type: w.TYPE,
        secondaryStat: w.SECONDARY_STAT,
        effect: w.EFFECT,
        imageUrl: Utils.appendRepoUrl(w.IMAGE_URL),
        rarity: w.RARITY
      }));
    });
  }

  getAll() {
    const gameCode = this.store.get(StoreKeys.GAME_CODE);
    return this.weaponsList.filter(w => w.gameCode == gameCode);
  }

  getAllOrdered(gameCode: any) {
    return this.getAll().sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
  }

  getOne(code: any) {
    const gameCode = this.store.get(StoreKeys.GAME_CODE);
    const data = this.weaponsList.find(w => w.gameCode == gameCode && w.code == code);
    return data ?? { code: code, name: code }
  }
}

import { Injectable } from '@angular/core';
import { DataClientService } from './data-client.service';
import { Utils } from '../utils/utils';

@Injectable({
  providedIn: 'root'
})
export class WeaponsService {

  weaponsList: any[] = [];

  constructor(private dataClient: DataClientService) {
    this.dataClient.sheetLoaded$.subscribe(res => {
      if (res) this.fetchData();
    });
  }

  fetchData() {
    this.dataClient.loadData('WEAPONS').then(weapons => {
      this.weaponsList = weapons.map((w: any) => ({
        gameCode: w.GAME_CODE,
        code: w.CODE,
        name: w.NAME,
        type: w.TYPE,
        secondaryStat: w.SECONDARY_STAT,
        imageUrl: Utils.appendRepoUrl(w.IMAGE_URL),
        rarity: w.RARITY
      }));
    });
  }

  getAll(gameCode: any) {
    return this.weaponsList.filter(w => w.gameCode == gameCode);
  }

  getAllOrdered(gameCode: any) {
    return this.getAll(gameCode).sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
  }

  getOne(gameCode: any, code: any) {
    const data = this.weaponsList.find(w => w.gameCode == gameCode && w.code == code);
    return data ?? { code: code, name: code }
  }
}

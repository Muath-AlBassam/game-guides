import { Injectable } from '@angular/core';
import { DataClientService } from './data-client.service';
import { Utils } from '../utils/utils';
import { StoreKeys, StoreService } from '../services/store.service';
import { WeaponModel } from '../models/weapon.model';

@Injectable({
  providedIn: 'root'
})
export class WeaponsService {

  weaponsList: WeaponModel[] = [];

  constructor(
    private dataClient: DataClientService,
    private store: StoreService
  ) {
    this.dataClient.sheetLoaded$.subscribe(res => {
      if (res) this.fetchData();
    });
  }

  private fetchData(): void {
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

  getAll(): WeaponModel[] {
    const gameCode = this.store.get(StoreKeys.GAME_CODE);
    return this.weaponsList
      .filter(w => w.gameCode == gameCode);
  }

  getAllOrdered(): WeaponModel[] {
    return this.getAll()
      .sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
  }

  getOne(code: string): WeaponModel | undefined {
    const gameCode = this.store.get(StoreKeys.GAME_CODE);
    return this.weaponsList
      .find(w => w.gameCode == gameCode && w.code == code);
  }
}

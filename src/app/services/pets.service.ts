import { Injectable } from '@angular/core';
import { DataClientService } from './data-client.service';
import { Utils } from '../utils/utils';
import { StoreKeys, StoreService } from './store.service';

@Injectable({
  providedIn: 'root'
})
export class PetsService {

  petsList: any[] = [];

  constructor(private dataClient: DataClientService, private store: StoreService) {
    this.dataClient.sheetLoaded$.subscribe(res => {
      if (res) this.fetchData();
    });
  }

  private fetchData() {
    this.dataClient.loadData('PETS').then(pets => {
      this.petsList = pets.map((p: any) => ({
        gameCode: p.GAME_CODE, code: p.CODE, name: p.NAME, imageUrl: Utils.appendRepoUrl(p.IMAGE_URL), rarity: p.RARITY
      }));
    });
  }

  getAll() {
    const gameCode = this.store.get(StoreKeys.GAME_CODE);
    return this.petsList.filter(p => p.gameCode == gameCode);
  }

  getOne(code: any) {
    const gameCode = this.store.get(StoreKeys.GAME_CODE);
    const data = this.petsList.find(p => p.gameCode == gameCode && p.code == code);
    return data ?? { code: code, name: code };
  }
}

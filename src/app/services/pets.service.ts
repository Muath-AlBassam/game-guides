import { Injectable } from '@angular/core';
import { DataClientService } from './data-client.service';
import { Utils } from '../utils/utils';

@Injectable({
  providedIn: 'root'
})
export class PetsService {

  petsList: any[] = [];

  constructor(private dataClient: DataClientService) {
    this.dataClient.sheetLoaded$.subscribe(res => {
      if (res) this.fetchData();
    });
  }

  fetchData() {
    this.dataClient.loadData('PETS').then(pets => {
      this.petsList = pets.map((p: any) => ({
        gameCode: p.GAME_CODE, code: p.CODE, name: p.NAME, imageUrl: Utils.appendRepoUrl(p.IMAGE_URL), rarity: p.RARITY
      }));
    });
  }

  getAll(gameCode: any) {
    return this.petsList.filter(p => p.gameCode == gameCode);
  }

  getOne(gameCode: any, code: any) {
    const data = this.petsList.find(p => p.gameCode == gameCode && p.code == code);
    return data ?? { code: code, name: code };
  }
}

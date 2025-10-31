import { Injectable } from '@angular/core';
import { DataClientService } from './data-client.service';
import { Utils } from '../utils/utils';

@Injectable({
  providedIn: 'root'
})
export class RaritiesService {

  rarityList: any[] = [];


  constructor(private dataClient: DataClientService) {
    this.dataClient.sheetLoaded$.subscribe(res => {
      if (res) this.fetchData();
    });
  }

  fetchData() {
    this.dataClient.loadData('RARITY').then(rarities => {
      this.rarityList = rarities.map((r: any) => ({
        gameCode: r.GAME_CODE, code: r.CODE, label: r.LABEL, imageUrl: Utils.appendRepoUrl(r.IMAGE_URL)
      }));
    });
  }

  getAll(gameCode: any) {
    return this.rarityList.filter(r => r.gameCode == gameCode);
  }

  getOne(gameCode: any, code: any) {
    const data = this.rarityList.find(r => r.gameCode == gameCode && r.code == code);
    return data ?? { code: code, label: code };
  }
}

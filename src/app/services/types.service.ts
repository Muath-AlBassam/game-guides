import { Injectable } from '@angular/core';
import { DataClientService } from './data-client.service';
import { Utils } from '../utils/utils';

@Injectable({
  providedIn: 'root'
})
export class TypesService {

  typesList: any[] = [];

  constructor(private dataClient: DataClientService) {
    this.dataClient.sheetLoaded$.subscribe(res => {
      if (res) this.fetchData();
    });
  }

  fetchData() {
    this.dataClient.loadData('TYPES').then(types => {
      this.typesList = types.map((t: any) => ({
        gameCode: t.GAME_CODE, code: t.CODE, name: t.NAME, imageUrl: Utils.appendRepoUrl(t.IMAGE_URL)
      }));
    });
  }

  getAll(gameCode: any) {
    return this.typesList.filter(t => t.gameCode == gameCode);
  }

  getOne(gameCode: any, code: any) {
    const data = this.typesList.find(t => t.gameCode == gameCode && t.code == code);
    return data ?? { code: code, name: code }
  }
}

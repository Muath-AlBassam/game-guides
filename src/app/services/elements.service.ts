import { Injectable } from '@angular/core';
import { DataClientService } from './data-client.service';
import { Utils } from '../utils/utils';

@Injectable({
  providedIn: 'root'
})
export class ElementsService {

  elementsList: any[] = [];

  constructor(private dataClient: DataClientService) {
    this.dataClient.sheetLoaded$.subscribe(res => {
      if (res) this.fetchData();
    });
  }

  fetchData() {
    this.dataClient.loadData('ELEMENTS').then(elements => {
      this.elementsList = elements.map((e: any) => ({
        gameCode: e.GAME_CODE, code: e.CODE, name: e.NAME, imageUrl: Utils.appendRepoUrl(e.IMAGE_URL)
      }));
    });
  }

  getAll(gameCode: any) {
    return this.elementsList.filter(e => e.gameCode == gameCode);
  }

  getOne(gameCode: any, code: any) {
    const data = this.elementsList.find(e => e.gameCode == gameCode && e.code == code);
    return data ?? { code: code, name: code };
  }
}

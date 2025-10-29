import { Injectable } from '@angular/core';
import { DataClientService } from './data-client.service';
import { Utils } from '../utils/utils';

@Injectable({
  providedIn: 'root'
})
export class ButtonsService {

  buttonsList: any[] = [];


  constructor(private dataClient: DataClientService) {
    this.dataClient.sheetLoaded$.subscribe(res => {
      if (res) this.fetchData();
    });
  }

  fetchData() {
    this.dataClient.loadData('BUTTONS').then(buttons => {
      this.buttonsList = buttons.map((b: any) => ({
        gameCode: b.GAME_CODE, code: b.CODE, name: b.NAME, imageUrl: Utils.appendRepoUrl(b.IMAGE_URL)
      }));
    });
  }

  getAll(gameCode: any) {
    return this.buttonsList.filter(b => b.gameCode == gameCode);
  }

  getOne(gameCode: any, code: any) {
    const data = this.buttonsList.find(b => b.gameCode == gameCode && b.code == code);
    return data ?? { code: code, name: code };
  }
}

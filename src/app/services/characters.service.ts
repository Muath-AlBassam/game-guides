import { Injectable } from '@angular/core';
import { DataClientService } from './data-client.service';
import { Utils } from '../utils/utils';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  charactersList: any[] = [];

  constructor(private dataClient: DataClientService) {
    this.dataClient.sheetLoaded$.subscribe(res => {
      if (res) this.fetchData();
    });
  }

  fetchData() {
    this.dataClient.loadData('CHARACTERS').then(characters => {
      this.charactersList = characters.map((c: any) => ({
        gameCode: c.GAME_CODE,
        code: c.CODE,
        name: c.NAME,
        imageUrl: Utils.appendRepoUrl(c.IMAGE_URL),
        cardImageUrl: Utils.appendRepoUrl(c.CARD_IMAGE_URL),
        element: c.ELEMENT,
        type: c.TYPE,
        rarity: c.RARITY,
        enhanced: c.ENHANCED
      }));
    });
  }

  getAll(gameCode: any) {
    return this.charactersList.filter(c => c.gameCode == gameCode);
  }

  getAllOrdered(gameCode: any) {
    return this.getAll(gameCode).sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
  }

  getOne(gameCode: any, code: any) {
    const data = this.charactersList.find(c => c.gameCode == gameCode && c.code == code);
    return data ?? { code: code, name: code }
  }
}

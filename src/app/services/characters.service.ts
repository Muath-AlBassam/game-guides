import { Injectable } from '@angular/core';
import { DataClientService } from './data-client.service';
import { Utils } from '../utils/utils';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  charactersList: any[] = [];
  imagesList: any[] = [];

  constructor(private dataClient: DataClientService) {
    this.dataClient.sheetLoaded$.subscribe(res => {
      if (res) this.fetchData();
    });
  }

  fetchData() {
    this.dataClient.loadData(['CHARACTERS', 'CHARACTERS_IMAGES']).then(resMap => {
      this.imagesList = resMap.get('CHARACTERS_IMAGES').map((i: any) => ({
        gameCode: i.GAME_CODE,
        characterCode: i.CHARACTER_CODE,
        imageUrl: Utils.appendRepoUrl(i.IMAGE_URL),
        type: i.TYPE
      }));
      

      this.charactersList = resMap.get('CHARACTERS').map((c: any) => ({
        gameCode: c.GAME_CODE,
        code: c.CODE,
        name: c.NAME,
        imageUrl: this.getImageByType(c.GAME_CODE, c.CODE, 'PFP'),
        cardImageUrl: this.getImageByType(c.GAME_CODE, c.CODE, 'CARD'),
        element: c.ELEMENT,
        elementActual: c.ELEMENT_ACTUAL,
        type: c.TYPE,
        rarity: c.RARITY,
        enhanced: c.ENHANCED
      }));
    });
  }

  private getImageByType(gameCode: any, characterCode: any, type: any) {
    return this.imagesList.filter(i => i.gameCode == gameCode && i.characterCode == characterCode && i.type == type).map(i => i.imageUrl);
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

  getAllImagesByCharacter(gameCode: any, characterCode: any, types: any[]) {
    return this.imagesList
      .filter(i => i.gameCode == gameCode && i.characterCode == characterCode && types.includes(i.type))
      .map(i => i.imageUrl);
  }
}

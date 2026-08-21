import { Injectable } from '@angular/core';
import { DataClientService } from './data-client.service';
import { Utils } from '../utils/utils';
import { StoreKeys, StoreService } from './store.service';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  charactersList: any[] = [];
  imagesList: any[] = [];

  constructor(private dataClient: DataClientService, private store: StoreService) {
    this.dataClient.sheetLoaded$.subscribe(res => {
      if (res) this.fetchData();
    });
  }

  private fetchData() {
    this.dataClient.loadData(['CHARACTERS', 'CHARACTERS_IMAGES']).then(resMap => {
      this.mapImages(resMap);
      this.mapCharacters(resMap);
    });
  }

  private mapImages(resMap: any) {
    this.imagesList = resMap.get('CHARACTERS_IMAGES').map((i: any) => ({
      gameCode: i.GAME_CODE,
      characterCode: i.CHARACTER_CODE,
      imageUrl: Utils.appendRepoUrl(i.IMAGE_URL),
      type: i.TYPE
    }));
  }

  private mapCharacters(resMap: any) {
    this.charactersList = resMap.get('CHARACTERS').map((c: any) => ({
      gameCode: c.GAME_CODE,
      code: c.CODE,
      name: c.NAME,
      imageUrl: this.getImageByType(c.GAME_CODE, c.CODE, 'PFP')[0],
      cardImageUrl: this.getImageByType(c.GAME_CODE, c.CODE, 'CARD')[0],
      element: c.ELEMENT,
      type: c.TYPE,
      rarity: c.RARITY,
      enhanced: c.ENHANCED
    }));
  }

  private getImageByType(gameCode: any, characterCode: any, type: any) {
    return this.imagesList.filter(i => i.gameCode == gameCode && i.characterCode == characterCode && i.type == type).map(i => i.imageUrl);
  }

  getAll() {
    const gameCode = this.store.get(StoreKeys.GAME_CODE);
    return this.charactersList.filter(c => c.gameCode == gameCode);
  }

  getAllOrdered() {
    return this.getAll().sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
  }

  getOne(code: any) {
    const gameCode = this.store.get(StoreKeys.GAME_CODE);
    const data = this.charactersList.find(c => c.gameCode == gameCode && c.code == code);
    return data ?? { code: code, name: code }
  }

  getAllImagesByCharacter(characterCode: any, types: any[]) {
    const gameCode = this.store.get(StoreKeys.GAME_CODE);
    return this.imagesList
      .filter(i => i.gameCode == gameCode && i.characterCode == characterCode && types.includes(i.type))
      .map(i => i.imageUrl);
  }
}

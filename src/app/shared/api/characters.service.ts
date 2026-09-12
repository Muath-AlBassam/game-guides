import { Injectable } from '@angular/core';
import { DataClientService } from '@shared/api/data-client.service';
import { Utils } from '@shared/utils/utils';
import { StoreKeys, StoreService } from '@shared/services/store.service';
import { Character, CharacterImageModel, CharacterModel } from '@shared/models/character.model';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  charactersList: CharacterModel[] = [];
  imagesList: CharacterImageModel[] = [];

  constructor(
    private dataClient: DataClientService,
    private store: StoreService
  ) {
    this.dataClient.sheetLoaded$.subscribe(res => {
      if (res) this.fetchData();
    });
  }

  private fetchData(): void {
    this.dataClient.loadData(['CHARACTERS', 'CHARACTERS_IMAGES']).then(resMap => {
      this.mapImages(resMap);
      this.mapCharacters(resMap);
    });
  }

  private mapImages(resMap: any): void {
    this.imagesList = resMap.get('CHARACTERS_IMAGES').map((i: any) => ({
      gameCode: i.GAME_CODE,
      characterCode: i.CHARACTER_CODE,
      imageUrl: Utils.appendRepoUrl(i.IMAGE_URL),
      type: i.TYPE
    }));
  }

  private mapCharacters(resMap: any): void {
    this.charactersList = resMap.get('CHARACTERS').map((c: any) => ({
      gameCode: c.GAME_CODE,
      code: c.CODE,
      name: c.NAME,
      imageUrl: this.getOneImageByType(c.GAME_CODE, c.CODE, 'PFP'),
      cardImageUrl: this.getOneImageByType(c.GAME_CODE, c.CODE, 'CARD'),
      element: c.ELEMENT,
      type: c.TYPE,
      rarity: c.RARITY,
      enhanced: c.ENHANCED,
      skillDescription: c.SKILL_DESCRIPTION,
      skillDescriptionList: c.SKILL_DESCRIPTION ? c.SKILL_DESCRIPTION.split(' | ') : []
    }));
  }

  private getOneImageByType(gameCode: string, characterCode: string, type: string): string {
    return this.imagesList
      .filter(i => i.gameCode == gameCode && i.characterCode == characterCode && i.type == type)
      .map(i => i.imageUrl)[0];
  }

  getAll(): CharacterModel[] {
    const gameCode = this.store.get(StoreKeys.GAME_CODE);
    return this.charactersList
      .filter(c => c.gameCode == gameCode);
  }

  getAllOrdered(): CharacterModel[] {
    return this.getAll()
      .sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
  }

  getOne(code: string): CharacterModel {
    const gameCode = this.store.get(StoreKeys.GAME_CODE);
    return this.getOneByGame(gameCode, code);
  }

  getOneByGame(gameCode: string, code: string): CharacterModel {
    const data = this.charactersList
      .find(c => c.gameCode == gameCode && c.code == code);
    return data ?? new Character(code, code);
  }

  getAllImagesByCharacter(characterCode: string, types: string[]): CharacterImageModel[] {
    const gameCode = this.store.get(StoreKeys.GAME_CODE);
    return this.imagesList
      .filter(i => i.gameCode == gameCode && i.characterCode == characterCode && types.includes(i.type));
  }
}

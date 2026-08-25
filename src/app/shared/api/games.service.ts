import { Injectable } from '@angular/core';
import { DataClientService } from './data-client.service';
import { Utils } from '../utils/utils';
import { StoreKeys, StoreService } from '../services/store.service';
import { GameClass, GameModel } from '../models/game.model';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  gamesList: GameModel[] = [];

  constructor(
    private dataClient: DataClientService,
    private store: StoreService
  ) {
    this.dataClient.sheetLoaded$.subscribe(res => {
      if (res) this.fetchData();
    });
  }

  private fetchData(): void {
    this.dataClient.loadData('GAMES').then(games => {
      this.gamesList = games.map((g: any) => ({
        code: g.CODE,
        label: g.LABEL,
        style: g.STYLE,
        teamSize: g.TEAM_SIZE,
        hasPet: g.HAS_PET,
        iconUrl: Utils.appendRepoUrl(g.ICON_URL),
        logoUrl: Utils.appendRepoUrl(g.LOGO_URL),
        backgroundUrl: Utils.appendRepoUrl(g.BACKGROUND_URL),
        guideUrl: g.GUIDE_URL,
        isActive: g.IS_ACTIVE
      }))
      .filter((g: any) => g.isActive);
    });
  }

  getAll(): GameModel[] {
    return this.gamesList;
  }

  getActive(): GameModel | undefined {
    const gameCode = this.store.get(StoreKeys.GAME_CODE);
    return this.gamesList
      .find(g => g.code == gameCode);
  }
}

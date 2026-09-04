import { Injectable } from '@angular/core';
import { DataClientService } from './data-client.service';
import { Utils } from '../utils/utils';
import { StoreKeys, StoreService } from '../services/store.service';
import { TeamModel, TeamCharacterModel } from '../models/team.mode';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  teamsList: TeamModel[] = [];

  constructor(
    private dataClient: DataClientService,
    private store: StoreService
  ) {
    this.dataClient.sheetLoaded$.subscribe(res => {
      if (res) this.fetchData();
    });
  }

  private fetchData(): void {
    this.dataClient.loadData(['TEAMS', 'TEAMS_CHARACTERS']).then(resMap => {
      this.teamsList = this.mapTeams(resMap);
    });
  }

  private mapTeams(resMap: any): TeamModel[] {
    const teamCharacterList = this.mapTeamsCharacters(resMap.get('TEAMS_CHARACTERS'));
    return resMap.get('TEAMS').map((t: any) => ({
      gameCode: t.GAME_CODE,
      code: t.CODE,
      category: t.CATEGORY,
      name: t.NAME,
      speciality: t.SPECIALITY,
      iconUrl: Utils.appendRepoUrl(t.ICON_URL),
      pet: t.PET,
      tags: t.TAGS?.split(','),
      order: t.ORDER,
      characters: teamCharacterList
        .filter((c: TeamCharacterModel) => c.gameCode == t.GAME_CODE && c.teamCode == t.CODE)
    }))
      .sort((a: TeamModel, b: TeamModel) => (a.order > b.order) ? 1 : ((b.order > a.order) ? -1 : 0));;
  }

  private mapTeamsCharacters(characters: any): TeamCharacterModel[] {
    return characters.map((c: any) => ({
      gameCode: c.GAME_CODE,
      teamCode: c.TEAM_CODE,
      name: c.NAME,
      roleCode: c.ROLE_CODE,
      isMain: c.IS_MAIN,
      replacements: c.REPLACEMENTS?.split(',')
    }));
  }

  getAll(): TeamModel[] {
    const gameCode = this.store.get(StoreKeys.GAME_CODE);
    return this.teamsList
      .filter(t => t.gameCode == gameCode);
  }

  getAllByCategory(categoryCode: any): TeamModel[] {
    const gameCode = this.store.get(StoreKeys.GAME_CODE);
    return this.teamsList
      .filter(t => t.gameCode == gameCode && t.category == categoryCode);
  }

  getOne(code: any): TeamModel | undefined {
    const gameCode = this.store.get(StoreKeys.GAME_CODE);
    return this.teamsList
      .find(t => t.gameCode == gameCode && t.code == code);
  }

  getAllByCharacter(character: string): TeamModel[] {
    return this.getAll().filter(team => {
      return team.characters.some((ch: TeamCharacterModel) => {
        let all = [];
        all.push(ch.name);
        if (ch.replacements && ch.replacements.length > 0) {
          all.push(...ch.replacements);
        }
        return all.includes(character);
      });
    });
  }
}

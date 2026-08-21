import { Injectable } from '@angular/core';
import { DataClientService } from './data-client.service';
import { Utils } from '../utils/utils';
import { StoreKeys, StoreService } from './store.service';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  teamsList: any[] = [];

  constructor(private dataClient: DataClientService, private store: StoreService) {
    this.dataClient.sheetLoaded$.subscribe(res => {
      if (res) this.fetchData();
    });
  }

  private fetchData() {
    this.dataClient.loadData(['TEAMS', 'TEAMS_CHARACTERS']).then(resMap => {
      this.teamsList = this.mapTeams(resMap);
    });
  }

  private mapTeams(resMap: any) {
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
        .filter((c: any) => c.gameCode == t.GAME_CODE && c.teamCode == t.CODE)
    }))
      .sort((a: any, b: any) => (a.order > b.order) ? 1 : ((b.order > a.order) ? -1 : 0));;
  }

  private mapTeamsCharacters(characters: any) {
    return characters.map((c: any) => ({
      gameCode: c.GAME_CODE,
      teamCode: c.TEAM_CODE,
      name: c.NAME,
      roleCode: c.ROLE_CODE,
      roleDescription: c.ROLE_DESCRIPTION,
      isMain: c.IS_MAIN,
      replacements: c.REPLACEMENTS?.split(',')
    }));
  }

  getAll(gameCode: any) {
    return this.teamsList.filter(t => t.gameCode == gameCode);
  }

  getAllByCategory(categoryCode: any) {
    const gameCode = this.store.get(StoreKeys.GAME_CODE);
    return this.teamsList.filter(t => t.gameCode == gameCode && t.category == categoryCode);
  }

  getOne(code: any) {
    const gameCode = this.store.get(StoreKeys.GAME_CODE);
    const data = this.teamsList.find(t => t.gameCode == gameCode && t.code == code);
    return data ?? { code: code, name: code }
  }

  getAllByCharacter(character: any) {
    const gameCode = this.store.get(StoreKeys.GAME_CODE);
    return this.getAll(gameCode).filter(team => {
      return team.characters.some((ch: any) => {
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

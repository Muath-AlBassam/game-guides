import { Injectable } from '@angular/core';
import { DataClientService } from './data-client.service';
import { Utils } from '../utils/utils';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  teamsList: any[] = [];


  constructor(private dataClient: DataClientService) {
    this.dataClient.sheetLoaded$.subscribe(res => {
      if (res) this.fetchData();
    });
  }

  fetchData() {
    this.dataClient.loadData(['TEAMS', 'TEAMS_CHARACTERS']).then(resMap => {
      this.teamsList = this.mapTeams(resMap);
    });
  }

  mapTeams(resMap: any) {
    const teamCharacterList = this.mapTeamsCharacters(resMap.get('TEAMS_CHARACTERS'));
    return resMap.get('TEAMS').map((t: any) => ({
      gameCode: t.GAME_CODE,
      code: t.CODE,
      category: t.CATEGORY,
      name: t.NAME,
      iconUrl: Utils.appendRepoUrl(t.ICON_URL),
      pet: t.PET,
      order: t.ORDER,
      characters: teamCharacterList
        .filter((c: any) => c.gameCode == t.GAME_CODE && c.teamCode == t.CODE)
    }))
      .sort((a: any, b: any) => (a.order > b.order) ? 1 : ((b.order > a.order) ? -1 : 0));;
  }

  mapTeamsCharacters(characters: any) {
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

  getAllByCategory(gameCode: any, categoryCode: any) {
    return this.teamsList.filter(t => t.gameCode == gameCode && t.category == categoryCode);
  }

  getOne(gameCode: any, code: any) {
    const data = this.teamsList.find(t => t.gameCode == gameCode && t.code == code);
    return data ?? { code: code, name: code }
  }

  getAllByCharacter(gameCode: any, character: any) {
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

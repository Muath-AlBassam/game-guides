import { Injectable } from '@angular/core';
import { DataClientService } from '@shared/api/data-client.service';
import { Utils } from '@shared/utils/utils';
import { StoreKeys, StoreService } from '@shared/services/store.service';
import { TeamModel, TeamMemberModel, TeamMemberReplacementModel } from '@shared/models/team.mode';

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
    this.dataClient.loadData(['TEAMS', 'TEAM_MEMBERS', 'TEAM_MEMBER_REPLACEMENT']).then(resMap => {
      this.teamsList = this.mapTeams(resMap);
    });
  }

  private mapTeams(resMap: any): TeamModel[] {
    const teamCharacterList = this.mapTeamMembers(resMap.get('TEAM_MEMBERS'), resMap.get('TEAM_MEMBER_REPLACEMENT'));
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
      members: teamCharacterList
        .filter((c: TeamMemberModel) => c.gameCode == t.GAME_CODE && c.teamCode == t.CODE)
    }))
      .sort((a: TeamModel, b: TeamModel) => (a.order > b.order) ? 1 : ((b.order > a.order) ? -1 : 0));;
  }

  private mapTeamMembers(members: any, replacements: any): TeamMemberModel[] {
    const replacementsList = this.mapTeamMembersReplacements(replacements);
    return members.map((c: any) => ({
      gameCode: c.GAME_CODE,
      teamCode: c.TEAM_CODE,
      characterCode: c.CHARACTER_CODE,
      roleCode: c.ROLE_CODE,
      isMain: c.IS_MAIN,
      replacements: replacementsList
        .filter((r: TeamMemberReplacementModel) => r.gameCode == c.GAME_CODE && r.teamCode == c.TEAM_CODE && r.characterCode == c.CHARACTER_CODE)
    }));
  }

  private mapTeamMembersReplacements(replacements: any): TeamMemberReplacementModel[] {
    return replacements.map((r: any) => ({
      gameCode: r.GAME_CODE,
      teamCode: r.TEAM_CODE,
      characterCode: r.CHARACTER_CODE,
      replacementCode: r.REPLACEMENT_CODE,
      roleCode: r.ROLE_CODE,
      notes: r.NOTES
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
      return team.members.some((m: TeamMemberModel) => {
        let all = [];
        all.push(m.characterCode);
        if (m.replacements && m.replacements.length > 0) {
          all.push(...(m.replacements.map(r => r.replacementCode)));
        }
        return all.includes(character);
      });
    });
  }
}

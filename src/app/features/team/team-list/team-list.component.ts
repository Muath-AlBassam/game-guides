import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../../../shared/api/teams.service';
import { TeamModel } from '../../../shared/models/team.mode';
import { Utils } from '../../../shared/utils/utils';
import { ListByCategoryModel } from '../../../shared/models/list-by-category.model';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrl: './team-list.component.css'
})
export class TeamListComponent implements OnInit {

  allTeamsList: TeamModel[] = [];
  teamByCatList: ListByCategoryModel<TeamModel>[] = [];
  count: number = 0;
  characterPFPSize: number = 160;

  // search
  textValue: string = '';
  tagValue: string[] = [];

  constructor(private teamsService: TeamsService) {}

  ngOnInit(): void {
    this.loadTeams();
    this.mapToCategoryList(this.allTeamsList);
  }

  loadTeams(): void {
    this.allTeamsList = this.teamsService.getAll();
  }

  onTextChange(val: string): void {
    this.textValue = val;
    this.filterList();
  }

  onTagChange(val: string[]): void {
    this.tagValue = val;
    this.filterList();
  }

  filterList(): void {
    const filteredList: TeamModel[] = this.allTeamsList.filter(team => {
      const teamName: boolean = team.name ? team.name.toLowerCase().includes(this.textValue.toLowerCase()) : false;
      const charaterName: boolean = team.characters.some((c: any) => c.name.toLowerCase().includes(this.textValue.toLowerCase()));
      const tag: boolean = this.tagValue.length == 0 || this.tagValue.every(t => team.tags?.includes(t));
      return (teamName || charaterName) && tag;
    });
    this.count += filteredList.length;
    this.mapToCategoryList(filteredList);
  }

  mapToCategoryList(teamList: TeamModel[]): void {
    const teamByCat: Map<string, TeamModel[]> = Utils.groupBy(teamList, 'category');
    this.teamByCatList = Array.from(
      teamByCat,
      ([category, teams]) => ({ label: category, list: teams })
    );
  }
}

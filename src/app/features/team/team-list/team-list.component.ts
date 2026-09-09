import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../../../shared/api/teams.service';
import { TeamModel } from '../../../shared/models/team.mode';
import { Utils } from '../../../shared/utils/utils';
import { ListByCategoryModel } from '../../../shared/models/list-by-category.model';
import { LookupModel } from '../../../shared/models/lookup.model';
import { LookupsService } from '../../../shared/api/lookups.service';
import { Constants } from '../../../shared/utils/constants';
import { BreadcrumbsService } from '../../../shared/services/breadcrumbs.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrl: './team-list.component.css'
})
export class TeamListComponent implements OnInit {

  allTeams: TeamModel[] = [];
  groupedTeamsList: ListByCategoryModel<TeamModel>[] = [];
  categories: LookupModel[] = [];

  count: number = 0;
  characterPFPSize: number = 160;
  searchValue: string = '';
  tagValue: string[] = [];

  constructor(
    private teamsService: TeamsService,
    private lookupsService: LookupsService,
    private breadcrumbsService: BreadcrumbsService,
  ) {}

  ngOnInit(): void {
    this.breadcrumbsService.teamList();
    this.loadTeams();
    this.loadCategories();
    this.mapToCategoryList(this.allTeams);
  }

  loadTeams(): void {
    this.allTeams = this.teamsService.getAll();
  }

  loadCategories(): void {
    this.categories = this.lookupsService.getByType(Constants.lookupType.TEAM_CATEGORY);
  }

  onTextChange(val: string): void {
    this.searchValue = val;
    this.filterList();
  }

  onTagChange(val: string[]): void {
    this.tagValue = val;
    this.filterList();
  }

  filterList(): void {
    const filteredList: TeamModel[] = this.allTeams.filter(team => {
      const teamName: boolean = team.name ? team.name.toLowerCase().includes(this.searchValue.toLowerCase()) : false;
      const charaterName: boolean = team.members.some((m: any) => m.name.toLowerCase().includes(this.searchValue.toLowerCase()));
      const tag: boolean = this.tagValue.length == 0 || this.tagValue.every(t => team.tags?.includes(t));
      return (teamName || charaterName) && tag;
    });
    this.count += filteredList.length;
    this.mapToCategoryList(filteredList);
  }

  mapToCategoryList(teamList: TeamModel[]): void {
    this.groupedTeamsList = Utils.groupByLookup(teamList, this.categories, 'category')
  }
}

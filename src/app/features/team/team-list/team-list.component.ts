import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../../../shared/api/teams.service';
import { LookupsService } from '../../../shared/api/lookups.service';
import { Constants } from '../../../shared/utils/constants';
import { LookupModel } from '../../../shared/models/lookup.model';
import { TeamModel } from '../../../shared/models/team.mode';

interface TeamCategoryModel {
  gameCode: string;
  code: string;
  label: string;
  type: string;
  imageUrl: string;
  teams: TeamModel[];
}

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrl: './team-list.component.css'
})
export class TeamListComponent implements OnInit {

  allCategories: TeamCategoryModel[] = [];
  categories: TeamCategoryModel[] = [];
  count: number = 0;
  characterPFPSize: number = 160;

  // search
  textValue: string = '';
  tagValue: string[] = [];

  constructor(
    private lookupsService: LookupsService,
    private teamsService: TeamsService
  ) {}

  ngOnInit(): void {
    this.loadTeams();
  }

  loadTeams(): void {
    const categoryLookup = this.lookupsService.getByType(Constants.lookupType.CATEGORY);
    this.allCategories = categoryLookup.map(cat => {
      const m = {
        ...cat,
        teams: this.teamsService.getAllByCategory(cat.code)
      }
      this.count += m.teams.length;
      return m;
    });
    this.categories = this.allCategories;
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
    this.count = 0;
    let filtered = structuredClone(this.allCategories);
    this.categories = filtered.filter(cat => {
      let filteredTeams = cat.teams
        .filter((team: any) => {
          const teamName: boolean = team.name ? team.name.toLowerCase().includes(this.textValue.toLowerCase()) : false;
          const charaterName: boolean = team.characters.some((c: any) => c.name.toLowerCase().includes(this.textValue.toLowerCase()));
          const tag: boolean = this.tagValue.length == 0 || this.tagValue.every(t => team.tags?.includes(t));
          return (teamName || charaterName) && tag;
        });
        cat.teams = filteredTeams;
        this.count += filteredTeams.length;
        return filteredTeams.length > 0;
    });
  }
}

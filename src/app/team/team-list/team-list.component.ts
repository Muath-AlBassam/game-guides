import { Component, OnInit } from '@angular/core';
import { RouteService } from '../../services/route.service';
import { TeamsService } from '../../services/teams.service';
import { LookupsService } from '../../services/lookups.service';
import { Constants } from '../../utils/constants';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrl: './team-list.component.css'
})
export class TeamListComponent implements OnInit {

  gameCode: any = null;
  allCategories: any[] = [];
  categories: any[] = [];
  count: number = 0;
  characterPFPSize: number = 160;

  // search
  textValue: any = '';
  tagValue: any[] = [];

  constructor(private routeService: RouteService, private lookupsService: LookupsService, private teamsService: TeamsService) { }

  async ngOnInit(): Promise<void> {
    this.gameCode = await this.routeService.getActiveGame();
    this.loadTeams();
  }

  loadTeams() {
    this.allCategories = this.lookupsService.getByType(this.gameCode, Constants.lookupType.CATEGORY);
    this.allCategories.forEach(cat => {
      let catTeams = this.teamsService.getAllByCategory(this.gameCode, cat.code);
      cat.teams = catTeams;
      this.count += catTeams.length;
    });
    this.categories = this.allCategories;
  }

  onTextChange(val: string) {
    this.textValue = val;
    this.filterList();
  }

  onTagChange(val: any[]) {
    this.tagValue = val;
    this.filterList();
  }

  filterList() {
    this.count = 0;
    let filtered = structuredClone(this.allCategories);
    this.categories = filtered.filter(cat => {
      let filteredTeams = cat.teams
        .filter((team: any) => {
          const teamName: boolean = team.name ? team.name.toLowerCase().includes(this.textValue.toLowerCase()) : false;
          const charaterName: boolean = team.characters.some((c: any) => c.name.toLowerCase().includes(this.textValue.toLowerCase()));
          const tag: boolean = this.tagValue.length == 0 || this.tagValue.every(t => team.tags.includes(t));
          return (teamName || charaterName) && tag;
        });
        cat.teams = filteredTeams;
        this.count += filteredTeams.length;
        return filteredTeams.length > 0;
    });
  }
}

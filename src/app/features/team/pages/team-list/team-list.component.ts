import { Component, OnInit } from '@angular/core';
import { TeamsService } from '@shared/api/teams.service';
import { TeamMemberModel, TeamModel } from '@shared/models/team.mode';
import { BreadcrumbsService } from '@shared/services/breadcrumbs.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrl: './team-list.component.css'
})
export class TeamListComponent implements OnInit {

  allTeams: TeamModel[] = [];
  teams: TeamModel[] = [];

  characterPFPSize: number = 160;
  searchValue: string = '';
  tagValue: string[] = [];

  constructor(
    private teamsService: TeamsService,
    private breadcrumbsService: BreadcrumbsService,
  ) {}

  ngOnInit(): void {
    this.breadcrumbsService.teamList();
    this.loadTeams();
  }

  loadTeams(): void {
    this.allTeams = this.teamsService.getAll();
    this.teams = this.allTeams;
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
    this.teams = this.allTeams.filter(team => {
      const teamName: boolean = team.name ? team.name.toLowerCase().includes(this.searchValue.toLowerCase()) : false;
      const charaterName: boolean = team.members.some((m: TeamMemberModel) => m.characterCode.toLowerCase().includes(this.searchValue.toLowerCase()));
      const tag: boolean = this.tagValue.length == 0 || this.tagValue.every(t => team.tags?.includes(t));
      return (teamName || charaterName) && tag;
    });
  }
}

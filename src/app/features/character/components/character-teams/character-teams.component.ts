import { Component, Input, OnInit } from '@angular/core';
import { TeamsService } from '@shared/api/teams.service';
import { Utils } from '@shared/utils/utils';
import { TeamModel } from '@shared/models/team.mode';

@Component({
  selector: 'app-character-teams',
  templateUrl: './character-teams.component.html',
  styleUrl: './character-teams.component.css'
})
export class CharacterTeamsComponent implements OnInit {

  @Input() character!: any;

  teams: TeamModel[] = [];

  constructor(private teamsService: TeamsService) { }

  ngOnInit(): void {
    this.loadTeams();
  }

  loadTeams(): void {
    this.teams = this.teamsService.getAllByCharacter(this.character);
  }

  isMobile(): boolean {
    return Utils.isMobile();
  }
}

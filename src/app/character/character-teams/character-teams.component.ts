import { Component, Input, OnInit } from '@angular/core';
import { TeamsService } from '../../services/teams.service';
import { Utils } from '../../utils/utils';

@Component({
  selector: 'app-character-teams',
  templateUrl: './character-teams.component.html',
  styleUrl: './character-teams.component.css'
})
export class CharacterTeamsComponent implements OnInit {

  @Input() character: any = null;

  teams: any[] = [];

  constructor(private teamsService: TeamsService) { }

  ngOnInit(): void {
    this.loadTeams();
  }

  loadTeams() {
    this.teams = this.teamsService.getAllByCharacter(this.character);
  }

  isMobile(): boolean {
    return Utils.isMobile();
  }
}

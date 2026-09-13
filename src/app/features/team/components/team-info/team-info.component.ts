import { Component, Input, OnInit } from '@angular/core';
import { TeamsService } from '@shared/api/teams.service';
import { TeamModel } from '@shared/models/team.mode';
import { Router } from '@angular/router';

@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.component.html',
  styleUrl: './team-info.component.css'
})
export class TeamInfoComponent implements OnInit {

  @Input() teamCode!: string;
  @Input() characterMobileSizeRation: number = 0.7;
  @Input() nameStyle: 'side' | 'top' = 'side';
  @Input() showTags: boolean = false;

  team!: TeamModel;

  characterPFPSize: number = 100;

  constructor(
    private teamsService: TeamsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadTeam();
  }

  loadTeam(): void {
    this.team = this.teamsService.getOne(this.teamCode)!;
  }

  goToTeamDetails(): void {
    this.router.navigate([this.team.gameCode + '/teams/' + this.team.code]);
  }

}

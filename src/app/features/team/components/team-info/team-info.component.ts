import { Component, Input, OnInit } from '@angular/core';
import { TeamsService } from '@shared/api/teams.service';
import { LookupsService } from '@shared/api/lookups.service';
import { Constants } from '@shared/utils/constants';
import { TeamModel } from '@shared/models/team.mode';
import { LookupModel } from '@shared/models/lookup.model';
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

  allTags: LookupModel[] = [];
  teamTags: LookupModel[] = [];

  constructor(
    private teamsService: TeamsService,
    private lookupsService: LookupsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadTeam();
    this.setTeamTags();
  }

  loadTeam(): void {
    this.team = this.teamsService.getOne(this.teamCode)!;
  }

  setTeamTags(): void {
    if (this.showTags) {
      this.allTags = this.lookupsService.getByType(Constants.lookupType.TAG);
      if (this.team && this.team.tags) {
        this.teamTags = this.team.tags
          .map((tt: any) => this.allTags.find((at: any) => tt == at.code))
          .filter((t): t is LookupModel => t !== undefined);
      }
    }
  }

  goToTeamDetails(): void {
    this.router.navigate([this.team.gameCode + '/teams/' + this.team.code]);
  }

}

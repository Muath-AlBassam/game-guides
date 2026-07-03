import { Component, Input, OnInit } from '@angular/core';
import { TeamsService } from '../../services/teams.service';
import { DialogService } from '../../services/dialog.service';
import { LookupsService } from '../../services/lookups.service';
import { Constants } from '../../utils/constants';

@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.component.html',
  styleUrl: './team-info.component.css'
})
export class TeamInfoComponent implements OnInit {

  @Input() gameCode: any = null;
  @Input() teamCode: any = null;
  @Input() characterMobileSizeRation: number = 0.7;
  @Input() nameStyle: 'side' | 'top' = 'side';
  @Input() showTags: boolean = false;
  team: any = null;

  characterPFPSize: number = 100;

  allTags: any[] = [];
  teamTags: any[] = [];

  constructor(private teamsService: TeamsService, private dialogService: DialogService, private lookupsService: LookupsService) { }

  ngOnInit(): void {
    this.loadTeam();
    this.setTeamTags();
  }

  loadTeam() {
    this.team = this.teamsService.getOne(this.gameCode, this.teamCode);
  }

  setTeamTags() {
    if (this.showTags) {
      this.allTags = this.lookupsService.getByType(this.gameCode, Constants.lookupType.TAG);
      this.teamTags = this.team?.tags?.map((tt: any) => this.allTags.find((at: any) => tt == at.code));
    }
  }

  openTeamDetailsDialog() {
    this.dialogService.openTeamDetailsDialog(this.gameCode, this.teamCode);
  }

}

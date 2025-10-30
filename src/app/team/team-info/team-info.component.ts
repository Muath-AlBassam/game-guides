import { Component, Input, OnInit } from '@angular/core';
import { TeamsService } from '../../services/teams.service';
import { DialogService } from '../../services/dialog.service';

@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.component.html',
  styleUrl: './team-info.component.css'
})
export class TeamInfoComponent implements OnInit {

  @Input() gameCode: any = null;
  @Input() teamCode: any = null;
  @Input() characterMobileSizeRation: number = 0.7;
  team: any = null;

  characterPFPSize: number = 100;

  constructor(private teamsService: TeamsService, private dialogService: DialogService) { }

  ngOnInit(): void {
    this.loadTeam();
  }

  loadTeam() {
    this.team = this.teamsService.getOne(this.gameCode, this.teamCode);
  }

  openTeamDetailsDialog() {
    this.dialogService.openTeamDetailsDialog(this.gameCode, this.teamCode);
  }

}

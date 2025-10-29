import { Component, Input, OnInit } from '@angular/core';
import { TeamsService } from '../../services/teams.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Utils } from '../../utils/utils';
import { TeamDetailsDialogComponent } from '../team-details-dialog/team-details-dialog.component';

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

  constructor(private teamsService: TeamsService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadTeam();
  }

  loadTeam() {
    this.team = this.teamsService.getOne(this.gameCode, this.teamCode);
  }

  openTeamDetailsDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = Utils.isMobile() ? '100vw' : '80%';
    dialogConfig.maxWidth = '100vw';
    dialogConfig.maxHeight = '100%';
    dialogConfig.panelClass = 'custom-mat-dialog';
    dialogConfig.data = { gameCode: this.gameCode, teamCode: this.teamCode, teamIndex: 1 };
    const dialogRef = this.dialog.open(TeamDetailsDialogComponent, dialogConfig)
  }

}

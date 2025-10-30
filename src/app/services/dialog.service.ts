import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Utils } from '../utils/utils';
import { CharacterDetailsDialogComponent } from '../character/character-details-dialog/character-details-dialog.component';
import { TeamDetailsDialogComponent } from '../team/team-details-dialog/team-details-dialog.component';
import { RouteService } from './route.service';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }

  openCharacterDetailsDialog(gameCode: any, character: any) {
    this.dialog.closeAll();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = Utils.isMobile() ? '100vw' : '60%';
    dialogConfig.maxWidth = '100vw';
    dialogConfig.maxHeight = '100%';
    dialogConfig.panelClass = 'custom-mat-dialog';
    dialogConfig.data = { gameCode: gameCode, character: character };
    const dialogRef = this.dialog.open(CharacterDetailsDialogComponent, dialogConfig);
  }

  openTeamDetailsDialog(gameCode: any, teamCode: any) {
    this.dialog.closeAll();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = Utils.isMobile() ? '100vw' : '80%';
    dialogConfig.maxWidth = '100vw';
    dialogConfig.maxHeight = '100%';
    dialogConfig.panelClass = 'custom-mat-dialog';
    dialogConfig.data = { gameCode: gameCode, teamCode: teamCode, teamIndex: 1 };
    const dialogRef = this.dialog.open(TeamDetailsDialogComponent, dialogConfig);
  }
}

import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Utils } from '@shared/utils/utils';
import { TextFormatterComponent } from '../../core/pages/settings/text-formatter/text-formatter.component';
import { ImageDialogComponent } from '@shared/components/image-dialog/image-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }

  /*openCharacterDetailsDialog(character: any) {
    this.dialog.closeAll();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = Utils.isMobile() ? '100vw' : '60%';
    dialogConfig.maxWidth = '100vw';
    dialogConfig.maxHeight = '100%';
    dialogConfig.panelClass = 'gagu-mat-dialog';
    dialogConfig.data = { character: character };
    const dialogRef = this.dialog.open(CharacterDetailsDialogComponent, dialogConfig);
  }*/

  /*openTeamDetailsDialog(teamCode: any) {
    this.dialog.closeAll();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = Utils.isMobile() ? '100vw' : '80%';
    dialogConfig.maxWidth = '100vw';
    dialogConfig.maxHeight = '100%';
    dialogConfig.panelClass = 'gagu-mat-dialog';
    dialogConfig.data = { teamCode: teamCode, teamIndex: 1 };
    const dialogRef = this.dialog.open(TeamDetailsDialogComponent, dialogConfig);
  }*/

  openImageDialog(name: string, imageUrl: string) {
    this.dialog.closeAll();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.maxWidth = '100vw';
    dialogConfig.maxHeight = Utils.isMobile() ? '100vh' : '90vh';
    dialogConfig.panelClass = 'gagu-mat-dialog';
    dialogConfig.data = { name: name, imageUrl: imageUrl };
    const dialogRef = this.dialog.open(ImageDialogComponent, dialogConfig);
  }

  // settings
  openTextFormatterDialog() {
    this.dialog.closeAll();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = Utils.isMobile() ? '100vw' : '40%';
    dialogConfig.maxWidth = '100vw';
    dialogConfig.maxHeight = '100%';
    dialogConfig.panelClass = 'gagu-mat-dialog';
    const dialogRef = this.dialog.open(TextFormatterComponent, dialogConfig);
  }
}

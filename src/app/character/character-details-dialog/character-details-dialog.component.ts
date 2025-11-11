import { Component, Inject, Input, OnInit } from '@angular/core';
import { CharactersService } from '../../services/characters.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Utils } from '../../utils/utils';

@Component({
  selector: 'app-character-details-dialog',
  templateUrl: './character-details-dialog.component.html',
  styleUrl: './character-details-dialog.component.css'
})
export class CharacterDetailsDialogComponent implements OnInit {

  gameCode: any = null;
  character: any = null;

  charmd: any = null;
  hasBuild: boolean = true;
  hasCombos: boolean = true;
  
  characterPFPSize: number = 260;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private charactersService: CharactersService) {
    this.gameCode = data.gameCode;
    this.character = data.character;
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.charmd = this.charactersService.getOne(this.gameCode, this.character);
  }

  isMobile(): boolean {
    return Utils.isMobile();
  }
}

import { Component, Inject, Input, OnInit } from '@angular/core';
import { BuildsService } from '../../services/builds.service';
import { CharactersService } from '../../services/characters.service';
import { TeamsService } from '../../services/teams.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GameUtils } from '../../utils/game-utils';
import { Utils } from '../../utils/utils';

@Component({
  selector: 'app-character-details-dialog',
  templateUrl: './character-details-dialog.component.html',
  styleUrl: './character-details-dialog.component.css'
})
export class CharacterDetailsDialogComponent implements OnInit {

  gameCode: any = null;
  character: any = null;

  characterPFPSize: number = 260;
  teamCharacterPFPSize: number = 80;
  charmd: any = null;
  buildmd: any = null;
  teams: any[] = [];
  weaponsLabel: string = '';
  setsLabel: string = '';

  constructor(private buildsService: BuildsService, private charactersService: CharactersService, private teamsService: TeamsService,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.gameCode = data.gameCode;
    this.character = data.character;
  }

  ngOnInit(): void {
    this.weaponsLabel = GameUtils.getWeaponsLabel(this.gameCode);
    this.setsLabel = GameUtils.getSetsLabel(this.gameCode);
    this.loadData();
  }

  loadData() {
    this.charmd = this.charactersService.getOne(this.gameCode, this.character);
    this.buildmd = this.buildsService.getByCharacter(this.gameCode, this.character);
    this.teams = this.teamsService.getAllByCharacter(this.gameCode, this.character);
  }

  isMobile(): boolean {
    return Utils.isMobile();
  }
}

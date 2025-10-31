import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GamesService } from '../../services/games.service';
import { TeamsService } from '../../services/teams.service';
import { PetsService } from '../../services/pets.service';
import { Utils } from '../../utils/utils';

@Component({
  selector: 'app-team-details-dialog',
  templateUrl: './team-details-dialog.component.html',
  styleUrl: './team-details-dialog.component.css'
})
export class TeamDetailsDialogComponent implements OnInit {

  gameCode: any = null;
  teamCode: any = null;
  teamIndex: any = null;

  characterPFPSize: number = 160;
  petPFPSize: number = 80;
  activeGame: any = null;
  team: any = null;
  teamId: any = null;
  petmd: any = null;

  dummyCharactersList: any[] = [];

  constructor(private gamesService: GamesService, private teamsService: TeamsService, private petsService: PetsService,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.gameCode = data.gameCode;
    this.teamCode = data.teamCode;
    this.teamIndex = data.teamIndex;
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.activeGame = this.gamesService.getOne(this.gameCode);
    this.team = this.teamsService.getOne(this.gameCode, this.teamCode);
    this.petmd = this.petsService.getOne(this.gameCode, this.team.pet);
    this.teamId = `${this.gameCode}-${this.team.code}`;
    this.dummyCharactersList = Array(this.activeGame.teamSize);
    if (this.isMobile()) {
      this.petPFPSize *= 0.7;
    }
  }

  isMobile(): boolean {
    return Utils.isMobile();
  }
}


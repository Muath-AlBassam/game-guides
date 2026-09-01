import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GamesService } from '../../../shared/api/games.service';
import { TeamsService } from '../../../shared/api/teams.service';
import { PetsService } from '../../../shared/api/pets.service';
import { Utils } from '../../../shared/utils/utils';
import { Constants } from '../../../shared/utils/constants';
import { LookupsService } from '../../../shared/api/lookups.service';
import { GameModel } from '../../../shared/models/game.model';
import { TeamModel } from '../../../shared/models/team.mode';
import { PetModel } from '../../../shared/models/pet.model';
import { LookupModel } from '../../../shared/models/lookup.model';

@Component({
  selector: 'app-team-details-dialog',
  templateUrl: './team-details-dialog.component.html',
  styleUrl: './team-details-dialog.component.css'
})
export class TeamDetailsDialogComponent implements OnInit {

  readonly UNKNOWN_IMG = Constants.images.unknown;

  teamCode!: string;
  teamIndex!: any;

  characterPFPSize: number = 160;
  petPFPSize: number = 80;
  activeGame!: GameModel;
  team!: TeamModel;
  teamId!: string;
  petmd: PetModel | null = null;
  petRarityMd: LookupModel | undefined = undefined;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private gamesService: GamesService,
    private teamsService: TeamsService,
    private petsService: PetsService,
    private lookupsService: LookupsService
  ) {
    this.teamCode = data.teamCode;
    this.teamIndex = data.teamIndex;
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.activeGame = this.gamesService.getActive()!;
    this.team = this.teamsService.getOne(this.teamCode);
    this.petmd = this.petsService.getOne(this.team.pet);
    this.petRarityMd = this.lookupsService.getOne(this.petmd.rarity, Constants.lookupType.RARITY);
    this.teamId = `${this.activeGame.code}-${this.team.code}`;
    if (this.isMobile()) {
      this.petPFPSize *= 0.7;
    }
  }

  isMobile(): boolean {
    return Utils.isMobile();
  }
}


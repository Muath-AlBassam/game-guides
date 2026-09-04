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
import { CharactersService } from '../../../shared/api/characters.service';

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
  petmd: PetModel | undefined = undefined;
  petRarityMd: LookupModel | undefined = undefined;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private gamesService: GamesService,
    private teamsService: TeamsService,
    private characterService: CharactersService,
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
    this.loadTeam();
    this.loadPet();
    if (this.isMobile()) {
      this.petPFPSize *= 0.7;
    }
  }

  loadTeam(): void {
    this.team = this.teamsService.getOne(this.teamCode)!;
    this.teamId = `${this.activeGame.code}-${this.team.code}`;
    this.team.characters.forEach(c => {
      c.roleDescriptionList = this.characterService.getOne(c.name)?.skillDescription?.split(' | ');
    })
  }

  loadPet(): void {
    if (this.activeGame.hasPet) {
      this.petmd = this.petsService.getOne(this.team.pet);
      if (this.petmd) {
        this.petRarityMd = this.lookupsService.getOne(this.petmd.rarity, Constants.lookupType.RARITY);
      }
    }
  }

  isMobile(): boolean {
    return Utils.isMobile();
  }
}


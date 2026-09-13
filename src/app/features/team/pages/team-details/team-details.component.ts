import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from '@shared/api/characters.service';
import { LookupsService } from '@shared/api/lookups.service';
import { PetsService } from '@shared/api/pets.service';
import { TeamsService } from '@shared/api/teams.service';
import { LookupModel } from '@shared/models/lookup.model';
import { PetModel } from '@shared/models/pet.model';
import { TeamModel } from '@shared/models/team.mode';
import { BreadcrumbsService } from '@shared/services/breadcrumbs.service';
import { Constants } from '@shared/utils/constants';
import { Utils } from '@shared/utils/utils';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrl: './team-details.component.css'
})
export class TeamDetailsComponent implements OnInit {

  readonly Utils = Utils;
  readonly UNKNOWN_IMG = Constants.images.unknown;
  
  characterPFPSize: number = 100;
  petPFPSize: number = 60;

  codeSubscription?: Subscription;
  teamCode: string | undefined = undefined;
  isLoading: boolean = false;

  team!: TeamModel;
  petmd: PetModel | undefined = undefined;
  petRarityMd: LookupModel | undefined = undefined;
  roles: LookupModel[] = [];

  constructor(
    private teamsService: TeamsService,
    private characterService: CharactersService,
    private petsService: PetsService,
    private lookupsService: LookupsService,
    private breadcrumbsService: BreadcrumbsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.codeSubscription = this.route.paramMap.subscribe(params => {
      this.teamCode = params.get('code') ?? '';
      this.isLoading = true;
      this.loadData();
      this.breadcrumbsService.teamDetails(this.team.name ?? this.teamCode);
      setTimeout(() => this.isLoading = false, 300);
    });
  }

  loadData(): void {
    this.loadTeam();
    this.loadPet();
    this.loadRoles();
    if (this.isMobile()) {
      this.petPFPSize *= 0.7;
    }
  }

  loadTeam(): void {
    this.team = this.teamsService.getOne(this.teamCode)!;
    this.team.members.forEach(m => {
      m.character = this.characterService.getOne(m.characterCode);
    })
  }

  loadPet(): void {
    if (this.team.pet) {
      this.petmd = this.petsService.getOne(this.team.pet);
      if (this.petmd) {
        this.petRarityMd = this.lookupsService.getOne(this.petmd.rarity, Constants.lookupType.RARITY);
      }
    }
  }

  loadRoles(): void {
    this.roles = this.lookupsService.getGeneralLookup(Constants.lookupType.ROLE);
  }

  getRole(roleCode: string): LookupModel | undefined {
    return this.roles.find(r => r.code == roleCode);
  }

  isMobile(): boolean {
    return Utils.isMobile();
  }
}

import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../../shared/api/characters.service';
import { CharacterModel } from '../../../shared/models/character.model';
import { ActivatedRoute } from '@angular/router';
import { LookupModel } from '../../../shared/models/lookup.model';
import { LookupsService } from '../../../shared/api/lookups.service';
import { Constants } from '../../../shared/utils/constants';
import { Utils } from '../../../shared/utils/utils';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrl: './character-details.component.css'
})
export class CharacterDetailsComponent implements OnInit {

  readonly Utils = Utils;
  readonly PFP_SIZE: number = 260;
  readonly ICON_SIZE: number = 26;

  codeSubscription?: Subscription;
  code: string | undefined = undefined;
  hasBuild: boolean = true;
  hasCombos: boolean = true;
  isLoading: boolean = false;

  charmd: CharacterModel | undefined = undefined;
  element: LookupModel | undefined = undefined;
  type: LookupModel | undefined = undefined;
  rarity: LookupModel | undefined = undefined;

  constructor(
    private charactersService: CharactersService,
    private lookupsService: LookupsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.codeSubscription = this.route.paramMap.subscribe(params => {
      const routeCode = params.get('code') ?? '';
      this.code = routeCode.replaceAll('-', ' ');
      this.isLoading = true;
      this.loadData();
      setTimeout(() => this.isLoading = false, 1000)
    });
  }

  loadData(): void {
    this.charmd = this.charactersService.getOne(this.code!);
    this.element = this.lookupsService.getOne(this.charmd.element, Constants.lookupType.ELEMENT);
    this.type = this.lookupsService.getOne(this.charmd.type, Constants.lookupType.TYPE);
    this.rarity = this.lookupsService.getOne(this.charmd.rarity, Constants.lookupType.RARITY);
  }

}

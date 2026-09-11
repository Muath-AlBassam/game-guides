import { Component, OnInit } from '@angular/core';
import { WeaponsService } from '@shared/api/weapons.service';
import { GameUtils } from '@shared/utils/game-utils';
import { GamesService } from '@shared/api/games.service';
import { WeaponModel } from '@shared/models/weapon.model';
import { BreadcrumbsService } from '@shared/services/breadcrumbs.service';

@Component({
  selector: 'app-weapon-list',
  templateUrl: './weapon-list.component.html',
  styleUrl: './weapon-list.component.css'
})
export class WeaponListComponent implements OnInit {

  allWeapons: WeaponModel[] = [];
  weapons: WeaponModel[] = [];

  weaponsLabel: string = '';
  // search
  textValue: string = '';
  rarityValue: string = '';
  typeValue: string = '';

  constructor(
    private weaponsService: WeaponsService,
    private gamesService: GamesService,
    private breadcrumbsService: BreadcrumbsService,
  ) {}

  ngOnInit(): void {
    this.breadcrumbsService.weaponsList();
    const gameCode = this.gamesService.getActive()!.code;
    this.weaponsLabel = GameUtils.getWeaponsLabel(gameCode) + 's';
    this.loadWeapons();
  }

  loadWeapons(): void {
    this.allWeapons = this.weaponsService.getAll();
    this.weapons = this.allWeapons;
  }

  onTextChange(val: string): void {
    this.textValue = val;
    this.filterList();
  }

  onRarityChange(val: string): void {
    this.rarityValue = val;
    this.filterList();
  }

  onTypeChange(val: string): void {
    this.typeValue = val;
    this.filterList();
  }

  filterList(): void {
    this.weapons = this.allWeapons.filter(w => {
      let filterByName = w.name.toLowerCase().includes(this.textValue.toLowerCase());
      let filterByRarity = this.rarityValue ? w.rarity == this.rarityValue : true;
      let filterByType = this.typeValue ? w.type == this.typeValue : true;
      return filterByName && filterByRarity && filterByType;
    });
  }

  onReset(): void {
    this.textValue = '';
    this.rarityValue = '';
    this.typeValue = '';
    this.weapons = this.allWeapons;
  }

}

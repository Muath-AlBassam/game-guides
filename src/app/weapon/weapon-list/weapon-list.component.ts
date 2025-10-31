import { Component, OnInit } from '@angular/core';
import { RouteService } from '../../services/route.service';
import { WeaponsService } from '../../services/weapons.service';
import { GameUtils } from '../../utils/game-utils';

@Component({
  selector: 'app-weapon-list',
  templateUrl: './weapon-list.component.html',
  styleUrl: './weapon-list.component.css'
})
export class WeaponListComponent implements OnInit {

  gameCode: any = null;
  allWeapons: any[] = [];
  weapons: any[] = [];

  weaponsLabel: any = '';
  // search
  textValue: any = '';
  rarityValue: any = '';
  typeValue: any = '';

  constructor(private routeService: RouteService, private weaponsService: WeaponsService) { }

  async ngOnInit(): Promise<void> {
    this.gameCode = await this.routeService.getActiveGame();
    this.weaponsLabel = GameUtils.getWeaponsLabel(this.gameCode) + 's';
    this.loadWeapons();
  }

  loadWeapons() {
    this.allWeapons = this.weaponsService.getAll(this.gameCode);
    this.weapons = this.allWeapons;
  }

  onTextChange(val: string) {
    this.textValue = val;
    this.filterList();
  }

  onRarityChange(val: string) {
    this.rarityValue = val;
    this.filterList();
  }

  onTypeChange(val: string) {
    this.typeValue = val;
    this.filterList();
  }

  filterList() {
    this.weapons = this.allWeapons.filter(w => {
      let filterByName = w.name.toLowerCase().includes(this.textValue.toLowerCase());
      let filterByRarity = this.rarityValue ? w.rarity == this.rarityValue : true;
      let filterByType = this.typeValue ? w.type == this.typeValue : true;
      return filterByName && filterByRarity && filterByType;
    });
  }

  onReset() {
    this.textValue = '';
    this.rarityValue = '';
    this.typeValue = '';
    this.weapons = this.allWeapons;
  }

}

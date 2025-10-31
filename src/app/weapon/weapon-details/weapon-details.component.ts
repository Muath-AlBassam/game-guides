import { Component, Input, OnInit } from '@angular/core';
import { WeaponsService } from '../../services/weapons.service';
import { RaritiesService } from '../../services/rarities.service';
import { TypesService } from '../../services/types.service';

@Component({
  selector: 'app-weapon-details',
  templateUrl: './weapon-details.component.html',
  styleUrl: './weapon-details.component.css'
})
export class WeaponDetailsComponent implements OnInit {

  @Input() gameCode = null;
  @Input() weaponName = null;
  @Input() showAdditionalInfo: boolean = true;

  weapon: any = null;
  rarity: any = null;
  type: any = null;

  constructor(private weaponsService: WeaponsService, private raritiesService: RaritiesService, private typesService: TypesService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.weapon = this.weaponsService.getOne(this.gameCode, this.weaponName);
    this.rarity = this.raritiesService.getOne(this.gameCode, this.weapon.rarity);
    this.type = this.typesService.getOne(this.gameCode, this.weapon.type);
  }
}

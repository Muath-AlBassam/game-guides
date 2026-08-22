import { Component, Input, OnInit } from '@angular/core';
import { WeaponsService } from '../../services/weapons.service';
import { TextUtils } from '../../utils/text-utils';
import { Constants } from '../../utils/constants';
import { LookupsService } from '../../services/lookups.service';
import { BuildsService } from '../../services/builds.service';

@Component({
  selector: 'app-weapon-details',
  templateUrl: './weapon-details.component.html',
  styleUrl: './weapon-details.component.css'
})
export class WeaponDetailsComponent implements OnInit {

  readonly unknownImg = Constants.images.unknown;

  @Input() weaponName: any = null;
  @Input() showAdditionalInfo: boolean = true;
  @Input() showEquippedBy: boolean = false;
  @Input() effectStyle: 'popover' | 'box' = 'popover';
  @Input() dimensions: number = 80;
  @Input() simpleView: boolean = false;

  weapon: any = null;
  weaponId: string = '';
  rarity: any = null;
  type: any = null;
  equippedCharacters: any [] = [];

  constructor(private weaponsService: WeaponsService, private lookupsService: LookupsService, private textUtils: TextUtils,
              private buildsService: BuildsService) {}

  ngOnInit(): void {
    this.loadData();
    this.weaponId = this.weapon.name.replace(/[^a-zA-Z0-9]/g, '');
  }

  loadData() {
    this.loadBasicData();
    this.loadEquippedBy();
  }

  loadBasicData() {
    this.weapon = this.weaponsService.getOne(this.weaponName);
    this.weapon.formattedEffect = this.textUtils.colorize(this.weapon.effect, this.weapon.gameCode);
    this.rarity = this.lookupsService.getOne(this.weapon.rarity, Constants.lookupType.RARITY);
    this.type = this.lookupsService.getOne(this.weapon.type, Constants.lookupType.TYPE);
  }

  loadEquippedBy() {
    if (this.showEquippedBy) {
      this.equippedCharacters = this.buildsService.getEquippedBy(this.weaponName, 'WEAPON');
    }
  }
}

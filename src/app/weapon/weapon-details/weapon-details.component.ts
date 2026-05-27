import { Component, Input, OnInit } from '@angular/core';
import { WeaponsService } from '../../services/weapons.service';
import { TextUtils } from '../../utils/text-utils';
import { Constants } from '../../utils/constants';
import { LookupsService } from '../../services/lookups.service';

@Component({
  selector: 'app-weapon-details',
  templateUrl: './weapon-details.component.html',
  styleUrl: './weapon-details.component.css'
})
export class WeaponDetailsComponent implements OnInit {

  readonly unknownImg = Constants.images.unknown;

  @Input() gameCode: any = null;
  @Input() weaponName: any = null;
  @Input() showAdditionalInfo: boolean = true;
  @Input() effectStyle: 'popover' | 'box' = 'popover';

  weapon: any = null;
  weaponId: string = '';
  rarity: any = null;
  type: any = null;

  constructor(private weaponsService: WeaponsService, private lookupsService: LookupsService, private textUtils: TextUtils) { }

  ngOnInit(): void {
    this.loadData();
    this.weaponId = this.weapon.name.replace(/[^a-zA-Z0-9]/g, '');
  }

  loadData() {
    this.weapon = this.weaponsService.getOne(this.gameCode, this.weaponName);
    this.weapon.formattedEffect = this.textUtils.colorize(this.weapon.effect, this.gameCode);
    this.rarity = this.lookupsService.getOne(this.gameCode, this.weapon.rarity, Constants.lookupType.RARITY);
    this.type = this.lookupsService.getOne(this.gameCode, this.weapon.type, Constants.lookupType.TYPE);
  }
}

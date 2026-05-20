import { Component, Input, OnInit } from '@angular/core';
import { WeaponsService } from '../../services/weapons.service';
import { RaritiesService } from '../../services/rarities.service';
import { TypesService } from '../../services/types.service';
import { TextUtils } from '../../utils/text-utils';
import { Constants } from '../../utils/constants';

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

  constructor(private weaponsService: WeaponsService, private raritiesService: RaritiesService, private typesService: TypesService,
              private textUtils: TextUtils) { }

  ngOnInit(): void {
    this.loadData();
    this.weaponId = this.weapon.name.replace(/[^a-zA-Z0-9]/g, '');
  }

  loadData() {
    this.weapon = this.weaponsService.getOne(this.gameCode, this.weaponName);
    this.weapon.formattedEffect = this.textUtils.colorize(this.weapon.effect, this.gameCode);
    this.rarity = this.raritiesService.getOne(this.gameCode, this.weapon.rarity);
    this.type = this.typesService.getOne(this.gameCode, this.weapon.type);
  }
}

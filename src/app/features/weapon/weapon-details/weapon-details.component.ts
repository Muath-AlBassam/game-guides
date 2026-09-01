import { Component, Input, OnInit } from '@angular/core';
import { WeaponsService } from '../../../shared/api/weapons.service';
import { TextUtils } from '../../../shared/utils/text-utils';
import { Constants } from '../../../shared/utils/constants';
import { LookupsService } from '../../../shared/api/lookups.service';
import { BuildsService } from '../../../shared/api/builds.service';
import { Utils } from '../../../shared/utils/utils';
import { WeaponModel } from '../../../shared/models/weapon.model';
import { LookupModel } from '../../../shared/models/lookup.model';

@Component({
  selector: 'app-weapon-details',
  templateUrl: './weapon-details.component.html',
  styleUrl: './weapon-details.component.css'
})
export class WeaponDetailsComponent implements OnInit {

  readonly Utils = Utils;
  readonly UUID = Utils.generateUUID();

  @Input() weaponName!: string;
  @Input() showAdditionalInfo: boolean = true;
  @Input() showEquippedBy: boolean = false;
  @Input() effectStyle: 'popover' | 'box' = 'popover';
  @Input() dimensions: number = 80;
  @Input() backgroundStyle: 'solid' | 'fade' = 'solid';

  weapon!: WeaponModel;
  rarity!: LookupModel;
  type!: LookupModel;
  equippedCharacters: any[] = [];

  constructor(
    private weaponsService: WeaponsService,
    private lookupsService: LookupsService,
    private textUtils: TextUtils,
    private buildsService: BuildsService
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  private loadData(): void {
    this.loadBasicData();
    this.loadEquippedBy();
  }

  private loadBasicData(): void {
    this.weapon = this.weaponsService.getOne(this.weaponName);
    this.weapon.formattedEffect = this.textUtils.colorize(this.weapon.effect, this.weapon.gameCode);
    this.rarity = this.lookupsService.getOne(this.weapon.rarity, Constants.lookupType.RARITY)!;
    this.type = this.lookupsService.getOne(this.weapon.type, Constants.lookupType.TYPE)!;
  }

  loadEquippedBy(): void {
    if (this.showEquippedBy) {
      this.equippedCharacters = this.buildsService.getEquippedBy(this.weaponName, 'WEAPON');
    }
  }

  get isBackgroundStyleFade(): boolean {
    return !!this.rarity && this.backgroundStyle === 'fade';
  }

  get weaponImageStyle(): string {
    if (!this.rarity || this.backgroundStyle !== 'solid') {
      return '';
    }
    return this.rarity['backgroundStyle'] ? (this.rarity['backgroundStyle'] as string) : '';
  }

  get hasPopoverEffect(): boolean {
    return this.effectStyle === 'popover' && !!this.weapon?.effect;
  }

  get hasBoxEffect(): boolean {
    return this.effectStyle === 'box' && !!this.weapon?.effect;
  }

  get showExpandButton(): boolean {
    return this.hasBoxEffect || this.showEquippedBy;
  }

  get effectId(): string {
    return `${this.weaponId}effect`;
  }

  get equippedById(): string {
    return `${this.weaponId}equippedby`;
  }

  get weaponId(): string {
    return (this.weapon?.name?.replace(/[^a-zA-Z0-9]/g, '') ?? '') + this.UUID;
  }

  get collapseTarget(): string {
    const targets: string[] = [];
    if (this.hasBoxEffect) {
      targets.push(`#${this.effectId}`);
    }
    if (this.showEquippedBy) {
      targets.push(`#${this.equippedById}`);
    }
    return targets.join(', ');
  }
}
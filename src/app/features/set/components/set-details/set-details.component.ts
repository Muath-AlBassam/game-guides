import { Component, Input, OnInit,} from '@angular/core';
import { SetsService } from '@shared/api/sets.service';
import { TextUtils } from '@shared/utils/text-utils';
import { Constants } from '@shared/utils/constants';
import { Utils } from '@shared/utils/utils';
import { BuildsService } from '@shared/api/builds.service';
import { LookupsService } from '@shared/api/lookups.service';
import { SetEffectModel, SetModel } from '@shared/models/set.model';
import { LookupModel } from '@shared/models/lookup.model';

@Component({
  selector: 'app-set-details',
  templateUrl: './set-details.component.html',
  styleUrl: './set-details.component.css'
})
export class SetDetailsComponent implements OnInit {

  readonly Utils = Utils;
  readonly UUID = Utils.generateUUID();

  @Input() setName!: string;
  @Input() equippedPieces: string | null = null;
  @Input() showEquippedBy = false;
  @Input() effectStyle: 'popover' | 'box' = 'popover';
  @Input() dimensions: number = 80;
  @Input() backgroundStyle: 'solid' | 'fade' | 'none' = 'solid';

  set!: SetModel;
  setEffectsList: SetEffectModel[] = [];
  rarity: LookupModel | undefined = undefined;
  equippedCharacters: string[] = [];

  constructor(
    private readonly setsService: SetsService,
    private readonly textUtils: TextUtils,
    private readonly buildsService: BuildsService,
    private readonly lookupsService: LookupsService
  ) {}

  ngOnInit(): void {
    this.loadBasicData();
    this.formatEffects();
    this.loadEquippedBy();
  }

  loadBasicData(): void {
    this.set = this.setsService.getOne(this.setName)!;
    this.rarity = this.lookupsService.getOne(this.set.rarity, Constants.lookupType.RARITY);
  }

  private formatEffects(): void {
    if (!this.set) {
      this.setEffectsList = [];
      return;
    }
    this.setEffectsList = this.filterSetEffects()
      .map(effect => {
        effect.formattedDescription = this.textUtils.colorize(
          effect.description,
          this.set!.gameCode
        );
        return effect;
      });
  }

  private filterSetEffects(): SetEffectModel[] {
    if (!this.equippedPieces) {
      return this.set.effects;
    }

    const equippedPieces = this.equippedPieces.split(',')

    return this.set.effects.filter((effect: SetEffectModel) =>
      equippedPieces.some(equippedPieceCode => {
        if (Utils.isNumber(equippedPieceCode) && Utils.isNumber(effect.requiredPiece)) {
          return Number(effect.requiredPiece) <= Number(equippedPieceCode);
        } else if (Utils.isNumber(effect.requiredPiece)) {
          return Number(effect.requiredPiece) <= equippedPieces.length;
        } else {
          return effect.requiredPiece === equippedPieceCode;
        }
      })
    );
  }

  private loadEquippedBy(): void {
    if (this.showEquippedBy) {
      this.equippedCharacters = this.buildsService.getEquippedBy(this.setName, 'SET');
    }
  }

  get isBackgroundStyleFade(): boolean {
    return !!this.rarity && this.backgroundStyle === 'fade';
  }

  get hasEffects(): boolean {
    return this.set.effects.length > 0;
  }

  get hasPopoverEffect(): boolean {
    return this.effectStyle === 'popover' && this.hasEffects;
  }

  get hasBoxEffect(): boolean {
    return this.effectStyle === 'box' && this.hasEffects;
  }

  get showExpandArrow(): boolean {
    return this.hasBoxEffect || this.showEquippedBy;
  }

  get effectId(): string {
    return `${this.setId}effect`;
  }

  get equippedById(): string {
    return `${this.setId}equippedby`;
  }

  get setId(): string {
    return (this.set?.name.replace(/[^a-zA-Z0-9]/g, '').toLowerCase() ?? '') + this.UUID;
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
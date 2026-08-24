import { Component, Input, OnInit,} from '@angular/core';
import { SetsService } from '../../services/sets.service';
import { TextUtils } from '../../utils/text-utils';
import { Constants } from '../../utils/constants';
import { Utils } from '../../utils/utils';
import { BuildsService } from '../../services/builds.service';
import { LookupsService } from '../../services/lookups.service';

@Component({
  selector: 'app-set-details',
  templateUrl: './set-details.component.html',
  styleUrl: './set-details.component.css'
})
export class SetDetailsComponent implements OnInit {

  readonly UUID = Utils.generateUUID();
  readonly UNKNOWN_IMG = Constants.images.unknown;

  @Input() setName: string | null = null;
  @Input() equippedPieces: string | null = null;
  @Input() showEquippedBy = false;
  @Input() effectStyle: 'popover' | 'box' = 'popover';
  @Input() dimensions = 80;
  @Input() backgroundStyle: 'flat' | 'split' = 'split';

  set: any = null;
  setEffectsList: any[] = [];
  rarity: any = null;
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

  loadBasicData() {
    this.set = this.setsService.getOne(this.setName);
    this.rarity = this.lookupsService.getOne(this.set.rarity, Constants.lookupType.RARITY);
  }

  private formatEffects(): void {
    if (!this.set) {
      this.setEffectsList = [];
      return;
    }
    this.setEffectsList = this.filterSetEffects()
      .map(effect => ({
        ...effect,
        formattedDescription: this.textUtils.colorize(
          effect.description,
          this.set!.gameCode
        )
      }));
  }

  private filterSetEffects(): any[] {
    if (!this.equippedPieces) {
      return this.set.effects;
    }

    const equippedPieces = this.equippedPieces.split(',')

    return this.set.effects.filter((effect: any) =>
      equippedPieces.some(pieceCode => {
        if (Utils.isNumber(pieceCode) && Utils.isNumber(effect.requiredPiece)) {
          return Number(effect.requiredPiece) <= Number(pieceCode);
        } else if (Utils.isNumber(effect.requiredPiece)) {
          return Number(effect.requiredPiece) <= equippedPieces.length;
        } else {
          return effect.requiredPiece === pieceCode;
        }
      })
    );
  }

  private loadEquippedBy() {
    if (this.showEquippedBy) {
      this.equippedCharacters = this.buildsService.getEquippedBy(this.setName, 'SET');
    }
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
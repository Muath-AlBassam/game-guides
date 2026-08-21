import { Component, Input, OnInit } from '@angular/core';
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

  readonly unknownImg = Constants.images.unknown;

  @Input() setName: any = null;
  @Input() equppiedPieces: any = null;
  @Input() showEquippedBy: boolean = false;
  @Input() effectStyle: 'popover' | 'box' = 'popover';

  set: any = null;
  setId: string = '';
  setEffectsList: any[] = [];
  rarity: any = null;
  equippedCharacters: any [] = [];

  constructor(private setsService: SetsService, private textUtils: TextUtils, private buildsService: BuildsService,
              private lookupsService: LookupsService) { }

  ngOnInit(): void {
    this.loadData();
    this.setId = this.set.name.replace(/[^a-zA-Z0-9]/g, '');
  }

  loadData() {
    this.loadBasicData();
    this.loadEquippedBy();
  }

  loadBasicData() {
    this.set = this.setsService.getOne(this.setName);
    this.rarity = this.lookupsService.getOne(this.set.rarity, Constants.lookupType.RARITY);
    this.setEffectsList = [...this.set.effects];
    this.filterSetEffects();
    this.formatSetEffects();
  }

  filterSetEffects() {
    if (this.equppiedPieces) {
      const equippedPiecesArr = this.equppiedPieces.split(',');
      this.setEffectsList = this.setEffectsList.filter((eff: any) => {
        return equippedPiecesArr.some((pieceCode: any) => {
          if (Utils.isNumber(pieceCode) && Utils.isNumber(eff.requiredPiece)) {
            return Number(eff.requiredPiece) <= Number(pieceCode);
          } else if (Utils.isNumber(eff.requiredPiece)) {
            return Number(eff.requiredPiece) <= equippedPiecesArr.length
          } else {
            return eff.requiredPiece == pieceCode;
          }
        });
      });
    }
  }

  formatSetEffects() {
    this.setEffectsList.forEach((eff: any) => {
      eff.formattedDescription = this.textUtils.colorize(eff.description, this.set.gameCode);
    });
  }

  loadEquippedBy() {
    if (this.showEquippedBy) {
      this.equippedCharacters = this.buildsService.getEquippedBy(this.setName, 'SET');
    }
  }
}

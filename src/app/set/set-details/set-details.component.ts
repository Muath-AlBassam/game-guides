import { Component, Input, OnInit } from '@angular/core';
import { SetsService } from '../../services/sets.service';
import { TextUtils } from '../../utils/text-utils';
import { Constants } from '../../utils/constants';

@Component({
  selector: 'app-set-details',
  templateUrl: './set-details.component.html',
  styleUrl: './set-details.component.css'
})
export class SetDetailsComponent implements OnInit {

  readonly unknownImg = Constants.images.unknown;

  @Input() gameCode: any = null;
  @Input() setName: any = null;
  @Input() equppiedPieces: any = null;
  @Input() effectStyle: 'popover' | 'box' = 'popover';

  set: any = null;
  setId: string = '';
  setEffectsList: any[] = [];

  constructor(private setsService: SetsService, private textUtils: TextUtils) { }

  ngOnInit(): void {
    this.loadSet();
    this.loadSetEffects();
    this.setId = this.set.name.replace(/[^a-zA-Z0-9]/g, '');
  }

  loadSet() {
    this.set = this.setsService.getOne(this.gameCode, this.setName);
  }

  loadSetEffects() {
    this.setEffectsList = JSON.parse(JSON.stringify(this.set.effects));
    this.setEffectsList.forEach((eff: any) => {
      eff.formattedDescription = this.textUtils.colorize(eff.description, this.gameCode);
    });
    if (this.equppiedPieces) {
      const equippedPiecesArr = this.equppiedPieces.split(',');
      this.setEffectsList = this.setEffectsList.filter((eff: any) => {
        return equippedPiecesArr.some((pieceCode: any) => {
          if (!isNaN(Number(pieceCode)) && !isNaN(Number(eff.requiredPiece))) {
            return Number(eff.requiredPiece) <= Number(pieceCode);
          }
          return eff.requiredPiece == pieceCode;
        });
      });
    }
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { SetsService } from '../../services/sets.service';
import { SetsEffectsService } from '../../services/sets-effects.service';
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
  @Input() pieceCount: any = null;
  @Input() effectStyle: 'popover' | 'box' = 'popover';

  set: any = null;
  setId: string = '';
  setEffectsList: any[] = [];

  constructor(private setsService: SetsService, private setsEffectsService: SetsEffectsService, private textUtils: TextUtils) { }

  ngOnInit(): void {
    this.loadSet();
    this.loadSetEffects();
    this.setId = this.set.name.replace(/[^a-zA-Z0-9]/g, '');
  }

  loadSet() {
    this.set = this.setsService.getOne(this.gameCode, this.setName);
  }

  loadSetEffects() {
    this.setEffectsList = this.setsEffectsService.getOne(this.gameCode, this.setName);
    this.setEffectsList.forEach((eff: any) => {
      eff.formattedDescription = this.textUtils.colorize(eff.description, this.gameCode);
    });
    if (this.pieceCount) {
      this.setEffectsList = this.setEffectsList.filter((eff: any) => Number(this.pieceCount) >= eff.requiredCount);
    }
  }
}

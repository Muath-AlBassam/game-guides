import { Component, Input, OnInit } from '@angular/core';
import { SetsService } from '../../services/sets.service';
import { SetsEffectsService } from '../../services/sets-effects.service';
import { TextUtils } from '../../utils/text-utils';

@Component({
  selector: 'app-set-details',
  templateUrl: './set-details.component.html',
  styleUrl: './set-details.component.css'
})
export class SetDetailsComponent implements OnInit {

  @Input() gameCode: any = null;
  @Input() setName: any = null;
  @Input() pieceCount: any = null;
  @Input() showEffects: boolean = true;

  set: any = null;
  setEffectsList: any = null;

  constructor(private setsService: SetsService, private setsEffectsService: SetsEffectsService, private textUtils: TextUtils) { }

  ngOnInit(): void {
    this.loadSet();
    this.loadSetEffects();
  }

  loadSet() {
    this.set = this.setsService.getOne(this.gameCode, this.setName);
  }

  loadSetEffects() {
    if (this.showEffects) {
      this.setEffectsList = this.setsEffectsService.getOne(this.gameCode, this.setName);
      this.setEffectsList.forEach((eff: any) => {
        eff.formattedDescription = this.textUtils.colorize(eff.description, this.gameCode);
      });
    }
  }
}

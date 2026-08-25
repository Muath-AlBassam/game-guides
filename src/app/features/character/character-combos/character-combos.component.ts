import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CombosService } from '../../../shared/api/combos.service';
import { LookupsService } from '../../../shared/api/lookups.service';
import { Constants } from '../../../shared/utils/constants';

@Component({
  selector: 'app-character-combos',
  templateUrl: './character-combos.component.html',
  styleUrl: './character-combos.component.css'
})
export class CharacterCombosComponent implements OnInit {

  @Input() character!: string;
  @Output() hasCombos: EventEmitter<boolean> = new EventEmitter<boolean>();

  combos: any[] = [];

  constructor(
    private combosService: CombosService,
    private lookupsService: LookupsService
  ) {}

  ngOnInit(): void {
    this.loadCombos();
  }

  loadCombos(): void {
    let combosButtons = this.combosService.getAllByCharacter(this.character);
    if (combosButtons) {
      this.combos = combosButtons.map((combo: any) => {
        return combo.map((btn: any) => {
          return { code: btn, imageUrl: this.getButtonImage(btn) }
        })
      });
    }
    this.hasCombos.emit(this.combos != null && this.combos.length > 0);
  }

  getButtonImage(buttonCode: string): string {
    return this.lookupsService.getOne(buttonCode, Constants.lookupType.BUTTON).imageUrl;
  }
}
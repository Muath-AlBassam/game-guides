import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ButtonsService } from '../../services/buttons.service';
import { CombosService } from '../../services/combos.service';

@Component({
  selector: 'app-character-combos',
  templateUrl: './character-combos.component.html',
  styleUrl: './character-combos.component.css'
})
export class CharacterCombosComponent implements OnInit {

  @Input() gameCode: any = null;
  @Input() character: any = null;
  @Output() hasCombos: EventEmitter<boolean> = new EventEmitter<boolean>();

  combos: any[] = [];

  constructor(private combosService: CombosService, private buttonsService: ButtonsService) { }

  ngOnInit(): void {
    this.loadCombos();
  }

  loadCombos() {
    let combosButtons = this.combosService.getAllByCharacter(this.gameCode, this.character);
    if (combosButtons) {
      this.combos = combosButtons.map((combo: any) => {
        return combo.map((btn: any) => {
          return { code: btn, imageUrl: this.getButtonImage(btn) }
        })
      });
    }
    this.hasCombos.emit(this.combos != null && this.combos.length > 0);
  }

  getButtonImage(buttonCode: any) {
    return this.buttonsService.getOne(this.gameCode, buttonCode).imageUrl;
  }
}
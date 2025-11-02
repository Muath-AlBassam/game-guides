import { Component, Input, OnInit } from '@angular/core';
import { CombosService } from '../../services/combos.service';
import { ButtonsService } from '../../services/buttons.service';

@Component({
  selector: 'app-combo-list',
  templateUrl: './combo-list.component.html',
  styleUrl: './combo-list.component.css'
})
export class ComboListComponent implements OnInit {

  @Input() gameCode: any = null;
  @Input() character: any = null;

  combos: any[] = [];

  constructor(private combosService: CombosService, private buttonsService: ButtonsService) { }

  ngOnInit(): void {
    this.loadCombos();
  }

  loadCombos() {
    let combosButtons = this.combosService.getAllByCharacter(this.gameCode, this.character);   
    this.combos = combosButtons.map((combo: any) => {
      return combo.map((btn: any) => {
        return { code: btn, imageUrl: this.getButtonImage(btn) }
      })
    });    
  }

  getButtonImage(buttonCode: any) {
    return this.buttonsService.getOne(this.gameCode, buttonCode).imageUrl;
  }
}

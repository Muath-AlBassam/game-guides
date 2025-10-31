import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../services/characters.service';
import { RouteService } from '../../services/route.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.css'
})
export class CharacterListComponent implements OnInit {

  gameCode: any = null;
  allCharacters: any[] = [];
  characters: any[] = [];

  // search
  textValue: any = '';
  rarityValue: any = '';
  elementValue: any = '';
  typeValue: any = '';

  constructor(private routeService: RouteService, private charactersService: CharactersService) { }

  async ngOnInit(): Promise<void> {
    this.gameCode = await this.routeService.getActiveGame();
    this.loadCharacters();
  }

  loadCharacters() {
    this.allCharacters = this.charactersService.getAll(this.gameCode);
    this.characters = this.allCharacters;
  }

  onTextChange(val: string) {
    this.textValue = val;
    this.filterList();
  }

  onRarityChange(val: string) {
    this.rarityValue = val;
    this.filterList();
  }

  onElementChange(val: string) {
    this.elementValue = val;
    this.filterList();
  }

  onTypeChange(val: string) {
    this.typeValue = val;
    this.filterList();
  }

  filterList() {
    this.characters = this.allCharacters.filter(c => {
      let filterByName = c.name.toLowerCase().includes(this.textValue.toLowerCase());
      let filterByRarity = this.rarityValue ? c.rarity == this.rarityValue : true;
      let filterByElement = this.elementValue ? c.element == this.elementValue : true;
      let filterByType = this.typeValue ? c.type == this.typeValue : true;
      return filterByName && filterByRarity && filterByElement && filterByType;
    });
  }

  onReset() {
    this.textValue = '';
    this.rarityValue = '';
    this.elementValue = '';
    this.typeValue = '';
    this.characters = this.allCharacters;
  }
}

import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../../shared/api/characters.service';
import { CharacterModel } from '../../../shared/models/character.model';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.css'
})
export class CharacterListComponent implements OnInit {

  allCharacters: CharacterModel[] = [];
  characters: CharacterModel[] = [];

  // search
  textValue: string = '';
  rarityValue: string = '';
  elementValue: string[] = [];
  typeValue: string = '';

  viewType: 'cards' | 'pfp' | 'details' = 'details';
  viewTypeList: any[] = [
    { code: 'cards', name: 'Cards', imageUrl: 'assets/svg/grid-2.svg' },
    { code: 'pfp', name: 'PFP', imageUrl: 'assets/svg/grid-4.svg' },
    { code: 'details', name: 'Details', imageUrl: 'assets/svg/grid-1.svg' },
  ]

  constructor(private charactersService: CharactersService) { }

  ngOnInit(): void {
    this.loadCharacters();
  }

  loadCharacters(): void {
    this.allCharacters = this.charactersService.getAll();
    this.characters = this.allCharacters;
  }

  onTextChange(val: string): void {
    this.textValue = val;
    this.filterList();
  }

  onRarityChange(val: string): void {
    this.rarityValue = val;
    this.filterList();
  }

  onElementChange(val: string[]): void {
    this.elementValue = val;
    this.filterList();
  }

  onTypeChange(val: string): void {
    this.typeValue = val;
    this.filterList();
  }

  filterList(): void {
    this.characters = this.allCharacters.filter(c => {
      let filterByName = this.textValue ? c.name.toLowerCase().includes(this.textValue.toLowerCase()) : true;
      let filterByRarity = this.rarityValue ? c.rarity == this.rarityValue : true;
      let filterByElement = this.elementValue?.length > 0 ? this.elementValue.includes(c.element) : true;
      let filterByType = this.typeValue ? c.type == this.typeValue : true;
      return filterByName && filterByRarity && filterByElement && filterByType;
    });
  }

  onReset(): void {
    this.textValue = '';
    this.rarityValue = '';
    this.elementValue = [];
    this.typeValue = '';
    this.characters = this.allCharacters;
  }
}

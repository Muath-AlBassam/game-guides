import { Component, Input, OnInit } from '@angular/core';
import { Utils } from '@shared/utils/utils';
import { CharactersService } from '@shared/api/characters.service';
import { Constants } from '@shared/utils/constants';
import { LookupsService } from '@shared/api/lookups.service';
import { CharacterModel } from '@shared/models/character.model';
import { LookupModel } from '@shared/models/lookup.model';
import { Router } from '@angular/router';

export interface CharacterDetailsModel {
  gameCode: string;
  code: string;
  name: string;
  imageUrl: string | undefined;
  cardImageUrl: string | undefined;
  element: LookupModel | undefined;
  type: LookupModel | undefined;
  rarity: LookupModel | undefined;
  enhanced: boolean;
  skillDescriptionList: string[];
}

@Component({
  selector: 'app-character-image',
  templateUrl: './character-image.component.html',
  styleUrl: './character-image-shared.css'
})
export class CharacterImageComponent implements OnInit {
  
  readonly Utils = Utils;
  readonly TRANSPARENT_IMG = Constants.images.transparent;
  readonly UNKNOWN_IMG = Constants.images.unknownCharacter;

  @Input() characterName!: string;
  @Input('styles') inputStyles: string = '';
  @Input() classes: string = '';
  @Input() enableDetailsRedirect: boolean = false;
  @Input() showBackgroundStyle: boolean = true;
  @Input() showBorderStyle: boolean = false;
  @Input() showElement: boolean = false;
  @Input() showType: boolean = false;
  @Input() showNotes: boolean = false;
  @Input() imageStyle: 'pfp' | 'card' | 'gallery' | 'info' = 'pfp';
  @Input('dimensions') inputDimensions: number = 100;
  @Input('iconSize') inputIconSize: number = 26;
  @Input() mobileSizeRatio: number = 1; // 100%
  @Input() mobileIconSizeRatio: number = 1; // 100%

  dimensions: number = 100;
  iconSize: number = 26;
  defaultCardDimensions: number = 219 / 160;
  styles: string = '';

  charmd!: CharacterDetailsModel;

  constructor(
    private charactersService: CharactersService,
    private lookupsService: LookupsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadData();
    this.calculateDimensions();
    this.computeStyleTag();
  }

  loadData(): void {
    const tempCharMd: CharacterModel = this.charactersService.getOne(this.characterName);
    this.charmd = {
      gameCode: tempCharMd.gameCode,
      code: tempCharMd.code,
      name: tempCharMd.name,
      imageUrl: tempCharMd.imageUrl,
      cardImageUrl: tempCharMd.cardImageUrl,
      element: this.lookupsService.getOne(tempCharMd.element, Constants.lookupType.ELEMENT),
      type: this.lookupsService.getOne(tempCharMd.type, Constants.lookupType.TYPE),
      rarity: this.lookupsService.getOne(tempCharMd.rarity, Constants.lookupType.RARITY),
      enhanced: tempCharMd.enhanced,
      skillDescriptionList: tempCharMd.skillDescriptionList,
    };
  }

  calculateDimensions(): void {
    this.dimensions = Utils.isMobile() ? this.inputDimensions * this.mobileSizeRatio : this.inputDimensions;
    this.iconSize = Utils.isMobile() ? this.inputIconSize * this.mobileIconSizeRatio : this.inputIconSize;
    this.defaultCardDimensions = 219 / 160;
  }

  computeStyleTag(): void {
    this.styles = 
      this.inputStyles
      + (this.showBackgroundStyle ? (this.charmd.rarity?.['backgroundStyle'] ?? '') : '')
      + (this.showBorderStyle ? ' border: 2px solid ' + Utils.rarityCSSVar(this.charmd.gameCode, this.charmd.rarity?.code) + ';' : '');
    
  }

  goToCharacterDetails(): void {
    if (this.enableDetailsRedirect) {
      this.router.navigate([this.charmd.gameCode + '/characters/' + this.charmd.code]);
    }
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { Utils } from '../../utils/utils';
import { CharactersService } from '../../services/characters.service';
import { Constants } from '../../utils/constants';
import { DialogService } from '../../services/dialog.service';
import { LookupsService } from '../../services/lookups.service';

@Component({
  selector: 'app-character-image',
  templateUrl: './character-image.component.html',
  styleUrl: './character-image.component.css'
})
export class CharacterImageComponent implements OnInit {
  
  readonly TRANSPARENT_IMG = Constants.images.transparent;
  readonly UNKNOWN_IMG = Constants.images.unknownCharacter;

  @Input() characterName: any = null;
  @Input() styles: any = '';
  @Input() classes: any = '';
  @Input() enableDetailsDialog: boolean = false;
  @Input() showBackgroundStyle: boolean = true;
  @Input() showBorderStyle: boolean = false;
  @Input() showElement: boolean = false;
  @Input() showType: boolean = false;
  @Input() imageStyle: 'pfp' | 'card' | 'gallery' | 'details' = 'pfp';
  @Input('dimensions') inputDimensions: number = 100;
  @Input('iconSize') inputIconSize: number = 26;
  @Input() mobileSizeRatio: number = 1; // 100%
  @Input() mobileIconSizeRatio: number = 1; // 100%

  dimensions: number = 100;
  iconSize: number = 26;
  defaultCardDimensions: number = 219 / 160;

  charCount: number = 0;
  charmdList: {
    gameCode: any,
    code: any,
    name: any,
    imageUrl: any,
    cardImageUrl: any,
    element: any,
    type: any,
    rarity: any,
    enhanced: any,
    skillDescriptionList: any[],
    imageList: string[],
    currentImageIndex: number
  }[] = [];

  constructor(
    private charactersService: CharactersService,
    private lookupsService: LookupsService,
    private dialogService: DialogService
  ) {}

  ngOnInit(): void {
    this.loadData();
    this.calculateDimensions();
  }

  loadData() {
    let charNameList = this.characterName.split(',');
    this.charCount = charNameList.length;
    charNameList.forEach((cname: string) => {
      const tempCharMd = this.charactersService.getOne(cname);
      this.charmdList.push({
        gameCode: tempCharMd.gameCode,
        code: tempCharMd.code,
        name: tempCharMd.name,
        imageUrl: tempCharMd.imageUrl,
        cardImageUrl: tempCharMd.cardImageUrl,
        element: this.lookupsService.getOne(tempCharMd.element, Constants.lookupType.ELEMENT),
        type: this.lookupsService.getOne(tempCharMd.type, Constants.lookupType.TYPE),
        rarity: this.lookupsService.getOne(tempCharMd.rarity, Constants.lookupType.RARITY),
        enhanced: tempCharMd.enhanced,
        skillDescriptionList: this.formatSkillDescriptionToList(tempCharMd),
        imageList: this.charactersService.getAllImagesByCharacter(cname, ['CARD', 'SKIN']),
        currentImageIndex: 0
      });
    });
  }

  formatSkillDescriptionToList(char: any) {
    if (char.skillDescription) {
      return char.skillDescription.split(' & ');
    }
    return [];
  }

  get charmd() {
    return this.charmdList[0];
  }

  calculateDimensions() {
    this.dimensions = Utils.isMobile() ? this.inputDimensions * this.mobileSizeRatio : this.inputDimensions;
    this.iconSize = Utils.isMobile() ? this.inputIconSize * this.mobileIconSizeRatio : this.inputIconSize;
    this.defaultCardDimensions = 219 / 160;
  }

  openCharacterDetailsDialog(character: any) {
    if (this.enableDetailsDialog) {
      this.dialogService.openCharacterDetailsDialog(character);
    }
  }

  // gallery
  nextGalleryImage( char: any, event?: Event) {
    event?.stopPropagation();
    char.currentImageIndex = (char.currentImageIndex + 1) % char.imageList.length;
  }
  prevGalleryImage(char: any, event?: Event) {
    event?.stopPropagation();
    char.currentImageIndex = (char.currentImageIndex - 1 + char.imageList.length) % char.imageList.length;
  }
}

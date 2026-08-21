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
  @Input() withDetailsDialog: boolean = false;
  @Input() withBackgroundClass: boolean = true;
  @Input() withElement: boolean = false;
  @Input() withType: boolean = false;
  @Input() imageStyle: 'pfp' | 'card' | 'gallery' = 'pfp';
  @Input('dimensions') inputDimensions: number = 100;
  @Input() mobileSizeRatio: number = 1; // 100%
  @Input() mobileIconSizeRatio: number = 1; // 100%

  dimensions: number = Utils.isMobile() ? this.inputDimensions * this.mobileSizeRatio : this.inputDimensions;
  iconSize: number = Utils.isMobile() ? 26 * this.mobileIconSizeRatio : 26;
  defaultCardDimensions: number = 219 / 160;

  charCount: number = 0;
  charmdList: {
    charmd: any,
    raritymd: any,
    elementCode: any,
    elementImageUrl: any,
    typeImageUrl: any,
    imageList: string[],
    currentImageIndex: number
  }[] = [];

  constructor(private charactersService: CharactersService, private lookupsService: LookupsService, private dialogService: DialogService) { }

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
        charmd: tempCharMd,
        raritymd: this.lookupsService.getOne(tempCharMd.rarity, Constants.lookupType.RARITY),
        elementCode: tempCharMd.element,
        elementImageUrl: this.lookupsService.getOne(tempCharMd.element, Constants.lookupType.ELEMENT).imageUrl,
        typeImageUrl: this.lookupsService.getOne(tempCharMd.type, Constants.lookupType.TYPE)?.imageUrl,
        imageList: this.charactersService.getAllImagesByCharacter(cname, ['CARD', 'SKIN']),
        currentImageIndex: 0
      });
    });
  }

  get firstChar() {
    return this.charmdList[0];
  }

  calculateDimensions() {
    this.dimensions = Utils.isMobile() ? this.inputDimensions * this.mobileSizeRatio : this.inputDimensions;
    this.iconSize = Utils.isMobile() ? 26 * this.mobileIconSizeRatio : 26;
    this.defaultCardDimensions = 219 / 160;
  }

  openCharacterDetailsDialog(character: any) {
    if (this.withDetailsDialog) {
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

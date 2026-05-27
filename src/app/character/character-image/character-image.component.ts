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

  @Input() gameCode: any = null;
  @Input() characterName: any = null;
  @Input() styles: any = '';
  @Input() classes: any = '';
  @Input() withDetailsDialog: boolean = false;
  @Input() withBackgroundClass: boolean = true;
  @Input() withElement: boolean = false;
  @Input() withType: boolean = false;
  @Input() imageStyle: 'pfp' | 'card' | 'gallery' = 'pfp';
  @Input('dimensions') inputDimensions: number = 100;
  @Input() mobileSizeRatio: number = 1;
  @Input() mobileIconSizeRatio: number = 1;
  @Input() enableDetailsDialog: boolean = true;

  dimensions: number = Utils.isMobile() ? this.inputDimensions * this.mobileSizeRatio : this.inputDimensions;
  iconSize: number = Utils.isMobile() ? 26 * this.mobileIconSizeRatio : 26;
  defaultCardDimensions: number = 219 / 160;

  charmd: any = null;
  showBuild: boolean = false;
  showElement: boolean = false;
  showType: boolean = false;
  elementCode: any = '';
  elementImageUrl: any = '';
  typeImageUrl: any = '';
  addRarityClass: boolean = false;
  // gallery
  imageList: string[] = [];
  currentImageIndex: number = 0;

  charCount: number = 0;
  charmdList: any[] = [];

  transparentImg = Constants.images.transparent;
  unknownImg = Constants.images.unknownCharacter;

  constructor(private charactersService: CharactersService, private lookupsService: LookupsService, private dialogService: DialogService) { }

  ngOnInit(): void {
    this.loadData();
    this.calculateDimensions();
  }

  loadData() {
    let charNameList = this.characterName.split(',');
    this.charCount = charNameList.length;
    if (this.charCount == 1) {
      this.charmd = this.charactersService.getOne(this.gameCode, this.characterName);
      this.showElement = this.withElement && this.charmd.element;
      this.showType = this.withType && this.charmd.type;
      this.elementCode = this.charmd.elementActual ?? this.charmd.element;
      this.elementImageUrl = this.lookupsService.getOne(this.gameCode, this.elementCode, Constants.lookupType.ELEMENT).imageUrl;
      this.typeImageUrl = this.lookupsService.getOne(this.gameCode, this.charmd.type, Constants.lookupType.TYPE)?.imageUrl;
      this.addRarityClass = this.withBackgroundClass && this.charmd.rarity;
      this.imageList = this.charactersService.getAllImagesByCharacter(this.gameCode, this.characterName, ['CARD', 'SKIN']);
    } else {
      this.charmdList = charNameList.map((c: any) => this.charactersService.getOne(this.gameCode, c));
      this.addRarityClass = this.withBackgroundClass;
    }
  }

  calculateDimensions() {
    this.dimensions = Utils.isMobile() ? this.inputDimensions * this.mobileSizeRatio : this.inputDimensions;
    this.iconSize = Utils.isMobile() ? 26 * this.mobileIconSizeRatio : 26;
    this.defaultCardDimensions = 219 / 160;
  }

  openCharacterDetailsDialog(character: any) {
    if (this.enableDetailsDialog) {
      this.dialogService.openCharacterDetailsDialog(this.gameCode, character);
    }
  }

  // gallery
  nextGalleryImage(event?: Event) {
    event?.stopPropagation();
    this.currentImageIndex = (this.currentImageIndex + 1) % this.imageList.length;
  }
  prevGalleryImage(event?: Event) {
    event?.stopPropagation();
    this.currentImageIndex = (this.currentImageIndex - 1 + this.imageList.length) % this.imageList.length;
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { Utils } from '../../utils/utils';
import { CharactersService } from '../../services/characters.service';
import { ElementsService } from '../../services/elements.service';
import { TypesService } from '../../services/types.service';
import { Constants } from '../../utils/constants';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CharacterDetailsDialogComponent } from '../character-details-dialog/character-details-dialog.component';

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
  @Input() imageStyle: any = 'pfp'; // pfp, card
  @Input('dimensions') inputDimensions: number = 100;
  @Input() mobileSizeRatio: number = 1;
  @Input() mobileIconSizeRatio: number = 1;

  dimensions: number = Utils.isMobile() ? this.inputDimensions * this.mobileSizeRatio : this.inputDimensions;
  iconSize: number = Utils.isMobile() ? 26 * this.mobileIconSizeRatio : 26;
  defaultCardDimensions: number = 219 / 160;

  charmd: any = null;
  showBuild: boolean = false;
  showElement: boolean = false;
  showType: boolean = false;
  elementImageUrl: any = '';
  typeImageUrl: any = '';
  addRarityClass: boolean = false;

  charCount: number = 0;
  charmdList: any[] = [];

  transparentImg = Constants.images.transparent;
  unknownImg = Constants.images.unknown;

  constructor(private charactersService: CharactersService, private elementsService: ElementsService, private typesService: TypesService,
    private dialog: MatDialog) { }

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
      this.elementImageUrl = this.elementsService.getOne(this.gameCode, this.charmd.element).imageUrl;
      this.typeImageUrl = this.typesService.getOne(this.gameCode, this.charmd.type)?.imageUrl;
      this.addRarityClass = this.withBackgroundClass && this.charmd.rarity;
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
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = this.isMobile() ? '100vw' : '60%';
    dialogConfig.maxWidth = '100vw';
    dialogConfig.maxHeight = '100%';
    dialogConfig.panelClass = 'custom-mat-dialog';
    dialogConfig.data = { gameCode: this.gameCode, character: character };
    const dialogRef = this.dialog.open(CharacterDetailsDialogComponent, dialogConfig);
  }

  isMobile(): boolean {
    return Utils.isMobile();
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { Utils } from '../../../shared/utils/utils';
import { CharactersService } from '../../../shared/api/characters.service';
import { Constants } from '../../../shared/utils/constants';
import { LookupsService } from '../../../shared/api/lookups.service';
import { CharacterModel } from '../../../shared/models/character.model';
import { LookupModel } from '../../../shared/models/lookup.model';
import { NoteModel } from '../../../shared/models/note.model';
import { NotesService } from '../../../shared/api/notes.service';
import { TextUtils } from '../../../shared/utils/text-utils';
import { Router } from '@angular/router';

interface CharacterDetailsModel {
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
  notes: NoteModel[];
  imageList: string[];
  currentImageIndex: number;
}

@Component({
  selector: 'app-character-image',
  templateUrl: './character-image.component.html',
  styleUrl: './character-image.component.css'
})
export class CharacterImageComponent implements OnInit {
  
  readonly Utils = Utils;
  readonly TRANSPARENT_IMG = Constants.images.transparent;
  readonly UNKNOWN_IMG = Constants.images.unknownCharacter;

  @Input() characterName!: string;
  @Input() styles: string = '';
  @Input() classes: string = '';
  @Input() enableDetailsDialog: boolean = false;
  @Input() showBackgroundStyle: boolean = true;
  @Input() showBorderStyle: boolean = false;
  @Input() showElement: boolean = false;
  @Input() showType: boolean = false;
  @Input() showNotes: boolean = false;
  @Input() imageStyle: 'pfp' | 'card' | 'gallery' | 'details' = 'pfp';
  @Input('dimensions') inputDimensions: number = 100;
  @Input('iconSize') inputIconSize: number = 26;
  @Input() mobileSizeRatio: number = 1; // 100%
  @Input() mobileIconSizeRatio: number = 1; // 100%

  dimensions: number = 100;
  iconSize: number = 26;
  defaultCardDimensions: number = 219 / 160;

  charCount: number = 0;
  charmdList: CharacterDetailsModel[] = [];

  constructor(
    private charactersService: CharactersService,
    private lookupsService: LookupsService,
    private notesService: NotesService,
    private textUtils: TextUtils,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadData();
    this.calculateDimensions();
  }

  loadData(): void {
    let charNameList = this.characterName.split(',');
    this.charCount = charNameList.length;
    charNameList.forEach((cname: string) => {
      const tempCharMd: CharacterModel = this.charactersService.getOne(cname);
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
        notes: this.getCharacterNotes(tempCharMd.gameCode, tempCharMd.code),
        imageList: this.charactersService.getAllImagesByCharacter(cname, ['CARD', 'SKIN']),
        currentImageIndex: 0
      });
    });
  }

  formatSkillDescriptionToList(char: CharacterModel): string[] {
    if (this.showNotes && char.skillDescription) {
      return char.skillDescription.split(' | ');
    }
    return [];
  }

  getCharacterNotes(gameCode: string, character: string) {
    if (this.showNotes) {
      const notes = this.notesService.getAllByOwnerTypeAndCode('CHARACTER', character);
      if (notes && notes?.length > 0) {
        notes.forEach(n => {
          if (n.title) {
            n.formattedTitle = this.textUtils.format(n.title, gameCode);
          }
          n.formattedText = this.textUtils.formatAndColorize(n.text, gameCode);
        });
        return notes;
      }
    }
    return [];
  }

  get charmd(): CharacterDetailsModel {
    return this.charmdList[0];
  }

  calculateDimensions(): void {
    this.dimensions = Utils.isMobile() ? this.inputDimensions * this.mobileSizeRatio : this.inputDimensions;
    this.iconSize = Utils.isMobile() ? this.inputIconSize * this.mobileIconSizeRatio : this.inputIconSize;
    this.defaultCardDimensions = 219 / 160;
  }

  openCharacterDetails(aCharmd: CharacterDetailsModel): void {
    if (this.enableDetailsDialog) {
      const formatted = aCharmd.code.replaceAll(' ', '-');
      this.router.navigate([aCharmd.gameCode + '/characters/' + formatted]);
    }
  }

  // gallery
  nextGalleryImage(char: CharacterDetailsModel, event?: Event): void {
    event?.stopPropagation();
    char.currentImageIndex = (char.currentImageIndex + 1) % char.imageList.length;
  }
  prevGalleryImage(char: CharacterDetailsModel, event?: Event): void {
    event?.stopPropagation();
    char.currentImageIndex = (char.currentImageIndex - 1 + char.imageList.length) % char.imageList.length;
  }
}

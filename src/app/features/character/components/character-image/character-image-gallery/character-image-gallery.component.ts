import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { CharacterDetailsModel } from '../character-image.component';
import { Constants } from '@shared/utils/constants';
import { CharacterImageModel } from '@shared/models/character.model';
import { CharactersService } from '@shared/api/characters.service';

@Component({
  selector: 'app-character-image-gallery',
  templateUrl: './character-image-gallery.component.html',
  styleUrl: '../character-image-shared.css'
})
export class CharacterImageGalleryComponent implements OnInit {

  readonly UNKNOWN_IMG = Constants.images.unknownCharacter;
  readonly CARD_ASPECT_RATION: number = 219 / 160;

  @Input() charmd!: CharacterDetailsModel;

  @Input() styles: string = '';
  @Input() dimensions!: number;
  @Input() showElement: boolean = false;
  @Input() showType: boolean = false;
  @Input() enableViewCharacter: boolean = false;

  @Input() elementImageTemplate!: TemplateRef<unknown>;
  @Input() typeImageTemplate!: TemplateRef<unknown>;

  @Output() viewCharacter: EventEmitter<CharacterDetailsModel> = new EventEmitter<CharacterDetailsModel>();

  imageList: CharacterImageModel[] = [];
  currentImageIndex: number = 0;

  constructor(private charactersService: CharactersService) {}

  ngOnInit(): void {
    this.imageList = this.charactersService.getAllImagesByCharacter(this.charmd.code, ['CARD', 'SKIN', 'ALT']);
  }

  nextGalleryImage(event?: Event): void {
    event?.stopPropagation();
    this.currentImageIndex = (this.currentImageIndex + 1) % this.imageList.length;
  }

  prevGalleryImage(event?: Event): void {
    event?.stopPropagation();
    this.currentImageIndex = (this.currentImageIndex - 1 + this.imageList.length) % this.imageList.length;
  }

  goToCharacterDetails(): void {
    this.viewCharacter.emit(this.charmd);
  }
}
import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { CharacterDetailsModel } from '../character-image.component';
import { Constants } from '@shared/utils/constants';
import { CharactersService } from '@shared/api/characters.service';
import { CharacterImageModel } from '@shared/models/character.model';
import { CharacterImageCrop, CharacterImageCropper } from '@shared/utils/character-image-crop';
import { DialogService } from '@shared/services/dialog.service';

@Component({
  selector: 'app-character-image-gallery',
  templateUrl: './character-image-gallery.component.html',
  styleUrl: '../character-image-shared.css'
})
export class CharacterImageGalleryComponent implements OnInit {

  readonly UNKNOWN_IMG = Constants.images.unknownCharacter;
  readonly CARD_HEIGHT_ASPECT_RATIO: number = 219 / 160;

  @Input() charmd!: CharacterDetailsModel;

  @Input() styles: string = '';
  @Input() dimensions!: number;
  @Input() showElement: boolean = false;
  @Input() showType: boolean = false;
  @Input() showFullImage: boolean = false;
  @Input() enableViewCharacter: boolean = false;

  @Input() elementImageTemplate!: TemplateRef<unknown>;
  @Input() typeImageTemplate!: TemplateRef<unknown>;

  @Output() viewCharacter: EventEmitter<CharacterDetailsModel> = new EventEmitter<CharacterDetailsModel>();

  imageList: CharacterImageModel[] = [];
  currentImageIndex: number = 0;

  crop: CharacterImageCrop = CharacterImageCropper.EMPTY;

  constructor(
    private charactersService: CharactersService,
    private dialogService: DialogService
  ) {}

  ngOnInit(): void {
    this.imageList = this.charactersService.getAllImagesByCharacter(this.charmd.code, ['CARD', 'SKIN', 'ALT']);
  }

  onImageLoad(event: Event): void {
    const img = event.target as HTMLImageElement;
    const currentImage = this.imageList[this.currentImageIndex];
    if (!currentImage) {
      return;
    }
    this.crop = CharacterImageCropper.crop(
      img.naturalWidth,
      img.naturalHeight,
      currentImage,
      this.dimensions,
      this.dimensions * this.CARD_HEIGHT_ASPECT_RATIO,
      true
    );
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

  openImageDialog() {
    const imgUrl = this.imageList[this.currentImageIndex].imageUrl;
    this.dialogService.openImageDialog(this.charmd.name, imgUrl);
  }
}
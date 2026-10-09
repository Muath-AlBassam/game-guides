import { Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { CharacterDetailsModel } from '../character-image.component';
import { Constants } from '@shared/utils/constants';
import { CharacterImageCrop, CharacterImageCropper } from '@shared/utils/character-image-crop';

@Component({
  selector: 'app-character-image-card',
  templateUrl: './character-image-card.component.html',
  styleUrl: '../character-image-shared.css'
})
export class CharacterImageCardComponent {

  readonly UNKNOWN_IMG = Constants.images.unknownCharacter;
  readonly CARD_HEIGHT_ASPECT_RATIO: number = 219 / 160;

  @Input() charmd!: CharacterDetailsModel;

  @Input() styles: string = '';
  @Input() dimensions!: number;
  @Input() showElement: boolean = false;
  @Input() showType: boolean = false;
  @Input() enableViewCharacter: boolean = false;

  @Input() elementImageTemplate!: TemplateRef<unknown>;
  @Input() typeImageTemplate!: TemplateRef<unknown>;

  @Output() viewCharacter: EventEmitter<CharacterDetailsModel> = new EventEmitter<CharacterDetailsModel>();

  crop: CharacterImageCrop = CharacterImageCropper.EMPTY;

  constructor() {}

  goToCharacterDetails(): void {
    this.viewCharacter.emit(this.charmd);
  }

  onImageLoad(event: Event): void {
    const img = event.target as HTMLImageElement;
    this.crop = CharacterImageCropper.crop(
      img.naturalWidth,
      img.naturalHeight,
      this.charmd.imageCard,
      this.dimensions,
      this.dimensions * this.CARD_HEIGHT_ASPECT_RATIO,
      true
    );
  }
}

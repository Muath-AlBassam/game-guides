import { CharacterImageModel } from "@shared/models/character.model";

export interface CharacterImageCrop {
  containerWidth: number;
  containerHeight: number;
  imageWidth: number;
  imageHeight: number;
  imageLeft: number;
  imageTop: number;
}

export class CharacterImageCropper {
  
  static EMPTY: CharacterImageCrop = {
    containerWidth: 0,
    containerHeight: 0,
    imageWidth: 0,
    imageHeight: 0,
    imageLeft: 0,
    imageTop: 0,
  };
  
  static crop(
    naturalWidth: number,
    naturalHeight: number,
    image: CharacterImageModel | undefined,
    maxWidth: number,
    maxHeight: number,
    fixedContainer: boolean = false
  ): CharacterImageCrop {
    const hasCrop =
      image && image.width > 0 && image.height > 0;

    const sourceWidth = hasCrop ? image.width : naturalWidth;
    const sourceHeight = hasCrop ? image.height : naturalHeight;

    if (
      naturalWidth <= 0 ||
      naturalHeight <= 0 ||
      sourceWidth <= 0 ||
      sourceHeight <= 0 ||
      maxWidth <= 0 ||
      maxHeight <= 0
    ) {
      return this.EMPTY;
    }

    const scale = Math.min(
      maxWidth / sourceWidth,
      maxHeight / sourceHeight
    );

    return {
      containerWidth: fixedContainer ? maxWidth : sourceWidth * scale,
      containerHeight: fixedContainer ? maxHeight : sourceHeight * scale,
      imageWidth: naturalWidth * scale,
      imageHeight: naturalHeight * scale,
      imageLeft: -(hasCrop ? image.startX : 0) * scale,
      imageTop: -(hasCrop ? image.startY : 0) * scale,
    };
  }
}
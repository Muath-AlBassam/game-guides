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

  private static croppedImageCache = new Map<string, Promise<string | undefined>>();
  
  static EMPTY: CharacterImageCrop = {
    containerWidth: 0,
    containerHeight: 0,
    imageWidth: 0,
    imageHeight: 0,
    imageLeft: 0,
    imageTop: 0,
  };
  
  static getCropData(
    naturalWidth: number,
    naturalHeight: number,
    image: CharacterImageModel | undefined,
    maxWidth: number,
    maxHeight: number,
    fixedContainer: boolean = false
  ): CharacterImageCrop {
    const hasCrop = image && image.width > 0 && image.height > 0;
    const sourceWidth = hasCrop ? image.width : naturalWidth;
    const sourceHeight = hasCrop ? image.height : naturalHeight;
    if (naturalWidth <= 0 || naturalHeight <= 0 
      || sourceWidth <= 0 || sourceHeight <= 0 
      || maxWidth <= 0 || maxHeight <= 0
    ) {
      return this.EMPTY;
    }
    const scale = Math.min(maxWidth / sourceWidth, maxHeight / sourceHeight);
    return {
      containerWidth: fixedContainer ? maxWidth : sourceWidth * scale,
      containerHeight: fixedContainer ? maxHeight : sourceHeight * scale,
      imageWidth: naturalWidth * scale,
      imageHeight: naturalHeight * scale,
      imageLeft: -(hasCrop ? image.startX : 0) * scale,
      imageTop: -(hasCrop ? image.startY : 0) * scale,
    };
  }

  static getCropImageUrl(
    imageUrl: string,
    width: number,
    height: number,
    startX: number,
    startY: number
  ): Promise<string | undefined> {
    const key = `${imageUrl}|${startX}|${startY}|${width}|${height}`;
    let result = this.croppedImageCache.get(key);
    if (!result) {
      result = this.buildCropImageUrl(imageUrl, width, height, startX, startY);
      this.croppedImageCache.set(key, result);
    }
    return result;
  }

  static async buildCropImageUrl(
    imageUrl: string,
    width: number,
    height: number,
    startX: number,
    startY: number
  ): Promise<string | undefined> {
    if (!imageUrl
      || !Number.isFinite(width) || !Number.isFinite(height) 
      || !Number.isFinite(startX) || !Number.isFinite(startY)
      || width <= 0 || height <= 0
      || startX < 0 || startY < 0
    ) {
      return undefined;
    }
    const img = new Image();
    img.crossOrigin = 'anonymous';
    await new Promise<void>((resolve, reject) => {
      img.onload = () => resolve();
      img.onerror = () => reject(new Error(`Failed to load image: ${imageUrl}`));
      img.src = imageUrl;
    });
    if (startX + width > img.naturalWidth || startY + height > img.naturalHeight) {
      return undefined;
    }
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      return undefined;
    }
    ctx.drawImage(img, startX, startY, width, height, 0, 0, width, height);
    return canvas.toDataURL('image/png');
  }
}
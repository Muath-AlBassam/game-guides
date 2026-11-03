import { CharacterImageCropper } from "@shared/utils/character-image-crop";

export interface CharacterModel {
  gameCode: string;
  code: string;
  name: string;
  imagePFP: CharacterImageModel | undefined;
  imageCard: CharacterImageModel | undefined;
  element: string;
  type: string;
  rarity: string;
  enhanced: boolean;
  skillDescriptionList: string[];
}

export interface CharacterImageModel {
  gameCode: string;
  characterCode: string;
  imageUrl: string;
  type: string;
  startX: number,
  startY: number,
  width: number,
  height: number
}

// export class CharacterImageModelClass implements CharacterImageModel {
//   gameCode = '';
//   characterCode = '';
//   imageUrl = '';
//   type = '';
//   startX = 0;
//   startY = 0;
//   width = 0;
//   height = 0;

//   croppedImage: string | undefined = undefined;

//   constructor(model: CharacterImageModel) {
//     this.gameCode = model.gameCode;
//     this.characterCode = model.characterCode;
//     this.imageUrl = model.imageUrl;
//     this.type = model.type;
//     this.startX = model.startX;
//     this.startY = model.startY;
//     this.width = model.width;
//     this.height = model.height;
//     this.setCroppedImageUrl(model);
//   }

//   async setCroppedImageUrl(model: CharacterImageModel) {
//     if (model.startX && model.startY && model.width && model.height) {
//       this.croppedImage = await CharacterImageCropper.getCropImageUrl(
//         model.imageUrl, model.width, model.height, model.startX, model.startY);
//     }
//   }
// }

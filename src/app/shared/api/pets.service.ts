import { Injectable } from '@angular/core';
import { DataClientService } from '@shared/api/data-client.service';
import { Utils } from '@shared/utils/utils';
import { StoreKeys, StoreService } from '@shared/services/store.service';
import { PetModel } from '@shared/models/pet.model';

@Injectable({
  providedIn: 'root'
})
export class PetsService {

  petsList: PetModel[] = [];

  constructor(
    private dataClient: DataClientService,
    private store: StoreService
  ) {
    this.dataClient.sheetLoaded$.subscribe(res => {
      if (res) this.fetchData();
    });
  }

  private fetchData(): void {
    this.dataClient.loadData('PETS').then(pets => {
      this.petsList = pets.map((p: any) => ({
        gameCode: p.GAME_CODE,
        code: p.CODE,
        name: p.NAME,
        imageUrl: Utils.appendRepoUrl(p.IMAGE_URL),
        rarity: p.RARITY
      }));
    });
  }

  getAll(): PetModel[] {
    const gameCode = this.store.get(StoreKeys.GAME_CODE);
    return this.petsList
      .filter(p => p.gameCode == gameCode);
  }

  getOne(code: string): PetModel | undefined {
    const gameCode = this.store.get(StoreKeys.GAME_CODE);
    return this.petsList
      .find(p => p.gameCode == gameCode && p.code == code);
  }
}

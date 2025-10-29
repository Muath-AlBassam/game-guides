import { Injectable } from '@angular/core';
import { DataClientService } from './data-client.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categoriesList: any[] = [];


  constructor(private dataClient: DataClientService) {
    this.dataClient.sheetLoaded$.subscribe(res => {
      if (res) this.fetchData();
    });
  }

  fetchData() {
    this.dataClient.loadData('CATEGORY').then(cat => {
      this.categoriesList = cat.map((c: any) => ({
        gameCode: c.GAME_CODE, code: c.CODE, label: c.LABEL, order: c.ORDER
      }));
    });
  }

  getAll(gameCode: any) {
    return this.categoriesList.filter(c => c.gameCode == gameCode);
  }

  getAllOrdered(gameCode: any) {
    return this.getAll(gameCode).sort((a, b) => (a.order > b.order) ? 1 : ((b.order > a.order) ? -1 : 0));
  }
}

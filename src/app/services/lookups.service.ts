import { Injectable } from '@angular/core';
import { DataClientService } from './data-client.service';
import { Utils } from '../utils/utils';

@Injectable({
  providedIn: 'root'
})
export class LookupsService {

  lookupsList: any[] = [];

  constructor(private dataClient: DataClientService) {
    this.dataClient.sheetLoaded$.subscribe(res => {
      if (res) this.fetchData();
    });
  }

  fetchData() {
    this.dataClient.loadData('LOOKUPS').then(lookups => {
      this.lookupsList = lookups.map((l: any) => ({
        gameCode: l.GAME_CODE,
        code: l.CODE,
        label: l.LABEL,
        type: l.TYPE,
        imageUrl: Utils.appendRepoUrl(l.IMAGE_URL),
        ...(l.EXTRA_FIELDS ? JSON.parse(l.EXTRA_FIELDS) : {})
      }));
      console.log('this.lookupsList', this.lookupsList);
      
    });
  }

  getByType(gameCode: any, type: any, extraFilters: any = {}) {
    return this.lookupsList.filter(r =>
      r.gameCode == gameCode && r.type == type && Object.entries(extraFilters).every(([key, value]) => r[key] === value)
    );
  }

  getOne(gameCode: any, code: any, type: any) {
    const data = this.lookupsList.find(r => r.gameCode == gameCode && r.code == code && r.type == type);
    return data ?? { code: code, label: code };
  }
}

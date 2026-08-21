import { Injectable } from '@angular/core';
import { DataClientService } from './data-client.service';
import { Utils } from '../utils/utils';
import { StoreKeys, StoreService } from './store.service';

@Injectable({
  providedIn: 'root'
})
export class LookupsService {

  lookupsList: any[] = [];

  constructor(private dataClient: DataClientService, private store: StoreService) {
    this.dataClient.sheetLoaded$.subscribe(res => {
      if (res) this.fetchData();
    });
  }

  private fetchData() {
    this.dataClient.loadData('LOOKUPS').then(lookups => {
      this.lookupsList = lookups.map((l: any) => ({
        gameCode: l.GAME_CODE,
        code: l.CODE,
        label: l.LABEL,
        type: l.TYPE,
        imageUrl: Utils.appendRepoUrl(l.IMAGE_URL),
        ...(l.EXTRA_FIELDS ? JSON.parse(l.EXTRA_FIELDS) : {})
      }));
    });
  }

  getByType(type: any, extraFilters: any = {}) {
    const gameCode = this.store.get(StoreKeys.GAME_CODE);
    return this.lookupsList.filter(r =>
      r.gameCode == gameCode && r.type == type && Object.entries(extraFilters).every(([key, value]) => r[key] === value)
    );
  }

  getOne(code: any, type: any) {
    const gameCode = this.store.get(StoreKeys.GAME_CODE);
    const data = this.lookupsList.find(r => r.gameCode == gameCode && r.code == code && r.type == type);
    return data ?? { code: code, label: code };
  }

  getGeneralLookup(type: any, extraFilters: any = {}) {
    return this.lookupsList.filter(r =>
      r.gameCode == null && r.type == type && Object.entries(extraFilters).every(([key, value]) => r[key] === value)
    );
  }
}

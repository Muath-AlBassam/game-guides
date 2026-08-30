import { Injectable } from '@angular/core';
import { DataClientService } from './data-client.service';
import { Utils } from '../utils/utils';
import { StoreKeys, StoreService } from '../services/store.service';
import { Lookup, LookupModel } from '../models/lookup.model';
import { Constants } from '../utils/constants';

@Injectable({
  providedIn: 'root'
})
export class LookupsService {

  lookupsList: LookupModel[] = [];

  constructor(
    private dataClient: DataClientService,
    private store: StoreService
  ) {
    this.dataClient.sheetLoaded$.subscribe(res => {
      if (res) this.fetchData();
    });
  }

  private fetchData(): void {
    this.dataClient.loadData('LOOKUPS').then(lookups => {
      this.lookupsList = lookups.map((l: any) => ({
        gameCode: l.GAME_CODE,
        code: l.CODE,
        label: l.LABEL,
        type: l.TYPE,
        imageUrl: Utils.appendRepoUrl(l.IMAGE_URL),
        ...(l.EXTRA_FIELDS ? JSON.parse(l.EXTRA_FIELDS) : {})
      }));
      this.registerCSSVariables();
    });
  }

  private registerCSSVariables() {
    const withColor = this.lookupsList
      .filter(r => r.type == Constants.lookupType.ELEMENT || r.type == Constants.lookupType.RARITY);
    withColor.forEach(item => {
      const color = item['color'];
      if (typeof color === 'string') {
        document.documentElement.style.setProperty(
          `--${item.type.toLowerCase()}-${item.gameCode}-${item.code}`,
          color
        );
      }
    });
  }

  getByType(type: string, extraFilters: any = {}): LookupModel[] {
    const gameCode = this.store.get(StoreKeys.GAME_CODE);
    return this.lookupsList
      .filter(r =>
        r.gameCode == gameCode && r.type == type && Object.entries(extraFilters).every(([key, value]) => r[key] === value));
  }

  getOne(code: string, type: string): LookupModel {
    const gameCode = this.store.get(StoreKeys.GAME_CODE);
    const data = this.lookupsList
      .find(r => r.gameCode == gameCode && r.code == code && r.type == type);
    return data ?? new Lookup(code, code);
  }

  getGeneralLookup(type: string, extraFilters: any = {}) {
    return this.lookupsList
      .filter(r =>
        r.gameCode == null && r.type == type && Object.entries(extraFilters).every(([key, value]) => r[key] === value));
  }
}

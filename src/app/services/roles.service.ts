import { Injectable } from '@angular/core';
import { DataClientService } from './data-client.service';
import { Utils } from '../utils/utils';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  rolesList: any[] = [];

  constructor(private dataClient: DataClientService) {
    this.dataClient.sheetLoaded$.subscribe(res => {
      if (res) this.fetchData();
    });
  }

  fetchData() {
    this.dataClient.loadData('ROLES').then(roles => {
      this.rolesList = roles.map((r: any) => ({
        code: r.CODE, name: r.NAME, imageUrl: Utils.appendRepoUrl(r.IMAGE_URL)
      }));
    });
  }

  getAll() {
    return this.rolesList;
  }

  getOne(code: any) {
    const data = this.rolesList.find(r => r.code == code);
    return data ?? { code: code, name: code };
  }
}

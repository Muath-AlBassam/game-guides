import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StoreService } from './store.service';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import * as XLSX from 'xlsx';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataClientService {
  sheetLoaded: BehaviorSubject<string> = new BehaviorSubject<string>('');
  sheetLoaded$ = this.sheetLoaded.asObservable();

  constructor(private http: HttpClient, private store: StoreService, private router: Router) { }

  loadWorkbook() {
    console.log('fetching workbook');
    if (environment.production) {
      this.loadRemoteWorkbook();
    } else if (this.store.get("remoteWorkbookMap") == null) {
      this.loadLocalWorkbook();
    }
  }

  private loadLocalWorkbook() {
    this.http.get('assets/Game Guides DB.xlsx', { responseType: 'arraybuffer' })
      .subscribe(arrayBuffer => {
        const workbook = XLSX.read(arrayBuffer, { type: 'array' });
        this.store.set('localWorkbook', workbook);
        this.sheetLoaded.next('success');
      });
  }

  private loadRemoteWorkbook() {
    this.http.get<any>(environment.googleSheetApiURL).subscribe({
      next: (data) => {
        const remoteWorkbookMap = new Map<string, any[]>();
        data.sheets.forEach((sheet: any) => {
          const sheetName = sheet.properties.title;
          const sheetData = sheet.data[0].rowData || [];
          const jsonData = this.convertSheetDataToJSON(sheetData);
          remoteWorkbookMap.set(sheetName, jsonData);
        });
        this.store.set('remoteWorkbookMap', remoteWorkbookMap);
        this.sheetLoaded.next('success');
      },
      error: (err) => {
        this.store.set('error', { code: err?.error?.error?.code, message: err?.error?.error?.message });
        this.sheetLoaded.next('error');
        this.router.navigate(['/error']);
      }
    });
  }

  private convertSheetDataToJSON(rowData: any[]) {
    if (!rowData || rowData.length === 0) {
      return [];
    }
    // Extract headers (first row)
    const headers = rowData[0].values.map((cell: any) => cell.effectiveValue?.stringValue || "");
    // Map remaining rows into objects
    return rowData.slice(1).map(row => {
      let obj: any = {};
      row.values.forEach((cell: any, index: any) => {
        obj[headers[index]] = cell.effectiveValue?.stringValue ??
          cell.effectiveValue?.numberValue ??
          cell.effectiveValue?.boolValue ??
          null;
      });
      return obj;
    });
  }

  async loadData(sheetName: string | any[]) {
    if (sheetName instanceof Array) {
      let resMap = new Map([]);
      sheetName.forEach(name => {
        resMap.set(name, this.getSheetData(name));
      });
      return resMap;
    } else {
      return this.getSheetData(sheetName);
    }
  }

  private getSheetData(sheetName: string) {
    if (this.store.get("remoteWorkbookMap") != null) {
      console.log('fetching data from remote sheet', sheetName);
      const storeData = this.store.get("remoteWorkbookMap");
      if (storeData) {
        return storeData.get(sheetName);
      } else {
        return [];
      }
    } else {
      console.log('fetching data from local sheet', sheetName);
      const storeData = this.store.get("localWorkbook");
      if (storeData) {
        const worksheet = storeData.Sheets[sheetName];
        return XLSX.utils.sheet_to_json(worksheet);
      } else {
        return [];
      }
    }
  }
}

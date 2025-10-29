// // src/app/app-init.service.ts
// import { Injectable } from '@angular/core';
// import { environment } from '../environments/environment';
// import * as XLSX from 'xlsx';
// import { StoreService } from './services/store.service';

// @Injectable({ providedIn: 'root' })
// export class AppInitService {

//   constructor(private store: StoreService) {}

//   loadAppConfig(): Promise<void> {
//     return this.loadWorkbook();
//   }

//   private async loadWorkbook() {
//     console.log('fetching workbook');
//     if (environment.production) {
//       await this.loadRemoteWorkbook();
//     }
//     // fetch local workbook if failed to fetch remote workbook or in case local env
//     if (this.store.get("remoteWorkbookMap") == null) {
//       await this.loadLocalWorkbook();
//     }
//   }

//   private async loadLocalWorkbook() {
//     const sheet = await fetch('assets/Game Guides DB.xlsx');
//     const arrayBuffer = await sheet.arrayBuffer();
//     this.store.set("localWorkbook", XLSX.read(arrayBuffer, { type: 'array' }));
//   }

//   private async loadRemoteWorkbook() {
//     try {
//       const url = environment.googleSheetApiURL;
//       const response = await fetch(url);
//       const data = await response.json();

//       let remoteWorkbookMap = new Map([]);
//       data.sheets.forEach((sheet: any) => {
//         const sheetName = sheet.properties.title;
//         const sheetData = sheet.data[0].rowData || [];
//         const jsonData = this.convertSheetDataToJSON(sheetData);
//         remoteWorkbookMap.set(sheetName, jsonData);
//       });
//       this.store.set("remoteWorkbookMap", remoteWorkbookMap);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       //remoteWorkbookMap = null;
//     }
//   }

//   private convertSheetDataToJSON(rowData: any[]) {
//     if (!rowData || rowData.length === 0) {
//       return [];
//     }
//     // Extract headers (first row)
//     const headers = rowData[0].values.map((cell: any) => cell.effectiveValue?.stringValue || "");
//     // Map remaining rows into objects
//     return rowData.slice(1).map(row => {
//       let obj: any = {};
//       row.values.forEach((cell: any, index: any) => {
//         obj[headers[index]] = cell.effectiveValue?.stringValue ??
//           cell.effectiveValue?.numberValue ??
//           cell.effectiveValue?.boolValue ??
//           null;
//       });
//       return obj;
//     });
//   }
// }

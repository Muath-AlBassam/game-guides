import { Injectable } from "@angular/core";

export const StoreKeys = {
  REMOTE_DB: 'remoteWorkbookMap',
  LOCAL_DB: 'localWorkbook',
  GAME_CODE: 'gameCode',
  VIEW_TYPE: 'viewType',
  ERROR: 'error'
}

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  // private readonly STORAGE_KEY = 'storeValues';

  state = new Map([]);

  // constructor() {
  //   const storedValues = localStorage.getItem(this.STORAGE_KEY);
  //   if (storedValues) {
  //     this.state = new Map<string, any>(JSON.parse(storedValues));
  //   }
  // }

  set(key: string, value: any) {
    this.state.set(key, value);
    // this.save();
  }

  get(key: string): any {
    return this.state.get(key);
  }

  delete(key: string) {
    if (this.state.has(key)) {
      this.state.delete(key);
    }
  }

  // private save(): void {
  //   localStorage.setItem(
  //     this.STORAGE_KEY,
  //     JSON.stringify(Array.from(this.state.entries()))
  //   );
  // }
}
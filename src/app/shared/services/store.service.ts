import { Injectable } from "@angular/core";

export const StoreKeys = {
  REMOTE_DB: 'remoteWorkbookMap',
  LOCAL_DB: 'localWorkbook',
  GAME_CODE: 'gameCode',
  ERROR: 'error'
}

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  state = new Map([]);

  set(key: string, value: any) {
    this.state.set(key, value);
  }

  get(key: string): any {
    return this.state.get(key);
  }

  delete(key: string) {
    if (this.state.has(key)) {
      this.state.delete(key);
    }
  }
}
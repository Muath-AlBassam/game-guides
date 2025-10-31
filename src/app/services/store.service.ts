import { Injectable } from "@angular/core";

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
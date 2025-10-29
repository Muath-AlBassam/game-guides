import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusService {

  toggleSidebar: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  toggleSidebar$ = this.toggleSidebar.asObservable();

  constructor() { }
}

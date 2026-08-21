import { Component, OnInit } from '@angular/core';
import { StoreKeys, StoreService } from '../../services/store.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrl: './error.component.css'
})
export class ErrorComponent implements OnInit {

  errorCode: any = '500';
  errorMessage: any = 'Unable to load data';

  constructor(private storeService: StoreService) { }

  ngOnInit(): void {
    this.loadRouteMessage();
  }

  loadRouteMessage() {
    const error = this.storeService.get(StoreKeys.ERROR);
    if (error != null && error.code != null && error.message != null) {
      this.errorCode = error.code;
      this.errorMessage = error.message;
    }
    this.storeService.delete(StoreKeys.ERROR);
  }

  reload() {
    window.location.href = '/';
  }
}

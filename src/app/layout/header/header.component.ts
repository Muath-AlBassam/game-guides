import { Component, OnInit } from '@angular/core';
import { BusService } from '../../services/bus.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  constructor(private busService: BusService) { }

  ngOnInit(): void { }

  toggleSidebar() {
    this.busService.toggleSidebar.next(true);
  }
}

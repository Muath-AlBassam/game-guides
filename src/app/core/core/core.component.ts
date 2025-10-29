import { Component, OnInit } from '@angular/core';
import { BusService } from '../../services/bus.service';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrl: './core.component.css'
})
export class CoreComponent implements OnInit {

  sidebarActive: boolean = false;

  constructor(private busService: BusService) { }

  ngOnInit(): void {
    this.busService.toggleSidebar$.subscribe(res => { if(res) this.sidebarActive = !this.sidebarActive });
  }

}

import { Component, OnInit } from '@angular/core';
import { BusService } from '../../shared/services/bus.service';
import { GamesService } from '../../shared/api/games.service';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrl: './core.component.css'
})
export class CoreComponent implements OnInit {

  sidebarActive: boolean = false;
  backgroundImage: string = '';

  constructor(
    private busService: BusService,
    private gamesService: GamesService
  ) {}

  ngOnInit(): void {
    this.busService.toggleSidebar$.subscribe((res: boolean) => {
      if (res) {
        this.sidebarActive = !this.sidebarActive
      }
    });
    this.busService.gameChange$.subscribe((res: string) => {
      if (res) {
        this.onGameChange();
      }
    });
  }

  onGameChange(): void {
    const game = this.gamesService.getActive();
    this.backgroundImage = game ? game.backgroundUrl : '';
  }
}

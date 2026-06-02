import { Component, OnInit } from '@angular/core';
import { GamesService } from '../../services/games.service';
import { Utils } from '../../utils/utils';
import { RouteService } from '../../services/route.service';

@Component({
  selector: 'app-game-header',
  templateUrl: './game-header.component.html',
  styleUrl: './game-header.component.css'
})
export class GameHeaderComponent implements OnInit {

  gameCode: any = null;
  activeGame: any = null;

  constructor(private routeService: RouteService, private gameService: GamesService) { }

  async ngOnInit(): Promise<void> {
    this.gameCode = await this.routeService.getActiveGame();
    this.loadGame();
  }

  loadGame() {
    this.activeGame = this.gameService.getOne(this.gameCode);
  }

  isMobile(): boolean {
    return Utils.isMobile();
  }
}

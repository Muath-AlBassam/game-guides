import { Component, OnInit } from '@angular/core';
import { GamesService } from '../../services/games.service';
import { Utils } from '../../utils/utils';

@Component({
  selector: 'app-game-header',
  templateUrl: './game-header.component.html',
  styleUrl: './game-header.component.css'
})
export class GameHeaderComponent implements OnInit {

  activeGame: any = null;

  constructor(private gameService: GamesService) { }

  ngOnInit(): void {
    this.loadGame();
  }

  loadGame() {
    this.activeGame = this.gameService.getActive();
  }

  isMobile(): boolean {
    return Utils.isMobile();
  }
}

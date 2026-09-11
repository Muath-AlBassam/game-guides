import { Component, OnInit } from '@angular/core';
import { GamesService } from '@shared/api/games.service';
import { GameModel } from '@shared/models/game.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  games: GameModel[] = [];

  constructor(private gamesService: GamesService) { }

  ngOnInit(): void {    
    this.loadGames();
  }

  loadGames() {
    this.games = this.gamesService.getAll();
  }

}

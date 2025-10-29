import { Component, OnInit } from '@angular/core';
import { GamesService } from '../../services/games.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  games: any[] = [];

  constructor(private gamesService: GamesService) { }

  ngOnInit(): void {    
    this.loadGames();
  }

  loadGames() {
    this.games = this.gamesService.getAll();
  }

}

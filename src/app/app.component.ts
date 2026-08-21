import { Component, OnInit } from '@angular/core';
import { DataClientService } from './services/data-client.service';
import { GamesService } from './services/games.service';
import { BuildsService } from './services/builds.service';
import { CharactersService } from './services/characters.service';
import { CombosService } from './services/combos.service';
import { NotesService } from './services/notes.service';
import { PetsService } from './services/pets.service';
import { SetsService } from './services/sets.service';
import { TeamsService } from './services/teams.service';
import { WeaponsService } from './services/weapons.service';
import { LookupsService } from './services/lookups.service';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';
import { Constants } from './utils/constants';
import { StoreKeys, StoreService } from './services/store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  gamesList: string[] = [];
  isLoading: boolean = true;

  constructor(
    private dataClient: DataClientService,
    private gamesService: GamesService,
    private lookupsService: LookupsService,
    private notesService: NotesService,
    private combosService: CombosService,
    private charactersService: CharactersService,
    private weaponsService: WeaponsService,
    private setsService: SetsService,
    private buildsService: BuildsService,
    private petsService: PetsService,
    private teamsService: TeamsService,
    private router: Router,
    private store: StoreService
  ) { }

  ngOnInit(): void {
    this.loadData();
    this.setActiveGame();
  }

  loadData() {
    this.dataClient.loadWorkbook();
    this.dataClient.sheetLoaded$.subscribe(res => {
      if (res != '') this.isLoading = false;
    });
  }

  setActiveGame() {
    this.gamesList = Object.values(Constants.games);
    this.router.events
      .pipe(filter((event): event is NavigationStart => event instanceof NavigationStart))
      .subscribe(event => {
        const gameCode = event.url.split('/')[1];
        if (this.gamesList.includes(gameCode)) {
          this.store.set(StoreKeys.GAME_CODE, gameCode);
        } else {
          this.store.delete(StoreKeys.GAME_CODE);
        }
      });
  }
}

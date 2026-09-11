import { Component, OnInit } from '@angular/core';
import { DataClientService } from '@shared/api/data-client.service';
import { GamesService } from '@shared/api/games.service';
import { BuildsService } from '@shared/api/builds.service';
import { CharactersService } from '@shared/api/characters.service';
import { NotesService } from '@shared/api/notes.service';
import { PetsService } from '@shared/api/pets.service';
import { SetsService } from '@shared/api/sets.service';
import { TeamsService } from '@shared/api/teams.service';
import { WeaponsService } from '@shared/api/weapons.service';
import { LookupsService } from '@shared/api/lookups.service';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';
import { Constants } from '@shared/utils/constants';
import { StoreKeys, StoreService } from '@shared/services/store.service';
import { BusService } from '@shared/services/bus.service';

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
    private charactersService: CharactersService,
    private weaponsService: WeaponsService,
    private setsService: SetsService,
    private buildsService: BuildsService,
    private petsService: PetsService,
    private teamsService: TeamsService,
    private router: Router,
    private store: StoreService,
    private busService: BusService,
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
          this.busService.gameChange.next(gameCode);
        } else {
          this.store.delete(StoreKeys.GAME_CODE);
          this.busService.gameChange.next('1');
        }
      });
  }
}

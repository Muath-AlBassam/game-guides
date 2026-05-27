import { Component, OnInit } from '@angular/core';
import { DataClientService } from './services/data-client.service';
import { GamesService } from './services/games.service';
import { BuildsService } from './services/builds.service';
import { CategoryService } from './services/category.service';
import { CharactersService } from './services/characters.service';
import { CombosService } from './services/combos.service';
import { NotesService } from './services/notes.service';
import { PetsService } from './services/pets.service';
import { SetsService } from './services/sets.service';
import { TeamsService } from './services/teams.service';
import { WeaponsService } from './services/weapons.service';
import { LookupsService } from './services/lookups.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  isLoading: boolean = true;

  constructor(
    private dataClient: DataClientService,
    private buildsService: BuildsService,
    private categoryService: CategoryService,
    private charactersService: CharactersService,
    private combosService: CombosService,
    private gamesService: GamesService,
    private lookupsService: LookupsService,
    private notesService: NotesService,
    private petsService: PetsService,
    private setsService: SetsService,
    private teamsService: TeamsService,
    private weaponsService: WeaponsService,
  ) { }

  ngOnInit(): void {
    this.dataClient.loadWorkbook();
    this.dataClient.sheetLoaded$.subscribe(res => {
      if (res != '') this.isLoading = false;
    });
  }
}

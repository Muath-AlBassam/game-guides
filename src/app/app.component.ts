import { Component, OnInit } from '@angular/core';
import { DataClientService } from './services/data-client.service';
import { GamesService } from './services/games.service';
import { BuildsService } from './services/builds.service';
import { ButtonsService } from './services/buttons.service';
import { CategoryService } from './services/category.service';
import { CharactersService } from './services/characters.service';
import { CombosService } from './services/combos.service';
import { ElementsService } from './services/elements.service';
import { NotesService } from './services/notes.service';
import { PetsService } from './services/pets.service';
import { RaritiesService } from './services/rarities.service';
import { RolesService } from './services/roles.service';
import { SetsService } from './services/sets.service';
import { TeamsService } from './services/teams.service';
import { TypesService } from './services/types.service';
import { WeaponsService } from './services/weapons.service';

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
    private buttonsService: ButtonsService,
    private categoryService: CategoryService,
    private charactersService: CharactersService,
    private combosService: CombosService,
    private elementsService: ElementsService,
    private gamesService: GamesService,
    private notesService: NotesService,
    private petsService: PetsService,
    private raritiesService: RaritiesService,
    private rolesService: RolesService,
    private setsService: SetsService,
    private teamsService: TeamsService,
    private typesService: TypesService,
    private weaponsService: WeaponsService,
  ) { }

  ngOnInit(): void {
    this.dataClient.loadWorkbook();
    this.dataClient.sheetLoaded$.subscribe(res => {
      if (res) this.isLoading = false;
    });
  }
}

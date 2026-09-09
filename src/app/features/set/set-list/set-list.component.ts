import { Component, OnInit } from '@angular/core';
import { SetsService } from '../../../shared/api/sets.service';
import { GameUtils } from '../../../shared/utils/game-utils';
import { Utils } from '../../../shared/utils/utils';
import { GamesService } from '../../../shared/api/games.service';
import { SetModel } from '../../../shared/models/set.model';
import { ListByCategoryModel } from '../../../shared/models/list-by-category.model';
import { LookupModel } from '../../../shared/models/lookup.model';
import { LookupsService } from '../../../shared/api/lookups.service';
import { Constants } from '../../../shared/utils/constants';
import { BreadcrumbsService } from '../../../shared/services/breadcrumbs.service';

@Component({
  selector: 'app-set-list',
  templateUrl: './set-list.component.html',
  styleUrl: './set-list.component.css'
})
export class SetListComponent implements OnInit {

  allSets: SetModel[] = [];
  groupedSetsList: ListByCategoryModel<SetModel>[] = [];
  categories: LookupModel[] = [];
  
  count: number = 0;
  showCategoryLabel: boolean = false;
  setsLabel = '';
  searchValue: string = '';

  constructor(
    private setsService: SetsService,
    private gamesService: GamesService,
    private lookupsService: LookupsService,
    private breadcrumbsService: BreadcrumbsService,
  ) {}

  ngOnInit(): void {
    this.breadcrumbsService.setsList();
    const gameCode = this.gamesService.getActive()!.code;
    this.setsLabel = GameUtils.getSetsLabel(gameCode);
    this.loadSets();
    this.loadCategories();
    this.mapToCategoryList(this.allSets);
  }

  loadSets(): void {
    this.allSets = this.setsService.getAll();
  }

  loadCategories(): void {
    this.categories = this.lookupsService.getByType(Constants.lookupType.SET_CATEGORY);
  }

  onTextChange(val: string): void {
    this.searchValue = val;
    this.filterList();
  }

  filterList(): void {
    const filteredList: SetModel[] = this.allSets.filter(s => {
      return s.name.toLowerCase().includes(this.searchValue.trim().toLowerCase());
    });
    this.count = filteredList.length;
    this.mapToCategoryList(filteredList);
  }

  mapToCategoryList(setList: SetModel[]): void {
    this.groupedSetsList = Utils.groupByLookup(setList, this.categories, 'category')
    this.showCategoryLabel = this.groupedSetsList.length > 1;
  }
}

import { Component, OnInit } from '@angular/core';
import { SetsService } from '../../../shared/api/sets.service';
import { GameUtils } from '../../../shared/utils/game-utils';
import { Utils } from '../../../shared/utils/utils';
import { GamesService } from '../../../shared/api/games.service';
import { SetModel } from '../../../shared/models/set.model';
import { ListByCategoryModel } from '../../../shared/models/list-by-category.model';

@Component({
  selector: 'app-set-list',
  templateUrl: './set-list.component.html',
  styleUrl: './set-list.component.css'
})
export class SetListComponent implements OnInit {

  allSets: SetModel[] = [];
  setByTypeList: ListByCategoryModel<SetModel>[] = [];
  count: number = 0;
  showCategoryLabel: boolean = false;

  setsLabel = '';
  // search
  textValue: string = '';

  constructor(
    private setsService: SetsService,
    private gamesService: GamesService
  ) {}

  ngOnInit(): void {
    const gameCode = this.gamesService.getActive()!.code;
    this.setsLabel = GameUtils.getSetsLabel(gameCode);
    this.loadSets();
    this.mapToTypeList(this.allSets);
  }

  loadSets(): void {
    this.allSets = this.setsService.getAll();
    const distinctTypes = new Set(this.allSets.map(set => set.type));
    this.showCategoryLabel = distinctTypes.size > 1;
  }

  onTextChange(val: string): void {
    this.textValue = val;
    this.filterList();
  }

  filterList(): void {
    const filteredList: SetModel[] = this.allSets.filter(s => {
      return s.name.toLowerCase().includes(this.textValue.trim().toLowerCase());
    });
    this.count = filteredList.length;
    this.mapToTypeList(filteredList);
  }

  mapToTypeList(setList: SetModel[]): void {
    const setByType: Map<string, SetModel[]> = Utils.groupBy(setList, 'type');
    this.setByTypeList = Array.from(
      setByType,
      ([type, sets]) => ({ label: type, list: sets })
    );
  }
}

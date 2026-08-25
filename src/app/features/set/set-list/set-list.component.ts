import { Component, OnInit } from '@angular/core';
import { SetsService } from '../../../shared/api/sets.service';
import { GameUtils } from '../../../shared/utils/game-utils';
import { Utils } from '../../../shared/utils/utils';
import { GamesService } from '../../../shared/api/games.service';
import { SetModel } from '../../../shared/models/set.model';

interface SetByTypeModel {
  type: string;
  sets: SetModel[];
}

@Component({
  selector: 'app-set-list',
  templateUrl: './set-list.component.html',
  styleUrl: './set-list.component.css'
})
export class SetListComponent implements OnInit {

  allSets: SetModel[] = [];
  setByType: Map<string, SetModel[]> = new Map();
  setByTypeList: SetByTypeModel[] = [];
  count: number = 0;

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
    this.formatSetList(this.allSets);
  }

  loadSets(): void {
    this.allSets = this.setsService.getAll();
  }

  onTextChange(val: string): void {
    this.textValue = val;
    this.filterList();
  }

  filterList(): void {
    this.count = 0;
    let filtered = this.allSets.filter(s => {
      return s.name.toLowerCase().includes(this.textValue.toLowerCase());
    });
    this.formatSetList(filtered);
  }

  formatSetList(setList: SetModel[]): void {
    this.setByType = Utils.groupBy(setList, 'type');
    this.setByType.forEach((v, k) => this.count += v.length);
    this.setByTypeList = Array.from(
      this.setByType,
      ([type, sets]) => ({ type, sets })
    );
  }
}

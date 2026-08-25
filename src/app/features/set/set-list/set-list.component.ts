import { Component, OnInit } from '@angular/core';
import { SetsService } from '../../../shared/api/sets.service';
import { GameUtils } from '../../../shared/utils/game-utils';
import { Utils } from '../../../shared/utils/utils';
import { GamesService } from '../../../shared/api/games.service';

@Component({
  selector: 'app-set-list',
  templateUrl: './set-list.component.html',
  styleUrl: './set-list.component.css'
})
export class SetListComponent implements OnInit {

  allSets: any[] = [];
  setByType: Map<any, any> = new Map();
  setByTypeList: any[] = [];
  count: number = 0;

  setsLabel = '';
  // search
  textValue: any = '';

  constructor(
    private setsService: SetsService,
    private gamesService: GamesService
  ) {}

  ngOnInit(): void {
    const gameCode = this.gamesService.getActive().code;
    this.setsLabel = GameUtils.getSetsLabel(gameCode);
    this.loadSets();
    this.formatSetList(this.allSets);
  }

  loadSets() {
    this.allSets = this.setsService.getAll();
  }

  onTextChange(val: string) {
    this.textValue = val;
    this.filterList();
  }

  filterList() {
    this.count = 0;
    let filtered = this.allSets.filter(s => {
      return s.name.toLowerCase().includes(this.textValue.toLowerCase());
    });
    this.formatSetList(filtered);
  }

  formatSetList(setList: any[]) {
    this.setByType = Utils.groupBy(setList, 'type');
    this.setByType.forEach((v, k) => this.count += v.length);
    this.setByTypeList = Array.from(this.setByType);
  }
}

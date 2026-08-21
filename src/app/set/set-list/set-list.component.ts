import { Component, OnInit } from '@angular/core';
import { SetsService } from '../../services/sets.service';
import { GameUtils } from '../../utils/game-utils';
import { Utils } from '../../utils/utils';
import { GamesService } from '../../services/games.service';

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

  constructor(private setsService: SetsService, private gamesService: GamesService) { }

  ngOnInit(): void {
    const gameCode = this.gamesService.getActive().code;
    this.setsLabel = GameUtils.getSetsLabel(gameCode);
    this.loadSets();
  }

  loadSets() {
    this.allSets = this.setsService.getAll();
    this.setByType = Utils.groupBy(this.allSets, 'type');
    this.setByType.forEach((v, k) => this.count += v.length);
    this.setByTypeList = Array.from(this.setByType);
  }

  onTextChange(val: string) {
    this.textValue = val;
    this.filterList();
  }

  filterList() {
    let filtered = this.allSets.filter(s => {
      return s.name.toLowerCase().includes(this.textValue.toLowerCase());
    });
    this.count = 0;
    this.setByType = Utils.groupBy(filtered, 'type');
    this.setByType.forEach((v, k) => this.count += v.length);
    this.setByTypeList = Array.from(this.setByType);
  }
}

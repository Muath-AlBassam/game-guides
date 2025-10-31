import { Component, OnInit } from '@angular/core';
import { SetsService } from '../../services/sets.service';
import { RouteService } from '../../services/route.service';
import { GameUtils } from '../../utils/game-utils';
import { Utils } from '../../utils/utils';

@Component({
  selector: 'app-set-list',
  templateUrl: './set-list.component.html',
  styleUrl: './set-list.component.css'
})
export class SetListComponent implements OnInit {

  gameCode: any = null;
  allSets: any[] = [];
  setByType: Map<any, any> = new Map();
  count: number = 0;

  setsLabel = '';
  // search
  textValue: any = '';

  constructor(private routeService: RouteService, private setsService: SetsService) { }

  async ngOnInit(): Promise<void> {
    this.gameCode = await this.routeService.getActiveGame();
    this.setsLabel = GameUtils.getSetsLabel(this.gameCode);
    this.loadSets();
  }

  loadSets() {
    this.allSets = this.setsService.getAll(this.gameCode);
    this.setByType = Utils.groupBy(this.allSets, 'type');
    this.setByType.forEach((v, k) => this.count += v.length);
  }

  getMapAsList() {
    return Array.from(this.setByType);
  }

  onTextChange(val: string) {
    this.textValue = val;
    this.filterList();
  }

  filterList() {
    let filtered = this.allSets.filter(s => {
      return s.name.toLowerCase().includes(this.textValue.toLowerCase());
    });
    this.setByType = Utils.groupBy(filtered, 'type');
    this.count = 0;
    this.setByType.forEach((v, k) => this.count += v.length);
  }
}

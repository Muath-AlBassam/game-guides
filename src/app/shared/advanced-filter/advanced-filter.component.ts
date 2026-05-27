import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RouteService } from '../../services/route.service';
import { LookupsService } from '../../services/lookups.service';
import { Constants } from '../../utils/constants';

@Component({
  selector: 'app-advanced-filter',
  templateUrl: './advanced-filter.component.html',
  styleUrl: './advanced-filter.component.css'
})
export class AdvancedFilterComponent implements OnInit {

  @Input() rarityFilter: boolean = false;
  @Input() elementFilter: boolean = false;
  @Input() typeFilter: boolean = false;
  @Input() resetButton: boolean = false;
  @Input() placeholder: string = 'Search...';

  @Output() textChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() rarityChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() elementChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() typeChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() reset: EventEmitter<void> = new EventEmitter<void>();

  gameCode: any = null;
  textValue: any = '';
  rarityValue: any = '';
  elementValue: any = '';
  typeValue: any = '';
  rarities: any[] = [];
  elements: any[] = [];
  types: any[] = [];

  constructor(private routeService: RouteService, private lookupsService: LookupsService) { }

  async ngOnInit(): Promise<void> {
    this.gameCode = await this.routeService.getActiveGame();
    this.loadFilters();
  }

  loadFilters() {
    if (this.rarityFilter) {
      this.rarities = this.lookupsService.getByType(this.gameCode, Constants.lookupType.RARITY);
    }
    if (this.elementFilter) {
      this.elements = this.lookupsService.getByType(this.gameCode, Constants.lookupType.ELEMENT, { isAlt: false });
    }
    if (this.typeFilter) {
      this.types = this.lookupsService.getByType(this.gameCode, Constants.lookupType.TYPE);
    }
  }

  onTextChange(val: string) {
    this.textValue = val;
    this.textChange.emit(val);
  }

  onRarityChange(val: string) {
    this.rarityValue = val;
    this.rarityChange.emit(val);
  }

  onElementChange(val: string) {
    this.elementValue = val;
    this.elementChange.emit(val);
  }

  onTypeChange(val: string) {
    this.typeValue = val;
    this.typeChange.emit(val);
  }

  onReset() {
    this.textValue = '';
    this.rarityValue = '';
    this.elementValue = '';
    this.typeValue = '';
    this.reset.emit();
  }
}

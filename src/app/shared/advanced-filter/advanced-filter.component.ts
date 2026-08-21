import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Input() tagFilter: boolean = false;
  @Input() resetButton: boolean = false;
  @Input() placeholder: string = 'Search...';

  @Output() textChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() rarityChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() elementChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() typeChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() tagChange: EventEmitter<any[]> = new EventEmitter<any[]>();
  @Output() reset: EventEmitter<void> = new EventEmitter<void>();

  textValue: any = '';

  rarityValue: any = '';
  rarities: any[] = [];

  elementValue: any = '';
  elements: any[] = [];

  typeValue: any = '';
  types: any[] = [];

  tagValue: any[] = [];
  tags: any[] = [];

  constructor(private lookupsService: LookupsService) { }

  ngOnInit(): void {
    this.loadFilters();
  }

  loadFilters() {
    if (this.rarityFilter) {
      this.rarities = this.lookupsService.getByType(Constants.lookupType.RARITY);
    }
    if (this.elementFilter) {
      this.elements = this.lookupsService.getByType(Constants.lookupType.ELEMENT, { isAlt: false });
    }
    if (this.typeFilter) {
      this.types = this.lookupsService.getByType(Constants.lookupType.TYPE);
    }
    if (this.tagFilter) {
      this.tags = this.lookupsService.getByType(Constants.lookupType.TAG);
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
    let values = [];
    if (val) {
      values.push(val);
    }
    const subElements: any[] = this.lookupsService.getByType(Constants.lookupType.ELEMENT, { isAlt: true, baseElementCode: val });
    if (subElements) {
      subElements.forEach(se => values.push(se.code));
    }
    this.elementChange.emit(values);
  }

  onTypeChange(val: string) {
    this.typeValue = val;
    this.typeChange.emit(val);
  }

  onTagChange(tags: any[]) {
    if (tags == null) tags = [];
    this.tagValue = tags;
    this.tagChange.emit(tags);
  }

  onReset() {
    this.textValue = '';
    this.rarityValue = '';
    this.elementValue = '';
    this.typeValue = '';
    this.tagValue = [];
    this.reset.emit();
  }
}

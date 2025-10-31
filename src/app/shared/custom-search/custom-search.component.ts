import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RaritiesService } from '../../services/rarities.service';
import { ElementsService } from '../../services/elements.service';
import { TypesService } from '../../services/types.service';
import { RouteService } from '../../services/route.service';

@Component({
  selector: 'app-custom-search',
  templateUrl: './custom-search.component.html',
  styleUrl: './custom-search.component.css'
})
export class CustomSearchComponent implements OnInit {

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

  constructor(private routeService: RouteService, private raritiesService: RaritiesService, private elementsService: ElementsService, private typesService: TypesService) { }

  async ngOnInit(): Promise<void> {
    this.gameCode = await this.routeService.getActiveGame();
    this.loadFilters();
  }

  loadFilters() {
    if (this.rarityFilter) {
      this.rarities = this.raritiesService.getAll(this.gameCode);
    }
    if (this.elementFilter) {
      this.elements = this.elementsService.getAll(this.gameCode);
    }
    if (this.typeFilter) {
      this.types = this.typesService.getAll(this.gameCode);
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

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {

  @Input() query: string = '';
  @Input() placeholder: string = 'Search';
  @Output() textChange: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void { }

  emitChange(event: any) {
    let value = typeof event === 'string' ? event : (event.target as HTMLInputElement).value;
    this.query = value;
    this.textChange.emit(value);
  }
}

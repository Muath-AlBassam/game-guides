import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Utils } from '../../utils/utils';
import { BrowserModule } from "@angular/platform-browser";

@Component({
  selector: 'app-button-group',
  templateUrl: './button-group.component.html',
  styleUrl: './button-group.component.css',
})
export class ButtonGroupComponent implements OnInit {

  @Input() buttonList: any[] = [];
  @Input() imageLabel: string = 'imageUrl';
  @Input() valueLabel: string = 'code';
  @Input() titleLabel: string = 'name';
  @Input() showAllButton: boolean = true;

  @Input() value: string = '';
  @Output() valueChange: EventEmitter<any> = new EventEmitter<any>();

  uuid = Utils.generateUUID();;

  constructor() { }

  ngOnInit(): void { }

  emitChange(value: any) {
    this.valueChange.emit(value);
  }
}

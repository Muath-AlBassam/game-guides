import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LookupsService } from '../../../shared/api/lookups.service';
import { Constants } from '../../../shared/utils/constants';
import { NotesService } from '../../../shared/api/notes.service';

@Component({
  selector: 'app-character-combos',
  templateUrl: './character-combos.component.html',
  styleUrl: './character-combos.component.css'
})
export class CharacterCombosComponent implements OnInit {

  @Input() character!: string;
  @Output() hasCombos: EventEmitter<boolean> = new EventEmitter<boolean>();

  combos: any[] = [];

  constructor(
    private notesServices: NotesService,
    private lookupsService: LookupsService
  ) {}

  ngOnInit(): void {
    this.loadCombos();
  }

  loadCombos(): void {
    const noteList: { text: string }[] = this.notesServices.getAllByOwnerTypeAndCode('CHARACTER', this.character);
    if (noteList) {
      this.combos = noteList.map((combo: any) => {
        return combo.text.split(',').map((btn: any) => {
          return { code: btn, imageUrl: this.getButtonImage(btn) }
        })
      });
    }
    this.hasCombos.emit(this.combos != null && this.combos.length > 0);
  }

  getButtonImage(buttonCode: string): string {
    return this.lookupsService.getOne(buttonCode, Constants.lookupType.BUTTON).imageUrl;
  }
}
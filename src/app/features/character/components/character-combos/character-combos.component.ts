import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LookupsService } from '@shared/api/lookups.service';
import { Constants } from '@shared/utils/constants';
import { NotesService } from '@shared/api/notes.service';
import { NoteModel } from '@shared/models/note.model';
import { LookupModel } from '@shared/models/lookup.model';

@Component({
  selector: 'app-character-combos',
  templateUrl: './character-combos.component.html',
  styleUrl: './character-combos.component.css'
})
export class CharacterCombosComponent implements OnInit {

  @Input() character!: string;
  @Output() hasCombos: EventEmitter<boolean> = new EventEmitter<boolean>();

  buttons: LookupModel[] = [];
  combos: any[] = [];

  constructor(
    private notesServices: NotesService,
    private lookupsService: LookupsService
  ) {}

  ngOnInit(): void {
    this.loadButtons();
    this.loadCombos();
  }

  loadButtons(): void {
    this.buttons = this.lookupsService.getByType(Constants.lookupType.BUTTON);
  }

  loadCombos(): void {
    const noteList: NoteModel[] = this.notesServices
      .getAllByOwnerTypeAndCode('CHARACTER', this.character)
      .filter(n => n.title == 'COMBO');
    if (noteList) {
      this.combos = noteList.map((combo: any) => {
        return combo.text.split(',').map((btnCode: any) => {
          const btnmd = this.buttons.find(b => b.code == btnCode)!;
          return { code: btnCode, title: btnmd.label, imageUrl: btnmd.imageUrl }
        })
      });
    }
    this.hasCombos.emit(this.combos != null && this.combos.length > 0);
  }
}
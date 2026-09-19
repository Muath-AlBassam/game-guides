import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { CharacterDetailsModel } from '../character-image.component';
import { Constants } from '@shared/utils/constants';
import { Utils } from '@shared/utils/utils';
import { NoteModel } from '@shared/models/note.model';
import { NotesService } from '@shared/api/notes.service';
import { TextUtils } from '@shared/utils/text-utils';

@Component({
  selector: 'app-character-image-info',
  templateUrl: './character-image-info.component.html',
  styleUrl: '../character-image-shared.css'
})
export class CharacterImageInfoComponent implements OnInit {

  readonly Utils = Utils;
  readonly UNKNOWN_IMG = Constants.images.unknownCharacter;

  @Input() charmd!: CharacterDetailsModel;

  @Input() styles: string = '';
  @Input() classes: string = '';
  @Input() dimensions!: number;
  @Input() showElement: boolean = false;
  @Input() showType: boolean = false;
  @Input() showNotes: boolean = false;
  @Input() enableViewCharacter: boolean = false;

  @Input() elementImageTemplate!: TemplateRef<unknown>;
  @Input() typeImageTemplate!: TemplateRef<unknown>;

  @Output() viewCharacter: EventEmitter<CharacterDetailsModel> = new EventEmitter<CharacterDetailsModel>();

  skillDescriptionList: string[] = [];
  notes: NoteModel[] = [];

  constructor(
    private notesService: NotesService,
    private textUtils: TextUtils,
  ) {}

  ngOnInit(): void {
    this.loadNotes(this.charmd.gameCode, this.charmd.code);
  }

  loadNotes(gameCode: string, character: string): void {
    this.notes = [];
    if (this.showNotes) {
      const notes = this.notesService.getAllByOwnerTypeAndCodeAndActive('CHARACTER', character);
      if (notes && notes?.length > 0) {
        notes.forEach(n => {
          if (n.title) {
            n.formattedTitle = this.textUtils.format(n.title, gameCode);
          }
          n.formattedText = this.textUtils.formatAndColorize(n.text, gameCode);
        });
        this.notes = notes;
      }
    }
  }

  goToCharacterDetails(): void {
    this.viewCharacter.emit(this.charmd);
  }

}

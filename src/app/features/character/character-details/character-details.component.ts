import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../../shared/api/characters.service';
import { CharacterModel } from '../../../shared/models/character.model';
import { ActivatedRoute } from '@angular/router';
import { LookupModel } from '../../../shared/models/lookup.model';
import { LookupsService } from '../../../shared/api/lookups.service';
import { Constants } from '../../../shared/utils/constants';
import { Utils } from '../../../shared/utils/utils';
import { Subscription } from 'rxjs';
import { NoteModel } from '../../../shared/models/note.model';
import { NotesService } from '../../../shared/api/notes.service';
import { TextUtils } from '../../../shared/utils/text-utils';
import { BreadcrumbsService } from '../../../shared/services/breadcrumbs.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrl: './character-details.component.css'
})
export class CharacterDetailsComponent implements OnInit {

  readonly Utils = Utils;
  readonly PFP_SIZE: number = 260;
  readonly ICON_SIZE: number = 26;

  codeSubscription?: Subscription;
  code: string | undefined = undefined;
  hasBuild: boolean = true;
  hasCombos: boolean = true;
  isLoading: boolean = false;

  charmd: CharacterModel | undefined = undefined;
  element: LookupModel | undefined = undefined;
  type: LookupModel | undefined = undefined;
  rarity: LookupModel | undefined = undefined;
  notes: NoteModel[] = [];

  constructor(
    private charactersService: CharactersService,
    private lookupsService: LookupsService,
    private notesService: NotesService,
    private textUtils: TextUtils,
    private breadcrumbsService: BreadcrumbsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.codeSubscription = this.route.paramMap.subscribe(params => {
      const routeCode = params.get('code') ?? '';
      this.code = routeCode.replaceAll('-', ' ');
      this.breadcrumbsService.charactersDetails(this.code);
      this.isLoading = true;
      this.loadData();
      this.getCharacterNotes();
      setTimeout(() => this.isLoading = false, 1000);
    });
  }

  loadData(): void {
    this.charmd = this.charactersService.getOne(this.code!);
    this.element = this.lookupsService.getOne(this.charmd.element, Constants.lookupType.ELEMENT);
    this.type = this.lookupsService.getOne(this.charmd.type, Constants.lookupType.TYPE);
    this.rarity = this.lookupsService.getOne(this.charmd.rarity, Constants.lookupType.RARITY);
  }

  getCharacterNotes(): void {
    const notes = this.notesService.getAllByOwnerTypeAndCode('CHARACTER', this.charmd!.code);
    if (notes && notes?.length > 0) {
      notes.forEach(n => {
        if (n.title) {
          n.formattedTitle = this.textUtils.format(n.title, this.charmd!.gameCode);
        }
        n.formattedText = this.textUtils.formatAndColorize(n.text, this.charmd!.gameCode);
      });
      this.notes = notes;
    }
  }

}

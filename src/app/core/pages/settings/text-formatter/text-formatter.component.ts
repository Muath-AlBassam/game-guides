import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Constants } from '@shared/utils/constants';
import { TextUtils } from '@shared/utils/text-utils';
import { GamesService } from '@shared/api/games.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Utils } from '@shared/utils/utils';
import { GameModel } from '@shared/models/game.model';

@Component({
  selector: 'app-text-formatter',
  templateUrl: './text-formatter.component.html',
  styleUrl: './text-formatter.component.css'
})
export class TextFormatterComponent implements OnInit {

  games: GameModel[] = [];
  gameCode: string = Constants.games.GI;

  @ViewChild('myTextarea') textarea!: ElementRef<HTMLTextAreaElement>;
  text: string = '';
  formattedText: SafeHtml = '';
  showFormatted: boolean = false;

  allFormatsList: any[] = [];
  // formatsList: any[] = [];
  groupedFormatsList: any[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private textUtils: TextUtils,
    private gamesService: GamesService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.games = this.gamesService.getAll();
    this.allFormatsList = this.textUtils.TEXT_FORMATS_LIST(this.gameCode);
    this.modifyFormatsList();
  }

  modifyFormatsList(): void {
    const formatsList = this.allFormatsList
      .filter(f => f.games.includes(this.gameCode) || f.games == 'ALL')
      .map(f => {
        let rawText =  f.regex.toString().replace(' ', '').replace('(.*?)', '').replace('/', '').replace('/g', '');
        f.rawText = rawText;
        f.sample = rawText.substring(0, f.offset) + (f.offset > 0 && f.offset <= 3 ? 'Test' : '') + rawText.substring(f.offset);
        f.sample = this.sanitizer.bypassSecurityTrustHtml(f.sample.replace(f.regex, f.replace));
        return f;
      });
    const formatsMap = Utils.groupBy(formatsList, 'groupId');
    this.groupedFormatsList = Array.from(formatsMap);
  }

  onGameChange(): void {
    this.allFormatsList = this.textUtils.TEXT_FORMATS_LIST(this.gameCode);
    this.modifyFormatsList();
    this.formatText();
  }

  formatText(): void {
    this.formattedText = this.textUtils.format(this.text, this.gameCode);
  }

  applyFormat(format: any): void {
    this.insertText(format.rawText, format.offset);
    this.formatText();
  }

  getRawText(format: any): void {
    return format.regex.toString()
      .replace(' ', '')
      .replace('(.*?)', '')
      .replace('/', '')
      .replace('/g', '');
  }

  insertText(textToInsert: string, offset: number): void {
    const textarea = this.textarea.nativeElement;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    
    this.text = this.text.substring(0, start) + textToInsert + this.text.substring(end);
    textarea.value = this.text;
    const newCursor = start + offset;
    textarea.focus();
    textarea.setSelectionRange(newCursor, newCursor);
  }
}

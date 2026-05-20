import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Constants } from '../../utils/constants';
import { TextUtils } from '../../utils/text-utils';
import { GamesService } from '../../services/games.service';

@Component({
  selector: 'app-text-formatter',
  templateUrl: './text-formatter.component.html',
  styleUrl: './text-formatter.component.css'
})
export class TextFormatterComponent implements OnInit {

  games: any[] = [];
  gameCode: string = Constants.games.GI;

  @ViewChild('myTextarea') textarea!: ElementRef<HTMLTextAreaElement>;
  text: string = '';
  formattedText: any = '';
  showFormatted: boolean = false;

  formatsList: any[] = [];

  constructor(private textUtils: TextUtils, private gamesService: GamesService, @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
    this.games = this.gamesService.getAll();
    this.formatsList = this.textUtils.TEXT_FORMATS_LIST('X');
    this.formatsList = this.formatsList.map(f => {
      let rawText =  f.regex.toString().replace(' ', '').replace('(.*?)', '').replace('/', '').replace('/g', '');
      f.rawText = rawText;
      f.sample = rawText.substring(0, f.offset) + (f.offset > 0 && f.offset <= 3 ? 'Test' : '') + rawText.substring(f.offset);
      f.sample = f.sample.replace(f.regex, f.replace);
      return f;
    });
  }

  formatText() {
    this.formattedText = this.textUtils.format(this.text, this.gameCode);
  }

  applyFormat(format: any) {
    this.insertText(format.rawText, format.offset);
    this.formatText();
  }

  getRawText(format: any) {
    return format.regex.toString()
      .replace(' ', '')
      .replace('(.*?)', '')
      .replace('/', '')
      .replace('/g', '');
  }

  insertText(textToInsert: string, offset: number) {
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

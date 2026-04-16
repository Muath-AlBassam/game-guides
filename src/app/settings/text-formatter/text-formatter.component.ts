import { Component, Inject, OnInit } from '@angular/core';
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

  text: string = '';
  formattedText: any = '';

  showFormatted: boolean = false;

  constructor(private textUtils: TextUtils, private gamesService: GamesService, @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
    this.games = this.gamesService.getAll();
  }

  formatText() {
    this.formattedText = this.textUtils.format(this.text, this.gameCode);
  }
}

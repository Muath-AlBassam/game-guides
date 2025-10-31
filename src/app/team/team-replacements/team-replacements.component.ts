import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-replacements',
  templateUrl: './team-replacements.component.html',
  styleUrl: './team-replacements.component.css'
})
export class TeamReplacementsComponent implements OnInit {

  @Input() gameCode: any = null;
  @Input() team: any = null;

  characterPFPSize: number = 80;
  mobileSizeRatio: number = 0.5;

  constructor() { }

  ngOnInit(): void { }

}


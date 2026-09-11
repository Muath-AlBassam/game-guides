import { Component, Input, OnInit } from '@angular/core';
import { TeamModel } from '@shared/models/team.mode';

@Component({
  selector: 'app-team-replacements',
  templateUrl: './team-replacements.component.html',
  styleUrl: './team-replacements.component.css'
})
export class TeamReplacementsComponent implements OnInit {

  @Input() team!: TeamModel;

  characterPFPSize: number = 80;
  mobileSizeRatio: number = 0.5;

  constructor() { }

  ngOnInit(): void { }

}


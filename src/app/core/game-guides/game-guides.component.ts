import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DialogService } from '../../services/dialog.service';

@Component({
  selector: 'app-game-guides',
  templateUrl: './game-guides.component.html',
  styleUrl: './game-guides.component.css'
})
export class GameGuidesComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private dialogService: DialogService) { }

  ngOnInit(): void {
    this.reOpenDialog();
  }

  reOpenDialog() {
    this.activatedRoute.queryParamMap.subscribe((paramMap) => {
      if (paramMap.has('t')) {
        this.dialogService.openTeamDetailsDialog(paramMap.get('t'));
      } else if (paramMap.has('c')) {
        this.dialogService.openCharacterDetailsDialog(paramMap.get('c'));
      }
    });
  }

}

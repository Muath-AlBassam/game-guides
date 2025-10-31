import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DialogService } from '../../services/dialog.service';
import { RouteService } from '../../services/route.service';

@Component({
  selector: 'app-game-guides',
  templateUrl: './game-guides.component.html',
  styleUrl: './game-guides.component.css'
})
export class GameGuidesComponent implements OnInit {

  gameCode: any = null;

  constructor(private activatedRoute: ActivatedRoute, private dialogService: DialogService, private routeService: RouteService) { }

  async ngOnInit(): Promise<void> {
    this.gameCode = await this.routeService.getActiveGame();
    this.reOpenDialog();
  }

  reOpenDialog() {
    this.activatedRoute.queryParamMap.subscribe((paramMap) => {
      if (paramMap.has('t')) {
        this.dialogService.openTeamDetailsDialog(this.gameCode, paramMap.get('t'));
      } else if (paramMap.has('c')) {
        this.dialogService.openCharacterDetailsDialog(this.gameCode, paramMap.get('c'));
      }
    });
  }

}

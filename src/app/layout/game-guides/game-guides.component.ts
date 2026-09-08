import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { GameUtils } from '../../shared/utils/game-utils';
import { GameModel } from '../../shared/models/game.model';
import { GamesService } from '../../shared/api/games.service';

interface Breadcrumb {
  label: string;
  url?: string[];
}

@Component({
  selector: 'app-game-guides',
  templateUrl: './game-guides.component.html',
  styleUrl: './game-guides.component.css'
})
export class GameGuidesComponent implements OnInit {

  gamesList: string[] = [];
  activeGame: GameModel | undefined = undefined;
  breadcrumbs: Breadcrumb[] = [];

  constructor(
    private gameService: GamesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.updateBreadcrumbs();
      });
    this.activeGame = this.gameService.getActive();
    this.updateBreadcrumbs();
  }

  private updateBreadcrumbs(): void {
    const child = this.route.firstChild;
    if (!child || !this.activeGame) {
      this.breadcrumbs = [];
      return;
    }
    this.breadcrumbs = [ { label: this.activeGame.label, url: ['/home'] } ]
    switch (child.snapshot.routeConfig?.path) {
      case 'characters':
        this.breadcrumbs.push({ label: 'Characters' });
        break;
      case 'characters/:code':
        this.breadcrumbs.push({ label: 'Characters', url: ['/', this.activeGame.code, 'characters'] });
        const code = child.snapshot.paramMap.get('code');
        this.breadcrumbs.push({ label: code ?? '?' });
        break;
      case 'teams':
        this.breadcrumbs.push({ label: 'Teams' });
        break;
      case 'weapons':
        this.breadcrumbs.push({ label: GameUtils.getWeaponsLabel(this.activeGame.code)});
        break;
      case 'sets':
        this.breadcrumbs.push({ label: GameUtils.getSetsLabel(this.activeGame.code) });
        break;
      case 'notes':
        this.breadcrumbs.push({ label: 'Notes' });
        break;
    }
  }
}

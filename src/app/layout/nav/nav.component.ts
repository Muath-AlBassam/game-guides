import { Component, OnInit } from '@angular/core';
import { GamesService } from '../../shared/api/games.service';
import { GameUtils } from '../../shared/utils/game-utils';
import { Constants } from '../../shared/utils/constants';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { BusService } from '../../shared/services/bus.service';
import { GameModel } from '../../shared/models/game.model';

interface RouteItem {
  label: string;
  path: string;
  icon: string;
}

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit {

  activeGame: GameModel | undefined = undefined;
  gameBackgroundUrl: string | null = null;

  sidebarActive: boolean = false;
  routesList: RouteItem[] = [];

  constructor(
    private router: Router,
    private busService: BusService,
    private gamesService: GamesService
  ) {}

  ngOnInit(): void {
    this.loadGame();
    this.generateRoutesList();
    this.listenToRouteChange();
    this.busService.toggleSidebar$.subscribe(res => { if (res) this.sidebarActive = !this.sidebarActive });
  }

  listenToRouteChange(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.loadGame();
        this.generateRoutesList();
      })
  }

  loadGame(): void {
    this.activeGame = this.gamesService.getActive();
    if (this.activeGame) {
      this.gameBackgroundUrl = 'url(' + this.activeGame.backgroundUrl + ')';
    }
  }

  generateRoutesList(): void {
    let gameStyle = this.activeGame?.style ?? Constants.gameStyles.NONE;
    this.routesList = [];
    if (this.activeGame) {
      this.routesList.push(this.getCharactersRoute());
      if (gameStyle == Constants.gameStyles.TEAMS) {
        this.routesList.push(this.getTeamsRoute());
        this.routesList.push(this.getWeaponsRoute());
        this.routesList.push(this.getSetsRoute());
      }
      this.routesList.push(this.getNotesRoute());
    }
  }

  getCharactersRoute(): RouteItem {
    return {
      label: 'Characters',
      path: '/' + this.activeGame?.code + '/characters',
      icon: 'assets/images/character-front.jpg'
    };
  }

  getTeamsRoute(): RouteItem {
    return {
      label: 'Teams',
      path: '/' + this.activeGame?.code + '/teams',
      icon: 'assets/svg/team.svg'
    };
  }

  getWeaponsRoute(): RouteItem {
    return {
      label: GameUtils.getWeaponsLabel(this.activeGame?.code),
      path: '/' + this.activeGame?.code + '/weapons',
      icon: 'assets/images/sword-double.jpg'
    };
  }

  getSetsRoute(): RouteItem {
    return {
      label: GameUtils.getSetsLabel(this.activeGame?.code),
      path: '/' + this.activeGame?.code + '/sets',
      icon: 'assets/images/artifact.jpg'
    };
  }

  getNotesRoute(): RouteItem {
    return {
      label: 'Notes',
      path: '/' + this.activeGame?.code + '/notes',
      icon: 'assets/svg/note.svg'
    };
  }
}

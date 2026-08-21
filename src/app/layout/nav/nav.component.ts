import { Component, OnInit } from '@angular/core';
import { GamesService } from '../../services/games.service';
import { GameUtils } from '../../utils/game-utils';
import { Constants } from '../../utils/constants';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { BusService } from '../../services/bus.service';
import { RouteService } from '../../services/route.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit {

  activeGame: any = null;
  gameBackgroundUrl: string | null = null;

  sidebarActive: boolean = false;
  routesList: any[] = [];

  constructor(private router: Router, private busService: BusService, private gamesService: GamesService, private routeService: RouteService) { }

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

  generateRoutesList() {
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

  getCharactersRoute() {
    return {
      label: 'Characters',
      path: '/' + this.activeGame?.code + '/characters',
      icon: 'assets/images/character-front.jpg'
    };
  }

  getTeamsRoute() {
    return {
      label: 'Teams',
      path: '/' + this.activeGame?.code + '/teams',
      icon: 'assets/svg/team.svg'
    };
  }

  getWeaponsRoute() {
    return {
      label: GameUtils.getWeaponsLabel(this.activeGame?.code),
      path: '/' + this.activeGame?.code + '/weapons',
      icon: 'assets/images/sword-double.jpg'
    };
  }

  getSetsRoute() {
    return {
      label: GameUtils.getSetsLabel(this.activeGame?.code),
      path: '/' + this.activeGame?.code + '/sets',
      icon: 'assets/images/artifact.jpg'
    };
  }

  getNotesRoute() {
    return {
      label: 'Notes',
      path: '/' + this.activeGame?.code + '/notes',
      icon: 'assets/svg/note.svg'
    };
  }
}

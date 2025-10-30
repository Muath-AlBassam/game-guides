import { Component, OnInit } from '@angular/core';
import { GamesService } from '../../services/games.service';
import { GameUtils } from '../../utils/game-utils';
import { Constants } from '../../utils/constants';
import { Utils } from '../../utils/utils';
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

  gameCode: any = null;
  activeGame: any = null;
  gameBackgroundUrl: string | null = null;

  sidebarActive: boolean = false;
  routesList: any[] = [];

  constructor(private router: Router, private busService: BusService, private gamesService: GamesService, private routeService: RouteService) { }

  async ngOnInit(): Promise<void> {
    this.gameCode = await this.routeService.getActiveGame();
    this.loadGame();
    this.generateRoutesList();
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.loadGame();
        this.generateRoutesList();
      })

    this.busService.toggleSidebar$.subscribe(res => { if (res) this.sidebarActive = !this.sidebarActive });
  }

  loadGame() {
    this.activeGame = this.gamesService.getOne(this.gameCode); // fetch by route
    if (this.activeGame) {
      this.gameBackgroundUrl = 'url(' + this.activeGame.backgroundUrl + ')';
    }
  }

  generateRoutesList() {
    let gameStyle = this.activeGame?.style ?? Constants.gameStyles.NONE;
    this.routesList = [];
    if (gameStyle == Constants.gameStyles.TEAMS) {
      this.routesList.push(this.getTeamsRoute());
      this.routesList.push(this.getCharactersRoute());
      this.routesList.push(this.getWeaponsRoute());
      this.routesList.push(this.getSetsRoute());
    } else if (gameStyle == Constants.gameStyles.FIGHT) {
      this.routesList.push(this.getCharactersRoute());
    } else if (gameStyle == Constants.gameStyles.LOOTER_SHOOTER) {
      this.routesList.push(this.getCharactersRoute());
    }
  }

  getTeamsRoute() {
    return {
      label: 'Teams',
      path: this.activeGame?.code + '/teams',
      icon: 'assets/svg/team.svg'
    };
  }

  getCharactersRoute() {
    return {
      label: 'Characters',
      path: this.activeGame?.code + '/characters',
      icon: 'assets/images/character-front.jpg'
    };
  }

  getWeaponsRoute() {
    return {
      label: GameUtils.getWeaponsLabel(this.activeGame?.code),
      path: this.activeGame?.code + '/weapons',
      icon: 'assets/images/sword-double.jpg'
    };
  }

  getSetsRoute() {
    return {
      label: GameUtils.getSetsLabel(this.activeGame?.code),
      path: this.activeGame?.code + '/sets',
      icon: 'assets/images/artifact.jpg'
    };
  }
}

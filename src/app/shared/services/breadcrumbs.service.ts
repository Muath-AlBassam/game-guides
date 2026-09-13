import { Injectable } from "@angular/core";
import { BusService } from "./bus.service";
import { GamesService } from "@shared/api/games.service";
import { GameUtils } from "@shared/utils/game-utils";

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbsService {

  constructor(
    private bus: BusService,
    private gamesService: GamesService
  ) {}

  charactersList(): void {
    const game = this.gamesService.getActive()!;
    const breadcrumbs: any[] = [
      { label: game.label, url: ['/home'] },
      { label: 'Characters' }
    ];
    this.bus.breadCrumbChange.next(breadcrumbs);
  }

  charactersDetails(character: string): void {
    const game = this.gamesService.getActive()!;
    const breadcrumbs: any[] = [
      { label: game.label, url: ['/home'] },
      { label: 'Characters', url: ['/', game.code, 'characters'] },
      { label: character }
    ];
    this.bus.breadCrumbChange.next(breadcrumbs);
  }

  teamList(): void {
    const game = this.gamesService.getActive()!;
    const breadcrumbs: any[] = [
      { label: game.label, url: ['/home'] },
      { label: 'Teams' }
    ];
    this.bus.breadCrumbChange.next(breadcrumbs);
  }

  teamDetails(team: string): void {
    const game = this.gamesService.getActive()!;
    const breadcrumbs: any[] = [
      { label: game.label, url: ['/home'] },
      { label: 'Teams', url: ['/', game.code, 'teams'] },
      { label: team }
    ];
    this.bus.breadCrumbChange.next(breadcrumbs);
  }

  weaponsList(): void {
    const game = this.gamesService.getActive()!;
    const breadcrumbs: any[] = [
      { label: game.label, url: ['/home'] },
      { label: GameUtils.getWeaponsLabel(game.code) }
    ];
    this.bus.breadCrumbChange.next(breadcrumbs);
  }

  setsList(): void {
    const game = this.gamesService.getActive()!;
    const breadcrumbs: any[] = [
      { label: game.label, url: ['/home'] },
      { label: GameUtils.getSetsLabel(game.code) }
    ];
    this.bus.breadCrumbChange.next(breadcrumbs);
  }

  notesList(): void {
    const game = this.gamesService.getActive()!;
    const breadcrumbs: any[] = [
      { label: game.label, url: ['/home'] },
      { label: 'Notes' }
    ];
    this.bus.breadCrumbChange.next(breadcrumbs);
  }
}
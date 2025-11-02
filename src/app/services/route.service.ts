import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  constructor(private router: Router) { }

  getActiveGame(): Promise<any> {
    // this.route.parent?.paramMap.subscribe(params => {
    //   this.gameCode = params.get('gameCode');
    //   this.loadCharacters();
    // });
    return Promise.resolve(this.getGameFromUrl());
  }

  getGameFromUrl() {
    if (window.location.hash) {
      let hash = window.location.hash;
      /* #/web/{gameCode} */
      return hash.split('/')[2];
    } else {
      return null;
    }
  }
}

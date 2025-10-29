import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  constructor(private route: ActivatedRoute) { }

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
      /* #/{gameCode} */
      return hash.split('/')[1];
    } else {
      return null;
    }
  }
}

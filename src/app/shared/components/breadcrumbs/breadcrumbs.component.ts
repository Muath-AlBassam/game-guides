import { Component, OnInit } from '@angular/core';
import { GameModel } from '@shared/models/game.model';
import { BusService } from '@shared/services/bus.service';

interface Breadcrumb {
  label: string;
  url?: string[];
}

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrl: './breadcrumbs.component.css'
})
export class BreadcrumbsComponent implements OnInit {

  activeGame: GameModel | undefined = undefined;
  breadcrumbs: Breadcrumb[] = [];

  constructor(
    private bus: BusService
  ) {}

  ngOnInit(): void {
    this.bus.breadCrumbChange$.subscribe(val => {
      this.breadcrumbs = val;
    });
  }
}

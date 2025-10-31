import { Component, OnInit } from '@angular/core';
import { RouteService } from '../../services/route.service';
import { CategoryService } from '../../services/category.service';
import { TeamsService } from '../../services/teams.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrl: './team-list.component.css'
})
export class TeamListComponent implements OnInit {

  gameCode: any = null;
  categories: any[] = [];
  characterPFPSize: number = 160;

  constructor(private routeService: RouteService, private categoryService: CategoryService, private teamsService: TeamsService) { }

  async ngOnInit(): Promise<void> {
    this.gameCode = await this.routeService.getActiveGame();
    this.loadTeams();
  }

  loadTeams() {
    this.categories = this.categoryService.getAll(this.gameCode);
    this.categories.forEach(cat => cat.teams = this.teamsService.getAllByCategory(this.gameCode, cat.code));
  }

}

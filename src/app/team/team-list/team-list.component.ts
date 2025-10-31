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
  allCategories: any[] = [];
  categories: any[] = [];
  count: number = 0;
  characterPFPSize: number = 160;

  // search
  textValue: any = '';

  constructor(private routeService: RouteService, private categoryService: CategoryService, private teamsService: TeamsService) { }

  async ngOnInit(): Promise<void> {
    this.gameCode = await this.routeService.getActiveGame();
    this.loadTeams();
  }

  loadTeams() {
    this.allCategories = this.categoryService.getAll(this.gameCode);
    this.allCategories.forEach(cat => {
      let catTeams = this.teamsService.getAllByCategory(this.gameCode, cat.code);
      cat.teams = catTeams;
      this.count += catTeams.length;
    });
    this.categories = this.allCategories;
  }

  onTextChange(val: string) {
    this.textValue = val;
    this.filterList();
  }

  filterList() {
    this.count = 0;
    let filtered = structuredClone(this.allCategories);
    this.categories = filtered.filter(cat => {
      let filteredTeams = cat.teams
        .filter((t: any) => {
          let teamName: boolean = t.name ? t.name.toLowerCase().includes(this.textValue.toLowerCase()) : false;
          let charaterName: boolean = t.characters.some((c: any) => c.name.toLowerCase().includes(this.textValue.toLowerCase()));
          return teamName || charaterName;
        });
        cat.teams = filteredTeams;
        this.count += filteredTeams.length;
        return filteredTeams.length > 0;
    });
  }
}

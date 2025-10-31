import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { CharacterListComponent } from './character/character-list/character-list.component';
import { GameGuidesComponent } from './core/game-guides/game-guides.component';
import { CoreComponent } from './core/core/core.component';
import { SetListComponent } from './set/set-list/set-list.component';
import { WeaponListComponent } from './weapon/weapon-list/weapon-list.component';
import { TeamListComponent } from './team/team-list/team-list.component';

const routes: Routes = [
  {
    path: '',
    component: CoreComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      {
        path: ':gameCode',
        component: GameGuidesComponent,
        children: [
          { path: '', redirectTo: 'characters', pathMatch: 'full' },
          { path: 'characters', component: CharacterListComponent },
          { path: 'teams', component: TeamListComponent },
          { path: 'weapons', component: WeaponListComponent },
          { path: 'sets', component: SetListComponent },
        ]
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
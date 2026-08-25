import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { CharacterListComponent } from './features/character/character-list/character-list.component';
import { GameGuidesComponent } from './layout/game-guides/game-guides.component';
import { CoreComponent } from './layout/core/core.component';
import { SetListComponent } from './features/set/set-list/set-list.component';
import { WeaponListComponent } from './features/weapon/weapon-list/weapon-list.component';
import { TeamListComponent } from './features/team/team-list/team-list.component';
import { ErrorComponent } from './core/error/error.component';
import { SettingsComponent } from './features/settings/settings.component';
import { GameNotesComponent } from './features/game/game-notes/game-notes.component';

const routes: Routes = [
  {
    path: '',
    component: CoreComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'settings',
        component: SettingsComponent
      },
      {
        path: ':gameCode',
        component: GameGuidesComponent,
        children: [
          { path: '', redirectTo: 'characters', pathMatch: 'full' },
          { path: 'characters', component: CharacterListComponent },
          { path: 'teams', component: TeamListComponent },
          { path: 'weapons', component: WeaponListComponent },
          { path: 'sets', component: SetListComponent },
          { path: 'notes', component: GameNotesComponent },
        ]
      }
    ],
  },
  {
    path: '**', component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { NavComponent } from './layout/nav/nav.component';
import { CoreComponent } from './core/core/core.component';
import { GameGuidesComponent } from './core/game-guides/game-guides.component';
import { GameHeaderComponent } from './core/game-header/game-header.component';
import { HomeComponent } from './core/home/home.component';
import { CharacterImageComponent } from './character/character-image/character-image.component';
import { CharacterListComponent } from './character/character-list/character-list.component';
import { CharacterDetailsDialogComponent } from './character/character-details-dialog/character-details-dialog.component';
import { TeamInfoComponent } from './team/team-info/team-info.component';
import { TeamListComponent } from './team/team-list/team-list.component';
import { SetDetailsComponent } from './set/set-details/set-details.component';
import { SetListComponent } from './set/set-list/set-list.component';
import { WeaponListComponent } from './weapon/weapon-list/weapon-list.component';
import { WeaponDetailsComponent } from './weapon/weapon-details/weapon-details.component';
import { LoaderComponent } from './shared/loader/loader.component';
import { ButtonGroupComponent } from './shared/button-group/button-group.component';
import { SearchComponent } from './shared/search/search.component';
import { CustomSearchComponent } from './shared/custom-search/custom-search.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    CoreComponent,
    GameGuidesComponent,
    GameHeaderComponent,
    HomeComponent,
    CharacterImageComponent,
    CharacterListComponent,
    CharacterDetailsDialogComponent,
    TeamInfoComponent,
    TeamListComponent,
    SetDetailsComponent,
    SetListComponent,
    WeaponListComponent,
    WeaponDetailsComponent,
    LoaderComponent,
    ButtonGroupComponent,
    SearchComponent,
    CustomSearchComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
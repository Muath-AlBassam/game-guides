import { NgModule } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { NavComponent } from './layout/nav/nav.component';
import { CoreComponent } from './core/core/core.component';
import { GameGuidesComponent } from './core/game-guides/game-guides.component';
import { GameHeaderComponent } from './core/game-header/game-header.component';
import { HomeComponent } from './core/home/home.component';
import { ErrorComponent } from './core/error/error.component';
import { CharacterImageComponent } from './character/character-image/character-image.component';
import { CharacterListComponent } from './character/character-list/character-list.component';
import { CharacterDetailsDialogComponent } from './character/character-details-dialog/character-details-dialog.component';
import { TeamInfoComponent } from './team/team-info/team-info.component';
import { TeamListComponent } from './team/team-list/team-list.component';
import { TeamNotesComponent } from './team/team-notes/team-notes.component';
import { TeamReplacementsComponent } from './team/team-replacements/team-replacements.component';
import { TeamRolesComponent } from './team/team-roles/team-roles.component';
import { TeamDetailsDialogComponent } from './team/team-details-dialog/team-details-dialog.component';
import { SetDetailsComponent } from './set/set-details/set-details.component';
import { SetListComponent } from './set/set-list/set-list.component';
import { WeaponListComponent } from './weapon/weapon-list/weapon-list.component';
import { WeaponDetailsComponent } from './weapon/weapon-details/weapon-details.component';
import { ComboListComponent } from './combo/combo-list/combo-list.component';
import { LoaderComponent } from './shared/loader/loader.component';
import { ButtonGroupComponent } from './shared/button-group/button-group.component';
import { SearchComponent } from './shared/search/search.component';
import { AdvancedFilterComponent } from './shared/advanced-filter/advanced-filter.component';
import { NotesPopoverComponent } from './shared/notes-popover/notes-popover.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    CoreComponent,
    GameGuidesComponent,
    GameHeaderComponent,
    HomeComponent,
    ErrorComponent,
    CharacterImageComponent,
    CharacterListComponent,
    CharacterDetailsDialogComponent,
    TeamInfoComponent,
    TeamListComponent,
    TeamNotesComponent,
    TeamReplacementsComponent,
    TeamRolesComponent,
    TeamDetailsDialogComponent,
    SetDetailsComponent,
    SetListComponent,
    WeaponListComponent,
    WeaponDetailsComponent,
    ComboListComponent,
    LoaderComponent,
    ButtonGroupComponent,
    SearchComponent,
    AdvancedFilterComponent,
    NotesPopoverComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
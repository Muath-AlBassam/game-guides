import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { NavComponent } from './layout/nav/nav.component';
import { CoreComponent } from './layout/core/core.component';
import { GameGuidesComponent } from './layout/game-guides/game-guides.component';
import { GameHeaderComponent } from './features/game/game-header/game-header.component';
import { HomeComponent } from './core/home/home.component';
import { ErrorComponent } from './core/error/error.component';
import { CharacterImageComponent } from './features/character/character-image/character-image.component';
import { CharacterListComponent } from './features/character/character-list/character-list.component';
import { CharacterDetailsDialogComponent } from './features/character/character-details-dialog/character-details-dialog.component';
import { CharacterBuildComponent } from './features/character/character-build/character-build.component';
import { CharacterTeamsComponent } from './features/character/character-teams/character-teams.component';
import { CharacterCombosComponent } from './features/character/character-combos/character-combos.component';
import { TeamInfoComponent } from './features/team/team-info/team-info.component';
import { TeamListComponent } from './features/team/team-list/team-list.component';
import { TeamNotesComponent } from './features/team/team-notes/team-notes.component';
import { TeamReplacementsComponent } from './features/team/team-replacements/team-replacements.component';
import { TeamRolesComponent } from './features/team/team-roles/team-roles.component';
import { TeamDetailsDialogComponent } from './features/team/team-details-dialog/team-details-dialog.component';
import { SetDetailsComponent } from './features/set/set-details/set-details.component';
import { SetListComponent } from './features/set/set-list/set-list.component';
import { WeaponListComponent } from './features/weapon/weapon-list/weapon-list.component';
import { WeaponDetailsComponent } from './features/weapon/weapon-details/weapon-details.component';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { ButtonGroupComponent } from './shared/components/button-group/button-group.component';
import { SearchComponent } from './shared/components/search/search.component';
import { AdvancedFilterComponent } from './shared/components/advanced-filter/advanced-filter.component';
import { SettingsComponent } from './features/settings/settings.component';
import { TextFormatterComponent } from './features/settings/text-formatter/text-formatter.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GameNotesComponent } from './features/game/game-notes/game-notes.component';
import { NoDataComponent } from './shared/components/no-data/no-data.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { ListByCategoryComponent } from './shared/components/list-by-category/list-by-category.component';


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
    CharacterBuildComponent,
    CharacterTeamsComponent,
    CharacterCombosComponent,
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
    LoaderComponent,
    ButtonGroupComponent,
    SearchComponent,
    AdvancedFilterComponent,
    SettingsComponent,
    TextFormatterComponent,
    GameNotesComponent,
    NoDataComponent,
    ListByCategoryComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule,
    NgbModule,
    NgSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
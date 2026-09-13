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
import { GameGuidesComponent } from './game-guides/game-guides.component';
import { BreadcrumbsComponent } from './shared/components/breadcrumbs/breadcrumbs.component';
import { GameHeaderComponent } from './features/game/components/game-header/game-header.component';
import { HomeComponent } from './core/pages/home/home.component';
import { ErrorComponent } from './core/pages/error/error.component';
import { CharacterImageComponent } from './features/character/components/character-image/character-image.component';
import { CharacterListComponent } from './features/character/pages/character-list/character-list.component';
import { CharacterBuildComponent } from './features/character/components/character-build/character-build.component';
import { CharacterTeamsComponent } from './features/character/components/character-teams/character-teams.component';
import { CharacterCombosComponent } from './features/character/components/character-combos/character-combos.component';
import { CharacterDetailsComponent } from './features/character/pages/character-details/character-details.component';
import { TeamInfoComponent } from './features/team/components/team-info/team-info.component';
import { TeamListComponent } from './features/team/pages/team-list/team-list.component';
import { TeamDetailsComponent } from './features/team/pages/team-details/team-details.component';
import { TeamNotesComponent } from './features/team/components/team-notes/team-notes.component';
import { SetDetailsComponent } from './features/set/components/set-details/set-details.component';
import { SetListComponent } from './features/set/pages/set-list/set-list.component';
import { WeaponListComponent } from './features/weapon/pages/weapon-list/weapon-list.component';
import { WeaponDetailsComponent } from './features/weapon/components/weapon-details/weapon-details.component';
import { LoaderComponent } from '@shared/components/loader/loader.component';
import { ButtonGroupComponent } from '@shared/components/button-group/button-group.component';
import { SearchComponent } from '@shared/components/search/search.component';
import { AdvancedFilterComponent } from '@shared/components/advanced-filter/advanced-filter.component';
import { SettingsComponent } from './core/pages/settings/settings.component';
import { TextFormatterComponent } from './core/pages/settings/text-formatter/text-formatter.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GameNotesComponent } from './features/game/pages/game-notes/game-notes.component';
import { NoDataComponent } from '@shared/components/no-data/no-data.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { ListByCategoryComponent } from '@shared/components/list-by-category/list-by-category.component';
import { TeamTagsComponent } from './features/team/components/team-tags/team-tags.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    CoreComponent,
    GameGuidesComponent,
    BreadcrumbsComponent,
    GameHeaderComponent,
    HomeComponent,
    ErrorComponent,
    CharacterImageComponent,
    CharacterListComponent,
    CharacterDetailsComponent,
    CharacterBuildComponent,
    CharacterTeamsComponent,
    CharacterCombosComponent,
    TeamInfoComponent,
    TeamListComponent,
    TeamDetailsComponent,
    TeamNotesComponent,
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
    TeamTagsComponent,
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
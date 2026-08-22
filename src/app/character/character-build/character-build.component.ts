import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GameUtils } from '../../utils/game-utils';
import { BuildsService } from '../../services/builds.service';
import { Utils } from '../../utils/utils';

@Component({
  selector: 'app-character-build',
  templateUrl: './character-build.component.html',
  styleUrl: './character-build.component.css'
})
export class CharacterBuildComponent implements OnInit {

  @Input() character: any = null;
  @Input() simpleView: boolean = false;
  @Output() hasBuild: EventEmitter<boolean> = new EventEmitter<boolean>();

  buildmd: any = null;
  weaponsLabel: string = '';
  setsLabel: string = '';

  constructor(private buildsService: BuildsService) { }

  ngOnInit(): void {
    this.loadBuild();
    this.weaponsLabel = GameUtils.getWeaponsLabel(this.buildmd.gameCode);
    this.setsLabel = GameUtils.getSetsLabel(this.buildmd.gameCode);
  }

  loadBuild() {
    this.buildmd = this.buildsService.getByCharacter(this.character);
    this.hasBuild.emit(this.buildmd != null);
  }

  isMobile(): boolean {
    return Utils.isMobile();
  }
}

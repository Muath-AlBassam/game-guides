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

  @Input() gameCode: any = null;
  @Input() character: any = null;
  @Output() hasBuild: EventEmitter<boolean> = new EventEmitter<boolean>();

  buildmd: any = null;
  weaponsLabel: string = '';
  setsLabel: string = '';

  constructor(private buildsService: BuildsService) { }

  ngOnInit(): void {
    this.weaponsLabel = GameUtils.getWeaponsLabel(this.gameCode);
    this.setsLabel = GameUtils.getSetsLabel(this.gameCode);
    this.loadBuild();
  }

  loadBuild() {
    this.buildmd = this.buildsService.getByCharacter(this.gameCode, this.character);
    this.hasBuild.emit(this.buildmd != null);
  }

  isMobile(): boolean {
    return Utils.isMobile();
  }
}

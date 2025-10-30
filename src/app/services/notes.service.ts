import { Injectable } from '@angular/core';
import { DataClientService } from './data-client.service';
import { Utils } from '../utils/utils';
import { Constants } from '../utils/constants';
import { CharactersService } from './characters.service';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  notesList: any[] = [];

  constructor(private dataClient: DataClientService, private charactersService: CharactersService) {
    this.dataClient.sheetLoaded$.subscribe(res => {
      if (res) this.fetchData();
    });
  }

  fetchData() {
    this.dataClient.loadData('NOTES').then(notes => {
      const flatList = notes.map((n: any) => ({
        gameCode: n.GAME_CODE, ownerCode: n.OWNER_CODE, ownerType: n.OWNER_TYPE, text: n.TEXT
      }));

      const grouped = Utils.groupBy(flatList, 'gameCode', 'ownerCode');
      grouped.forEach((val, key) => {
        this.notesList.push({
          gameCode: val[0].gameCode,
          ownerCode: val[0].ownerCode,
          ownerType: val[0].ownerType,
          notes: val.map((n: any) => ({ text: n.text })),
        });
      })
    });
  }

  getAllByTeam(gameCode: any, teamCode: any) {
    const data = this.notesList
      .find(n => n.gameCode == gameCode && n.ownerCode == teamCode && n.ownerType == 'TEAM');
    return data ? data.notes : null;
  }



  repeat = (text: string) => `<span class="arrow-border">${text}</span>`;
  tooltip = (text: string, tooltip: string) => `<span title="${tooltip}">${text}</span>`;
  htmlTooltip = (text: string, tooltip: string) => `<span class="html-tooltip">${text}<span class="tooltip-content">${tooltip}</span></span>`;
  imageOf = (path: string, tooltip: string | null = null, style = null) => `<img src="${path}" width="30" title="${tooltip}" style="margin-top: -8px; ${style ?? ''}" />`;


  getCharacterImage(name: string, gameCode: string) {
    let charmd = this.charactersService.getOne(gameCode, name);
    return this.imageOf(charmd.imageUrl, name);
  }

  getCharacterImageAsTooltip(name: string, gameCode: string) {
    return `
        <b class="img-tooltip">
            ${name}
            ${this.getCharacterImage(name, gameCode)}
        </b>`;
  }

  // GI moves shortcuts
  gi = {
    normal: this.tooltip('N', 'Normal Attack'),
    charged: this.tooltip('CA', 'Charged Attack'),
    skill: this.tooltip('E', 'Skill'),
    tapSkill: this.tooltip('tE', 'Tap Skill'),
    holdSkill: this.tooltip('hE', 'Hold Skill'),
    ultimate: this.tooltip('Q', 'Ultimate'),
    plunge: this.tooltip('P', 'Plunge'),
  }

  // ZZZ moves shortcuts
  zzz = {
    basic: this.imageOf(Utils.appendRepoUrl('assets/images/zzz/icons/ZZZ_Basic.png'), 'Basic'),
    charged: this.tooltip('CA', 'Charged Attack'),
    exSpecial: this.imageOf(Utils.appendRepoUrl('assets/images/zzz/icons/ZZZ_ExSpecial.png'), 'EX Special'),
    special: this.imageOf(Utils.appendRepoUrl('assets/images/zzz/icons/ZZZ_Special.png'), 'Special'),
    ultimate: this.imageOf(Utils.appendRepoUrl('assets/images/zzz/icons/ZZZ_Ultimate.png'), 'Ultimate'),
    chain: this.imageOf(Utils.appendRepoUrl('assets/images/zzz/icons/ZZZ_Chain.png'), 'Chain Attack'),
    dash: this.imageOf(Utils.appendRepoUrl('assets/images/zzz/icons/ZZZ_Dash.png'), 'Dash'),
    assault: this.imageOf(Utils.appendRepoUrl('assets/images/zzz/icons/ZZZ_Physical.png'), 'Assault'),
    burn: this.imageOf(Utils.appendRepoUrl('assets/images/zzz/icons/ZZZ_Fire.png'), 'Burn'),
    shock: this.imageOf(Utils.appendRepoUrl('assets/images/zzz/icons/ZZZ_Electric.png'), 'Shock'),
    freeze: this.imageOf(Utils.appendRepoUrl('assets/images/zzz/icons/ZZZ_Ice.png'), 'Freeze'),
    corrupt: this.imageOf(Utils.appendRepoUrl('assets/images/zzz/icons/ZZZ_Ether.png'), 'Corrupt'),
  }

  formatNotes(text: string | null, gameCode: string) {
    if (text == null) {
      return '';
    }
    // img_***_img => image
    return String(text)
      .replace(/normal/g, (match) => gameCode == Constants.games.GI ? this.gi.normal : match)
      .replace(/charged/g, (match) => gameCode == Constants.games.GI ? this.gi.charged : gameCode == Constants.games.ZZZ ? this.zzz.charged : match)
      .replace(/tapskill/g, (match) => gameCode == Constants.games.GI ? this.gi.tapSkill : match)
      .replace(/holdskill/g, (match) => gameCode == Constants.games.GI ? this.gi.holdSkill : match)
      .replace(/skill/g, (match) => gameCode == Constants.games.GI ? this.gi.skill : match)
      .replace(/ultimate/g, (match) => gameCode == Constants.games.GI ? this.gi.ultimate : gameCode == Constants.games.ZZZ ? this.zzz.ultimate : match)
      .replace(/plunge/g, (match) => gameCode == Constants.games.GI ? this.gi.plunge : match)
      .replace(/basic/g, this.zzz.basic)
      .replace(/exspecial/g, this.zzz.exSpecial)
      .replace(/special/g, this.zzz.special)
      .replace(/chain/g, this.zzz.chain)
      .replace(/dash/g, this.zzz.dash)
      .replace(/assault/g, this.zzz.assault)
      .replace(/burn/g, this.zzz.burn)
      .replace(/shock/g, this.zzz.shock)
      .replace(/switch/g, '>')
      .replace(/ times /g, Constants.unicode.times)
      .replace(/c_(.*?)_c/g, (match, capture) => this.getCharacterImage(capture, gameCode))
      .replace(/cn_(.*?)_cn/g, (match, capture) => this.getCharacterImage(capture, gameCode) + ` <b>${capture}</b>`)
      .replace(/ca_(.*?)_ca/g, (match, capture) => this.getCharacterImageAsTooltip(capture, gameCode))
      .replace(/t_(.*?)_t/g, (match, capture) => `<b style="text-transform: uppercase; margin-right: 10px;">${capture}:</b>`) // title
      .replace(/img_(.*?)_img/g, (match, capture) => this.imageOf(Utils.appendRepoUrl(capture))) // image
      .replace(/st_(.*?)_st/g, (match, capture) => `<span style="font-size: 0.8rem; font-weight: normal; margin-left: 1px; vertical-align: 2px; opacity: 0.6;">${capture}</span>`) // small text
      .replace(/b_(.*?)_b/g, (match, capture) => `<b>${capture}</b>`) // bold
      .replace(/u_(.*?)_u/g, (match, capture) => `<u>${capture}</u>`) // underline
      .replace(/i_(.*?)_i/g, (match, capture) => `<u>${capture}</u>`) // italic
      .replace(/nl_/g, `<br/>`) // new line
      .replace(/tp_(.*?)_(.*?)_tp/g, (match, capture1, capture2) => this.htmlTooltip(capture1, capture2));
  }
}

import { DomSanitizer } from "@angular/platform-browser";
import { CharactersService } from "../services/characters.service";
import { Constants } from "./constants";
import { Utils } from "./utils";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class NoteUtils {

  constructor(private charactersService: CharactersService, private sanitizer: DomSanitizer) {}
  
  repeat = (text: string) => `<span class="arrow-border">${text}</span>`;
  tooltip = (text: string, tooltip: string) => `<span title="${tooltip}">${text}</span>`;
  htmlTooltip = (text: string, tooltip: string) => `<span class="html-tooltip">${text}<span class="tooltip-content">${tooltip}</span></span>`;
  imageOf = (path: string, tooltip: string | null = null, style: string | null = null) => `<img src="${path}" width="30" title="${tooltip}" style="margin-top: -8px; ${style ?? ''}" />`;


  getCharacterImage(name: string, gameCode: string) {
    let charmd = this.charactersService.getOne(gameCode, name);
    return this.imageOf(charmd.imageUrl, name);
  }

  getCharacterImageAsTooltip(name: string, gameCode: string) {
    return `
        <b class="img-tooltip no-break">
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
    basic: this.imageOf(Utils.appendRepoUrl('assets/images/zzz/icons/ZZZ_Basic.png'), 'Basic', 'margin-top: 0;'),
    charged: this.tooltip(
      this.imageOf(Utils.appendRepoUrl('assets/images/zzz/icons/ZZZ_Basic.png'), 'Charged Attack', 'margin-top: 0;') + 
      `<span style="font-size: 0.8rem; font-weight: normal; margin-left: 1px; vertical-align: 2px; opacity: 0.6;">(Hold)</span>`,
      'Charged Attack'),
    exSpecial: this.imageOf(Utils.appendRepoUrl('assets/images/zzz/icons/ZZZ_ExSpecial.png'), 'EX Special', 'margin-top: 0;'),
    special: this.imageOf(Utils.appendRepoUrl('assets/images/zzz/icons/ZZZ_Special.png'), 'Special', 'margin-top: 0;'),
    ultimate: this.imageOf(Utils.appendRepoUrl('assets/images/zzz/icons/ZZZ_Ultimate.png'), 'Ultimate', 'margin-top: 0;'),
    chain: this.imageOf(Utils.appendRepoUrl('assets/images/zzz/icons/ZZZ_Chain.png'), 'Chain Attack', 'margin-top: 0;'),
    dash: this.imageOf(Utils.appendRepoUrl('assets/images/zzz/icons/ZZZ_Dash.png'), 'Dash', 'margin-top: 0;'),
    assault: this.imageOf(Utils.appendRepoUrl('assets/images/zzz/icons/ZZZ_Physical.png'), 'Assault', 'margin-top: 0;'),
    burn: this.imageOf(Utils.appendRepoUrl('assets/images/zzz/icons/ZZZ_Fire.png'), 'Burn', 'margin-top: 0;'),
    shock: this.imageOf(Utils.appendRepoUrl('assets/images/zzz/icons/ZZZ_Electric.png'), 'Shock', 'margin-top: 0;'),
    freeze: this.imageOf(Utils.appendRepoUrl('assets/images/zzz/icons/ZZZ_Ice.png'), 'Freeze', 'margin-top: 0;'),
    corrupt: this.imageOf(Utils.appendRepoUrl('assets/images/zzz/icons/ZZZ_Ether.png'), 'Corrupt', 'margin-top: 0;'),
  }

  format(text: string | null, gameCode: string) {
    if (text == null) {
      return '';
    }
    // img_***_img => image
    let formatted = String(text)
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
      .replace(/arrow/g, `<span style="margin: auto 5px;">${Constants.unicode.arrow}</span>`)
      .replace(/c_(.*?)_c/g, (match, capture) => this.getCharacterImage(capture, gameCode)) // character image
      .replace(/cn_(.*?)_cn/g, (match, capture) => this.getCharacterImage(capture, gameCode) + ` <b class="no-break">${capture}</b>`) // character image + name
      .replace(/ca_(.*?)_ca/g, (match, capture) => this.getCharacterImageAsTooltip(capture, gameCode)) // character name with image tooltip
      .replace(/t_(.*?)_t/g, (match, capture) => `<b style="text-transform: uppercase; margin-right: 10px;">${capture}:</b>`) // title
      .replace(/img_(.*?)_img/g, (match, capture) => this.imageOf(Utils.appendRepoUrl(capture))) // image
      .replace(/st_(.*?)_st/g, (match, capture) => `<span style="font-size: 0.8rem; font-weight: normal; margin-left: 1px; vertical-align: 2px; opacity: 0.6;">${capture}</span>`) // small text
      .replace(/b_(.*?)_b/g, (match, capture) => `<b>${capture}</b>`) // bold
      .replace(/u_(.*?)_u/g, (match, capture) => `<u>${capture}</u>`) // underline
      .replace(/i_(.*?)_i/g, (match, capture) => `<u>${capture}</u>`) // italic
      .replace(/nl_/g, `<br/>`) // new line
      .replace(/tp_(.*?)_(.*?)_tp/g, (match, capture1, capture2) => this.htmlTooltip(capture1, capture2)) // tooltip
      .replace(/cb_(.*?)_cb/g, (match, capture) => `<b>[</b>${capture}<b>]</b>`) // new line;

    return this.sanitizer.bypassSecurityTrustHtml(formatted);
  }
}
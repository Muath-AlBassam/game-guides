import { Constants } from './constants';
import { Utils } from './utils';

export class NotesUtils {

  constructor() { }

  static repeat = (text: string) => `<span class="arrow-border">${text}</span>`;
  static tooltip = (text: string, tooltip: string) => `<span title="${tooltip}">${text}</span>`;
  static htmlTooltip = (text: string, tooltip: string) => `<span class="html-tooltip">${text}<span class="tooltip-content">${tooltip}</span></span>`;
  static imageOf = (path: string, tooltip: string | null = null, style = null) => `<img src="${path}" width="30" title="${tooltip}" style="margin-top: -8px; ${style ?? ''}" />`;


  static getCharacterImage(name: string, gameCode: string) {
    // let charmd = charactersRepository.getOne(gameCode, name);
    // return this.imageOf(charmd.imageUrl, name);
    return '';
  }

  static getCharacterImageAsTooltip(name: string, gameCode: string) {
    return `
      <b class="img-tooltip">
          ${name}
          ${this.getCharacterImage(name, gameCode)}
      </b>`;
  }

  // GI moves shortcuts
  static gi = {
    normal: NotesUtils.tooltip('N', 'Normal Attack'),
    charged: NotesUtils.tooltip('CA', 'Charged Attack'),
    skill: NotesUtils.tooltip('E', 'Skill'),
    tapSkill: NotesUtils.tooltip('tE', 'Tap Skill'),
    holdSkill: NotesUtils.tooltip('hE', 'Hold Skill'),
    ultimate: NotesUtils.tooltip('Q', 'Ultimate'),
    plunge: NotesUtils.tooltip('P', 'Plunge'),
  }

  // ZZZ moves shortcuts
  static zzz = {
    basic: NotesUtils.imageOf(Utils.appendRepoUrl('assets/images/zzz/icons/ZZZ_Basic.png'), 'Basic'),
    charged: NotesUtils.tooltip('CA', 'Charged Attack'),
    exSpecial: NotesUtils.imageOf(Utils.appendRepoUrl('assets/images/zzz/icons/ZZZ_ExSpecial.png'), 'EX Special'),
    special: NotesUtils.imageOf(Utils.appendRepoUrl('assets/images/zzz/icons/ZZZ_Special.png'), 'Special'),
    ultimate: NotesUtils.imageOf(Utils.appendRepoUrl('assets/images/zzz/icons/ZZZ_Ultimate.png'), 'Ultimate'),
    chain: NotesUtils.imageOf(Utils.appendRepoUrl('assets/images/zzz/icons/ZZZ_Chain.png'), 'Chain Attack'),
    dash: NotesUtils.imageOf(Utils.appendRepoUrl('assets/images/zzz/icons/ZZZ_Dash.png'), 'Dash'),
    assault: NotesUtils.imageOf(Utils.appendRepoUrl('assets/images/zzz/icons/ZZZ_Physical.png'), 'Assault'),
    burn: NotesUtils.imageOf(Utils.appendRepoUrl('assets/images/zzz/icons/ZZZ_Fire.png'), 'Burn'),
    shock: NotesUtils.imageOf(Utils.appendRepoUrl('assets/images/zzz/icons/ZZZ_Electric.png'), 'Shock'),
    freeze: NotesUtils.imageOf(Utils.appendRepoUrl('assets/images/zzz/icons/ZZZ_Ice.png'), 'Freeze'),
    corrupt: NotesUtils.imageOf(Utils.appendRepoUrl('assets/images/zzz/icons/ZZZ_Ether.png'), 'Corrupt'),
  }

  static formatNotes(text: string | null, gameCode: string) {
    if (text == null) {
      return text;
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

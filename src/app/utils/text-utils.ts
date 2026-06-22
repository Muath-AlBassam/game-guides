import { DomSanitizer } from "@angular/platform-browser";
import { CharactersService } from "../services/characters.service";
import { Constants } from "./constants";
import { Utils } from "./utils";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class TextUtils {

  constructor(private charactersService: CharactersService, private sanitizer: DomSanitizer) {}

  private isGI = (gameCode: string): boolean => gameCode == Constants.games.GI;
  private isHSR = (gameCode: string): boolean => gameCode == Constants.games.HSR;
  private isZZZ = (gameCode: string): boolean => gameCode == Constants.games.ZZZ;
  private isHI3 = (gameCode: string): boolean => gameCode == Constants.games.HI3;

  private repeat = (text: string) => `<span class="arrow-border">${text}</span>`;
  private tooltip = (text: string, tooltip: string) => `<span title="${tooltip}">${text}</span>`;
  private htmlTooltip = (text: string, tooltip: string) => `<span class="html-tooltip">${text}<span class="tooltip-content">${tooltip}</span></span>`;
  private imageOf = (path: string, tooltip: string | null = 'image', style: string | null = null) => `<img src="${path}" width="30" title="${tooltip}" style="margin-top: -8px; ${style ?? ''}" />`;
  private splitImage2Of = (path1: string, path2: string) => `<div class="split-image-2"><img src="${path1}" class="left-img" width="30"><img src="${path2}" class="right-img" width="30"></div>`;
  private splitImage4Of = (path1: string, path2: string, path3: string, path4: string) => `<div class="split-image-4"><img src="${path1}" class="top-img" width="30"><img src="${path2}" class="right-img" width="30"><img src="${path3}" class="bottom-img" width="30"><img src="${path4}" class="left-img" width="30"></div>`;
  private color = (text: string, color: string) => `<b style="color: #${color}">${text}</b>`;
  private applyColor(gameCode: string, text: string, gi: string = '', hsr: string = '', zzz: string = '', hi3 = '') {
    if (this.isGI(gameCode) && gi) {
      return this.color(text, gi);
    } else if (this.isHSR(gameCode) && hsr) {
      return this.color(text, hsr);
    } else if (this.isZZZ(gameCode) && zzz) {
      return this.color(text, zzz);
    } else if (this.isHI3(gameCode) && hi3) {
      return this.color(text, hi3);
    } else {
      return text;
    }
  }

  private getCharacterImage(name: string, gameCode: string) {
    const charmd = this.charactersService.getOne(gameCode, name?.trim());
    const imgUrl = charmd && charmd.imageUrl ? charmd.imageUrl : Constants.images.unknownCharacter;
    return this.imageOf(imgUrl, name);
  }

  private getCharacterImageAsTooltip(name: string, gameCode: string) {
    return `<b class="img-tooltip no-break">${name}${this.getCharacterImage(name, gameCode)}</b>`;
  }

  // GI moves shortcuts
  private gi = {
    normal: this.tooltip('N', 'Normal Attack'),
    charged: this.tooltip('CA', 'Charged Attack'),
    skill: this.tooltip('E', 'Skill'),
    tapSkill: this.tooltip('tE', 'Tap Skill'),
    holdSkill: this.tooltip('hE', 'Hold Skill'),
    ultimate: this.tooltip('Q', 'Ultimate'),
    plunge: this.tooltip('P', 'Plunge'),
  }

  // ZZZ moves shortcuts
  private zzz = {
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

  TEXT_FORMATS_LIST(gameCode: string) {
    return [
      { groupId: 1, title: 'Normal Attack', games: 'GI', offset: 6, regex: /normal/g, replace: (match: any) => this.isGI(gameCode) ? this.gi.normal : match },
      { groupId: 1, title: 'Charged Attack', games: 'GI,ZZZ', offset: 7, regex: /charged/g, replace: (match: any) => this.isGI(gameCode) ? this.gi.charged : this.isZZZ(gameCode) ? this.zzz.charged : match },
      { groupId: 1, title: 'Skill (Tap)', games: 'GI', offset: 8, regex: /tapskill/g, replace: (match: any) => this.isGI(gameCode) ? this.gi.tapSkill : match },
      { groupId: 1, title: 'Skill (Hold)', games: 'GI', offset: 9, regex: /holdskill/g, replace: (match: any) => this.isGI(gameCode) ? this.gi.holdSkill : match },
      { groupId: 1, title: 'Skill', games: 'GI', offset: 5, regex: /skill/g, replace: (match: any) => this.isGI(gameCode) ? this.gi.skill : match },
      { groupId: 1, title: 'Ultimate', games: 'GI,ZZZ', offset: 8, regex: /ultimate/g, replace: (match: any) => this.isGI(gameCode) ? this.gi.ultimate : this.isZZZ(gameCode) ? this.zzz.ultimate : match },
      { groupId: 1, title: 'Plunge', games: 'GI', offset: 6, regex: /plunge/g, replace: (match: any) => this.isGI(gameCode) ? this.gi.plunge : match },
      { groupId: 1, title: 'Basic Attack', games: 'ZZZ', offset: 5, regex: /basic/g, replace: (match: any) => this.isZZZ(gameCode) ? this.zzz.basic : match },
      { groupId: 1, title: 'EX Special', games: 'ZZZ', offset: 9, regex: /exspecial/g, replace: (match: any) => this.isZZZ(gameCode) ? this.zzz.exSpecial : match },
      { groupId: 1, title: 'Special', games: 'ZZZ', offset: 7, regex: /special/g, replace: (match: any) => this.isZZZ(gameCode) ? this.zzz.special : match },
      { groupId: 1, title: 'Chain Attack', games: 'ZZZ', offset: 5, regex: /chain/g, replace: (match: any) => this.isZZZ(gameCode) ? this.zzz.chain : match },
      { groupId: 1, title: 'Dash', games: 'ZZZ', offset: 4, regex: /dash/g, replace: (match: any) => this.isZZZ(gameCode) ? this.zzz.dash : match },
      { groupId: 1, title: 'Assault', games: 'ZZZ', offset: 7, regex: /assault/g, replace: (match: any) => this.isZZZ(gameCode) ? this.zzz.assault : match },
      { groupId: 1, title: 'Burn', games: 'ZZZ', offset: 4, regex: /burn/g, replace: (match: any) => this.isZZZ(gameCode) ? this.zzz.burn : match },
      { groupId: 1, title: 'Shock', games: 'ZZZ', offset: 5, regex: /shock/g, replace: (match: any) => this.isZZZ(gameCode) ? this.zzz.shock : match },

      { groupId: 2, title: 'Switch', games: 'ALL', offset: 6, regex: /switch/g, replace: () => '>' },
      { groupId: 2, title: 'Multiply (x)', games: 'ALL', offset: 7, regex: / times /g, replace: () => Constants.unicode.times },
      { groupId: 2, title: 'Arrow (Up)', games: 'ALL', offset: 8, regex: /arrow_up/g, replace: () => `<span style="margin: auto 5px;">${Constants.unicode.arrow_up}</span>` },
      { groupId: 2, title: 'Arrow (Down)', games: 'ALL', offset: 10, regex: /arrow_down/g, replace: () => `<span style="margin: auto 5px;">${Constants.unicode.arrow_down}</span>` },
      { groupId: 2, title: 'Arrow (Right)', games: 'ALL', offset: 11, regex: /arrow_right/g, replace: () => `<span style="margin: auto 5px;">${Constants.unicode.arrow_right}</span>` },
      { groupId: 2, title: 'Arrow (Left)', games: 'ALL', offset: 10, regex: /arrow_left/g, replace: () => `<span style="margin: auto 5px;">${Constants.unicode.arrow_left}</span>` },

      { groupId: 3, title: 'Character Image', games: 'ALL', offset: 2, regex: /c_(.*?)_c/g, replace: (match: any, capture: any) => this.getCharacterImage(capture, gameCode) },
      { groupId: 3, title: 'Character Image + Name', games: 'ALL', offset: 3, regex: /cn_(.*?)_cn/g, replace: (match: any, capture: any) => this.getCharacterImage(capture, gameCode) + ` <b class="no-break">${capture}</b>` },
      { groupId: 3, title: 'Character Image as Tooltip', games: 'ALL', offset: 3, regex: /ca_(.*?)_ca/g, replace: (match: any, capture: any) => this.getCharacterImageAsTooltip(capture, gameCode) },

      { groupId: 4, title: 'Title', games: 'ALL', offset: 2, regex: /t_(.*?)_t/g, replace: (match: any, capture: any) => `<b style="text-transform: uppercase; margin-right: 10px;">${capture}:</b>` },
      { groupId: 4, title: 'Image', games: 'ALL', offset: 4, regex: /img_(.*?)_img/g, replace: (match: any, capture: any) => this.imageOf(Utils.appendRepoUrl(capture)) },
      { groupId: 4, title: 'Double Image', games: 'ALL', offset: 5, regex: /img2_(.*?)\+(.*?)_img2/g, replace: (match: any, capture1: any, capture2: any) => this.splitImage2Of(Utils.appendRepoUrl(capture1), Utils.appendRepoUrl(capture2)) },
      { groupId: 4, title: 'Quad Image', games: 'ALL', offset: 5, regex: /img4_(.*?)\+(.*?)\+(.*?)\+(.*?)_img4/g, replace: (match: any, cap1: any, cap2: any, cap3: any, cap4: any) => this.splitImage4Of(Utils.appendRepoUrl(cap1), Utils.appendRepoUrl(cap2), Utils.appendRepoUrl(cap3), Utils.appendRepoUrl(cap4)) },
      { groupId: 4, title: 'Small Text', games: 'ALL', offset: 3, regex: /st_(.*?)_st/g, replace: (match: any, capture: any) => `<span style="font-size: 0.8rem; font-weight: normal; margin-left: 1px; vertical-align: 2px; opacity: 0.6;">${capture}</span>` },
      { groupId: 4, title: 'Bold', games: 'ALL', offset: 2, regex: /b_(.*?)_b/g, replace: (match: any, capture: any) => `<b>${capture}</b>` },
      { groupId: 4, title: 'Underline', games: 'ALL', offset: 2, regex: /u_(.*?)_u/g, replace: (match: any, capture: any) => `<u>${capture}</u>` },
      { groupId: 4, title: 'Italic', games: 'ALL', offset: 2, regex: /i_(.*?)_i/g, replace: (match: any, capture: any) => `<i>${capture}</i>` },
      { groupId: 4, title: 'New Line', games: 'ALL', offset: 3, regex: /nl_/g, replace: () => `<br/>` },
      { groupId: 4, title: 'Text + Tooltip', games: 'ALL', offset: 3, regex: /tp_(.*?)_(.*?)_tp/g, replace: (match: any, capture1: any, capture2: any) => this.htmlTooltip(capture1, capture2) },
      { groupId: 4, title: 'Combo', games: 'ALL', offset: 3, regex: /cb_(.*?)_cb/g, replace: (match: any, capture: any) => `<b>[</b>${capture}<b>]</b>` },
    ];
  }

  COLOR_FORMATS_LIST(gameCode: string) {
    return [
      { title: 'Fire', offset: 8, regex: /\b(?:fire dmg|fire|burning)\b/gi, replace: (match: any) => this.applyColor(gameCode, match, '', 'ff5521', 'ff5521', 'fe7b79') },
      { title: 'Electric', offset: 12, regex: /\b(?:electric dmg|electric|shocked)\b/gi, replace: (match: any) => this.applyColor(gameCode, match, '', '', '2eb6ff') },
      { title: 'Ether', offset: 9, regex: /\b(?:ether dmg|ether|corruption)\b/gi, replace: (match: any) => this.applyColor(gameCode, match, '', '', 'fe437e') },
      { title: 'Ice', offset: 7, regex: /\b(?:ice dmg|ice|freeze|shatter)\b/gi, replace: (match: any) => this.applyColor(gameCode, match, '', '98eff0', '98eff0', '78ffe3') },
      { title: 'Physical', offset: 12, regex: /\b(?:physical dmg|physical sheer dmg|physical)\b/gi, replace: (match: any) => this.applyColor(gameCode, match, '', '979797', 'f0d12b', 'f59b41') },
      { title: 'Lightning', offset: 13, regex: /\b(?:lightning dmg|lightning)\b/gi, replace: (match: any) => this.applyColor(gameCode, match, '', 'c65ade', '', 'fbea78') },
      { title: 'Wind', offset: 8, regex: /\b(?:wind dmg|wind)\b/gi, replace: (match: any) => this.applyColor(gameCode, match, '', '61cf93') },
      { title: 'Quantum', offset: 11, regex: /\b(?:quantum dmg|quantum)\b/gi, replace: (match: any) => this.applyColor(gameCode, match, '', '766dd6') },
      { title: 'Imaginary', offset: 13, regex: /\b(?:imaginary dmg|imaginary)\b/gi, replace: (match: any) => this.applyColor(gameCode, match, '', 'f3e137') },
      { title: 'Pyro', offset: 8, regex: /\b(?:pyro dmg|pyro)\b/gi, replace: (match: any) => this.applyColor(gameCode, match, 'ef7938') },
      { title: 'Cryo', offset: 8, regex: /\b(?:cryo dmg|cryo)\b/gi, replace: (match: any) => this.applyColor(gameCode, match, '9fd6e3') },
      { title: 'Hydro', offset: 9, regex: /\b(?:hydro dmg|hydro)\b/gi, replace: (match: any) => this.applyColor(gameCode, match, '4cc2f1') },
      { title: 'Electro', offset: 11, regex: /\b(?:electro dmg|electro)\b/gi, replace: (match: any) => this.applyColor(gameCode, match, 'af8ec1') },
      { title: 'Anemo', offset: 9, regex: /\b(?:anemo dmg|anemo)\b/gi, replace: (match: any) => this.applyColor(gameCode, match, '74c2a8') },
      { title: 'Geo', offset: 7, regex: /\b(?:geo dmg|geo)\b/gi, replace: (match: any) => this.applyColor(gameCode, match, 'fab632') },
      { title: 'Dendro', offset: 10, regex: /\b(?:dendro dmg|dendro)\b/gi, replace: (match: any) => this.applyColor(gameCode, match, 'a5c83b') },
      { title: 'Numbers (%)', offset: 0, regex: /\d+(\.\d+)?%/gi, replace: (match: any) => this.color(match, 'f3e137') },
      { title: 'Numbers (s)', offset: 0, regex: /\d+(\.\d+)?s/gi, replace: (match: any) => this.color(match, 'f3e137') },
      { title: 'Numbers (n/s)', offset: 0, regex: /\d+(\.\d+)?\/s/gi, replace: (match: any) => this.color(match, 'f3e137') },
      { title: 'PHEC', offset: 0, regex: /[phec]{4}/gi, replace: (match: string) => match.split('').map(letter => {
          switch (letter) {
            case 'P': return this.color(letter, 'ef7938');
            case 'E': return this.color(letter, 'af8ec1');
            case 'C': return this.color(letter, '9fd6e3');
            case 'H': return this.color(letter, '4cc2f1');
            default: return letter;
          }
        }).join('')
      },
      //{ title: 'TTT', offset: 333, regex: /REGEX/g, replace: () => {} },
    ];
  }  

  format(text: string | null, gameCode: string) {
    if (text == null) {
      return '';
    }
    let formatted = String(text);
    for (const rule of this.TEXT_FORMATS_LIST(gameCode)) {
      formatted = formatted.replace(rule.regex, rule.replace);
    }
    return this.sanitizer.bypassSecurityTrustHtml(formatted);
  }

  colorize(text: string | null, gameCode: string) {
    if (text == null) {
      return '';
    }
    let colorized = String(text);
    for (const rule of this.COLOR_FORMATS_LIST(gameCode)) {
      colorized = colorized.replace(rule.regex, rule.replace);
    }
    return this.sanitizer.bypassSecurityTrustHtml(colorized);
  }

  formatAndColorize(text: string | null, gameCode: string) {
    if (text == null) {
      return '';
    }
    let formatted = String(text);
    const textFormatsList = this.TEXT_FORMATS_LIST(gameCode);
    for (const rule of textFormatsList) {
      formatted = formatted.replace(rule.regex, rule.replace);
    }
    const colorFormatsList = this.COLOR_FORMATS_LIST(gameCode);
    for (const rule of colorFormatsList) {
      formatted = formatted.replace(rule.regex, rule.replace);
    }
    return this.sanitizer.bypassSecurityTrustHtml(formatted);
  }
}
import { Injectable } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { CharactersService } from '@shared/api/characters.service';
import { Constants } from '@shared/utils/constants';
import { Utils } from '@shared/utils/utils';
import {
  TextFormatsConfig,
  TextFormatConfig,
  ColorFormatConfig,
  ReplacementConfig,
  ShortcutReplacement,
  ColorReplacementConfig
} from '@shared/utils/text-format.models';
import formats from '@assets/config/text-formats.json';

@Injectable({
  providedIn: 'root'
})
export class TextUtils {

  private readonly config = formats as TextFormatsConfig;

  constructor(
    private charactersService: CharactersService,
    private sanitizer: DomSanitizer
  ) {}

  // ===========================================================================
  // Public API
  // ===========================================================================

  format(text: string | null, gameCode: string): SafeHtml | string {
    if (text == null) {
      return '';
    }
    const formatted = this.applyRules(String(text), this.config.textFormats, gameCode);
    return this.sanitize(formatted);
  }

  colorize(text: string | null, gameCode: string): SafeHtml | string {
    if (text == null) {
      return '';
    }
    const colorized = this.applyRules(String(text), this.config.colorFormats, gameCode);
    return this.sanitize(colorized);
  }

  formatAndColorize(text: string | null, gameCode: string): SafeHtml | string {
    if (text == null) {
      return '';
    }
    let result = String(text);
    result = this.applyRules(result, this.config.textFormats, gameCode);
    result = this.applyRules(result, this.config.colorFormats, gameCode);
    return this.sanitize(result);
  }

  TEXT_FORMATS_LIST(gameCode: string): TextFormatConfig[] {
    return this.config.textFormats.filter(
      rule => this.isApplicable(rule.games, gameCode)
    );
  }

  COLOR_FORMATS_LIST(gameCode: string): ColorFormatConfig[] {
    return this.config.colorFormats.filter(
      rule => this.isApplicable(
        this.getColorGames(rule),
        gameCode
      )
    );
  }

  // ===========================================================================
  // Rule processing
  // ===========================================================================

  private applyRules(
    text: string,
    rules: Array<TextFormatConfig | ColorFormatConfig>,
    gameCode: string
  ): string {
    let result = text;
    for (const rule of rules) {
      if (!this.isApplicable(this.getRuleGames(rule), gameCode)) {
        continue;
      }
      const regex = new RegExp(rule.regex, rule.flags ?? 'g');
      result = result.replace(
        regex,
        (...args: any[]) => this.resolveReplacement(rule, gameCode, args)
      );
    }
    return result;
  }

  private resolveReplacement(
    rule: TextFormatConfig | ColorFormatConfig,
    gameCode: string,
    args: any[]
  ): string {
    const match = args[0] as string;
    const captures = args.slice(1);
    const replacement = rule.replacement;
    if (this.isColorReplacement(replacement)) {
      return this.resolveColorReplacement(match, gameCode, replacement);
    }
    return this.resolveTextReplacement(replacement, match, captures, gameCode);
  }

  // ===========================================================================
  // Text replacements
  // ===========================================================================

  private resolveTextReplacement(
    replacement: ReplacementConfig,
    match: string,
    captures: string[],
    gameCode: string
  ): string {
    switch (replacement.type) {
      case 'text':
        return replacement.value;
      case 'shortcut':
        return this.getShortcut(replacement, gameCode, match);
      case 'characterImage':
        return this.getCharacterImage(gameCode, captures[0]);
      case 'characterImageName':
        return this.getCharacterImage(gameCode, captures[0]) + ` <b class="no-break">${captures[0]}</b>`;
      case 'characterTooltip':
        return this.getCharacterImageAsTooltip(gameCode, captures[0]);
      case 'image':
        return this.imageOf(Utils.appendRepoUrl(captures[0]));
      case 'image2':
        return this.splitImage2Of(
          Utils.appendRepoUrl(captures[0]),
          Utils.appendRepoUrl(captures[1]));
      case 'image4':
        return this.splitImage4Of(
          Utils.appendRepoUrl(captures[0]),
          Utils.appendRepoUrl(captures[1]),
          Utils.appendRepoUrl(captures[2]),
          Utils.appendRepoUrl(captures[3]));
      case 'html':
        return this.applyTemplate(replacement.template, captures);
      case 'arrow':
        return this.arrow(replacement.direction);
      default:
        return match;
    }
  }

  // ===========================================================================
  // Color replacements
  // ===========================================================================

  private resolveColorReplacement(
    match: string,
    gameCode: string,
    replacement: ColorReplacementConfig
  ): string {
    const colorName =
      replacement.values[gameCode] ??
      replacement.values['ALL'];
    if (!colorName) {
      return match;
    }
    if (replacement.colorType === 'number') {
      return this.color(match, '--' + colorName);
    }
    return this.color(match, `--${replacement.colorType}-${gameCode}-${colorName}`);
  }

  // ===========================================================================
  // Shortcuts
  // ===========================================================================

  private readonly gi = {
    normal: this.tooltip('N', 'Normal Attack'),
    charged: this.tooltip('CA', 'Charged Attack'),
    skill: this.tooltip('E', 'Elemental Skill'),
    tapSkill: this.tooltip('tE', 'Elemental Skill (Tap)'),
    holdSkill: this.tooltip('hE', 'Elemental Skill (Hold)'),
    burst: this.tooltip('Q', 'Elemental Burst'),
    plunge: this.tooltip('P', 'Plunge')
  };

  private readonly zzz = {
    basic: this.imageOf(Utils.appendRepoUrl('assets/images/zzz/icons/ZZZ_Basic.png'), 'Basic', 'margin-top: 0;'),
    charged: this.tooltip(
      this.imageOf(Utils.appendRepoUrl('assets/images/zzz/icons/ZZZ_Basic.png'), 'Charged Attack', 'margin-top: 0;') 
      + `<span style="font-size: 0.8rem; font-weight: normal; margin-left: 1px; vertical-align: 2px; opacity: 0.6;">(Hold)</span>`,
      'Charged Attack'
    ),
    exSpecial: this.imageOf(Utils.appendRepoUrl('assets/images/zzz/icons/ZZZ_ExSpecial.png'), 'EX Special', 'margin-top: 0;'),
    special: this.imageOf(Utils.appendRepoUrl('assets/images/zzz/icons/ZZZ_Special.png'), 'Special', 'margin-top: 0;'),
    ultimate: this.imageOf(Utils.appendRepoUrl('assets/images/zzz/icons/ZZZ_Ultimate.png'), 'Ultimate', 'margin-top: 0;'),
    chain: this.imageOf(Utils.appendRepoUrl('assets/images/zzz/icons/ZZZ_Chain.png'), 'Chain Attack', 'margin-top: 0;'),
    dash: this.imageOf(Utils.appendRepoUrl('assets/images/zzz/icons/ZZZ_Dash.png'), 'Dash', 'margin-top: 0;'),
    assault: this.imageOf(Utils.appendRepoUrl('assets/images/zzz/icons/ZZZ_Physical.png'), 'Assault', 'margin-top: 0;'),
    burn: this.imageOf(Utils.appendRepoUrl('assets/images/zzz/icons/ZZZ_Fire.png'), 'Burn', 'margin-top: 0;'),
    shock: this.imageOf(Utils.appendRepoUrl('assets/images/zzz/icons/ZZZ_Electric.png'), 'Shock', 'margin-top: 0;'),
    freeze: this.imageOf(Utils.appendRepoUrl('assets/images/zzz/icons/ZZZ_Ice.png'), 'Freeze', 'margin-top: 0;'),
    corrupt: this.imageOf(Utils.appendRepoUrl('assets/images/zzz/icons/ZZZ_Ether.png'), 'Corrupt', 'margin-top: 0;')
  };

  private getShortcut(replacement: ShortcutReplacement, gameCode: string, fallback: string): string {
    const shortcut =
      replacement.values?.[gameCode] ??
      replacement.value;
    if (!shortcut) {
      return fallback;
    }
    if (gameCode === Constants.games.GI) {
      return (this.gi as Record<string, string>)[shortcut] ?? fallback;
    }
    if (gameCode === Constants.games.ZZZ) {
      return (this.zzz as Record<string, string>)[shortcut] ?? fallback;
    }
    return fallback;
  }

  // ===========================================================================
  // Character helpers
  // ===========================================================================

  private getCharacterImage(gameCode: string, name: string): string {
    const character =
      this.charactersService.getOneByGame(gameCode, name?.trim());
    const imageUrl =
      character?.imageUrl ??
      Constants.images.unknownCharacter;
    return this.imageOf(imageUrl, name);
  }

  private getCharacterImageAsTooltip(gameCode: string, name: string): string {
    return `<b class="img-tooltip no-break">${name}${this.getCharacterImage(gameCode, name)}</b>`;
  }

  // ===========================================================================
  // HTML helpers
  // ===========================================================================

  private tooltip(text: string, tooltip: string): string {
    return `<span title="${tooltip}">${text}</span>`;
  }

  private imageOf(path: string, tooltip: string | null = 'image', style: string | null = null): string {
    return `<img src="${path}" width="30" title="${tooltip}" style="margin-top: -8px; ${style ?? ''}" />`;
  }

  private splitImage2Of(path1: string, path2: string): string {
    return `<div class="split-image-2"><img src="${path1}" class="left-img" width="30"><img src="${path2}" class="right-img" width="30"></div>`;
  }

  private splitImage4Of(path1: string, path2: string, path3: string, path4: string): string {
    return `<div class="split-image-4"><img src="${path1}" class="top-img" width="30"><img src="${path2}" class="right-img" width="30"><img src="${path3}" class="bottom-img" width="30"><img src="${path4}" class="left-img" width="30"></div>`;
  }

  private htmlTooltip(text: string, tooltip: string): string {
    return `<span class="html-tooltip">${text}<span class="tooltip-content">${tooltip}</span></span>`;
  }

  private arrow(direction: 'up' | 'down' | 'left' | 'right'): string {
    const arrows = {
      up: Constants.unicode.arrow_up,
      down: Constants.unicode.arrow_down,
      left: Constants.unicode.arrow_left,
      right: Constants.unicode.arrow_right
    };
    return `<span style="margin: auto 5px;">${arrows[direction]}</span>`;
  }

  private color(text: string, color: string): string {
    return `<b style="color: var(${color})">${text}</b>`;
  }

  private applyTemplate(template: string, captures: string[]): string {
    return template.replace(
      /\$(\d+)/g,
      (match, index) => captures[Number(index) - 1] ?? match
    );
  }

  // ===========================================================================
  // Utility
  // ===========================================================================

  private isApplicable(games: string[], gameCode: string): boolean {
    return games.includes('ALL') || games.includes(gameCode);
  }

  private getRuleGames(rule: TextFormatConfig | ColorFormatConfig): string[] {
    if ('games' in rule) {
      return rule.games;
    }
    return Object.keys(rule.replacement.values);
  }

  private getColorGames(rule: ColorFormatConfig): string[] {
    return Object.keys(rule.replacement.values);
  }

  private sanitize(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  private isColorReplacement(replacement: any): replacement is ColorReplacementConfig {
    return replacement.type === 'color';
  }
}
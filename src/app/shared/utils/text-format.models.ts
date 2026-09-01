export interface TextFormatsConfig {
  textFormats: TextFormatConfig[];
  colorFormats: ColorFormatConfig[];
}

export interface TextFormatConfig {
  groupId: number;
  title: string;
  games: string[];
  offset: number;
  regex: string;
  flags?: string;
  replacement: ReplacementConfig;
}

export interface ColorFormatConfig {
  title: string;
  regex: string;
  flags?: string;
  replacement: ColorReplacementConfig;
}

export type ReplacementConfig =
  | TextReplacement
  | ShortcutReplacement
  | CharacterImageReplacement
  | CharacterImageNameReplacement
  | CharacterTooltipReplacement
  | ImageReplacement
  | Image2Replacement
  | Image4Replacement
  | HtmlReplacement
  | ArrowReplacement;

export interface TextReplacement {
  type: 'text';
  value: string;
}

export interface ShortcutReplacement {
  type: 'shortcut';
  value?: string;
  values?: Record<string, string>;
}

export interface CharacterImageReplacement {
  type: 'characterImage';
}

export interface CharacterImageNameReplacement {
  type: 'characterImageName';
}

export interface CharacterTooltipReplacement {
  type: 'characterTooltip';
}

export interface ImageReplacement {
  type: 'image';
}

export interface Image2Replacement {
  type: 'image2';
}

export interface Image4Replacement {
  type: 'image4';
}

export interface HtmlReplacement {
  type: 'html';
  template: string;
}

export interface ArrowReplacement {
  type: 'arrow';
  direction: 'up' | 'down' | 'left' | 'right';
}

export interface ColorReplacementConfig {
  type: 'color';
  colorType: string;
  values: {
    [gameCode: string]: string | undefined;
  };
}
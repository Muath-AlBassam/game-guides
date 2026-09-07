import { environment } from '../../../environments/environment';
import { ListByCategoryModel } from '../models/list-by-category.model';
import { LookupModel } from '../models/lookup.model';
import { Constants } from '../utils/constants';

export class Utils {

  constructor() { }

  static generateUUID(): any {
    return 'xxxxxxxx'.replace(/[x]/g, function () {
      const r = Math.random() * 16 | 0;
      return r.toString(16);
    });
  }

  static isMobile(): boolean {
    const mq = window.matchMedia(`(max-width: ${Constants.code.mobileMaxWidth})`);
    return mq.matches;
  }

  static appendRepoUrl(imageUrl: any): any {
    if (imageUrl) {
      return environment.imagesRepositoryURL + imageUrl;
    }
    return imageUrl;
  }

  static groupBy(array: any[], keyAttr1: string, keyAttr2: string | null = null): Map<any, any> {
    const map = new Map();
    array.forEach(item => {
      const key = keyAttr2 ? `${item[keyAttr1]}-${item[keyAttr2]}` : item[keyAttr1];
      if (!map.has(key)) {
        map.set(key, []);
      }
      map.get(key).push(item);
    });
    return map;
  }

  static groupByLookup<T>(
    items: T[],
    lookup: LookupModel[],
    field: keyof T
  ): ListByCategoryModel<T>[] {
    return lookup
      .map(category => ({
        label: category.label,
        list: items.filter(item => item[field] === category.code),
        order: Number(category['order'])
      }))
      .filter(item => item.list.length > 0)
      .sort((a, b) => Number(a['order']) - Number(b['order']));
  }

  static isNumber(text: any) {
    return !isNaN(Number(text));
  }

  static rarityCSSVar(gameCode: string, code: string | undefined) {
    if (gameCode && code) {
      return `var(--rarity-${gameCode}-${code})`;
    }
    return '';
  }

  static elementCSSVar(gameCode: string, code: string | undefined, opacity?: number) {
    if (gameCode && code) {
      const cssVar = `var(--element-${gameCode}-${code})`;
      return opacity !== undefined ? `color-mix(in srgb, ${cssVar} ${opacity * 100}%, transparent)` : cssVar;
    }
    return '';
  }
}

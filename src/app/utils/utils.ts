import { environment } from '../../environments/environment';
import { Constants } from './constants';

export class Utils {

  constructor() { }

  static getGame(): any {
    if (window.location.hash) {
      let hash = window.location.hash;
      /* #/{gameCode} */
      return hash.split('/')[1];
    } else {
      return null;
    }
  }

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

  static appendRepoUrl(imageUrl: string): string {
    return environment.imagesRepositoryURL + imageUrl;
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
}

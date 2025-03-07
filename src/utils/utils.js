class Utils {
    static getGameFromUrl() {
        if (window.location.hash) {
            return window.location.hash.replace('#', '');
        } else {
            return null;
        }
    }

    static generateUUID() {
        return 'xxxxxxxx'.replace(/[x]/g, function() {
            const r = Math.random() * 16 | 0;
            return r.toString(16);
        });
    }

    // Excel data mapping
    static arrayToMapOfMaps(array, mapObjectCallback, uniqueKey = 'CODE') {
        let groupedByGame = this.arrayToGroupedMap(array, 'GAME_CODE');
        groupedByGame.forEach((gv, gk) => {
            let groupedByCode = this.arrayToGroupedMap(gv, uniqueKey)
            groupedByCode.forEach((cv, ck) => {
                groupedByCode.set(ck, mapObjectCallback(cv[0]))
            })
            groupedByGame.set(gk, groupedByCode);
        });
        return groupedByGame;
    }

    static arrayToGroupedMap(array, keyAttr) {
        const map = new Map();
        array.forEach(item => {
          const key = item[keyAttr];
          if (!map.has(key)) {
            map.set(key, []);
          }
          map.get(key).push(item);
        });
        return map;
    }

    // Media Utils
    static isMobile() {
        const mq = window.matchMedia(`(max-width: ${Constants.code.mobileMaxWidth})`);
        return mq.matches;
    }

    // HTML Utils
    static ngFor(list, logicWithHtml) {
        if (list) {
            return list.map(logicWithHtml).join('');
        }
        return '';
    }

    static ngForMap(map, logicWithHtml) {
        if (map) {
            return this.ngFor([...map.values()], logicWithHtml);
        }
        return '';
    }

    static ngIf(flag, content, elseContent = '') {
        if (flag) {
            return content;
        }
        return elseContent;
    }

    static ngForIf(flag, list, logicWithHtml, elseContent = '') {
        if (flag && list) {
            return list.map(logicWithHtml).join('');
        }
        return elseContent;
    }

    // JSON Utils
    static toJSONString(object) {
        try {
            return JSON.stringify(object).replace(/"/g, '&quot;');
        } catch (e) {
            return null;
        }
    }
    static fromJSONString(str) {
        try {
            return JSON.parse(str);
        } catch (e) {
            return null;
        }
    }
}

// general function to close any dialog
function closeDialog() {
    Array.from(document.getElementsByClassName('dialog-shown')).forEach(elemnt => {
        elemnt.classList.remove('dialog-shown');
    })
}

function emitEvent(eventName, value) {
    window.dispatchEvent(new CustomEvent(eventName, { detail: value }));
}
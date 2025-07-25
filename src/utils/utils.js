class Utils {

    static generateUUID() {
        return 'xxxxxxxx'.replace(/[x]/g, function() {
            const r = Math.random() * 16 | 0;
            return r.toString(16);
        });
    }

    // Media Utils
    static isMobile() {
        const mq = window.matchMedia(`(max-width: ${Constants.code.mobileMaxWidth})`);
        return mq.matches;
    }

    // HTML Utils
    static ngFor(list, logicWithHtml) {
        if (list) {
            if (list instanceof Map) {
                return [...list.values()].map(logicWithHtml).join('');
            }
            return list.map(logicWithHtml).join('');
        }
        return '';
    }

    static ngIf(flag, content, elseContent = '') {
        if (flag) {
            return content;
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

    // Data Utils
    static appendRepoUrl(imageUrl) {
        if (imageUrl) {
            return environment.imagesRepositoryURL + imageUrl;
        }
        return null;
    }

    // Repository Utils
    // groups array to map by 2 levels: GAME_CODE then @uniqueKey
    static arrayTo2LevelMap(array, objectMappingCallback, uniqueKey = 'CODE') {
        let groupedByGame = this.groupBy(array, 'GAME_CODE');
        groupedByGame.forEach((gv, gk) => {
            let groupedByCode = this.arrayTo1LevelMap(gv, objectMappingCallback, uniqueKey)
            groupedByGame.set(gk, groupedByCode);
        });
        return groupedByGame;
    }

    // groups array to map by 1 level: @uniqueKey
    static arrayTo1LevelMap(array, objectMappingCallback, uniqueKey = 'CODE') {
        let groupedByCode = this.groupBy(array, uniqueKey);
        groupedByCode.forEach((cv, ck) => {
            groupedByCode.set(ck, objectMappingCallback(cv))
        });
        return groupedByCode;
    }

    // groups array to map using a key
    static groupBy(array, keyAttr) {
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

    // Other Utils
    static categorizeMap(map, categoryFieldName) {
        const groupedMap = new Map([]);
        for (const [key, obj] of map) {
          if (!groupedMap.has(obj[categoryFieldName])) {
            groupedMap.set(obj[categoryFieldName], { text: obj[categoryFieldName], items: new Map([]) });
          }
          groupedMap.get(obj[categoryFieldName]).items.set(key, obj);
        }
        return groupedMap;
    }
}

// general function to close any dialog
function closeDialog() {
    Array.from(document.getElementsByClassName('dialog-shown')).forEach(elemnt => {
        elemnt.classList.remove('dialog-shown');
    })
}

// event emitter
function emitEvent(eventName, value) {
    window.dispatchEvent(new CustomEvent(eventName, { detail: value }));
}
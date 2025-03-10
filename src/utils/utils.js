class Utils {
    static getGameFromUrl() {
        if (window.location.hash) {
            return window.location.hash.replace('#', '');
        } else {
            return null;
        }
    }

    static getImageUrl(imageUrl) {
        if (imageUrl) {
            return environment.IMAGES_REPOSITORY_URL + imageUrl;
        }
        return null;
    }

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

    // Mapping Utils
    // groups array to map by 2 levels: GAME_CODE then @uniqueKey
    static arrayTo2LevelMap(array, objectMappingCallback, uniqueKey = 'CODE') {
        let groupedByGame = this.groupBy(array, 'GAME_CODE');
        groupedByGame.forEach((gv, gk) => {
            let groupedByCode = this.groupBy(gv, uniqueKey)
            groupedByCode.forEach((cv, ck) => {
                groupedByCode.set(ck, objectMappingCallback(cv))
            });
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
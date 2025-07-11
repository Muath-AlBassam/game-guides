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
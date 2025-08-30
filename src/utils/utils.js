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
                // a list of lists, where key is index 0 & value is index 1
                return [...list].map(logicWithHtml).join('');
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
    // groups array to map using a key
    static groupBy(array, keyAttr1, keyAttr2 = null) {
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
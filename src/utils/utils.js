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

    static escapeHtml(text) {
        return text
            .replace(/&/g, '&amp;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
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

// event emitter
function emitEvent(eventName, value) {
    window.dispatchEvent(new CustomEvent(eventName, { detail: value }));
}

// general function to close any dialog
function closeDialog() {
    Array.from(document.getElementsByClassName('dialog-shown')).forEach(elemnt => {
        elemnt.classList.remove('dialog-shown');
    });
    removeQueryParameter(['t', 'c']);
}

function openCharacterDetailsDialog(gameCode, character) {
    if (null != buildsRepository.getByCharacter(gameCode, character)) {
        closeDialog();
        // trigger attributeChangedCallback & set data
        document.getElementById('character-details-dialog').setAttribute('character', character);
        document.getElementById('character-details-dialog').setAttribute('gamecode', gameCode);
        // add show class to dialog
        document.getElementById('character-details-dialog-body').classList.add('dialog-shown');
        // add id to url
        addQueryParameter('c', character);
    }
}

function openTeamDetailsDialog(gameCode, teamCode) {
    closeDialog();
    // trigger attributeChangedCallback & set data
    document.getElementById('team-dialog').setAttribute('gamecode', gameCode);
    document.getElementById('team-dialog').setAttribute('teamCode', teamCode);
    // add show class to dialog
    document.getElementById('team-dialog-body').classList.add('dialog-shown');
    // add id to url
    addQueryParameter('t', teamCode);
}
class Utils {
    static getGameFromUrl() {
        if (window.location.hash) {
            return window.location.hash.replace('#', '');
        } else {
            return null;
        }
    }

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
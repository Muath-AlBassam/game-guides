class Utils {
    static getGameFromUrl() {
        return window.location.hash.replace('#', '');
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

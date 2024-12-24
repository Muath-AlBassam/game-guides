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

    static ngIf(flag, content) {
        if (flag) {
            return content;
        }
        return '';
    }
}

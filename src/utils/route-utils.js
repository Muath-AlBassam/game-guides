// Example route: /#/GI/characters

class RouteUtils {

    static getGame() {
        if (window.location.hash) {
            let hash = window.location.hash;
            return hash.split('/')[1];
        } else {
            return null;
        }
    }

    static getPage() {
        if (window.location.hash) {
            let hash = window.location.hash;
            return hash.split('/')[2];
        } else {
            return null;
        }
    }
}
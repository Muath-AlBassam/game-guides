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
}
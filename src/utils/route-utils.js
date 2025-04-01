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

    static getCurrentPage() {
        if (window.location.hash) {
            let hash = window.location.hash;
            return hash.split('/')[2];
        } else {
            return null;
        }
    }

    static getDefaultPage(gameStyle = Constants.gameStyles.NONE) {
        if (Constants.gameStyles.TEAMS == gameStyle) {
            return 'teams';
        } else if (Constants.gameStyles.FIGHT == gameStyle) {
            return 'characters';
        }
        return '';
    }
}
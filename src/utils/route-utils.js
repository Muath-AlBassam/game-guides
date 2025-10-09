class RouteUtils {

    static getGame() {
        if (window.location.hash) {
            let hash = window.location.hash;
            /*
                #/{gameCode}
                #/{gameCode}/{page}
            */
            console.log(hash);
            return hash.split('/')[1];
        } else {
            return null;
        }
    }

    static getCurrentPage() {
        if (window.location.hash) {
            let hash = window.location.hash;
            /*
                #/{gameCode}/{page}
            */
            console.log(hash);
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
        } else if (Constants.gameStyles.LOOTER_SHOOTER == gameStyle) {
            return 'characters';
        }
        return '';
    }
}

function addQueryParameter(key, val) {
    const url = new URL(window.location.href);
    url.searchParams.set(key, val);
    history.pushState({}, '', url.toString());
}

function removeQueryParameter(keys) {
    const url = new URL(window.location.href);
    keys.forEach(k => url.searchParams.delete(k));
    history.pushState({}, '', url.toString());
}

function getQueryParameter(key) {
    const params = new URLSearchParams(window.location.search);
    return params.get(key);
}
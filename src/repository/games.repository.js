
class GamesRepository {
    
    constructor() {
        this.fetchData();
    }

    fetchData() {
        dataClient.loadData('GAMES').then(games => {
            this.data = Utils.arrayTo1LevelMap(
                games,
                v => {
                    return {
                        label: v[0].LABEL,
                        code: v[0].CODE,
                        style: v[0].STYLE,
                        teamSize: v[0].TEAM_SIZE,
                        hasPet: v[0].HAS_PET,
                        iconUrl: v[0].ICON_URL,
                        logoUrl: v[0].LOGO_URL,
                        backgroundUrl: v[0].BACKGROUND_URL,
                        guideUrl: v[0].GUIDE_URL
                    };
                }
            );
        });
    }

    getAllGames() {
        return this.data;
    }
    
    getGame(gameCode) {
        return this.getAllGames().get(gameCode);
    }

    data = new Map([]);
}

const gamesRepository = new GamesRepository();

class GamesRepository {

    gamesList = [];
    
    constructor() {
        this.fetchData();
    }

    fetchData() {
        dataClient.loadData('GAMES').then(games => {
            this.gamesList = games.map(g => ({
                code: g.CODE,
                label: g.LABEL,
                style: g.STYLE,
                teamSize: g.TEAM_SIZE,
                hasPet: g.HAS_PET,
                iconUrl: Utils.appendRepoUrl(g.ICON_URL),
                logoUrl: Utils.appendRepoUrl(g.LOGO_URL),
                backgroundUrl: Utils.appendRepoUrl(g.BACKGROUND_URL),
                guideUrl: g.GUIDE_URL
            }));
        });
    }

    getAll() {
        return this.gamesList;
    }
    
    getOne(gameCode) {
        return this.gamesList.find(g => g.code == gameCode);
    }
}

const gamesRepository = new GamesRepository();
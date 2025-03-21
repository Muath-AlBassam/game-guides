
class GamesRepository {

    gamesMap = new Map([]);
    
    constructor() {
        this.fetchData();
    }

    fetchData() {
        dataClient.loadData('GAMES').then(games => {
            this.gamesMap = DataUtils.arrayTo1LevelMap(
                games,
                v => {
                    return {
                        label: v[0].LABEL,
                        code: v[0].CODE,
                        style: v[0].STYLE,
                        teamSize: v[0].TEAM_SIZE,
                        hasPet: v[0].HAS_PET,
                        iconUrl: DataUtils.getImageUrl(v[0].ICON_URL),
                        logoUrl: DataUtils.getImageUrl(v[0].LOGO_URL),
                        backgroundUrl: DataUtils.getImageUrl(v[0].BACKGROUND_URL),
                        guideUrl: v[0].GUIDE_URL
                    };
                }
            );
        });
    }

    getAll() {
        return this.gamesMap;
    }
    
    getOne(gameCode) {
        return this.getAll().get(gameCode);
    }
}

const gamesRepository = new GamesRepository();
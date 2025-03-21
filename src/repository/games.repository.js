
class GamesRepository {

    gamesMap = new Map([]);
    
    constructor() {
        this.fetchData();
    }

    fetchData() {
        dataClient.loadData('GAMES').then(games => {
            this.gamesMap = RepositoryMapper.mapGames(games);
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
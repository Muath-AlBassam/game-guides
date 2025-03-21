
class BuildsRepository {
    
    buildsMap = new Map([]);

    constructor() {
        this.fetchData();
    }

    fetchData() {
        dataClient.loadData('BUILDS').then(builds => {
            this.buildsMap = RepositoryMapper.mapBuilds(builds);
        });
    }

    getByCharacter(gameCode, characterName) {
        return this.buildsMap.get(gameCode)?.get(characterName);
    }
}

const buildsRepository = new BuildsRepository();
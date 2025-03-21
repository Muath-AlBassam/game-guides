
class SetsRepository {

    setsMap = new Map([]);

    constructor() {
        this.fetchData();
    }

    fetchData() {
        dataClient.loadData('SETS').then(sets => {
            this.setsMap = RepositoryMapper.mapSets(sets);
        });
    }

    getOne(gameCode, setName) {
        let set = this.setsMap.get(gameCode)?.get(setName);
        return set ?? { name: setName }
    }

}

const setsRepository = new SetsRepository();
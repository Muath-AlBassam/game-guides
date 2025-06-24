
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

    getAll(gameCode) {
        return this.setsMap.get(gameCode) ?? new Map([]);
    }

    getAllOrdered(gameCode) {
        return new Map([...this.getAll(gameCode).entries()].sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)));
    }

    getOne(gameCode, setName) {
        let set = this.getAll(gameCode).get(setName);
        return set ?? { name: setName }
    }

}

const setsRepository = new SetsRepository();
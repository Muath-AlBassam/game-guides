
class SetsRepository {

    setsMap = new Map([]);

    constructor() {
        this.fetchData();
    }

    fetchData() {
        dataClient.loadData('SETS').then(sets => {
            this.setsMap = Utils.arrayTo2LevelMap(
                sets,
                v => { return { name: v[0].NAME, type: v[0].TYPE, imageUrl: Utils.appendRepoUrl(v[0].IMAGE_URL) }; }
            );
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
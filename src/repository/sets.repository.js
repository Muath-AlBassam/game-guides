
class SetsRepository {

    setsMap = new Map([]);

    constructor() {
        this.fetchData();
    }

    fetchData() {
        dataClient.loadData('SETS').then(sets => {
            this.setsMap = DataUtils.arrayTo2LevelMap(
                sets,
                v => { return { name: v[0].NAME, imageUrl: DataUtils.getImageUrl(v[0].IMAGE_URL) }; }
            );
        });
    }

    getOne(gameCode, setName) {
        let set = this.setsMap.get(gameCode)?.get(setName);
        return set ?? { name: setName }
    }

}

const setsRepository = new SetsRepository();
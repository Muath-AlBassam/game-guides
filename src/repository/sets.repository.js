
class SetsRepository {
    
    constructor() {
        this.fetchData();
    }

    fetchData() {
        dataClient.loadData('SETS').then(sets => {
            this.data = Utils.arrayTo2LevelMap(
                sets,
                v => { return { name: v[0].NAME, imageUrl: Utils.getImageUrl(v[0].IMAGE_URL) }; }
            );
        });
    }

    getSetMetadata(gameCode, setName) {
        let set = this.data.get(gameCode)?.get(setName);
        return set ?? { name: setName }
    }

    data = new Map([]);
}

const setsRepository = new SetsRepository();
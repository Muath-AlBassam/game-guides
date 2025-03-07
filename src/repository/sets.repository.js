
class SetsRepository {
    
    constructor() {
        loadFormattedData(
            'SETS',
            v => { return { name: v[0].NAME, imageUrl: v[0].IMAGE_URL } }
        ).then(sets => {
            this.data = sets;
        });
    }

    getSetMetadata(gameCode, setName) {
        let set = this.data.get(gameCode)?.get(setName);
        return set ?? { name: setName }
    }

    data = new Map([]);
}

const setsRepository = new SetsRepository();
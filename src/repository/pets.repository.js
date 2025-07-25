
class PetsRepository {

    petsMap = new Map([]);

    constructor() {
        this.fetchData();
    }

    fetchData() {
        dataClient.loadData('PETS').then(pets => {
            this.petsMap = Utils.arrayTo2LevelMap(
                pets,
                v => { return { name: v[0].NAME, imageUrl: Utils.appendRepoUrl(v[0].IMAGE_URL), rarity: v[0].RARITY }; }
            );
        });
    }

    getAll(gameCode) {
        return this.petsMap.get(gameCode) ?? new Map([]);
    }
    
    getOne(gameCode, petName) {
        let data = this.getAll(gameCode).get(petName)
        return data ?? { name: petName };
    }
}

const petsRepository = new PetsRepository();
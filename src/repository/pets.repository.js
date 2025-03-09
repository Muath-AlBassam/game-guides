
class PetsRepository {

    constructor() {
        this.fetchData();
    }

    fetchData() {
        dataClient.loadData('PETS').then(pets => {
            this.data = Utils.arrayTo2LevelMap(
                pets,
                v => { return { name: v[0].NAME, imageUrl: v[0].IMAGE_URL, rarity: v[0].RARITY }; }
            );
        });
    }

    getAllPets(gameCode) {
        return this.data.get(gameCode) ?? new Map([]);
    }
    
    getPet(gameCode, petName) {
        let data = this.getAllPets(gameCode).get(petName)
        return data ?? { name: petName };
    }
    
    data = new Map([]);
}

const petsRepository = new PetsRepository();
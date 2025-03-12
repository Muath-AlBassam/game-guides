
class PetsRepository {

    petsMap = new Map([]);

    constructor() {
        this.fetchData();
    }

    fetchData() {
        dataClient.loadData('PETS').then(pets => {
            this.petsMap = DataUtils.arrayTo2LevelMap(
                pets,
                v => { return { name: v[0].NAME, imageUrl: DataUtils.getImageUrl(v[0].IMAGE_URL), rarity: v[0].RARITY }; }
            );
        });
    }

    getAllPets(gameCode) {
        return this.petsMap.get(gameCode) ?? new Map([]);
    }
    
    getPet(gameCode, petName) {
        let data = this.getAllPets(gameCode).get(petName)
        return data ?? { name: petName };
    }
}

const petsRepository = new PetsRepository();
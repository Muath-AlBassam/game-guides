
class PetsRepository {

    constructor() {
        loadFormattedData(
            'PETS',
            v => { return { name: v[0].NAME, imageUrl: v[0].IMAGE_URL, rarity: v[0].RARITY } }
        ).then(pets => {
            this.data = pets;
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
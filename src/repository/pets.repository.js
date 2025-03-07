
class PetsRepository {

    constructor() {
        loadSheetData('PETS').then(roles => {
            this.data = Utils.arrayToMapOfMaps(
                roles, 
                v => { return { name: v.NAME, imageUrl: v.IMAGE_URL, rarity: v.RARITY } }
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
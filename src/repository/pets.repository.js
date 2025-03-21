
class PetsRepository {

    petsMap = new Map([]);

    constructor() {
        this.fetchData();
    }

    fetchData() {
        dataClient.loadData('PETS').then(pets => {
            this.petsMap = RepositoryMapper.mapPets(pets);
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
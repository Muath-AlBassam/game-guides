
class PetsRepository {

    petsList = [];

    constructor() {
        this.fetchData();
    }

    fetchData() {
        dataClient.loadData('PETS').then(pets => {
            this.petsList = pets.map(p => ({
                gameCode: p.GAME_CODE, code: p.CODE, name: p.NAME, imageUrl: Utils.appendRepoUrl(p.IMAGE_URL), rarity: p.RARITY
            }));
        });
    }

    getAll(gameCode) {
        return this.petsList.filter(p => p.gameCode == gameCode);
    }
    
    getOne(gameCode, code) {
        const data = this.petsList.find(p => p.gameCode == gameCode && p.code == code);
        return data ?? { code: code, name: code };
    }
}

const petsRepository = new PetsRepository();
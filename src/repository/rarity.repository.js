
class RarityRepository {

    rarityMap = new Map([]);

    constructor() {
        this.fetchData();
    }

    fetchData() {
        dataClient.loadData('RARITY').then(rarities => {
            this.rarityMap = RepositoryMapper.mapRarities(rarities);
        });
    }

    getAll(gameCode) {
        return this.rarityMap.get(gameCode) ?? new Map([]);
    }

    getOne(gameCode, rarityName) {
        let rarity = this.getAll(gameCode).get(rarityName);
        return rarity ?? { name: rarityName };
    }
}

const rarityRepository = new RarityRepository();
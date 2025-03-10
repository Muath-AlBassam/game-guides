
class RarityRepository {

    constructor() {
        this.fetchData();
    }

    fetchData() {
        dataClient.loadData('RARITY').then(rarities => {
            this.data = Utils.arrayTo2LevelMap(
                rarities,
                v => { return { code: v[0].CODE, label: v[0].LABEL, imageUrl: Utils.getImageUrl(v[0].IMAGE_URL) }; }
            );
        });
    }

    getAllRarities(gameCode) {
        return this.data.get(gameCode) ?? new Map([]);
    }

    getRarity(gameCode, rarityName) {
        let rarity = this.getAllRarities(gameCode).get(rarityName);
        return rarity ?? { name: rarityName };
    }

    data = new Map([]);
}

const rarityRepository = new RarityRepository();
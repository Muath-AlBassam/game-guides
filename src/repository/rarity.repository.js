
class RarityRepository {

    constructor() {
        loadFormattedData(
            'RARITY',
            v => { return { code: v[0].CODE, label: v[0].LABEL, imageUrl: v[0].IMAGE_URL } }
        ).then(rarities => {
            this.data = rarities;
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
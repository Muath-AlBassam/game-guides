
class RarityRepository {

    rarityMap = new Map([]);

    constructor() {
        this.fetchData();
    }

    fetchData() {
        dataClient.loadData('RARITY').then(rarities => {
            this.rarityMap = DataUtils.arrayTo2LevelMap(
                rarities,
                v => { return { code: v[0].CODE, label: v[0].LABEL, imageUrl: DataUtils.getImageUrl(v[0].IMAGE_URL) }; }
            );
        });
    }

    getAllRarities(gameCode) {
        return this.rarityMap.get(gameCode) ?? new Map([]);
    }

    getRarity(gameCode, rarityName) {
        let rarity = this.getAllRarities(gameCode).get(rarityName);
        return rarity ?? { name: rarityName };
    }
}

const rarityRepository = new RarityRepository();
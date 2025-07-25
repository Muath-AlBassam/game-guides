
class RarityRepository {

    rarityMap = new Map([]);

    constructor() {
        this.fetchData();
    }

    fetchData() {
        dataClient.loadData('RARITY').then(rarities => {
            this.rarityMap = Utils.arrayTo2LevelMap(
                rarities,
                v => { return { code: v[0].CODE, label: v[0].LABEL, imageUrl: Utils.appendRepoUrl(v[0].IMAGE_URL) }; }
            );
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
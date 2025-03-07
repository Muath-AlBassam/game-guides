
class RarityRepository {

    constructor() {
        loadSheetData('RARITY').then(roles => {
            this.data = Utils.arrayToMapOfMaps(
                roles, 
                v => { return { code: v.CODE, label: v.LABEL, imageUrl: v.IMAGE_URL } }
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
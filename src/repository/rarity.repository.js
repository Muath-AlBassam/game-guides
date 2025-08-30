
class RarityRepository {

    rarityList = [];

    constructor() {
        this.fetchData();
    }

    fetchData() {
        dataClient.loadData('RARITY').then(rarities => {
            this.rarityList = rarities.map(r => ({
                gameCode: r.GAME_CODE, code: r.CODE, label: r.LABEL, imageUrl: Utils.appendRepoUrl(r.IMAGE_URL)
            }));
        });
    }

    getAll(gameCode) {
        return this.rarityList.filter(r => r.gameCode == gameCode);
    }

    getOne(gameCode, code) {
        const data = this.rarityList.find(r => r.gameCode == gameCode && r.code == code);
        return data ?? { code: code, label: code };
    }
}

const rarityRepository = new RarityRepository();
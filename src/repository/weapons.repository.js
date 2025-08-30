
class WeaponsRepository {
    
    weaponsList = [];

    constructor() {
        this.fetchData();
    }

    fetchData() {
        dataClient.loadData('WEAPONS').then(weapons => {
            this.weaponsList = weapons.map(w => ({
                gameCode: w.GAME_CODE,
                code: w.CODE,
                name: w.NAME,
                type: w.TYPE,
                secondaryStat: w.SECONDARY_STAT,
                imageUrl: Utils.appendRepoUrl(w.IMAGE_URL),
                rarity: w.RARITY
            }));
        });
    }

    getAll(gameCode) {
        return this.weaponsList.filter(w => w.gameCode == gameCode);
    }

    getAllOrdered(gameCode) {
        return this.getAll(gameCode).sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
    }

    getOne(gameCode, code) {
        const data = this.weaponsList.find(w => w.gameCode == gameCode && w.code == code);
        return data ?? { code: code, name: code }
    }
}

const weaponsRepository = new WeaponsRepository();
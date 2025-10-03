
class SetsRepository {

    setsList = [];

    constructor() {
        this.fetchData();
    }

    fetchData() {
        dataClient.loadData('SETS').then(sets => {
            this.setsList = sets.map(s => ({
                gameCode: s.GAME_CODE,
                code: s.CODE,
                name: s.NAME,
                type: s.TYPE,
                imageUrl: Utils.appendRepoUrl(s.IMAGE_URL),
                rarity: s.RARITY
            }));
        });
    }

    getAll(gameCode) {
        return this.setsList.filter(s => s.gameCode == gameCode);
    }

    getAllOrdered(gameCode) {
        return this.getAll(gameCode).sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
    }

    getOne(gameCode, code) {
        const data = this.setsList.find(s => s.gameCode == gameCode && s.code == code);
        return data ?? { code: code, name: code }
    }

}

const setsRepository = new SetsRepository();
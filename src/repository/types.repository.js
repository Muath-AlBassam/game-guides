
class TypesRepository {

    typesList = [];

    constructor() {
        this.fetchData();
    }

    fetchData() {
        dataClient.loadData('TYPES').then(types => {
            this.typesList = types.map(t => ({
                gameCode: t.GAME_CODE, code: t.CODE, name: t.NAME, imageUrl: Utils.appendRepoUrl(t.IMAGE_URL)
            }));
        });
    }

    getAll(gameCode) {
        return this.typesList.filter(t => t.gameCode == gameCode);
    }

    getOne(gameCode, code) {
        const data = this.typesList.find(t => t.gameCode == gameCode && t.code == code);
        return data ?? { code: code, name: code }
    }
}

const typesRepository = new TypesRepository();
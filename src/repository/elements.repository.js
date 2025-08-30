
class ElementsRepository {

    elementsList = [];

    constructor() {
        this.fetchData();
    }

    fetchData() {
        dataClient.loadData('ELEMENTS').then(elements => {
            this.elementsList = elements.map(e => ({
                gameCode: e.GAME_CODE, code: e.CODE, name: e.NAME, name: e.NAME, imageUrl: Utils.appendRepoUrl(e.IMAGE_URL)
            }));
        });
    }

    getAll(gameCode) {
        return this.elementsList.filter(e => e.gameCode == gameCode);
    }
    
    getOne(gameCode, code) {
        const data = this.elementsList.find(e => e.gameCode == gameCode && e.code == code);
        return data ?? { code: code, name: code };
    }
}

const elementsRepository = new ElementsRepository();
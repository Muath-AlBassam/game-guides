
class ButtonsRepository {

    buttonsList = [];

    constructor() {
        this.fetchData();
    }

    fetchData() {
        dataClient.loadData('BUTTONS').then(buttons => {
            this.buttonsList = buttons.map(b => ({
                gameCode: b.GAME_CODE, code: b.CODE, name: b.NAME, imageUrl: Utils.appendRepoUrl(b.IMAGE_URL)
            }));
        });
    }

    getAll(gameCode) {
        return this.buttonsList.filter(b => b.gameCode == gameCode);
    }
    
    getOne(gameCode, code) {
        const data = this.buttonsList.find(b => b.gameCode == gameCode && b.code == code);
        return data ?? { code: code, name: code };
    }
}

const buttonsRepository = new ButtonsRepository();

class ButtonsRepository {

    buttonsMap = new Map([]);

    constructor() {
        this.fetchData();
    }

    fetchData() {
        dataClient.loadData('BUTTONS').then(buttons => {
            this.buttonsMap = RepositoryMapper.mapButtons(buttons);
        });
    }

    getAll(gameCode) {
        return this.buttonsMap.get(gameCode);
    }
    
    getOne(gameCode, buttonName) {
        const button = this.getAll(gameCode).get(buttonName);
        return button ?? { name: buttonName };
    }
}

const buttonsRepository = new ButtonsRepository();
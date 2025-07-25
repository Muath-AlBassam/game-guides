
class ButtonsRepository {

    buttonsMap = new Map([]);

    constructor() {
        this.fetchData();
    }

    fetchData() {
        dataClient.loadData('BUTTONS').then(buttons => {
            this.buttonsMap = Utils.arrayTo2LevelMap(
                buttons,
                v => { return { name: v[0].NAME, imageUrl: Utils.appendRepoUrl(v[0].IMAGE_URL) } },
            );
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
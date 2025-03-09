
class ButtonsRepository {

    constructor() {
        this.fetchData();
    }

    fetchData() {
        dataClient.loadData('BUTTONS').then(buttons => {
            this.data = Utils.arrayTo2LevelMap(
                buttons,
                v => { return { name: v[0].NAME, imageUrl: v[0].IMAGE_URL } },
            );
        });
    }

    getAllButtons(gameCode) {
        return this.data.get(gameCode);
    }
    
    getButton(gameCode, buttonName) {
        const button = this.getAllButtons(gameCode).get(buttonName);
        return button ?? { name: buttonName };
    }

    data = new Map([]);
}

const buttonsRepository = new ButtonsRepository();
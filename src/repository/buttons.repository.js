
class ButtonsRepository {

    buttonsMap = new Map([]);

    constructor() {
        this.fetchData();
    }

    fetchData() {
        dataClient.loadData('BUTTONS').then(buttons => {
            this.buttonsMap = DataUtils.arrayTo2LevelMap(
                buttons,
                v => { return { name: v[0].NAME, imageUrl: DataUtils.getImageUrl(v[0].IMAGE_URL) } },
            );
        });
    }

    getAllButtons(gameCode) {
        return this.buttonsMap.get(gameCode);
    }
    
    getButton(gameCode, buttonName) {
        const button = this.getAllButtons(gameCode).get(buttonName);
        return button ?? { name: buttonName };
    }
}

const buttonsRepository = new ButtonsRepository();
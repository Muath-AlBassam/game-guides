
class CombosRepository {

    constructor() {
        this.fetchData();
    }

    fetchData() {
        dataClient.loadData('COMBOS').then(combos => {
            this.data = Utils.arrayTo2LevelMap(
                combos,
                vArr => {
                    return vArr.map(v => {
                        return v.COMBO.split(',')
                    });
                },
                'CHARACTER_CODE'
            );
        });
    }
    
    getCombos(gameCode, characterName) {
        return this.data.get(gameCode)?.get(characterName);
    }

    data = new Map([]);
}

const combosRepository = new CombosRepository();
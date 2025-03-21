
class CombosRepository {

    combosMap = new Map([]);

    constructor() {
        this.fetchData();
    }

    fetchData() {
        dataClient.loadData('COMBOS').then(combos => {
            this.combosMap = DataUtils.arrayTo2LevelMap(
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
    
    getAllByCharacter(gameCode, characterName) {
        return this.combosMap.get(gameCode)?.get(characterName);
    }
}

const combosRepository = new CombosRepository();
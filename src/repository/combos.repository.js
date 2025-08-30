
class CombosRepository {

    combosList = [];

    constructor() {
        this.fetchData();
    }

    fetchData() {
        dataClient.loadData('COMBOS').then(combos => {
            const flatList = combos.map(c => ({
                gameCode: c.GAME_CODE, character: c.CHARACTER_CODE, combo: c.COMBO
            }));
            
            const grouped = Utils.groupBy(flatList, 'gameCode', 'character');
            grouped.forEach((val, key) => {
                this.combosList.push({
                    gameCode: val[0].gameCode,
                    character: val[0].character,
                    combos: val.map(c => c.combo.split(',')),
                });
            })
        });
    }
    
    getAllByCharacter(gameCode, characterName) {
        return this.combosList.find(c => c.gameCode == gameCode && c.character == characterName)?.combos;
    }
}

const combosRepository = new CombosRepository();
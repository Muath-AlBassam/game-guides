
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
            
            const grouped = Utils.groupList(flatList, 'gameCode', 'character');
            this.combosList =  Object.values(grouped).map(characterComboList => {
                return {
                    gameCode: characterComboList[0].gameCode,
                    character: characterComboList[0].character,
                    combos: characterComboList.map(v => v.combo.split(',')),
                };
            });
        });
    }
    
    getAllByCharacter(gameCode, characterName) {
        return this.combosList.find(c => c.gameCode == gameCode && c.character == characterName)?.combos;
    }
}

const combosRepository = new CombosRepository();
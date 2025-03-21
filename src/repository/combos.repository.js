
class CombosRepository {

    combosMap = new Map([]);

    constructor() {
        this.fetchData();
    }

    fetchData() {
        dataClient.loadData('COMBOS').then(combos => {
            this.combosMap = RepositoryMapper.mapCombos(combos);
        });
    }
    
    getAllByCharacter(gameCode, characterName) {
        return this.combosMap.get(gameCode)?.get(characterName);
    }
}

const combosRepository = new CombosRepository();
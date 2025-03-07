
class BuildsRepository {
    
    constructor() {
        loadFormattedData(
            'BUILDS',
            vArr => {
                let weapon = vArr.find(item => item.TYPE == 'WEAPON');
                let sets = vArr.filter(item => item.TYPE == 'SET');
                return {
                    weapon: { name: weapon.NAME },
                    sets: sets.map(set => {
                        return { name: set.NAME, pieceCount: set.COUNT }
                    })
                };
            },
            'CHARACTER_CODE'
        ).then(builds => {
            this.data = builds;
        });
    }

    getCharacterBuild(gameCode, characterName) {
        return this.data.get(gameCode)?.get(characterName);
    }

    data = new Map([]);
;
}

const buildsRepository = new BuildsRepository();
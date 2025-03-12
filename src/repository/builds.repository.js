
class BuildsRepository {
    
    buildsMap = new Map([]);

    constructor() {
        this.fetchData();
    }

    fetchData() {
        dataClient.loadData('BUILDS').then(builds => {
            this.buildsMap = DataUtils.arrayTo2LevelMap(
                builds,
                vArr => {
                    let weapon = vArr.find(item => item.TYPE == 'WEAPON');
                    let sets = vArr.filter(item => item.TYPE == 'SET');
                    return {
                        weapon: { name: weapon.NAME },
                        sets: sets.map(set => {
                            return { name: set.NAME, pieceCount: set.COUNT };
                        })
                    };
                },
                'CHARACTER_CODE'
            );
        });
    }

    getCharacterBuild(gameCode, characterName) {
        return this.buildsMap.get(gameCode)?.get(characterName);
    }
}

const buildsRepository = new BuildsRepository();
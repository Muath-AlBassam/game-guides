
class BuildsRepository {
    
    buildsMap = new Map([]);
    buildsArray = [];

    constructor() {
        this.fetchData();
    }

    fetchData() {
        dataClient.loadData('BUILDS').then(builds => {
            // as map
            this.buildsMap = Utils.arrayTo2LevelMap(
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
            // as array
            this.buildsArray = builds.map(b => {
                return {
                    gameCode: b.GAME_CODE, character: b.CHARACTER_CODE, type: b.TYPE, name: b.NAME, pieceCount: b.COUNT
                }
            });
        });
    }

    getByCharacter(gameCode, characterName) {
        return this.buildsMap.get(gameCode)?.get(characterName);
    }

    countByWeapon(gameCode, weapon) {
        return this.buildsArray
            .filter(b => b.gameCode == gameCode && b.type == 'WEAPON' && b.name == weapon)
            .length;
    }

    countBySet(gameCode, set) {
        return this.buildsArray
            .filter(b => b.gameCode == gameCode && b.type == 'SET' && b.name == set)
            .length;
    }
}

const buildsRepository = new BuildsRepository();
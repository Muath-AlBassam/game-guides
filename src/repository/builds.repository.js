
class BuildsRepository {
    
    buildsList = [];
    flatList = [];

    constructor() {
        this.fetchData();
    }

    fetchData() {
        dataClient.loadData('BUILDS').then(builds => {
            this.flatList = builds.map(b => ({
                gameCode: b.GAME_CODE, character: b.CHARACTER_CODE, type: b.TYPE, name: b.NAME, pieceCount: b.COUNT
            }));
            
            const grouped = Utils.groupList(this.flatList, 'gameCode', 'character');
            // loop through object variables and read list items
            this.buildsList = Object.values(grouped).map(characterBuildList => {
                return {
                    gameCode: characterBuildList[0].gameCode,
                    character: characterBuildList[0].character,
                    weapon: characterBuildList.filter(g => g.type === 'WEAPON')?.map(w => ({ name: w.name }))[0],
                    sets: characterBuildList.filter(g => g.type === 'SET')?.map(s => ({ name: s.name, pieceCount: s.pieceCount }))
                };
            });
        });
    }

    getByCharacter(gameCode, characterName) {
        return this.buildsList.find(b => b.gameCode == gameCode && b.character == characterName);
    }

    countByWeapon(gameCode, weapon) {
        return this.flatList
            .filter(b => b.gameCode == gameCode && b.type == 'WEAPON' && b.name == weapon)
            .length;
    }

    countBySet(gameCode, set) {
        return this.flatList
            .filter(b => b.gameCode == gameCode && b.type == 'SET' && b.name == set)
            .length;
    }
}

const buildsRepository = new BuildsRepository();

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
            
            const grouped = Utils.groupBy(this.flatList, 'gameCode', 'character');
            // loop through object variables and read list items
            grouped.forEach((val, key) => {
                this.buildsList.push({
                    gameCode: val[0].gameCode,
                    character: val[0].character,
                    weapon: val.filter(w => w.type === 'WEAPON')?.map(w => ({ name: w.name }))[0],
                    sets: val.filter(s => s.type === 'SET')?.map(s => ({ name: s.name, pieceCount: s.pieceCount }))
                });
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
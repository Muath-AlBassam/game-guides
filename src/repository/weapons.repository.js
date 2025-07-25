
class WeaponsRepository {
    
    weaponsMap = new Map([]);

    constructor() {
        this.fetchData();
    }

    fetchData() {
        dataClient.loadData('WEAPONS').then(weapons => {
            this.weaponsMap = Utils.arrayTo2LevelMap(
                weapons,
                v => { 
                    return { 
                        name: v[0].NAME,
                        type: v[0].TYPE,
                        secondaryStat: v[0].SECONDARY_STAT,
                        imageUrl: Utils.appendRepoUrl(v[0].IMAGE_URL),
                        rarity: v[0].RARITY
                    };
                }
            );
        });
    }

    getAll(gameCode) {
        return this.weaponsMap.get(gameCode) ?? new Map([]);
    }

    getAllOrdered(gameCode) {
        return new Map([...this.getAll(gameCode).entries()].sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)));
    }

    getOne(gameCode, weaponName) {
        let weapon = this.getAll(gameCode).get(weaponName);
        return weapon ?? { name: weaponName }
    }
}

const weaponsRepository = new WeaponsRepository();
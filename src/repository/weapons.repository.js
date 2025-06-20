
class WeaponsRepository {
    
    weaponsMap = new Map([]);

    constructor() {
        this.fetchData();
    }

    fetchData() {
        dataClient.loadData('WEAPONS').then(weapons => {
            this.weaponsMap = RepositoryMapper.mapWeapons(weapons);
        });
    }

    getAll(gameCode) {
        return this.weaponsMap.get(gameCode) ?? new Map([]);
    }

    getOne(gameCode, weaponName) {
        let weapon = this.getAll(gameCode).get(weaponName);
        return weapon ?? { name: weaponName }
    }
}

const weaponsRepository = new WeaponsRepository();
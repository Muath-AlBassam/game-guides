
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

    getAllOrdered(gameCode) {
        return new Map([...this.getAll(gameCode).entries()].sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)));
    }

    getOne(gameCode, weaponName) {
        let weapon = this.getAll(gameCode).get(weaponName);
        return weapon ?? { name: weaponName }
    }
}

const weaponsRepository = new WeaponsRepository();

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

    getOne(gameCode, weaponName) {
        let weapon = this.weaponsMap.get(gameCode)?.get(weaponName);
        return weapon ?? { name: weaponName }
    }
}

const weaponsRepository = new WeaponsRepository();
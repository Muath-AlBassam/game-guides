
class WeaponsRepository {
    
    constructor() {
        this.fetchData();
    }

    fetchData() {
        dataClient.loadData('WEAPONS').then(weapons => {
            this.data = Utils.arrayTo2LevelMap(
                weapons,
                v => { return { name: v[0].NAME, imageUrl: Utils.getImageUrl(v[0].IMAGE_URL), rarity: v[0].RARITY }; }
            );
        });
    }

    getWeaponMetadata(gameCode, weaponName) {
        let weapon = this.data.get(gameCode)?.get(weaponName);
        return weapon ?? { name: weaponName }
    }

    data = new Map([]);
}

const weaponsRepository = new WeaponsRepository();
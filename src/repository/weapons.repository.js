
class WeaponsRepository {
    
    weaponsMap = new Map([]);

    constructor() {
        this.fetchData();
    }

    fetchData() {
        dataClient.loadData('WEAPONS').then(weapons => {
            this.weaponsMap = DataUtils.arrayTo2LevelMap(
                weapons,
                v => { return { name: v[0].NAME, imageUrl: DataUtils.getImageUrl(v[0].IMAGE_URL), rarity: v[0].RARITY }; }
            );
        });
    }

    getWeaponMetadata(gameCode, weaponName) {
        let weapon = this.weaponsMap.get(gameCode)?.get(weaponName);
        return weapon ?? { name: weaponName }
    }
}

const weaponsRepository = new WeaponsRepository();
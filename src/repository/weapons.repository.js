
class WeaponsRepository {
    
    constructor() {
        loadFormattedData(
            'WEAPONS',
            v => { return { name: v[0].NAME, imageUrl: v[0].IMAGE_URL, rarity: v[0].RARITY } }
        ).then(weapons => {
            this.data = weapons;
        });
    }

    getWeaponMetadata(gameCode, weaponName) {
        let weapon = this.data.get(gameCode)?.get(weaponName);
        return weapon ?? { name: weaponName }
    }

    data = new Map([]);
}

const weaponsRepository = new WeaponsRepository();
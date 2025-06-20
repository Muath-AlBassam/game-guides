
class WeaponTypesRepository {

    typesMap = new Map([]);

    constructor() {
        this.fetchData();
    }

    fetchData() {
        dataClient.loadData('WEAPON_TYPE').then(roles => {
            this.typesMap = RepositoryMapper.mapWeaponTypes(roles);
        });
    }

    getAll(gameCode) {
        return this.typesMap.get(gameCode) ?? new Map([]);
    }
    
    getOne(gameCode, typeName) {
        let type = this.getAll(gameCode).get(typeName);
        return type ?? { name: typeName };
    }
}

const weaponsTypesRepository = new WeaponTypesRepository();
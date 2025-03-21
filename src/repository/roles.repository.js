
class RolesRepository {

    rolesMap = new Map([]);

    constructor() {
        this.fetchData();
    }

    fetchData() {
        dataClient.loadData('ROLES').then(roles => {
            this.rolesMap = DataUtils.arrayTo2LevelMap(
                roles,
                v => { return { name: v[0].NAME, imageUrl: DataUtils.getImageUrl(v[0].IMAGE_URL) }; }
            );
        });
    }

    getAll(gameCode) {
        return this.rolesMap.get(gameCode) ?? new Map([]);
    }
    
    getOne(gameCode, roleName) {
        let role = this.getAll(gameCode).get(roleName);
        return role ?? { name: roleName };
    }
}

const rolesRepository = new RolesRepository();
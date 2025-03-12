
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

    getAllRoles(gameCode) {
        return this.rolesMap.get(gameCode) ?? new Map([]);
    }
    
    getRole(gameCode, roleName) {
        let role = this.getAllRoles(gameCode).get(roleName);
        return role ?? { name: roleName };
    }
}

const rolesRepository = new RolesRepository();
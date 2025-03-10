
class RolesRepository {

    constructor() {
        this.fetchData();
    }

    fetchData() {
        dataClient.loadData('ROLES').then(roles => {
            this.data = Utils.arrayTo2LevelMap(
                roles,
                v => { return { name: v[0].NAME, imageUrl: Utils.getImageUrl(v[0].IMAGE_URL) }; }
            );
        });
    }

    getAllRoles(gameCode) {
        return this.data.get(gameCode) ?? new Map([]);
    }
    
    getRole(gameCode, roleName) {
        let role = this.getAllRoles(gameCode).get(roleName);
        return role ?? { name: roleName };
    }

    data = new Map([]);
}

const rolesRepository = new RolesRepository();
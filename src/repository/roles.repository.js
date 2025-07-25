
class RolesRepository {

    rolesMap = new Map([]);

    constructor() {
        this.fetchData();
    }

    fetchData() {
        dataClient.loadData('ROLES').then(roles => {
            this.rolesMap = Utils.arrayTo1LevelMap(
                roles,
                v => { return { name: v[0].NAME, imageUrl: Utils.appendRepoUrl(v[0].IMAGE_URL) }; }
            );
        });
    }

    getAll() {
        return this.rolesMap ?? new Map([]);
    }
    
    getOne(roleName) {
        let role = this.getAll().get(roleName);
        return role ?? { name: roleName };
    }
}

const rolesRepository = new RolesRepository();
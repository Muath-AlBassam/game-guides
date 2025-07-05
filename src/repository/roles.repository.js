
class RolesRepository {

    rolesMap = new Map([]);

    constructor() {
        this.fetchData();
    }

    fetchData() {
        dataClient.loadData('ROLES').then(roles => {
            this.rolesMap = RepositoryMapper.mapRoles(roles);
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
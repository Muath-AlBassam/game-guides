
class RolesRepository {

    constructor() {
        loadFormattedData(
            'ROLES',
            v => { return { name: v[0].NAME, imageUrl: v[0].IMAGE_URL } }
        ).then(roles => {
            this.data = roles;
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
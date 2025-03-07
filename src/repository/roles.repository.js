
class RolesRepository {

    constructor() {
        loadSheetData('ROLES').then(roles => {
            this.data = Utils.arrayToMapOfMaps(
                roles, 
                v => { return { name: v.NAME, imageUrl: v.IMAGE_URL } }
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
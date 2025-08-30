
class RolesRepository {

    rolesList = [];

    constructor() {
        this.fetchData();
    }

    fetchData() {
        dataClient.loadData('ROLES').then(roles => {
            this.rolesList = roles.map(r => ({
                code: r.CODE, name: r.NAME, imageUrl: Utils.appendRepoUrl(r.IMAGE_URL)
            }));
        });
    }

    getAll() {
        return this.rolesList;
    }
    
    getOne(code) {
        const data = this.rolesList.find(r => r.code == code);
        return data ?? { code: code, name: code };
    }
}

const rolesRepository = new RolesRepository();
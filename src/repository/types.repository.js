
class TypesRepository {

    typesMap = new Map([]);

    constructor() {
        this.fetchData();
    }

    fetchData() {
        dataClient.loadData('TYPES').then(types => {
            this.typesMap = RepositoryMapper.mapTypes(types);
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

const typesRepository = new TypesRepository();
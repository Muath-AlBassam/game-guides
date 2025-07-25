
class TypesRepository {

    typesMap = new Map([]);

    constructor() {
        this.fetchData();
    }

    fetchData() {
        dataClient.loadData('TYPES').then(types => {
            this.typesMap = Utils.arrayTo2LevelMap(
                types,
                v => { return { name: v[0].NAME, imageUrl: Utils.appendRepoUrl(v[0].IMAGE_URL) }; }
            );
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
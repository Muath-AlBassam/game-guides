
class ElementsRepository {

    elementsMap = new Map([]);

    constructor() {
        this.fetchData();
    }

    fetchData() {
        dataClient.loadData('ELEMENTS').then(elements => {
            this.elementsMap = Utils.arrayTo2LevelMap(
                elements,
                v => { return { name: v[0].NAME, imageUrl: Utils.appendRepoUrl(v[0].IMAGE_URL) }; }
            );
        });
    }

    getAll(gameCode) {
        return this.elementsMap.get(gameCode) ?? new Map([]);
    }
    
    getOne(gameCode, elementName) {
        let element = this.getAll(gameCode).get(elementName);
        return element ?? { name: elementName };
    }
}

const elementsRepository = new ElementsRepository();

class ElementsRepository {

    constructor() {
        this.fetchData();
    }

    fetchData() {
        dataClient.loadData('ELEMENTS').then(elements => {
            this.data = Utils.arrayTo2LevelMap(
                elements,
                v => { return { name: v[0].NAME, imageUrl: Utils.getImageUrl(v[0].IMAGE_URL) }; }
            );
        });
    }

    getAllElements(gameCode) {
        return this.data.get(gameCode) ?? new Map([]);
    }
    
    getElement(gameCode, elementName) {
        let element = this.getAllElements(gameCode).get(elementName);
        return element ?? { name: elementName };
    }

    data = new Map([]);
}

const elementsRepository = new ElementsRepository();
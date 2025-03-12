
class ElementsRepository {

    elementsMap = new Map([]);

    constructor() {
        this.fetchData();
    }

    fetchData() {
        dataClient.loadData('ELEMENTS').then(elements => {
            this.elementsMap = DataUtils.arrayTo2LevelMap(
                elements,
                v => { return { name: v[0].NAME, imageUrl: DataUtils.getImageUrl(v[0].IMAGE_URL) }; }
            );
        });
    }

    getAllElements(gameCode) {
        return this.elementsMap.get(gameCode) ?? new Map([]);
    }
    
    getElement(gameCode, elementName) {
        let element = this.getAllElements(gameCode).get(elementName);
        return element ?? { name: elementName };
    }
}

const elementsRepository = new ElementsRepository();
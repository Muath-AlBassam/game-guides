
class ElementsRepository {

    constructor() {
        loadFormattedData(
            'ELEMENTS',
            v => { return { name: v[0].NAME, imageUrl: v[0].IMAGE_URL } }
        ).then(elements => {
            this.data = elements;
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
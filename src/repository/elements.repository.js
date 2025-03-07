
class ElementsRepository {

    constructor() {
        loadSheetData('ELEMENTS').then(roles => {
            this.data = Utils.arrayToMapOfMaps(
                roles, 
                v => { return { name: v.NAME, imageUrl: v.IMAGE_URL } }
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
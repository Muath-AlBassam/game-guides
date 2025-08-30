
class CategoryRepository {
    
    categoriesList = [];

    constructor() {
        this.fetchData();
    }

    fetchData() {
        dataClient.loadData('CATEGORY').then(cat => {
            this.categoriesList = cat.map(c => ({
                gameCode: c.GAME_CODE, code: c.CODE, label: c.LABEL, order: c.ORDER
            }));
        });
    }

    getAll(gameCode) {
        return this.categoriesList.filter(c => c.gameCode == gameCode);
    }

    getAllOrdered(gameCode) {
        return this.getAll(gameCode).sort((a, b) => (a.order > b.order) ? 1 : ((b.order > a.order) ? -1 : 0));
    }
}

const categoryRepository = new CategoryRepository();
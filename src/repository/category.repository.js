
class CategoryRepository {
    
    categories = [];

    constructor() {
        this.fetchData();
    }

    fetchData() {
        dataClient.loadData('CATEGORY').then(cat => {
            this.categories = cat.map(c => {
                return { gameCode: c.GAME_CODE, code: c.CODE, label: c.LABEL, order: c.ORDER };
            });
            console.log('categories', this.categories);
        });
    }

    getAll(gameCode) {
        return this.categories.filter(c => c.gameCode == gameCode);
    }

    getAllOrdered(gameCode) {
        return this.getAll(gameCode).sort((a, b) => (a.order > b.order) ? 1 : ((b.order > a.order) ? -1 : 0));
    }
}

const categoryRepository = new CategoryRepository();
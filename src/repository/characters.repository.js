
class CharactersRepository {

    charactersList = [];

    constructor() {
        this.fetchData();
    }

    fetchData() {
        dataClient.loadData('CHARACTERS').then(characters => {
            this.charactersList = characters.map(c => ({
                gameCode: c.GAME_CODE,
                code: c.CODE,
                name: c.NAME,
                imageUrl: Utils.appendRepoUrl(c.IMAGE_URL),
                cardImageUrl: Utils.appendRepoUrl(c.CARD_IMAGE_URL),
                element: c.ELEMENT,
                type: c.TYPE,
                rarity: c.RARITY
            }));
        });
    }

    getAll(gameCode) {
        return this.charactersList.filter(c => c.gameCode == gameCode);
    }

    getAllOrdered(gameCode) {
        return this.getAll(gameCode).sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
    }
    
    getOne(gameCode, code) {
        const data = this.charactersList.find(c => c.gameCode == gameCode && c.code == code);
        return data ?? { code: code, name: code }
    }
}

const charactersRepository = new CharactersRepository();
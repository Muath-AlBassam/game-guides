
class CharactersRepository {

    constructor() {
        this.fetchData();
    }

    fetchData() {
        dataClient.loadData('CHARACTERS').then(characters => {
            this.data = Utils.arrayTo2LevelMap(
                characters,
                v => { return { name: v[0].NAME, imageUrl: v[0].IMAGE_URL, cardImageUrl: v[0].CARD_IMAGE_URL, element: v[0].ELEMENT, role: v[0].ROLE, rarity: v[0].RARITY }; }
            );
        });
    }

    getAllCharacters(gameCode) {
        return this.data.get(gameCode) ?? new Map([]);
    }

    getSortedCharactersList(gameCode) {
        return new Map([...this.getAllCharacters(gameCode).entries()].sort((a,b) => (a > b) ? 1 : ((b > a) ? -1 : 0)));
    }
    
    getCharacterMetadata(gameCode, characterName) {
        let data = this.getAllCharacters(gameCode).get(characterName)
        return data ?? { name: characterName }
    }
    
    data = new Map([]);
}

const charactersRepository = new CharactersRepository();

class CharactersRepository {

    charactersMap = new Map([]);

    constructor() {
        this.fetchData();
    }

    fetchData() {
        dataClient.loadData('CHARACTERS').then(characters => {
            this.charactersMap = DataUtils.arrayTo2LevelMap(
                characters,
                v => { 
                    return { 
                        name: v[0].NAME,
                        imageUrl: DataUtils.getImageUrl(v[0].IMAGE_URL),
                        cardImageUrl: DataUtils.getImageUrl(v[0].CARD_IMAGE_URL),
                        element: v[0].ELEMENT,
                        role: v[0].ROLE,
                        rarity: v[0].RARITY
                    }; 
                }
            );
        });
    }

    getAll(gameCode) {
        return this.charactersMap.get(gameCode) ?? new Map([]);
    }

    getAllOrdered(gameCode) {
        return new Map([...this.getAll(gameCode).entries()].sort((a,b) => (a > b) ? 1 : ((b > a) ? -1 : 0)));
    }
    
    getOne(gameCode, characterName) {
        let data = this.getAll(gameCode).get(characterName)
        return data ?? { name: characterName }
    }
}

const charactersRepository = new CharactersRepository();

class CharactersRepository {

    charactersMap = new Map([]);

    constructor() {
        this.fetchData();
    }

    fetchData() {
        dataClient.loadData('CHARACTERS').then(characters => {
            this.charactersMap = RepositoryMapper.mapCharacters(characters);
        });
    }

    getAll(gameCode) {
        return this.charactersMap.get(gameCode) ?? new Map([]);
    }

    getAllOrdered(gameCode) {
        return new Map([...this.getAll(gameCode).entries()].sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)));
    }
    
    getOne(gameCode, characterName) {
        let data = this.getAll(gameCode).get(characterName)
        return data ?? { name: characterName }
    }
}

const charactersRepository = new CharactersRepository();
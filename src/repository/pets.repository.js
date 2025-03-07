
class PetsRepository {
    getAllPets(gameCode) {
        switch (gameCode) {
            case Constants.games.ZZZ:
                return this.data.ZZZPets;
            default:
                return new Map([]);
        }
    }
    
    getPet(gameCode, petName) {
        let data = this.getAllPets(gameCode).get(petName)
        return data ?? { name: petName }
    }
    
    data = {
        ZZZPets: new Map([
            ['Officer Cui', {
                name: 'Officer Cui',
                imageUrl: 'assets/images/zzz/bangboo/ZZZ_B_OfficerCui.png',
                rarity: 'S',
            }],
            ['Red Moccus', {
                name: 'Red Moccus',
                imageUrl: 'assets/images/zzz/bangboo/ZZZ_B_RedMoccus.png',
                rarity: 'S',
            }],
            ['Resonaboo', {
                name: 'Resonaboo',
                imageUrl: 'assets/images/zzz/bangboo/ZZZ_B_Resonaboo.png',
                rarity: 'S',
            }],
            ['Rocketboo', {
                name: 'Rocketboo',
                imageUrl: 'assets/images/zzz/bangboo/ZZZ_B_Rocketboo.png',
                rarity: 'S',
            }],
            ['Sharkboo', {
                name: 'Sharkboo',
                imageUrl: 'assets/images/zzz/bangboo/ZZZ_B_Sharkboo.png',
                rarity: 'S',
            }],
            ['Agent Gulliver', {
                name: 'Agent Gulliver',
                imageUrl: 'assets/images/zzz/bangboo/ZZZ_B_AgentGulliver.png',
                rarity: 'S',
            }],
        ]),
    }
}

const petsRepository = new PetsRepository();
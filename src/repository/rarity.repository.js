
class RarityRepository {
    getAllRarities(gameCode) {
        switch (gameCode) {
            case Constants.games.GI:
                return this.data.GIRarity;
            case Constants.games.HSR:
                return this.data.HSRRarity;
            case Constants.games.ZZZ:
                return this.data.ZZZRarity;
            case Constants.games.HI3:
                return this.data.HI3Rarity;
            default:
                return new Map([]);
        }
    }

    getRarity(gameCode, rarityName) {
        let rarity = this.getAllRarities(gameCode).get(rarityName);
        return rarity ?? { name: rarityName }
    }

    data = {
        GIRarity: new Map([
            ['5', {
                code: '5',
                label: '5 Star',
                imageUrl: 'assets/images/gi/GI_Rarity5.png'
            }],
            ['4', {
                code: '4',
                label: '4 Star',
                imageUrl: 'assets/images/gi/GI_Rarity4.png'
            }]
        ]),

        HSRRarity: new Map([
            ['5', {
                code: '5',
                label: '5 Star',
                imageUrl: 'assets/images/hsr/HSR_Rarity5.png'
            }],
            ['4', {
                code: '4',
                label: '4 Star',
                imageUrl: 'assets/images/hsr/HSR_Rarity4.png'
            }]
        ]),

        ZZZRarity: new Map([
            ['S', {
                code: 'S',
                label: 'S Rank',
                imageUrl: 'assets/images/zzz/ZZZ_RarityS.png'
            }],
            ['A', {
                code: 'A',
                label: 'A Rank',
                imageUrl: 'assets/images/zzz/ZZZ_RarityA.png'
            }]
        ]),

        HI3Rarity: new Map([
            ['S', {
                code: 'S',
                label: 'S Rank',
                imageUrl: 'assets/images/hi3/HI3_RarityS.png'
            }],
            ['A', {
                code: 'A',
                label: 'A Rank',
                imageUrl: 'assets/images/hi3/HI3_RarityA.png'
            }]
        ]),
    }
}

const rarityRepository = new RarityRepository();
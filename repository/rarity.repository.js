
class RarityRepository {
    static getRarity(gameCode, rarity) {
        let data;
        switch (gameCode) {
            case Constants.games.GI:
                data = this.data.GIRarity.get(rarity);
                break;
            case Constants.games.HSR:
                data = this.data.HSRRarity.get(rarity);
                break;
            case Constants.games.ZZZ:
                data = this.data.ZZZRarity.get(rarity);
                break;
        }
        return data;
    }

    static data = {
        GIRarity: new Map([
            ['5', {
                code: '5',
                imageUrl: 'assets/images/gi/GI_Rarity5.png'
            }],
            ['4', {
                code: '4',
                imageUrl: 'assets/images/gi/GI_Rarity4.png'
            }]
        ]),

        HSRRarity: new Map(),

        ZZZRarity: new Map([
            ['S', {
                code: 'S',
                imageUrl: 'assets/images/zzz/ZZZ_RarityS.png'
            }],
            ['A', {
                code: 'A',
                imageUrl: 'assets/images/zzz/ZZZ_RarityA.png'
            }]
        ]),
    }
}
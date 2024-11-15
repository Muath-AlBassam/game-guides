
class ElementsRepository {
    static getAllElements(gameCode) {
        switch (gameCode) {
            case Constants.games.GI:
                return this.data.GIElements;
            case Constants.games.HSR:
                return this.data.HSRElements;
            case Constants.games.ZZZ:
                return this.data.ZZZElements;
            case Constants.games.HI3:
                return this.data.HI3Elements;
            default:
                return new Map([]);
        }
    }
    
    static getElement(gameCode, elementName) {
        let element = this.getAllElements(gameCode).get(elementName);
        return element ?? { name: elementName }
    }

    static data = {
        GIElements: new Map([
            ['Pyro', {
                name: 'Pyro',
                imageUrl: 'assets/images/gi/icons/GI_Pyro.png'
            }],
            ['Hydro', {
                name: 'Hydro',
                imageUrl: 'assets/images/gi/icons/GI_Hydro.png'
            }],
            ['Dendro', {
                name: 'Dendro',
                imageUrl: 'assets/images/gi/icons/GI_Dendro.png'
            }],
            ['Electro', {
                name: 'Electro',
                imageUrl: 'assets/images/gi/icons/GI_Electro.png'
            }],
            ['Anemo', {
                name: 'Anemo',
                imageUrl: 'assets/images/gi/icons/GI_Anemo.png'
            }],
            ['Cryo', {
                name: 'Cryo',
                imageUrl: 'assets/images/gi/icons/GI_Cryo.png'
            }],
            ['Geo', {
                name: 'Geo',
                imageUrl: 'assets/images/gi/icons/GI_Geo.png'
            }]
        ]),
    
        HSRElements: new Map([
            ['Physical', {
                name: 'Physical',
                imageUrl: 'assets/images/hsr/icons/HSR_Physical.png'
            }],
            ['Fire', {
                name: 'Fire',
                imageUrl: 'assets/images/hsr/icons/HSR_Fire.png'
            }],
            ['Ice', {
                name: 'Ice',
                imageUrl: 'assets/images/hsr/icons/HSR_Ice.png'
            }],
            ['Lightning', {
                name: 'Lightning',
                imageUrl: 'assets/images/hsr/icons/HSR_Lightning.png'
            }],
            ['Wind', {
                name: 'Wind',
                imageUrl: 'assets/images/hsr/icons/HSR_Wind.png'
            }],
            ['Quantum', {
                name: 'Quantum',
                imageUrl: 'assets/images/hsr/icons/HSR_Quantum.png'
            }],
            ['Imaginary', {
                name: 'Imaginary',
                imageUrl: 'assets/images/hsr/icons/HSR_Imaginary.png'
            }],
        ]),
    
        ZZZElements: new Map([
            ['Physical', {
                name: 'Physical',
                imageUrl: 'assets/zzz/icons/ZZZ_Physical.png'
            }],
            ['Fire', {
                name: 'Fire',
                imageUrl: 'assets/zzz/icons/ZZZ_Fire.png'
            }],
            ['Ice', {
                name: 'Ice',
                imageUrl: 'assets/zzz/icons/ZZZ_Ice.png'
            }],
            ['Electric', {
                name: 'Electric',
                imageUrl: 'assets/zzz/icons/ZZZ_Electric.png'
            }],
            ['Ether', {
                name: 'Ether',
                imageUrl: 'assets/zzz/icons/ZZZ_Ether.png'
            }],
        ]),
    
        HI3Elements: new Map([
            ['Fire', {
                name: 'Fire',
                imageUrl: 'assets/hi3/icons/HI3_Fire.png'
            }],
            ['Lightning', {
                name: 'Lightning',
                imageUrl: 'assets/hi3/icons/HI3_Lightning.png'
            }],
            ['Ice', {
                name: 'Ice',
                imageUrl: 'assets/hi3/icons/HI3_Ice.png'
            }],
            ['Physical', {
                name: 'Physical',
                imageUrl: 'assets/hi3/icons/HI3_Physical.png'
            }],
        ]),
    }
}
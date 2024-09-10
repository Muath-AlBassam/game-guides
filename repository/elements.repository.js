
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
                imageUrl: 'assets/gi/GI_Pyro.png'
            }],
            ['Hydro', {
                name: 'Hydro',
                imageUrl: 'assets/gi/GI_Hydro.png'
            }],
            ['Dendro', {
                name: 'Dendro',
                imageUrl: 'assets/gi/GI_Dendro.png'
            }],
            ['Electro', {
                name: 'Electro',
                imageUrl: 'assets/gi/GI_Electro.png'
            }],
            ['Anemo', {
                name: 'Anemo',
                imageUrl: 'assets/gi/GI_Anemo.png'
            }],
            ['Cryo', {
                name: 'Cryo',
                imageUrl: 'assets/gi/GI_Cryo.png'
            }],
            ['Geo', {
                name: 'Geo',
                imageUrl: 'assets/gi/GI_Geo.png'
            }]
        ]),
    
        HSRElements: new Map([
            ['Physical', {
                name: 'Physical',
                imageUrl: 'assets/hsr/HSR_Physical.png'
            }],
            ['Fire', {
                name: 'Fire',
                imageUrl: 'assets/hsr/HSR_Fire.png'
            }],
            ['Ice', {
                name: 'Ice',
                imageUrl: 'assets/hsr/HSR_Ice.png'
            }],
            ['Lightning', {
                name: 'Lightning',
                imageUrl: 'assets/hsr/HSR_Lightning.png'
            }],
            ['Wind', {
                name: 'Wind',
                imageUrl: 'assets/hsr/HSR_Wind.png'
            }],
            ['Quantum', {
                name: 'Quantum',
                imageUrl: 'assets/hsr/HSR_Quantum.png'
            }],
            ['Imaginary', {
                name: 'Imaginary',
                imageUrl: 'assets/hsr/HSR_Imaginary.png'
            }],
        ]),
    
        ZZZElements: new Map([
            ['Physical', {
                name: 'Physical',
                imageUrl: 'assets/zzz/ZZZ_Physical.jpg'
            }],
            ['Fire', {
                name: 'Fire',
                imageUrl: 'assets/zzz/ZZZ_Fire.jpg'
            }],
            ['Ice', {
                name: 'Ice',
                imageUrl: 'assets/zzz/ZZZ_Ice.png'
            }],
            ['Electric', {
                name: 'Electric',
                imageUrl: 'assets/zzz/ZZZ_Electric.jpg'
            }],
            ['Ether', {
                name: 'Ether',
                imageUrl: 'assets/zzz/ZZZ_Ether.jpg'
            }],
        ]),
    
        HI3Elements: new Map([
            ['Fire', {
                name: 'Fire',
                imageUrl: 'assets/hi3/HI3_Fire.png'
            }],
            ['Lightning', {
                name: 'Lightning',
                imageUrl: 'assets/hi3/HI3_Lightning.png'
            }],
            ['Ice', {
                name: 'Ice',
                imageUrl: 'assets/hi3/HI3_Ice.png'
            }],
            ['Physical', {
                name: 'Physical',
                imageUrl: 'assets/hi3/HI3_Physical.png'
            }],
        ]),
    }
}
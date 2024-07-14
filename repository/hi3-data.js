const HI3Data = {
    HI3Teams: [
        {
            name: 'Fire',
            iconUrl: 'assets/hi3/HI3_Fire.png',
            characters: [
                {
                    name: 'Lantern',
                    role: 'Main',
                    isMain: true,
                    replacedBy: [],
                },
                {
                    name: 'Ai',
                    role: 'Fire DMG Buff + Ignite',
                    isMain: false,
                    replacedBy: [],
                },
                {
                    name: 'Bronya (HoT)',
                    role: 'Fire DMG Buff',
                    isMain: false,
                    replacedBy: [],
                },
            ],
            rotations: [
                ['Bronya (HoT)', `Skill ${arrow} QTE ${arrow}`],
                ['Ai', `Skill ${arrow}`],
                ['Bronya (HoT)', `Ult${times}2 ${arrow} QTE ${arrow}`],
                ['Lantern', `Basic + Skill ${arrow} Charged ${arrow} Ult`],
            ]
        },
        {
            name: 'Lightning',
            iconUrl: 'assets/hi3/HI3_Lightning.png',
            characters: [
                {
                    name: 'Lunar Vow',
                    role: 'Main',
                    isMain: true,
                    replacedBy: [],
                },
                {
                    name: 'Eden',
                    role: 'Buff?',
                    isMain: false,
                    replacedBy: [],
                },
                {
                    name: 'Bronya (HoT)',
                    role: 'Lightning DMG Buff',
                    isMain: false,
                    replacedBy: [],
                },
            ],
            rotations: [
                ['Bronya (HoT)', `Skill ${arrow} Ult${times}2 ${arrow} QTE ${arrow}`],
                ['Eden', `Ult ${arrow} QTE ${arrow}`],
                ['Lunar Vow', `Skill ${arrow} Ult`]
            ]
        },
        {
            name: 'Ice',
            iconUrl: 'assets/hi3/HI3_Ice.png',
            characters: [
                {
                    name: 'Elysia',
                    role: 'Main',
                    isMain: true,
                    replacedBy: [],
                },
            ]
        },
        {
            name: 'Physical',
            iconUrl: 'assets/hi3/HI3_Physical.png',
            characters: [
                {
                    name: 'Durandal',
                    role: 'Main',
                    isMain: true,
                    replacedBy: [],
                },
                {
                    name: 'Carole',
                    role: 'Physical & Total DMG Buff',
                    isMain: false,
                    replacedBy: [],
                },
                {
                    name: 'Fu Hua (HoS)',
                    role: 'DEF Reduction',
                    isMain: false,
                    replacedBy: [],
                },
            ],
            rotations: [
                ['Fu Hua (HoS)', `Basic ${smallText('(Spear combo)')} ${arrow} QTE ${arrow}`],
                ['Carole', `CA ${arrow} Ult ${arrow} QTE ${arrow}`],
                ['Durandal', `Basic + CA + Ult`]
            ]
        },
        {
            name: 'Herrscher Trio',
            iconUrl: null,
            characters: [
                {
                    name: 'Kiana (HoFi)',
                    role: 'Main',
                    isMain: false,
                    replacedBy: [],
                },
                {
                    name: 'Mei (HoO)',
                    role: 'Main',
                    isMain: false,
                    replacedBy: [],
                },
                {
                    name: 'Bronya (HoT)',
                    role: 'Fire & Lightning DMG Buff',
                    isMain: false,
                    replacedBy: [],
                },
            ],
            rotations: [
                ['Bronya (HoT)', `Skill ${arrow} Ult${times}2 ${arrow} QTE ${arrow}`],
                ['Kiana (HoFi)', `Basic ${arrow} CA ${arrow}`],
                ['Mei (HoO)', `Basic ${arrow} CA ${arrow} Ult ${arrow} QTE ${arrow}`],
                ['Kiana (HoFi)', `Skill ${arrow} Basic ${arrow} CA ${arrow} Evade ${smallText('(Hold)')} ${arrow} Basic ${arrow} Ult`],
            ]
        },
    ],

    HI3Characters: new Map([
        ['Kiana (HoFi)', {
            name: 'Kiana (HoFi)',
            imageUrl: 'assets/hi3/character/HI3_Kiana_HoFi.png',
            rarity: 'S'
        }],
        ['Kiana (HoF)', {
            name: 'Kiana (HoF)',
            imageUrl: 'assets/hi3/character/HI3_Kiana_HoF.png',
            rarity: 'S'
        }],
        ['Mei (HoO)', {
            name: 'Mei (HoO)',
            imageUrl: 'assets/hi3/character/HI3_Mei_HoO.png',
            rarity: 'S'
        }],
        ['Mei (HoT)', {
            name: 'Mei (HoT)',
            imageUrl: 'assets/hi3/character/HI3_Mei_HoT.png',
            rarity: 'S'
        }],
        ['Bronya (HoT)', {
            name: 'Bronya (HoT)',
            imageUrl: 'assets/hi3/character/HI3_Bronya_HoT.png',
            rarity: 'S'
        }],
        ['Bronya (HoR)', {
            name: 'Bronya (HoR)',
            imageUrl: 'assets/hi3/character/HI3_Bronya_HoR.png',
            rarity: 'S'
        }],
        ['Elysia', {
            name: 'Elysia',
            imageUrl: 'assets/hi3/character/HI3_Elysia.png',
            rarity: 'S'
        }],
        ['Aponia', {
            name: 'Aponia',
            imageUrl: 'assets/hi3/character/HI3_Aponia.png',
            rarity: 'S'
        }],
        ['Eden', {
            name: 'Eden',
            imageUrl: 'assets/hi3/character/HI3_Eden.png',
            rarity: 'A'
        }],
        ['Lunar Vow', {
            name: 'Lunar Vow',
            imageUrl: 'assets/hi3/character/HI3_LunarVow.png',
            rarity: 'S'
        }],
        ['Durandal', {
            name: 'Durandal',
            imageUrl: 'assets/hi3/character/HI3_Durandal.png',
            rarity: 'S'
        }],
        ['Lantern', {
            name: 'Lantern',
            imageUrl: 'assets/hi3/character/HI3_Lantern.png',
            rarity: 'S'
        }],
        ['Ai', {
            name: 'Ai',
            imageUrl: 'assets/hi3/character/HI3_Ai.png',
            rarity: 'A'
        }],
        ['Fu Hua (HoS)', {
            name: 'Fu Hua (HoS)',
            imageUrl: 'assets/hi3/character/HI3_FuHua_HoS.png',
            rarity: 'S'
        }],
        ['Carole', {
            name: 'Carole',
            imageUrl: 'assets/hi3/character/HI3_Carole.png',
            rarity: 'A'
        }],
    ]),

}
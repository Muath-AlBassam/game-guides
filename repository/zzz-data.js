const ZZZData = {
    ZZZTeams: [
        {
            name: 'Physical',
            iconUrl: 'assets/zzz/ZZZ_Physical.jpg',
            characters: []
        },
        {
            name: 'Fire',
            iconUrl: 'assets/zzz/ZZZ_Fire.jpg',
            characters: [
                {
                    name: 'Soldier 11',
                    role: 'Main [Basic + EX Special]',
                    isMain: true,
                    replacedBy: [],
                },
                {
                    name: 'Koleda',
                    role: 'Stun',
                    isMain: false,
                    replacedBy: [],
                },
                {
                    name: 'Lucy',
                    role: 'Atk Buff',
                    isMain: false,
                    replacedBy: [],
                }
            ],
            rotations: [
                ['Koleda', `Basic${times}2 ${arrow} Stun ${arrow}`],
                ['Lucy', `EX Special ${arrow}`],
                ['Soldier 11', `(EX Special ${arrow} Basic) / Timed Basic`],
            ]
        },
        {
            name: 'Ice',
            iconUrl: 'assets/zzz/ZZZ_Ice.jpg',
            characters: [
                {
                    name: 'Ellen',
                    role: 'Main [Basic + EX Special]',
                    isMain: true,
                    replacedBy: [],
                },
                {
                    name: 'Lycaon',
                    role: 'Stun',
                    isMain: false,
                    replacedBy: [],
                },
                {
                    name: 'Soukaku',
                    role: 'Atk Buff',
                    isMain: false,
                    replacedBy: [],
                }
            ],
            rotations: [
                ['Ellen', `Dash + Basic ${smallText('(hold)')} ${arrow}`],
                ['Lycaon', `CA / EX Special ${arrow} Stun ${arrow}`],
                ['Soukaku', `Special ${smallText('(hold)')} ${arrow} Chain/Quick-Assist ${arrow}`],
                ['Ellen', `Basic + EX Special`],
            ]
        },
        {
            name: 'Electric',
            iconUrl: 'assets/zzz/ZZZ_Electric.jpg',
            characters: [
                {
                    name: 'Grace',
                    role: null,
                    isMain: true,
                    replacedBy: [],
                },
                {
                    name: 'Anby',
                    role: null,
                    isMain: false,
                    replacedBy: [],
                }
            ]
        },
        {
            name: 'Ether',
            iconUrl: 'assets/zzz/ZZZ_Ether.jpg',
            characters: []
        },
    ],

    ZZZCharacters: new Map([
        ['Ellen', {
            name: 'Ellen',
            imageUrl: 'assets/zzz/character/ZZZ_Ellen.jpg',
            role: 'Attack',
            rarity: 'S',
            build: {
                weapon: { name: 'Deep Sea Visitor' }
            }
        }],
        ['Soukaku', {
            name: 'Soukaku',
            imageUrl: 'assets/zzz/character/ZZZ_Soukaku.jpg',
            role: 'Support',
            rarity: 'A',
            build: {
                weapon: { name: 'Bashful Demon' }
            }
        }],
        ['Anby', {
            name: 'Anby',
            imageUrl: 'assets/zzz/character/ZZZ_Anby.jpg',
            role: 'Stun',
            rarity: 'A',
            build: {
                weapon: { name: 'Demara Battery Mark II' }
            }
        }],
        ['Lycaon', {
            name: 'Lycaon',
            imageUrl: 'assets/zzz/character/ZZZ_Lycaon.jpg',
            role: 'Stun',
            rarity: 'S',
            build: {
                weapon: { name: 'The Restrained' }
            }
        }],
        ['Grace', {
            name: 'Grace',
            imageUrl: 'assets/zzz/character/ZZZ_Grace.jpg',
            role: 'Anomaly',
            rarity: 'S',
            build: {
                weapon: { name: 'Fusion Compiler' }
            }
        }],
        ['Koleda', {
            name: 'Koleda',
            imageUrl: 'assets/zzz/character/ZZZ_Koleda.jpg',
            role: 'Stun',
            rarity: 'S',
            build: {
                weapon: { name: 'Hellfire Gears' }
            }
        }],
        ['Soldier 11', {
            name: 'Soldier 11',
            imageUrl: 'assets/zzz/character/ZZZ_Soldier11.jpg',
            role: 'Attack',
            rarity: 'S',
            build: {
                weapon: { name: 'Starlight Engine' }
            }
        }],
        ['Lucy', {
            name: 'Lucy',
            imageUrl: 'assets/zzz/character/ZZZ_Lucy.jpg',
            role: 'Support',
            rarity: 'A',
            build: {
                weapon: { name: 'Kaboom the Cannon' }
            }
        }],
    ]),

    ZZZRoles: [
        { name: 'Anomaly', imageUrl: 'assets/zzz/ZZZ_Style_Anomaly.jpg' },
        { name: 'Attack', imageUrl: 'assets/zzz/ZZZ_Style_Attack.jpg' },
        { name: 'Defence', imageUrl: 'assets/zzz/ZZZ_Style_Defence.jpg' },
        { name: 'Stun', imageUrl: 'assets/zzz/ZZZ_Style_Stun.jpg' },
        { name: 'Support', imageUrl: 'assets/zzz/ZZZ_Style_Support.jpg' },
    ],

    ZZZWEngines: new Map([
        ['Fusion Compiler', {
            name: 'Fusion Compiler',
            imageUrl: 'assets/zzz/w-engine/ZZZ_WE_FusionCompiler.jpg',
            rarity: 'S'
        }],
        ['Deep Sea Visitor', {
            name: 'Deep Sea Visitor',
            imageUrl: 'assets/zzz/w-engine/ZZZ_WE_DeepSeaVisitor.jpg',
            rarity: 'S'
        }],
        ['Hellfire Gears', {
            name: 'Hellfire Gears',
            imageUrl: 'assets/zzz/w-engine/ZZZ_WE_HellfireGears.jpg',
            rarity: 'S'
        }],
        ['The Restrained', {
            name: 'The Restrained',
            imageUrl: 'assets/zzz/w-engine/ZZZ_WE_TheRestrained.jpg',
            rarity: 'S'
        }],
        ['Starlight Engine', {
            name: 'Starlight Engine',
            imageUrl: 'assets/zzz/w-engine/ZZZ_WE_StarlightEngine.jpg',
            rarity: 'A'
        }],
        ['Demara Battery Mark II', {
            name: 'Demara Battery Mark II',
            imageUrl: 'assets/zzz/w-engine/ZZZ_WE_DemaraBatteryMarkII.jpg',
            rarity: 'A'
        }],
        ['Bashful Demon', {
            name: 'Bashful Demon',
            imageUrl: 'assets/zzz/w-engine/ZZZ_WE_BashfulDemon.jpg',
            rarity: 'A'
        }],
        ['Kaboom the Cannon', {
            name: 'Kaboom the Cannon',
            imageUrl: 'assets/zzz/w-engine/ZZZ_WE_KaboomTheCannon.jpg',
            rarity: 'A'
        }],
    ]),
}
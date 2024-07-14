const HSRData = {
    HSRTeams: [
        {
            name: 'Physical',
            iconUrl: 'assets/hsr/HSR_Physical.jpg',
            characters: [
                {
                    name: 'Gallagher',
                    role: 'Heal',
                    isMain: false,
                    replacedBy: [],
                },
                {
                    name: 'Boothill',
                    role: 'Main [Skill + Ult] + Break',
                    isMain: true,
                    replacedBy: [],
                },
                {
                    name: 'Ruan Mei',
                    role: 'DMG, RES PEN & Break Efficiency Buff',
                    isMain: false,
                    replacedBy: [],
                },
                {
                    name: 'Bronya',
                    role: 'Advance',
                    isMain: false,
                    replacedBy: ['MC (Harmony)'],
                }
            ],
            variations: [
                ['Lynx', 'Clara', 'Ruan Mei', 'Tingyun']
            ]
        },
        {
            name: 'Fire',
            iconUrl: 'assets/hsr/HSR_Fire.jpg',
            characters: [
                {
                    name: 'Gallagher',
                    role: 'Heal',
                    isMain: false,
                    replacedBy: [],
                },
                {
                    name: 'Firefly',
                    role: 'Main [Skill + Ult] + Break',
                    isMain: true,
                    replacedBy: [],
                },
                {
                    name: 'Ruan Mei',
                    role: 'DMG, RES PEN & Break Efficiency Buff',
                    isMain: false,
                    replacedBy: [],
                },
                {
                    name: 'MC (Harmony)',
                    role: 'Break Buff + Super Break',
                    isMain: false,
                    replacedBy: [],
                }
            ]
        },
        {
            name: 'Ice',
            iconUrl: 'assets/hsr/HSR_Ice.jpg',
            characters: [
                {
                    name: 'Luocha',
                    role: 'Heal',
                    isMain: false,
                    replacedBy: ['Fu Xuan', 'Huohuo'],
                },
                {
                    name: 'Jingliu',
                    role: 'Main [Skill + Ult]',
                    isMain: true,
                    replacedBy: [],
                },
                {
                    name: 'Bronya',
                    role: 'DMG & Crit Buff',
                    isMain: false,
                    replacedBy: ['Sparkle'],
                },
                {
                    name: 'Ruan Mei',
                    role: 'DMG & RES PEN Buff',
                    isMain: false,
                    replacedBy: ['Tingyun'],
                }
            ]
        },
        {
            name: 'Lightning',
            iconUrl: 'assets/hsr/HSR_Lightning.jpg',
            characters: [
                {
                    name: 'Fu Xuan',
                    role: 'Tank + Crit Buff + Debuff',
                    isMain: false,
                    replacedBy: ['Gepard'],
                },
                {
                    name: 'Acheron',
                    role: 'Main [Skill + Ult]',
                    isMain: true,
                    replacedBy: [],
                },
                {
                    name: 'Sparkle',
                    role: 'DMG & Crit Buff',
                    isMain: false,
                    replacedBy: [],
                },
                {
                    name: 'Pela',
                    role: 'Debuff',
                    isMain: false,
                    replacedBy: ['Silver Wolf'],
                }
            ]
        },
        {
            name: 'Wind',
            iconUrl: 'assets/hsr/HSR_Wind.jpg',
            characters: [
                {
                    name: 'Luocha',
                    role: 'Heal',
                    isMain: false,
                    replacedBy: [],
                },
                {
                    name: 'Blade',
                    role: 'Main [Basic + Ult]',
                    isMain: true,
                    replacedBy: [],
                },
                {
                    name: 'Bronya',
                    role: 'DMG & Crit Buff',
                    isMain: false,
                    replacedBy: ['Sparkle'],
                },
                {
                    name: 'Ruan Mei',
                    role: 'DMG & RES PEN Buff',
                    isMain: false,
                    replacedBy: [],
                }
            ]
        },
        {
            name: 'Quantum',
            iconUrl: 'assets/hsr/HSR_Quantum.jpg',
            characters: [
                {
                    name: 'Fu Xuan',
                    role: 'Tank + Crit Buff',
                    isMain: false,
                    replacedBy: [],
                },
                {
                    name: 'Seele',
                    role: 'Main [Skill + Ult]',
                    isMain: true,
                    replacedBy: ['Xueyi'],
                },
                {
                    name: 'Bronya',
                    role: 'DMG & Crit Buff',
                    isMain: false,
                    replacedBy: ['Sparkle'],
                },
                {
                    name: 'Silver Wolf',
                    role: 'Debuff',
                    isMain: false,
                    replacedBy: ['Ruan Mei'],
                }
            ],
            variations: [
                ['Fu Xuan', 'Jade', 'Herta', 'Robin']
            ]
        },
        {
            name: 'Imaginary',
            iconUrl: 'assets/hsr/HSR_Imaginary.jpg',
            characters: [
                {
                    name: 'Luocha',
                    role: 'Heal',
                    isMain: false,
                    replacedBy: [],
                },
                {
                    name: 'Dang Heng · IL', // to get the dot: alt+0183
                    role: 'Main [Basic]',
                    isMain: true,
                    replacedBy: [],
                },
                {
                    name: 'Sparkle',
                    role: 'DMG & Crit Buff + SP Recovery',
                    isMain: false,
                    replacedBy: [],
                },
                {
                    name: 'Welt',
                    role: 'Break + Debuff',
                    isMain: false,
                    replacedBy: ['Hanya'],
                }
            ],
            variations: [
                ['Luocha', 'Dr. Ratio', 'Silver Wolf', 'Ruan Mei']
            ]
        },
        {
            name: 'DoT',
            iconUrl: 'assets/hsr/HSR_DoT.png',
            characters: [
                {
                    name: 'Huohuo',
                    role: 'Heal',
                    isMain: false,
                    replacedBy: [],
                },
                {
                    name: 'Kafka',
                    role: 'Main [Skill + Ult] + DoT Ignition',
                    isMain: true,
                    replacedBy: [],
                },
                {
                    name: 'Black Swan',
                    role: 'DoT + Debuff',
                    isMain: false,
                    replacedBy: [],
                },
                {
                    name: 'Ruan Mei',
                    role: 'DMG & RES PEN Buff',
                    isMain: false,
                    replacedBy: ['Tingyun', 'Silver Wolf'],
                }
            ]
        },
        // {
        //     name: 'Follow-up',
        //     iconUrl: null,
        //     characters: [
        //         {
        //             name: 'Gepard',
        //             role: 'Shield',
        //             isMain: false,
        //             replacedBy: [],
        //         },
        //         {
        //             name: 'Dr. Ratio',
        //             role: 'Main [Skill + FUA]',
        //             isMain: true,
        //             replacedBy: [],
        //         },
        //         {
        //             name: 'Topaz',
        //             role: 'Main [Skill + FUA]',
        //             isMain: true,
        //             replacedBy: [],
        //         },
        //         {
        //             name: 'Robin',
        //             role: 'ATK & FUA DMG Buff',
        //             isMain: false,
        //             replacedBy: ['Ruan Mei'],
        //         }
        //     ]
        // },
    ],

    HSRCharacters: new Map([
        ['MC (Harmony)', {
            name: 'MC (Harmony)',
            imageUrl: 'assets/hsr/character/HSR_MCHarmony.jpg',
            role: 'Harmony',
            rarity: '5',
            build: {
                weapon: { name: 'Memories of the Past' },
                sets: [
                    { name: 'Watchmaker, Master of Dream Machinations', pieceCount: '4' },
                    { name: 'Talia: Kingdom of Banditry', pieceCount: '2' }
                ]
            }
        }],
        ['Lynx', {
            name: 'Lynx',
            imageUrl: 'assets/hsr/character/HSR_Lynx.jpg',
            role: 'Abundance',
            rarity: '4',
            build: {
                weapon: { name: 'Warmth Shortens Cold Nights' },
                sets: [
                    { name: 'Longevous Disciple', pieceCount: '2' },
                    { name: 'Passerby of Wandering Cloud', pieceCount: '2' },
                    { name: 'Fleet of the Ageless', pieceCount: '2' }
                ]
            }
        }],
        ['Clara', {
            name: 'Clara',
            imageUrl: 'assets/hsr/character/HSR_Clara.jpg',
            role: 'Destruction',
            rarity: '5',
            build: {
                weapon: { name: 'Something Irreplaceable' },
                sets: [
                    { name: 'Champion of Streetwise Boxing', pieceCount: '4' },
                    { name: 'Inert Salsotto', pieceCount: '2' }
                ]
            }
        }],
        ['Tingyun', {
            name: 'Tingyun',
            imageUrl: 'assets/hsr/character/HSR_Tingyun.jpg',
            role: 'Harmony',
            rarity: '4',
            build: {
                weapon: { name: 'Carve the Moon, Weave the Clouds' },
                sets: [
                    { name: 'Messenger Traversing Hackerspace', pieceCount: '2' },
                    { name: 'Musketeer of Wild Wheat', pieceCount: '2' },
                    { name: 'Fleet of the Ageless', pieceCount: '2' }
                ]
            }
        }],
        ['Ruan Mei', {
            name: 'Ruan Mei',
            imageUrl: 'assets/hsr/character/HSR_RuanMei.jpg',
            role: 'Harmony',
            rarity: '5',
            build: {
                weapon: { name: 'Past Self in Mirror' },
                sets: [
                    { name: 'Messenger Traversing Hackerspace', pieceCount: '2' },
                    { name: 'Thief of Shooting Meteor', pieceCount: '2' },
                    { name: 'Talia: Kingdom of Banditry', pieceCount: '2' }
                ]
            }
        }],
        ['Acheron', {
            name: 'Acheron',
            imageUrl: 'assets/hsr/character/HSR_Acheron.jpg',
            role: 'Nihility',
            rarity: '5',
            build: {
                weapon: { name: 'Along the Passing Shore' },
                sets: [
                    { name: 'Pioneer Diver of Dead Waters', pieceCount: '4' },
                    { name: 'Izumo Gensei and Takama Divine Realm', pieceCount: '2' }
                ]
            }
        }],
        ['Dang Heng · IL', {
            name: 'Dang Heng · IL',
            imageUrl: 'assets/hsr/character/HSR_DanHengIL.jpg',
            role: 'Destruction',
            rarity: '5',
            build: {
                weapon: { name: 'Brighter Than the Sun' },
                sets: [
                    { name: 'Musketeer of Wild Wheat', pieceCount: '2' },
                    { name: 'Wastelander of Banditry Desert', pieceCount: '2' },
                    { name: 'Rutilant Arena', pieceCount: '2' }
                ]
            }
        }],
        ['Jingliu', {
            name: 'Jingliu',
            imageUrl: 'assets/hsr/character/HSR_Jingliu.jpg',
            role: 'Destruction',
            rarity: '5',
            build: {
                weapon: { name: 'I Shall Be My Own Sword' },
                sets: [
                    { name: 'Hunter of Glacial Forest', pieceCount: '4' },
                    { name: 'Rutilant Arena', pieceCount: '2' }
                ]
            }
        }],
        ['Kafka', {
            name: 'Kafka',
            imageUrl: 'assets/hsr/character/HSR_Kafka.jpg',
            role: 'Nihility',
            rarity: '5',
            build: {
                weapon: { name: 'Patience Is All You Need' },
                sets: [
                    { name: 'Prisoner in Deep Confinement', pieceCount: '4' },
                    { name: 'Firmament Frontline: Glamoth', pieceCount: '2' }
                ]
            }
        }],
        ['Sparkle', {
            name: 'Sparkle',
            imageUrl: 'assets/hsr/character/HSR_Sparkle.jpg',
            role: 'Harmony',
            rarity: '5',
            build: {
                weapon: { name: 'Earthly Escapade' },
                sets: [
                    { name: 'Messenger Traversing Hackerspace', pieceCount: '4' },
                    { name: 'Penacony, Land of the Dreams', pieceCount: '2' }
                ]
            }
        }],
        ['Fu Xuan', {
            name: 'Fu Xuan',
            imageUrl: 'assets/hsr/character/HSR_FuXuan.jpg',
            role: 'Preservation',
            rarity: '5',
            build: {
                weapon: { name: 'She Already Shut Her Eyes' },
                sets: [
                    { name: 'Longevous Disciple', pieceCount: '2' },
                    { name: 'Guard of Wuthering Snow', pieceCount: '2' },
                    { name: 'Fleet of the Ageless', pieceCount: '2' }
                ]
            }
        }],
        ['Dr. Ratio', {
            name: 'Dr. Ratio',
            imageUrl: 'assets/hsr/character/HSR_DrRatio.jpg',
            role: 'Hunt',
            rarity: '5',
            build: {
                weapon: { name: 'Baptism of Pure Thought' },
                sets: [
                    { name: 'Prisoner in Deep Confinement', pieceCount: '2' },
                    { name: 'Wastelander of Banditry Desert', pieceCount: '2' },
                    { name: 'Inert Salsotto', pieceCount: '2' }
                ]
            }
        }],
        ['Seele', {
            name: 'Seele',
            imageUrl: 'assets/hsr/character/HSR_Seele.jpg',
            role: 'Hunt',
            rarity: '5',
            build: {
                weapon: { name: 'In the Night' },
                sets: [
                    { name: 'Genius of Brilliant Stars', pieceCount: '4' },
                    { name: 'Inert Salsotto', pieceCount: '2' }
                ]
            }
        }],
        ['Black Swan', {
            name: 'Black Swan',
            imageUrl: 'assets/hsr/character/HSR_BlackSwan.jpg',
            role: 'Nihility',
            rarity: '5',
            build: {
                weapon: { name: 'Reforged Remembrance' },
                sets: [
                    { name: 'Prisoner in Deep Confinement', pieceCount: '4' },
                    { name: 'Pan-Cosmic Commercial Enterprise', pieceCount: '2' }
                ]
            }
        }],
        ['Bronya', {
            name: 'Bronya',
            imageUrl: 'assets/hsr/character/HSR_Bronya.jpg',
            role: 'Harmony',
            rarity: '5',
            build: {
                weapon: { name: 'But the Battle Isn\'t Over' },
                sets: [
                    { name: 'Musketeer of Wild Wheat', pieceCount: '2' },
                    { name: 'Thief of Shooting Meteor', pieceCount: '2' },
                    { name: 'Fleet of the Ageless', pieceCount: '2' }
                ]
            }
        }],
        ['Silver Wolf', {
            name: 'Silver Wolf',
            imageUrl: 'assets/hsr/character/HSR_SilverWolf.jpg',
            role: 'Nihility',
            rarity: '5',
            build: {
                weapon: { name: 'Before the Tutorial Mission Starts' },
                sets: [
                    { name: 'Messenger Traversing Hackerspace', pieceCount: '2' },
                    { name: 'Knight of Purity Palace', pieceCount: '2' },
                    { name: 'Pan-Cosmic Commercial Enterprise', pieceCount: '2' }
                ]
            }
        }],
        ['Huohuo', {
            name: 'Huohuo',
            imageUrl: 'assets/hsr/character/HSR_Huohuo.jpg',
            role: 'Abundance',
            rarity: '5',
            build: {
                weapon: { name: 'Hey, Over Here' },
                sets: [
                    { name: 'Messenger Traversing Hackerspace', pieceCount: '2' },
                    { name: 'Passerby of Wandering Cloud', pieceCount: '2' },
                    { name: 'Fleet of the Ageless', pieceCount: '2' }
                ]
            }
        }],
        ['Luocha', {
            name: 'Luocha',
            imageUrl: 'assets/hsr/character/HSR_Luocha.jpg',
            role: 'Abundance',
            rarity: '5',
            build: {
                weapon: { name: 'Perfect Timing' },
                sets: [
                    { name: 'Passerby of Wandering Cloud', pieceCount: '2' },
                    { name: 'Musketeer of Wild Wheat', pieceCount: '2' },
                    { name: 'Space Sealing Station', pieceCount: '2' }
                ]
            }
        }],
        ['Blade', {
            name: 'Blade',
            imageUrl: 'assets/hsr/character/HSR_Blade.jpg',
            role: 'Destruction',
            rarity: '5',
            build: {
                weapon: { name: 'The Unreachable Side' },
                sets: [
                    { name: 'Longevous Disciple', pieceCount: '4' },
                    { name: 'Rutilant Arena', pieceCount: '2' }
                ]
            }
        }],
        ['Xueyi', {
            name: 'Xueyi',
            imageUrl: 'assets/hsr/character/HSR_Xueyi.jpg',
            role: 'Destruction',
            rarity: '4',
            build: {
                weapon: { name: 'Brighter Than the Sun' },
                sets: [
                    { name: 'Genius of Brilliant Stars', pieceCount: '4' },
                    { name: 'Inert Salsotto', pieceCount: '2' }
                ]
            }
        }],
        ['Pela', {
            name: 'Pela',
            imageUrl: 'assets/hsr/character/HSR_Pela.jpg',
            role: 'Nihility',
            rarity: '4',
            build: {
                weapon: { name: 'Resolution Shines As Pearls of Sweat' },
                sets: [
                    { name: 'Messenger Traversing Hackerspace', pieceCount: '2' },
                    { name: 'Longevous Disciple', pieceCount: '2' },
                    { name: 'Belobog of the Architects', pieceCount: '2' }
                ]
            }
        }],
        ['Welt', {
            name: 'Welt',
            imageUrl: 'assets/hsr/character/HSR_Welt.jpg',
            role: 'Nihility',
            rarity: '5',
            build: {
                weapon: { name: 'In the Name of the World' },
                sets: [
                    { name: 'Pioneer Diver of Dead Waters', pieceCount: '4' },
                    { name: 'Pan-Cosmic Commercial Enterprise', pieceCount: '2' }
                ]
            }
        }],
        ['Topaz', {
            name: 'Topaz',
            imageUrl: 'assets/hsr/character/HSR_Topaz.jpg',
            role: 'Hunt',
            rarity: '5',
            build: {
                weapon: { name: '...' },
                sets: [
                    { name: '...', pieceCount: '4' },
                    { name: '...', pieceCount: '2' }
                ]
            }
        }],
        ['Gepard', {
            name: 'Gepard',
            imageUrl: 'assets/hsr/character/HSR_Gepard.jpg',
            role: 'Preservation',
            rarity: '5',
            build: {
                weapon: { name: 'Moment of Victory' },
                sets: [
                    { name: 'Knight of Purity Palace', pieceCount: '4' },
                    { name: 'Belobog of the Architects', pieceCount: '2' }
                ]
            }
        }],
        ['Robin', {
            name: 'Robin',
            imageUrl: 'assets/hsr/character/HSR_Robin.jpg',
            role: 'Harmony',
            rarity: '5',
            build: {
                weapon: { name: 'Flowing Nightglow' },
                sets: [
                    { name: 'Prisoner in Deep Confinement', pieceCount: '2' },
                    { name: 'Musketeer of Wild Wheat', pieceCount: '2' },
                    { name: 'Fleet of the Ageless', pieceCount: '2' }
                ]
            }
        }],
        ['Hanya', {
            name: 'Hanya',
            imageUrl: 'assets/hsr/character/HSR_Hanya.jpg',
            role: 'Harmony',
            rarity: '4',
            build: {
                weapon: { name: 'Dance! Dance! Dance!' },
                sets: [
                    { name: 'Messenger Traversing Hackerspace', pieceCount: '4' },
                    { name: 'Penacony, Land of the Dreams', pieceCount: '2' }
                ]
            }
        }],
        ['Boothill', {
            name: 'Boothill',
            imageUrl: 'assets/hsr/character/HSR_Boothill.jpg',
            role: 'Hunt',
            rarity: '5',
            build: {
                weapon: { name: 'Sailing Towards A Second Life' },
                sets: [
                    { name: 'Thief of Shooting Meteor', pieceCount: '4' },
                    { name: 'Talia: Kingdom of Banditry', pieceCount: '2' }
                ]
            }
        }],
        ['Gallagher', {
            name: 'Gallagher',
            imageUrl: 'assets/hsr/character/HSR_Gallagher.jpg',
            role: 'Abundance',
            rarity: '4',
            build: {
                weapon: { name: 'What Is Real?' },
                sets: [
                    { name: 'Messenger Traversing Hackerspace', pieceCount: '2' },
                    { name: 'Passerby of Wandering Cloud', pieceCount: '2' },
                    { name: 'Broken Keel', pieceCount: '2' }
                ]
            }
        }],
        ['Firefly', {
            name: 'Firefly',
            imageUrl: 'assets/hsr/character/HSR_Firefly.jpg',
            role: 'Destruction',
            rarity: '5',
            build: {
                weapon: { name: 'Whereabouts Should Dreams Rest' },
                sets: [
                    { name: 'Iron Cavalry Against the Scourge', pieceCount: '4' },
                    { name: 'Forge of the Kalpagni Lantern', pieceCount: '2' }
                ]
            }
        }],
        ['Jade', {
            name: 'Jade',
            imageUrl: 'assets/hsr/character/HSR_Jade.jpg',
            role: 'Erudition',
            rarity: '5',
            build: {
                weapon: { name: 'Yet Hope Is Priceless' },
                sets: [
                    { name: 'The Wind-Soaring Valorous', pieceCount: '4' },
                    { name: 'Duran, Dynasty of Running Wolves', pieceCount: '2' }
                ]
            }
        }],
        ['Herta', {
            name: 'Herta',
            imageUrl: 'assets/hsr/character/HSR_Herta.jpg',
            role: 'Erudition',
            rarity: '4',
            build: {
                weapon: { name: 'Night on the Milky Way' },
                sets: [
                    { name: 'Hunter of Glacial Forest', pieceCount: '4' },
                    { name: 'Inert Salsotto', pieceCount: '2' }
                ]
            }
        }],
    ]),

    HSRRoles: [
        { name: 'Abundance', imageUrl: 'assets/hsr/HSR_Path_Abundance.jpg' },
        { name: 'Destruction', imageUrl: 'assets/hsr/HSR_Path_Destruction.jpg' },
        { name: 'Erudition', imageUrl: 'assets/hsr/HSR_Path_Erudition.jpg' },
        { name: 'Harmony', imageUrl: 'assets/hsr/HSR_Path_Harmony.jpg' },
        { name: 'Hunt', imageUrl: 'assets/hsr/HSR_Path_Hunt.jpg' },
        { name: 'Nihility', imageUrl: 'assets/hsr/HSR_Path_Nihility.jpg' },
        { name: 'Preservation', imageUrl: 'assets/hsr/HSR_Path_Preservation.jpg' },
    ],

    HSRLightCones: new Map([
        ['Along the Passing Shore', {
            name: 'Along the Passing Shore',
            imageUrl: 'assets/hsr/light-cone/HSR_LC_AlongThePassingShore.jpg',
            rarity: '5'
        }],
        ['Baptism of Pure Thought', {
            name: 'Baptism of Pure Thought',
            imageUrl: 'assets/hsr/light-cone/HSR_LC_BaptismOfPureThought.jpg',
            rarity: '5'
        }],
        ['Brighter Than the Sun', {
            name: 'Brighter Than the Sun',
            imageUrl: 'assets/hsr/light-cone/HSR_LC_BrighterThanTheSun.jpg',
            rarity: '5'
        }],
        ['But the Battle Isn\'t Over', {
            name: 'But the Battle Isn\'t Over',
            imageUrl: 'assets/hsr/light-cone/HSR_LC_ButTheBattleIsntOver.jpg',
            rarity: '5'
        }],
        ['Earthly Escapade', {
            name: 'Earthly Escapade',
            imageUrl: 'assets/hsr/light-cone/HSR_LC_EarthlyEscapade.jpg',
            rarity: '5'
        }],
        ['Flowing Nightglow', {
            name: 'Flowing Nightglow',
            imageUrl: 'assets/hsr/light-cone/HSR_LC_FlowingNightglow.jpg',
            rarity: '5'
        }],
        ['I Shall Be My Own Sword', {
            name: 'I Shall Be My Own Sword',
            imageUrl: 'assets/hsr/light-cone/HSR_LC_IShallBeMyOwnSword.jpg',
            rarity: '5'
        }],
        ['In the Name of the World', {
            name: 'In the Name of the World',
            imageUrl: 'assets/hsr/light-cone/HSR_LC_InTheNameOfTheWorld.jpg',
            rarity: '5'
        }],
        ['In the Night', {
            name: 'In the Night',
            imageUrl: 'assets/hsr/light-cone/HSR_LC_InTheNight.jpg',
            rarity: '5'
        }],
        ['Moment of Victory', {
            name: 'Moment of Victory',
            imageUrl: 'assets/hsr/light-cone/HSR_LC_MomentOfVictory.jpg',
            rarity: '5'
        }],
        ['Night on the Milky Way', {
            name: 'Night on the Milky Way',
            imageUrl: 'assets/hsr/light-cone/HSR_LC_NightOnTheMilkyWay.jpg',
            rarity: '5'
        }],
        ['Past Self in Mirror', {
            name: 'Past Self in Mirror',
            imageUrl: 'assets/hsr/light-cone/HSR_LC_PastSelfInMirror.jpg',
            rarity: '5'
        }],
        ['Patience Is All You Need', {
            name: 'Patience Is All You Need',
            imageUrl: 'assets/hsr/light-cone/HSR_LC_PatienceIsAllYouNeed.jpg',
            rarity: '5'
        }],
        ['Reforged Remembrance', {
            name: 'Reforged Remembrance',
            imageUrl: 'assets/hsr/light-cone/HSR_LC_ReforgedRemembrance.jpg',
            rarity: '5'
        }],
        ['Sailing Towards A Second Life', {
            name: 'Sailing Towards A Second Life',
            imageUrl: 'assets/hsr/light-cone/HSR_LC_SailingTowardsASecondLife.jpg',
            rarity: '5'
        }],
        ['She Already Shut Her Eyes', {
            name: 'She Already Shut Her Eyes',
            imageUrl: 'assets/hsr/light-cone/HSR_LC_SheAlreadyShutHerEyes.jpg',
            rarity: '5'
        }],
        ['Something Irreplaceable', {
            name: 'Something Irreplaceable',
            imageUrl: 'assets/hsr/light-cone/HSR_LC_SomethingIrreplaceable.jpg',
            rarity: '5'
        }],
        ['The Unreachable Side', {
            name: 'The Unreachable Side',
            imageUrl: 'assets/hsr/light-cone/HSR_LC_TheUnreachableSide.jpg',
            rarity: '5'
        }],
        ['Whereabouts Should Dreams Rest', {
            name: 'Whereabouts Should Dreams Rest',
            imageUrl: 'assets/hsr/light-cone/HSR_LC_WhereaboutsShouldDreamsRest.jpg',
            rarity: '5'
        }],
        ['Yet Hope Is Priceless', {
            name: 'Yet Hope Is Priceless',
            imageUrl: 'assets/hsr/light-cone/HSR_LC_YetHopeIsPriceless.jpg',
            rarity: '5'
        }],
        ['Before the Tutorial Mission Starts', {
            name: 'Before the Tutorial Mission Starts',
            imageUrl: 'assets/hsr/light-cone/HSR_LC_BeforeTheTutorialMissionStarts.jpg',
            rarity: '4'
        }],
        ['Carve the Moon, Weave the Clouds', {
            name: 'Carve the Moon, Weave the Clouds',
            imageUrl: 'assets/hsr/light-cone/HSR_LC_CarveTheMoonWeaveTheClouds.jpg',
            rarity: '4'
        }],
        ['Hey, Over Here', {
            name: 'Hey, Over Here',
            imageUrl: 'assets/hsr/light-cone/HSR_LC_HeyOverHere.jpg',
            rarity: '4'
        }],
        ['Memories of the Past', {
            name: 'Memories of the Past',
            imageUrl: 'assets/hsr/light-cone/HSR_LC_MemoriesOfThePast.jpg',
            rarity: '4'
        }],
        ['Perfect Timing', {
            name: 'Perfect Timing',
            imageUrl: 'assets/hsr/light-cone/HSR_LC_PerfectTiming.jpg',
            rarity: '4'
        }],
        ['Resolution Shines As Pearls of Sweat', {
            name: 'Resolution Shines As Pearls of Sweat',
            imageUrl: 'assets/hsr/light-cone/HSR_LC_ResolutionShinesAsPearlsOfSweat.jpg',
            rarity: '4'
        }],
        ['Warmth Shortens Cold Nights', {
            name: 'Warmth Shortens Cold Nights',
            imageUrl: 'assets/hsr/light-cone/HSR_LC_WarmthShortensColdNights.jpg',
            rarity: '4'
        }],
        ['What Is Real?', {
            name: 'What Is Real?',
            imageUrl: 'assets/hsr/light-cone/HSR_LC_WhatIsReal.jpg',
            rarity: '4'
        }],
        ['Dance! Dance! Dance!', {
            name: 'Dance! Dance! Dance!',
            imageUrl: 'assets/hsr/light-cone/HSR_LC_DanceDanceDance.jpg',
            rarity: '4'
        }]
    ]),

    HSRSets: new Map([
        ['Champion of Streetwise Boxing', {
            name: 'Champion of Streetwise Boxing',
            imageUrl: 'assets/hsr/set/HSR_Set_ChampionOfStreetwiseBoxing.jpg'
        }],
        ['Genius of Brilliant Stars', {
            name: 'Genius of Brilliant Stars',
            imageUrl: 'assets/hsr/set/HSR_Set_GeniusOfBrilliantStars.jpg'
        }],
        ['Guard of Wuthering Snow', {
            name: 'Guard of Wuthering Snow',
            imageUrl: 'assets/hsr/set/HSR_Set_GuardOfWutheringSnow.jpg'
        }],
        ['Hunter of Glacial Forest', {
            name: 'Hunter of Glacial Forest',
            imageUrl: 'assets/hsr/set/HSR_Set_HunterOfGlacialForest.jpg'
        }],
        ['Iron Cavalry Against the Scourge', {
            name: 'Iron Cavalry Against the Scourge',
            imageUrl: 'assets/hsr/set/HSR_Set_IronCavalryAgainstTheScourge.jpg'
        }],
        ['Knight of Purity Palace', {
            name: 'Knight of Purity Palace',
            imageUrl: 'assets/hsr/set/HSR_Set_KnightOfPurityPalace.jpg'
        }],
        ['Longevous Disciple', {
            name: 'Longevous Disciple',
            imageUrl: 'assets/hsr/set/HSR_Set_LongevousDisciple.jpg'
        }],
        ['Messenger Traversing Hackerspace', {
            name: 'Messenger Traversing Hackerspace',
            imageUrl: 'assets/hsr/set/HSR_Set_MessengerTraversingHackerspace.jpg'
        }],
        ['Musketeer of Wild Wheat', {
            name: 'Musketeer of Wild Wheat',
            imageUrl: 'assets/hsr/set/HSR_Set_MusketeerOfWildWheat.jpg'
        }],
        ['Passerby of Wandering Cloud', {
            name: 'Passerby of Wandering Cloud',
            imageUrl: 'assets/hsr/set/HSR_Set_PasserbyOfWanderingCloud.jpg'
        }],
        ['Pioneer Diver of Dead Waters', {
            name: 'Pioneer Diver of Dead Waters',
            imageUrl: 'assets/hsr/set/HSR_Set_PioneerDiverOfDeadWaters.jpg'
        }],
        ['Prisoner in Deep Confinement', {
            name: 'Prisoner in Deep Confinement',
            imageUrl: 'assets/hsr/set/HSR_Set_PrisonerInDeepConfinement.jpg'
        }],
        ['The Ashblazing Grand Duke', {
            name: 'The Ashblazing Grand Duke',
            imageUrl: 'assets/hsr/set/HSR_Set_TheAshblazingGrandDuke.jpg'
        }],
        ['The Wind-Soaring Valorous', {
            name: 'The Wind-Soaring Valorous',
            imageUrl: 'assets/hsr/set/HSR_Set_TheWindSoaringValorous.jpg'
        }],
        ['Thief of Shooting Meteor', {
            name: 'Thief of Shooting Meteor',
            imageUrl: 'assets/hsr/set/HSR_Set_ThiefOfShootingMeteor.jpg'
        }],
        ['Wastelander of Banditry Desert', {
            name: 'Wastelander of Banditry Desert',
            imageUrl: 'assets/hsr/set/HSR_Set_WastelanderOfBanditryDesert.jpg'
        }],
        ['Watchmaker, Master of Dream Machinations', {
            name: 'Watchmaker, Master of Dream Machinations',
            imageUrl: 'assets/hsr/set/HSR_Set_WatchmakerMasterOfDreamMachinations.jpg'
        }],
        ['Belobog of the Architects', {
            name: 'Belobog of the Architects',
            imageUrl: 'assets/hsr/set/HSR_Set_BelobogOfTheArchitects.jpg'
        }],
        ['Broken Keel', {
            name: 'Broken Keel',
            imageUrl: 'assets/hsr/set/HSR_Set_BrokenKeel.jpg'
        }],
        ['Celestial Differentiator', {
            name: 'Celestial Differentiator',
            imageUrl: 'assets/hsr/set/HSR_Set_CelestialDifferentiator.jpg'
        }],
        ['Duran, Dynasty of Running Wolves', {
            name: 'Duran, Dynasty of Running Wolves',
            imageUrl: 'assets/hsr/set/HSR_Set_DuranDynastyOfRunningWolves.jpg'
        }],
        ['Firmament Frontline: Glamoth', {
            name: 'Firmament Frontline: Glamoth',
            imageUrl: 'assets/hsr/set/HSR_Set_FirmamentFrontlineGlamoth.jpg'
        }],
        ['Fleet of the Ageless', {
            name: 'Fleet of the Ageless',
            imageUrl: 'assets/hsr/set/HSR_Set_FleetOfTheAgeless.jpg'
        }],
        ['Forge of the Kalpagni Lantern', {
            name: 'Forge of the Kalpagni Lantern',
            imageUrl: 'assets/hsr/set/HSR_Set_ForgeOfTheKalpagniLantern.jpg'
        }],
        ['Inert Salsotto', {
            name: 'Inert Salsotto',
            imageUrl: 'assets/hsr/set/HSR_Set_InertSalsotto.jpg'
        }],
        ['Izumo Gensei and Takama Divine Realm', {
            name: 'Izumo Gensei and Takama Divine Realm',
            imageUrl: 'assets/hsr/set/HSR_Set_IzumoGenseiAndTakamaDivineRealm.jpg'
        }],
        ['Pan-Cosmic Commercial Enterprise', {
            name: 'Pan-Cosmic Commercial Enterprise',
            imageUrl: 'assets/hsr/set/HSR_Set_PanCosmicCommercialEnterprise.jpg'
        }],
        ['Penacony, Land of the Dreams', {
            name: 'Penacony, Land of the Dreams',
            imageUrl: 'assets/hsr/set/HSR_Set_PenaconyLandOfTheDreams.jpg'
        }],
        ['Rutilant Arena', {
            name: 'Rutilant Arena',
            imageUrl: 'assets/hsr/set/HSR_Set_RutilantArena.jpg'
        }],
        ['Space Sealing Station', {
            name: 'Space Sealing Station',
            imageUrl: 'assets/hsr/set/HSR_Set_SpaceSealingStation.jpg'
        }],
        ['Talia: Kingdom of Banditry', {
            name: 'Talia: Kingdom of Banditry',
            imageUrl: 'assets/hsr/set/HSR_Set_TaliaKingdomOfBanditry.jpg'
        }],
    ]),

}
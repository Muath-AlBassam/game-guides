const arrow = Constants.unicode.arrow;
const times = Constants.unicode.times;

smallText = (text) => `<span style="font-size: 0.8rem; font-weight: normal">${text}</span>`;
tooltip = (text, tooltip) => `<span title="${tooltip}">${text}</span>`;


const GamesData = {
    games: [
        {
            label: 'Genshin Impact',
            code: Constants.games.GI,
            teamSize: 4,
            logoUrl: 'assets/gi/GI_Logo.png',
            backgroundUrl: 'assets/gi/GI_BG.png',
            guideUrl: 'https://genshin-builds.com/characters'
        },
        {
            label: 'Honkai Star Rail',
            code: Constants.games.HSR,
            teamSize: 4,
            logoUrl: 'assets/hsr/HSR_Logo.png',
            backgroundUrl: 'assets/hsr/HSR_BG.png',
            guideUrl: 'https://www.prydwen.gg/star-rail/tier-list'
        },
        {
            label: 'Zenless Zone Zero',
            code: Constants.games.ZZZ,
            teamSize: 3,
            logoUrl: 'assets/zzz/ZZZ_Logo.png',
            backgroundUrl: 'assets/zzz/ZZZ_BG.png',
            guideUrl: 'https://www.prydwen.gg/zenless/tier-list'
        },
        {
            label: 'Honkai Impact 3rd',
            code: Constants.games.HI3,
            teamSize: 3,
            logoUrl: 'assets/hi3/HI3_Logo.png',
            backgroundUrl: 'assets/hi3/HI3_BG.jpg',
            guideUrl: 'https://honkaiimpact3.hoyoverse.com/global/en-us/valkyries'
        }
    ],

    GITeams: [
        {
            name: 'Pyro',
            iconUrl: 'assets/gi/GI_Pyro.png',
            characters: [
                {
                    name: 'Arlecchino',
                    role: 'Main [NA]',
                    isMain: true,
                    replacedBy: ['Diluc', 'Hu Tao'],
                },
                {
                    name: 'Yelan',
                    role: 'Vaporize',
                    isMain: false,
                    replacedBy: ['Xingqiu'],
                },
                {
                    name: 'Bennett',
                    role: 'Buff + Heal + Energy',
                    isMain: false,
                    replacedBy: [],
                },
                {
                    name: 'Zhongli',
                    role: 'Shield',
                    isMain: false,
                    replacedBy: ['Kazuha'],
                }
            ],
            rotations: [
                ['Zhongli', `Skill ${arrow}`],
                ['Bennett', `Ult ${arrow}`],
                ['Yelan', `Ult ${arrow}`],
                ['Arlecchino', `Skill ${arrow} CA ${arrow} NA`],
            ]
        },
        {
            name: 'Hydro',
            iconUrl: 'assets/gi/GI_Hydro.png',
            characters: [
                {
                    name: 'Neuvillette',
                    role: 'Main [CA]',
                    isMain: true,
                    replacedBy: [],
                },
                {
                    name: 'Raiden Shogun',
                    role: 'Electro-Charge + Energy',
                    isMain: false,
                    replacedBy: ['Fischl'],
                },
                {
                    name: 'Kazuha',
                    role: 'Hydro Swirl',
                    isMain: false,
                    replacedBy: [],
                },
                {
                    name: 'Furina',
                    role: 'Sub DMG + Buff + Heal',
                    isMain: false,
                    replacedBy: [],
                }
            ],
            rotations: [
                ['Neuvillette', `NA${times}1 ${arrow}`],
                ['Kazuha', `Skill ${arrow}`],
                ['Raiden Shogun', `Skill ${arrow}`],
                ['Furina', `Skill ${arrow} Ult ${arrow}`],
                ['Neuvillette', `Skill/Ult ${arrow} CA`],
            ]
        },
        {
            name: 'Dendro',
            iconUrl: 'assets/gi/GI_Dendro.png',
            characters: [
                {
                    name: 'Nahida',
                    role: 'Main [NA + CA + Skill + Ult]',
                    isMain: true,
                    replacedBy: [],
                },
                {
                    name: 'Yae Miko',
                    role: 'Dendro reaction',
                    isMain: false,
                    replacedBy: ['Raiden Shogun'],
                },
                {
                    name: 'Kuki Shinobu',
                    role: 'Dendro reaction + Heal',
                    isMain: false,
                    replacedBy: [],
                },
                {
                    name: 'Furina',
                    role: 'Dendro reaction + Buff',
                    isMain: false,
                    replacedBy: ['Xingqiu'],
                }
            ],
            variations: [
                ['Nahida', 'Nilou', 'Kirara', 'Kokomi']
            ],
            rotations: [
                ['Nahida', `Ult ${arrow} Skill ${arrow}`],
                ['Furina', `Skill ${arrow} Ult ${smallText('(optional)')} ${arrow}`],
                ['Yae Miko', `Skill ${arrow}`],
                ['Kuki Shinobu', `Skill ${arrow}`],
                ['Nahida', `NA + CA`],
            ]
        },
        {
            name: 'Electro',
            iconUrl: 'assets/gi/GI_Electro.png',
            characters: [
                {
                    name: 'Clorinde',
                    role: 'Main [Skill + Ult]',
                    isMain: true,
                    replacedBy: [],
                },
                {
                    name: 'Raiden Shogun',
                    role: 'Overload',
                    isMain: false,
                    replacedBy: ['Fischl'],
                },
                {
                    name: 'Xianling',
                    role: 'Overload',
                    isMain: false,
                    replacedBy: ['Bennett'],
                },
                {
                    name: 'Chevreuse',
                    role: 'Buff + RES Shred + Heal',
                    isMain: false,
                    replacedBy: [],
                }
            ],
            variations: [
                ['Clorinde', 'Xingqiu', 'Nahida', 'Zhongli']
            ],
            rotations: [
                ['Raiden Shogun', `Skill ${arrow}`],
                ['Xianling', `Ult ${arrow}`],
                ['Chevreuse', `Skill (Hold) ${arrow}`],
                ['Clorinde', `Skill + Ult`]
            ]
        },
        {
            name: 'Anemo',
            iconUrl: 'assets/gi/GI_Anemo.png',
            characters: [
                {
                    name: 'Lynette',
                    role: 'Main [NA + Skill + Ult]',
                    isMain: true,
                    replacedBy: ['Xiao'],
                },
                {
                    name: 'Faruzan',
                    role: 'Anemo DMG Buff & RES Shred',
                    isMain: false,
                    replacedBy: [],
                },
                {
                    name: 'Xianyun',
                    role: 'Buff',
                    isMain: false,
                    replacedBy: [],
                },
                {
                    name: 'Zhongli',
                    role: 'Shield',
                    isMain: false,
                    replacedBy: [],
                }
            ],
            rotations: [
                ['Zhongli', `Skill ${arrow}`],
                ['Xianyun', `Ult ${arrow}`],
                ['Faruzan', `Ult ${arrow}`],
                ['Lynette', `Ult ${arrow} Skill + NA/Plunge`],
            ]
        },
        {
            name: 'Cryo',
            iconUrl: 'assets/gi/GI_Cryo.png',
            characters: [
                {
                    name: 'Wriothesley',
                    role: 'Main [NA + CA]',
                    isMain: true,
                    replacedBy: ['Ayaka', 'Ganyu'],
                },
                {
                    name: 'Shenhe',
                    role: null,
                    isMain: false,
                    replacedBy: [],
                },
                {
                    name: 'Kazuha',
                    role: 'Cryo Swirl',
                    isMain: false,
                    replacedBy: [],
                },
                {
                    name: 'Kokomi',
                    role: 'Heal + Freeze',
                    isMain: false,
                    replacedBy: [],
                }
            ],
            rotations: [
                ['Wriothesley', `NA${times}1 ${arrow}`],
                ['Kazuha', `Skill ${arrow}`],
                ['Kokomi', `Skill ${arrow}`],
                ['Wriothesley', `Skill ${arrow} NA + CA`],
            ]
        },
        {
            name: 'Geo',
            iconUrl: 'assets/gi/GI_Geo.png',
            characters: [
                {
                    name: 'Navia',
                    role: 'Main [Skill + NA + Ult]',
                    isMain: true,
                    replacedBy: [],
                },
                {
                    name: 'Fischl',
                    role: 'Crystalize',
                    isMain: false,
                    replacedBy: [],
                },
                {
                    name: 'Xingqiu',
                    role: 'Crystalize',
                    isMain: false,
                    replacedBy: [],
                },
                {
                    name: 'Zhongli',
                    role: 'Shield',
                    isMain: false,
                    replacedBy: [],
                }
            ],
            variations: [
                ['Chiori', 'Gorou', 'Yun Jin', 'Zhongli']
            ],
            rotations: [
                ['Zhongli', `Skill ${arrow}`],
                ['Fischl', `Skill ${arrow}`],
                ['Xingqiu', `Ult ${arrow}`],
                ['Navia', `Ult ${arrow} Skill + NA`],
            ]
        },
        {
            name: 'Physical',
            iconUrl: 'assets/gi/GI_Physical.png',
            characters: [
                {
                    name: 'Eula',
                    role: 'Main [NA + Skill + Ult]',
                    isMain: true,
                    replacedBy: [],
                },
                {
                    name: 'Raiden Shogun',
                    role: 'Superconduct + Energy',
                    isMain: false,
                    replacedBy: [],
                },
                {
                    name: 'Mika',
                    role: 'Physical DMG & Atk SPD Buff',
                    isMain: false,
                    replacedBy: [],
                },
                {
                    name: 'Zhongli',
                    role: 'Shield + Phys RES decrease',
                    isMain: false,
                    replacedBy: [],
                }
            ],
            rotations: [
                ['Zhongli', `Skill ${arrow}`],
                ['Raiden Shogun', `Skill ${arrow}`],
                ['Mika', `Skill ${arrow}`],
                ['Eula', `NA + Skill + Ult`],
            ]
        }
    ],

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

    GICharacters: new Map([
        ['Arlecchino', {
            name: 'Arlecchino',
            imageUrl: 'assets/gi/character/GI_Arlecchino.png',
            rarity: '5',
            build: {
                weapon: { name: 'Crimson Moon\'s Semblance' },
                sets: [
                    { name: 'Gladiator\'s Finale', pieceCount: '4' }
                ]
            }
        }],
        ['Chiori', {
            name: 'Chiori',
            imageUrl: 'assets/gi/character/GI_Chiori.png',
            rarity: '5',
            build: {
                weapon: { name: 'Uraku Misugiri' },
                sets: [
                    { name: 'Husk of Opulent Dreams', pieceCount: '4' }
                ]
            }
        }],
        ['Bennett', {
            name: 'Bennett',
            imageUrl: 'assets/gi/character/GI_Bennett.png',
            rarity: '4',
            build: {
                weapon: { name: 'Skyward Blade' },
                sets: [
                    { name: 'Noblesse Oblige', pieceCount: '4' }
                ]
            }
        }],
        ['Diluc', {
            name: 'Diluc',
            imageUrl: 'assets/gi/character/GI_Diluc.png',
            rarity: '5',
            build: {
                weapon: { name: 'Wolf\'s Gravestone' },
                sets: [
                    { name: 'Crimson Witch of Flames', pieceCount: '4' }
                ]
            }
        }],
        ['Eula', {
            name: 'Eula',
            imageUrl: 'assets/gi/character/GI_Eula.png',
            rarity: '5',
            build: {
                weapon: { name: 'Song of Broken Pines' },
                sets: [
                    { name: 'Bloodstained Chivalry', pieceCount: '2' },
                    { name: 'Pale Flame', pieceCount: '2' }
                ]
            }
        }],
        ['Faruzan', {
            name: 'Faruzan',
            imageUrl: 'assets/gi/character/GI_Faruzan.png',
            rarity: '4',
            build: {
                weapon: { name: 'Favonius Warbow' },
                sets: [
                    { name: 'Emblem of Severed Fate', pieceCount: '4' }
                ]
            }
        }],
        ['Fischl', {
            name: 'Fischl',
            imageUrl: 'assets/gi/character/GI_Fischl.png',
            rarity: '4',
            build: {
                weapon: { name: 'Mitternachts Waltz' },
                sets: [
                    { name: 'Golden Troupe', pieceCount: '4' }
                ]
            }
        }],
        ['Furina', {
            name: 'Furina',
            imageUrl: 'assets/gi/character/GI_Furina.png',
            rarity: '5',
            build: {
                weapon: { name: 'Splendor of Tranquil Waters' },
                sets: [
                    { name: 'Golden Troupe', pieceCount: '4' }
                ]
            }
        }],
        ['Ayaka', {
            name: 'Ayaka',
            imageUrl: 'assets/gi/character/GI_Ayaka.png',
            rarity: '5',
            build: {
                weapon: { name: 'Mistsplitter Reforged' },
                sets: [
                    { name: 'Blizzard Strayer', pieceCount: '4' }
                ]
            }
        }],
        ['Kazuha', {
            name: 'Kazuha',
            imageUrl: 'assets/gi/character/GI_Kazuha.png',
            rarity: '5',
            build: {
                weapon: { name: 'Xiphos\' Moonlight' },
                sets: [
                    { name: 'Viridescent Venerer', pieceCount: '4' }
                ]
            }
        }],
        ['Hu Tao', {
            name: 'Hu Tao',
            imageUrl: 'assets/gi/character/GI_HuTao.png',
            rarity: '5',
            build: {
                weapon: { name: 'Staff of Homa' },
                sets: [
                    { name: 'Crimson Witch of Flames', pieceCount: '4' }
                ]
            }
        }],
        ['Gorou', {
            name: 'Gorou',
            imageUrl: 'assets/gi/character/GI_Gorou.png',
            rarity: '4',
            build: {
                weapon: { name: 'Favonius Warbow' },
                sets: [
                    { name: 'Emblem of Severed Fate', pieceCount: '2' }
                ]
            }
        }],
        ['Ganyu', {
            name: 'Ganyu',
            imageUrl: 'assets/gi/character/GI_Ganyu.png',
            rarity: '5',
            build: {
                weapon: { name: 'Amos\' Bow' },
                sets: [
                    { name: 'Blizzard Strayer', pieceCount: '4' }
                ]
            }
        }],
        ['Kirara', {
            name: 'Kirara',
            imageUrl: 'assets/gi/character/GI_Kirara.png',
            rarity: '4',
            build: {
                weapon: { name: 'Sacrificial Sword' },
                sets: [
                    { name: 'Tenacity of the Millelith', pieceCount: '2' },
                    { name: 'Vourukasha\'s Glow', pieceCount: '2' }
                ]
            }
        }],
        ['Kuki Shinobu', {
            name: 'Kuki Shinobu',
            imageUrl: 'assets/gi/character/GI_KukiShinobu.png',
            rarity: '4',
            build: {
                weapon: { name: 'Iron Sting' },
                sets: [
                    { name: 'Flower of Paradise Lost', pieceCount: '4' }
                ]
            }
        }],
        ['Lynette', {
            name: 'Lynette',
            imageUrl: 'assets/gi/character/GI_Lynette.png',
            rarity: '4',
            build: {
                weapon: { name: 'The Black Sword' },
                sets: [
                    { name: 'Viridescent Venerer', pieceCount: '2' },
                    { name: 'Echoes of an Offering', pieceCount: '2' }
                ]
            }
        }],
        ['Nilou', {
            name: 'Nilou',
            imageUrl: 'assets/gi/character/GI_Nilou.png',
            rarity:  '5',
            build: {
                weapon: { name: 'Key of Khaj-Nisut' },
                sets: [
                    { name: 'Tenacity of the Millelith', pieceCount: '2' },
                    { name: 'Vourukasha\'s Glow', pieceCount: '2' }
                ]
            }
        }],
        ['Neuvillette', {
            name: 'Neuvillette',
            imageUrl: 'assets/gi/character/GI_Neuvillette.png.png',
            rarity: '5',
            build: {
                weapon: { name: 'Tome of the Eternal Flow' },
                sets: [
                    { name: 'Marechaussee Hunter', pieceCount: '4' }
                ]
            }
        }],
        ['Navia', {
            name: 'Navia',
            imageUrl: 'assets/gi/character/GI_Navia.png',
            rarity: '5',
            build: {
                weapon: { name: 'Verdict' },
                sets: [
                    { name: 'Nighttime Whispers in the Echoing Woods', pieceCount: '4' }
                ]
            }
        }],
        ['Nahida', {
            name: 'Nahida',
            imageUrl: 'assets/gi/character/GI_Nahida.png',
            rarity: '5',
            build: {
                weapon: { name: 'A Thousand Floating Dreams' },
                sets: [
                    { name: 'Deepwood Memories', pieceCount: '4' }
                ]
            }
        }],
        ['Mika', {
            name: 'Mika',
            imageUrl: 'assets/gi/character/GI_Mika.png',
            rarity: '4',
            build: {
                weapon: { name: 'Favonius Lance' },
                sets: [
                    { name: 'Noblesse Oblige', pieceCount: '2' },
                    { name: 'Emblem of Severed Fate', pieceCount: '2' }
                ]
            }
        }],
        ['Raiden Shogun', {
            name: 'Raiden Shogun',
            imageUrl: 'assets/gi/character/GI_RaidenShogun.png',
            rarity: '5',
            build: {
                weapon: { name: 'Engulfing Lightning' },
                sets: [
                    { name: 'Emblem of Severed Fate', pieceCount: '4' }
                ]
            }
        }],
        ['Kokomi', {
            name: 'Kokomi',
            imageUrl: 'assets/gi/character/GI_Kokomi.png',
            rarity: '5',
            build: {
                weapon: { name: 'Jadefall\'s Splendor' },
                sets: [
                    { name: 'Ocean-Hued Clam', pieceCount: '4' }
                ]
            }
        }],
        ['Wriothesley', {
            name: 'Wriothesley',
            imageUrl: 'assets/gi/character/GI_Wriothesley.png.png',
            rarity: '5',
            build: {
                weapon: { name: 'Cashflow Supervision' },
                sets: [
                    { name: 'Marechaussee Hunter', pieceCount: '4' }
                ]
            }
        }],
        ['Xianyun', {
            name: 'Xianyun',
            imageUrl: 'assets/gi/character/GI_Xianyun.png',
            rarity: '5',
            build: {
                weapon: { name: 'Oathsworn Eye' },
                sets: [
                    { name: 'Gladiator\'s Finale', pieceCount: '2' },
                    { name: 'Nighttime Whispers in the Echoing Woods', pieceCount: '2' },
                ]
            }
        }],
        ['Xiao', {
            name: 'Xiao',
            imageUrl: 'assets/gi/character/GI_Xiao.png',
            rarity: '5',
            build: {
                weapon: { name: 'Primordial Jade Winged-Spear' },
                sets: [
                    { name: 'Gladiator\'s Finale', pieceCount: '2' },
                    { name: 'Viridescent Venerer', pieceCount: '2' },
                ]
            }
        }],
        ['Xingqiu', {
            name: 'Xingqiu',
            imageUrl: 'assets/gi/character/GI_Xingqiu.png',
            rarity: '4',
            build: {
                weapon: { name: 'Sacrificial Sword' },
                sets: [
                    { name: 'Emblem of Severed Fate', pieceCount: '4' }
                ]
            }
        }],
        ['Yae Miko', {
            name: 'Yae Miko',
            imageUrl: 'assets/gi/character/GI_YaeMiko.png',
            rarity: '5',
            build: {
                weapon: { name: 'Kagura\'s Verity' },
                sets: [
                    { name: 'Gladiator\'s Finale', pieceCount: '2' },
                    { name: 'Shimenawa\'s Reminiscence', pieceCount: '2' },
                ]
            }
        }],
        ['Zhongli', {
            name: 'Zhongli',
            imageUrl: 'assets/gi/character/GI_Zhongli.png',
            rarity: '5',
            build: {
                weapon: { name: 'Black Tassel' },
                sets: [
                    { name: 'Tenacity of the Millelith', pieceCount: '4' }
                ]
            }
        }],
        ['Yun Jin', {
            name: 'Yun Jin',
            imageUrl: 'assets/gi/character/GI_YunJin.png',
            rarity: '4',
            build: {
                weapon: { name: 'Favonius Lance' },
                sets: [
                    { name: 'Husk of Opulent Dreams', pieceCount: '2' }
                ]
            }
        }],
        ['Yelan', {
            name: 'Yelan',
            imageUrl: 'assets/gi/character/GI_Yelan.png',
            rarity: '5',
            build: {
                weapon: { name: 'Favonius Warbow' },
                sets: [
                    { name: 'Tenacity of the Millelith', pieceCount: '2' },
                    { name: 'Heart of Depth', pieceCount: '2' },
                ]
            }
        }],
        ['Clorinde', {
            name: 'Clorinde',
            imageUrl: 'assets/gi/character/GI_Clorinde.png',
            rarity: '5',
            build: {
                weapon: { name: 'Absolution' },
                sets: [
                    { name: 'Fragment of Harmonic Whimsy', pieceCount: '4' }
                ]
            }
        }],
        ['Chevreuse', {
            name: 'Chevreuse',
            imageUrl: 'assets/gi/character/GI_Chevreuse.png',
            rarity: '4',
            build: {
                weapon: { name: 'Dialogues of the Desert Sages' },
                sets: [
                    { name: 'Emblem of Severed Fate', pieceCount: '2' },
                    { name: 'Tenacity of the Millelith', pieceCount: '2' },
                ]
            }
        }],
        ['Xianling', {
            name: 'Xianling',
            imageUrl: 'assets/gi/character/GI_Xianling.png',
            rarity: '4',
            build: {
                weapon: { name: 'The Catch' },
                sets: []
            }
        }]
    ]),

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

    HSRRoles: [
        { name: 'Abundance', imageUrl: 'assets/hsr/HSR_Path_Abundance.jpg' },
        { name: 'Destruction', imageUrl: 'assets/hsr/HSR_Path_Destruction.jpg' },
        { name: 'Erudition', imageUrl: 'assets/hsr/HSR_Path_Erudition.jpg' },
        { name: 'Harmony', imageUrl: 'assets/hsr/HSR_Path_Harmony.jpg' },
        { name: 'Hunt', imageUrl: 'assets/hsr/HSR_Path_Hunt.jpg' },
        { name: 'Nihility', imageUrl: 'assets/hsr/HSR_Path_Nihility.jpg' },
        { name: 'Preservation', imageUrl: 'assets/hsr/HSR_Path_Preservation.jpg' },
    ],

    ZZZRoles: [
        { name: 'Anomaly', imageUrl: 'assets/zzz/ZZZ_Style_Anomaly.jpg' },
        { name: 'Attack', imageUrl: 'assets/zzz/ZZZ_Style_Attack.jpg' },
        { name: 'Defence', imageUrl: 'assets/zzz/ZZZ_Style_Defence.jpg' },
        { name: 'Stun', imageUrl: 'assets/zzz/ZZZ_Style_Stun.jpg' },
        { name: 'Support', imageUrl: 'assets/zzz/ZZZ_Style_Support.jpg' },
    ],

    GIWeapons: new Map([
        ['Absolution', {
            name: 'Absolution',
            imageUrl: 'assets/gi/weapon/GI_Weapon_Absolution.png',
            rarity: '5'
        }],
        ['A Thousand Floating Dreams', {
            name: 'A Thousand Floating Dreams',
            imageUrl: 'assets/gi/weapon/GI_Weapon_AThousandFloatingDreams.png',
            rarity: '5'
        }],
        ['Amos\' Bow', {
            name: 'Amos\' Bow',
            imageUrl: 'assets/gi/weapon/GI_Weapon_AmosBow.png',
            rarity: '5'
        }],
        ['Cashflow Supervision', {
            name: 'Cashflow Supervision',
            imageUrl: 'assets/gi/weapon/GI_Weapon_CashflowSupervision.png',
            rarity: '5'
        }],
        ['Crimson Moon\'s Semblance', {
            name: 'Crimson Moon\'s Semblance',
            imageUrl: 'assets/gi/weapon/GI_Weapon_CrimsonMoonsSemblance.png',
            rarity: '5'
        }],
        ['Engulfing Lightning', {
            name: 'Engulfing Lightning',
            imageUrl: 'assets/gi/weapon/GI_Weapon_EngulfingLightning.png',
            rarity: '5'
        }],
        ['Jadefall\'s Splendor', {
            name: 'Jadefall\'s Splendor',
            imageUrl: 'assets/gi/weapon/GI_Weapon_JadefallsSplendor.png',
            rarity: '5'
        }],
        ['Kagura\'s Verity', {
            name: 'Kagura\'s Verity',
            imageUrl: 'assets/gi/weapon/GI_Weapon_KagurasVerity.png',
            rarity: '5'
        }],
        ['Key of Khaj-Nisut', {
            name: 'Key of Khaj-Nisut',
            imageUrl: 'assets/gi/weapon/GI_Weapon_KeyOfKhajNisut.png',
            rarity: '5'
        }],
        ['Mistsplitter Reforged', {
            name: 'Mistsplitter Reforged',
            imageUrl: 'assets/gi/weapon/GI_Weapon_MistsplitterReforged.png',
            rarity: '5'
        }],
        ['Primordial Jade Winged-Spear', {
            name: 'Primordial Jade Winged-Spear',
            imageUrl: 'assets/gi/weapon/GI_Weapon_PrimordialJadeWingedSpear.png',
            rarity: '5'
        }],
        ['Skyward Blade', {
            name: 'Skyward Blade',
            imageUrl: 'assets/gi/weapon/GI_Weapon_SkywardBlade.png',
            rarity: '5'
        }],
        ['Song of Broken Pines', {
            name: 'Song of Broken Pines',
            imageUrl: 'assets/gi/weapon/GI_Weapon_SongOfBrokenPines.png',
            rarity: '5'
        }],
        ['Splendor of Tranquil Waters', {
            name: 'Splendor of Tranquil Waters',
            imageUrl: 'assets/gi/weapon/GI_Weapon_SplendorOfTranquilWaters.png',
            rarity: '5'
        }],
        ['Staff of Homa', {
            name: 'Staff of Homa',
            imageUrl: 'assets/gi/weapon/GI_Weapon_StaffOfHoma.png',
            rarity: '5'
        }],
        ['Tome of the Eternal Flow', {
            name: 'Tome of the Eternal Flow',
            imageUrl: 'assets/gi/weapon/GI_Weapon_TomeOfTheEternalFlow.png',
            rarity: '5'
        }],
        ['Uraku Misugiri', {
            name: 'Uraku Misugiri',
            imageUrl: 'assets/gi/weapon/GI_Weapon_UrakuMisugiri.png',
            rarity: '5'
        }],
        ['Verdict', {
            name: 'Verdict',
            imageUrl: 'assets/gi/weapon/GI_Weapon_Verdict.png',
            rarity: '5'
        }],
        ['Wolf\'s Gravestone', {
            name: 'Wolf\'s Gravestone',
            imageUrl: 'assets/gi/weapon/GI_Weapon_WolfsGravestone.png',
            rarity: '5'
        }],
        ['Favonius Lance', {
            name: 'Favonius Lance',
            imageUrl: 'assets/gi/weapon/GI_Weapon_FavoniusLance.png',
            rarity: '4'
        }],
        ['Favonius Warbow', {
            name: 'Favonius Warbow',
            imageUrl: 'assets/gi/weapon/GI_Weapon_FavoniusWarbow.png',
            rarity: '4'
        }],
        ['Iron Sting', {
            name: 'Iron Sting',
            imageUrl: 'assets/gi/weapon/GI_Weapon_IronSting.png',
            rarity: '4'
        }],
        ['Mitternachts Waltz', {
            name: 'Mitternachts Waltz',
            imageUrl: 'assets/gi/weapon/GI_Weapon_MitternachtsWaltz.png',
            rarity: '4'
        }],
        ['Oathsworn Eye', {
            name: 'Oathsworn Eye',
            imageUrl: 'assets/gi/weapon/GI_Weapon_OathswornEye.png',
            rarity: '4'
        }],
        ['Sacrificial Sword', {
            name: 'Sacrificial Sword',
            imageUrl: 'assets/gi/weapon/GI_Weapon_SacrificialSword.png',
            rarity: '4'
        }],
        ['The Black Sword', {
            name: 'The Black Sword',
            imageUrl: 'assets/gi/weapon/GI_Weapon_TheBlackSword.png',
            rarity: '4'
        }],
        ['The Catch', {
            name: 'The Catch',
            imageUrl: 'assets/gi/weapon/GI_Weapon_TheCatch.png',
            rarity: '4'
        }],
        ['Xiphos\' Moonlight', {
            name: 'Xiphos\' Moonlight',
            imageUrl: 'assets/gi/weapon/GI_Weapon_XiphosMoonlight.png',
            rarity: '4'
        }],
        ['Dialogues of the Desert Sages', {
            name: 'Dialogues of the Desert Sages',
            imageUrl: 'assets/gi/weapon/GI_Weapon_DialoguesOfTheDesertSages.png',
            rarity: '4'
        }],
        ['Black Tassel', {
            name: 'Black Tassel',
            imageUrl: 'assets/gi/weapon/GI_Weapon_BlackTassel.png',
            rarity: '3'
        }]
    ]),

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

    GISets: new Map([
        ['Blizzard Strayer', {
            name: 'Blizzard Strayer',
            imageUrl: 'assets/gi/set/GI_Set_BlizzardStrayer.png'
        }],
        ['Bloodstained Chivalry', {
            name: 'Bloodstained Chivalry',
            imageUrl: 'assets/gi/set/GI_Set_BloodstainedChivalry.png'
        }],
        ['Crimson Witch of Flames', {
            name: 'Crimson Witch of Flames',
            imageUrl: 'assets/gi/set/GI_Set_CrimsonWitchOfFlames.png'
        }],
        ['Deepwood Memories', {
            name: 'Deepwood Memories',
            imageUrl: 'assets/gi/set/GI_Set_DeepwoodMemories.png'
        }],
        ['Emblem of Severed Fate', {
            name: 'Emblem of Severed Fate',
            imageUrl: 'assets/gi/set/GI_Set_EmblemOfSeveredFate.png'
        }],
        ['Flower of Paradise Lost', {
            name: 'Flower of Paradise Lost',
            imageUrl: 'assets/gi/set/GI_Set_FlowerOfParadiseLost.png'
        }],
        ['Fragment of Harmonic Whimsy', {
            name: 'Fragment of Harmonic Whimsy',
            imageUrl: 'assets/gi/set/GI_Set_FragmentOfHarmonicWhimsy.png'
        }],
        ['Gladiator\'s Finale', {
            name: 'Gladiator\'s Finale',
            imageUrl: 'assets/gi/set/GI_Set_GladiatorsFinale.png'
        }],
        ['Golden Troupe', {
            name: 'Golden Troupe',
            imageUrl: 'assets/gi/set/GI_Set_GoldenTroupe.png'
        }],
        ['Heart of Depth', {
            name: 'Heart of Depth',
            imageUrl: 'assets/gi/set/GI_Set_HeartOfDepth.png'
        }],
        ['Husk of Opulent Dreams', {
            name: 'Husk of Opulent Dreams',
            imageUrl: 'assets/gi/set/GI_Set_HuskOfOpulentDreams.png'
        }],
        ['Marechaussee Hunter', {
            name: 'Marechaussee Hunter',
            imageUrl: 'assets/gi/set/GI_Set_MarechausseeHunter.png'
        }],
        ['Nighttime Whispers in the Echoing Woods', {
            name: 'Nighttime Whispers in the Echoing Woods',
            imageUrl: 'assets/gi/set/GI_Set_NighttimeWhispersInTheEchoingWoods.png'
        }],
        ['Noblesse Oblige', {
            name: 'Noblesse Oblige',
            imageUrl: 'assets/gi/set/GI_Set_NoblesseOblige.png'
        }],
        ['Ocean-Hued Clam', {
            name: 'Ocean-Hued Clam',
            imageUrl: 'assets/gi/set/GI_Set_OceanHuedClam.png'
        }],
        ['Pale Flame', {
            name: 'Pale Flame',
            imageUrl: 'assets/gi/set/GI_Set_PaleFlame.png'
        }],
        ['Shimenawa\'s Reminiscence', {
            name: 'Shimenawa\'s Reminiscence',
            imageUrl: 'assets/gi/set/GI_Set_ShimenawasReminiscence.png'
        }],
        ['Tenacity of the Millelith', {
            name: 'Tenacity of the Millelith',
            imageUrl: 'assets/gi/set/GI_Set_TenacityOfTheMillelith.png'
        }],
        ['Viridescent Venerer', {
            name: 'Viridescent Venerer',
            imageUrl: 'assets/gi/set/GI_Set_ViridescentVenerer.png'
        }],
        ['Vourukasha\'s Glow', {
            name: 'Vourukasha\'s Glow',
            imageUrl: 'assets/gi/set/GI_Set_VourukashasGlow.png'
        }],
        ['Echoes of an Offering', {
            name: 'Echoes of an Offering',
            imageUrl: 'assets/gi/set/GI_Set_EchoesOfAnOffering.png'
        }],
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
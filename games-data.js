const arrow = Constants.unicode.arrow;
const times = Constants.unicode.times;

smallText = (text) => `<span style="font-size: 0.8rem; font-weight: normal">${text}</span>`;


const GamesData = {
    games: [
        {
            label: 'Genshin Impact',
            code: 'GI',
            teamSize: 4,
            logoUrl: 'assets/gi/GI_Logo.png',
            backgroundUrl: 'assets/gi/GI_BG.png',
            guideUrl: 'https://genshin-builds.com/characters'
        },
        {
            label: 'Honkai Star Rail',
            code: 'HSR',
            teamSize: 4,
            logoUrl: 'assets/hsr/HSR_Logo.png',
            backgroundUrl: 'assets/hsr/HSR_BG.png',
            guideUrl: 'https://www.prydwen.gg/star-rail/tier-list'
        },
        {
            label: 'Honkai Impact 3rd',
            code: 'HI3',
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
                ['Neuvillette', `1NA ${arrow}`],
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
                ['Wriothesley', `1NA ${arrow}`],
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
                    role: 'DMG & RES PEN & Break Buff',
                    isMain: false,
                    replacedBy: [],
                },
                {
                    name: 'MC (Harmony)',
                    role: 'Break Buff + Super Break',
                    isMain: false,
                    replacedBy: ['Bronya'],
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
                    role: 'DMG & RES PEN & Break Buff',
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
                    name: 'Bronya (Truth)',
                    role: 'Fire DMG Buff',
                    isMain: false,
                    replacedBy: [],
                },
            ],
            rotations: [
                ['Bronya (Truth)', `Skill ${arrow}`],
                ['Ai', `QTE ${arrow} Skill ${arrow}`],
                ['Bronya (Truth)', `Ult ${times}2 ${arrow}`],
                ['Lantern', `QTE ${arrow} Basic + Skill ${arrow} Charged ${arrow} Ult`],
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
                    name: 'Bronya (Truth)',
                    role: 'Lightning DMG Buff',
                    isMain: false,
                    replacedBy: [],
                },
            ],
            rotations: [
                ['Bronya (Truth)', `Skill ${arrow} Ult ${times}2 ${arrow}`],
                ['Eden', `QTE ${arrow} Ult ${arrow}`],
                ['Lunar Vow', `QTE ${arrow} Skill ${arrow} Ult`]
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
            ]
        },
        {
            name: 'Herrscher Trio',
            iconUrl: null,
            characters: [
                {
                    name: 'Kiana (Finality)',
                    role: 'Main',
                    isMain: false,
                    replacedBy: [],
                },
                {
                    name: 'Mei (Origin)',
                    role: 'Main',
                    isMain: false,
                    replacedBy: [],
                },
                {
                    name: 'Bronya (Truth)',
                    role: 'Fire & Lightning DMG Buff',
                    isMain: false,
                    replacedBy: [],
                },
            ],
            rotations: [
                ['Bronya (Truth)', `Skill ${arrow} Ult ${times}2 ${arrow}`],
                ['Kiana (Finality)', `QTE ${arrow} Basic ${arrow} Charged ${arrow}`],
                ['Mei (Origin)', `Basic ${arrow} Charged ${arrow} Ult ${arrow}`],
                ['Kiana (Finality)', `QTE ${arrow} Skill ${arrow} Basic ${arrow} Charged ${arrow} Evade ${smallText('(Hold)')} ${arrow} Basic ${arrow} Ult`],
            ]
        },
    ],

    GICharacters: new Map([
        ['Arlecchino', {
            name: 'Arlecchino',
            imageUrl: 'assets/gi/GI_Arlecchino.png',
            rarity: '5'
        }],
        ['Chiori', {
            name: 'Chiori',
            imageUrl: 'assets/gi/GI_Chiori.png',
            rarity: '5'
        }],
        ['Bennett', {
            name: 'Bennett',
            imageUrl: 'assets/gi/GI_Bennett.png',
            rarity: '4'
        }],
        ['Diluc', {
            name: 'Diluc',
            imageUrl: 'assets/gi/GI_Diluc.png',
            rarity: '5'
        }],
        ['Eula', {
            name: 'Eula',
            imageUrl: 'assets/gi/GI_Eula.png',
            rarity: '5'
        }],
        ['Faruzan', {
            name: 'Faruzan',
            imageUrl: 'assets/gi/GI_Faruzan.png',
            rarity: '4'
        }],
        ['Fischl', {
            name: 'Fischl',
            imageUrl: 'assets/gi/GI_Fischl.png',
            rarity: '4'
        }],
        ['Furina', {
            name: 'Furina',
            imageUrl: 'assets/gi/GI_Furina.png',
            rarity: '5'
        }],
        ['Ayaka', {
            name: 'Ayaka',
            imageUrl: 'assets/gi/GI_Ayaka.png',
            rarity: '5'
        }],
        ['Kazuha', {
            name: 'Kazuha',
            imageUrl: 'assets/gi/GI_Kazuha.png',
            rarity: '5'
        }],
        ['Hu Tao', {
            name: 'Hu Tao',
            imageUrl: 'assets/gi/GI_HuTao.png',
            rarity: '5'
        }],
        ['Gorou', {
            name: 'Gorou',
            imageUrl: 'assets/gi/GI_Gorou.png',
            rarity: '4'
        }],
        ['Ganyu', {
            name: 'Ganyu',
            imageUrl: 'assets/gi/GI_Ganyu.png',
            rarity: '5'
        }],
        ['Kirara', {
            name: 'Kirara',
            imageUrl: 'assets/gi/GI_Kirara.png',
            rarity: '4'
        }],
        ['Kuki Shinobu', {
            name: 'Kuki Shinobu',
            imageUrl: 'assets/gi/GI_KukiShinobu.png',
            rarity: '4'
        }],
        ['Lynette', {
            name: 'Lynette',
            imageUrl: 'assets/gi/GI_Lynette.png',
            rarity: '4'
        }],
        ['Nilou', {
            name: 'Nilou',
            imageUrl: 'assets/gi/GI_Nilou.png',
            rarity:  '5'
        }],
        ['Neuvillette', {
            name: 'Neuvillette',
            imageUrl: 'assets/gi/GI_Neuvillette.png.png',
            rarity: '5'
        }],
        ['Navia', {
            name: 'Navia',
            imageUrl: 'assets/gi/GI_Navia.png',
            rarity: '5'
        }],
        ['Nahida', {
            name: 'Nahida',
            imageUrl: 'assets/gi/GI_Nahida.png',
            rarity: '5'
        }],
        ['Mika', {
            name: 'Mika',
            imageUrl: 'assets/gi/GI_Mika.png',
            rarity: '4'
        }],
        ['Raiden Shogun', {
            name: 'Raiden Shogun',
            imageUrl: 'assets/gi/GI_RaidenShogun.png',
            rarity: '5'
        }],
        ['Kokomi', {
            name: 'Kokomi',
            imageUrl: 'assets/gi/GI_Kokomi.png',
            rarity: '5'
        }],
        ['Wriothesley', {
            name: 'Wriothesley',
            imageUrl: 'assets/gi/GI_Wriothesley.png.png',
            rarity: '5'
        }],
        ['Xianyun', {
            name: 'Xianyun',
            imageUrl: 'assets/gi/GI_Xianyun.png',
            rarity: '5'
        }],
        ['Xiao', {
            name: 'Xiao',
            imageUrl: 'assets/gi/GI_Xiao.png',
            rarity: '5'
        }],
        ['Xingqiu', {
            name: 'Xingqiu',
            imageUrl: 'assets/gi/GI_Xingqiu.png',
            rarity: '4'
        }],
        ['Yae Miko', {
            name: 'Yae Miko',
            imageUrl: 'assets/gi/GI_YaeMiko.png',
            rarity: '5'
        }],
        ['Zhongli', {
            name: 'Zhongli',
            imageUrl: 'assets/gi/GI_Zhongli.png',
            rarity: '5'
        }],
        ['Yun Jin', {
            name: 'Yun Jin',
            imageUrl: 'assets/gi/GI_YunJin.png',
            rarity: '4'
        }],
        ['Yelan', {
            name: 'Yelan',
            imageUrl: 'assets/gi/GI_Yelan.png',
            rarity: '5'
        }],
        ['Clorinde', {
            name: 'Clorinde',
            imageUrl: 'assets/gi/GI_Clorinde.png',
            rarity: '5'
        }],
        ['Chevreuse', {
            name: 'Chevreuse',
            imageUrl: 'assets/gi/GI_Chevreuse.png',
            rarity: '4'
        }],
        ['Xianling', {
            name: 'Xianling',
            imageUrl: 'assets/gi/GI_Xianling.png',
            rarity: '4'
        }]
    ]),

    HSRCharacters: new Map([
        ['MC (Harmony)', {
            name: 'MC (Harmony)',
            imageUrl: 'assets/hsr/HSR_MCHarmony.jpg',
            rarity: '5'
        }],
        ['Lynx', {
            name: 'Lynx',
            imageUrl: 'assets/hsr/HSR_Lynx.jpg',
            rarity: '4'
        }],
        ['Clara', {
            name: 'Clara',
            imageUrl: 'assets/hsr/HSR_Clara.jpg',
            rarity: '5'
        }],
        ['Tingyun', {
            name: 'Tingyun',
            imageUrl: 'assets/hsr/HSR_Tingyun.jpg',
            rarity: '4'
        }],
        ['Ruan Mei', {
            name: 'Ruan Mei',
            imageUrl: 'assets/hsr/HSR_RuanMei.jpg',
            rarity: '5'
        }],
        ['Acheron', {
            name: 'Acheron',
            imageUrl: 'assets/hsr/HSR_Acheron.jpg',
            rarity: '5'
        }],
        ['Dang Heng · IL', {
            name: 'Dang Heng · IL',
            imageUrl: 'assets/hsr/HSR_DanHengIL.jpg',
            rarity: '5'
        }],
        ['Jingliu', {
            name: 'Jingliu',
            imageUrl: 'assets/hsr/HSR_Jingliu.jpg',
            rarity: '5'
        }],
        ['Kafka', {
            name: 'Kafka',
            imageUrl: 'assets/hsr/HSR_Kafka.jpg',
            rarity: '5'
        }],
        ['Sparkle', {
            name: 'Sparkle',
            imageUrl: 'assets/hsr/HSR_Sparkle.jpg',
            rarity: '5'
        }],
        ['Fu Xuan', {
            name: 'Fu Xuan',
            imageUrl: 'assets/hsr/HSR_FuXuan.jpg',
            rarity: '5'
        }],
        ['Dr. Ratio', {
            name: 'Dr. Ratio',
            imageUrl: 'assets/hsr/HSR_DrRatio.jpg',
            rarity: '5'
        }],
        ['Seele', {
            name: 'Seele',
            imageUrl: 'assets/hsr/HSR_Seele.jpg',
            rarity: '5'
        }],
        ['Black Swan', {
            name: 'Black Swan',
            imageUrl: 'assets/hsr/HSR_BlackSwan.jpg',
            rarity: '5'
        }],
        ['Bronya', {
            name: 'Bronya',
            imageUrl: 'assets/hsr/HSR_Bronya.jpg',
            rarity: '5'
        }],
        ['Silver Wolf', {
            name: 'Silver Wolf',
            imageUrl: 'assets/hsr/HSR_SilverWolf.jpg',
            rarity: '5'
        }],
        ['Huohuo', {
            name: 'Huohuo',
            imageUrl: 'assets/hsr/HSR_Huohuo.jpg',
            rarity: '5'
        }],
        ['Luocha', {
            name: 'Luocha',
            imageUrl: 'assets/hsr/HSR_Luocha.jpg',
            rarity: '5'
        }],
        ['Blade', {
            name: 'Blade',
            imageUrl: 'assets/hsr/HSR_Blade.jpg',
            rarity: '5'
        }],
        ['Xueyi', {
            name: 'Xueyi',
            imageUrl: 'assets/hsr/HSR_Xueyi.jpg',
            rarity: '4'
        }],
        ['Pela', {
            name: 'Pela',
            imageUrl: 'assets/hsr/HSR_Pela.jpg',
            rarity: '4'
        }],
        ['Welt', {
            name: 'Welt',
            imageUrl: 'assets/hsr/HSR_Welt.jpg',
            rarity: '5'
        }],
        ['Topaz', {
            name: 'Topaz',
            imageUrl: 'assets/hsr/HSR_Topaz.jpg',
            rarity: '5'
        }],
        ['Gepard', {
            name: 'Gepard',
            imageUrl: 'assets/hsr/HSR_Gepard.jpg',
            rarity: '5'
        }],
        ['Robin', {
            name: 'Robin',
            imageUrl: 'assets/hsr/HSR_Robin.jpg',
            rarity: '5'
        }],
        ['Hanya', {
            name: 'Hanya',
            imageUrl: 'assets/hsr/HSR_Hanya.jpg',
            rarity: '4'
        }],
        ['Boothill', {
            name: 'Boothill',
            imageUrl: 'assets/hsr/HSR_Boothill.jpg',
            rarity: '5'
        }],
        ['Gallagher', {
            name: 'Gallagher',
            imageUrl: 'assets/hsr/HSR_Gallagher.jpg',
            rarity: '4'
        }],
        ['Firefly', {
            name: 'Firefly',
            imageUrl: 'assets/hsr/HSR_Firefly.jpg',
            rarity: '5'
        }],
    ]),

    HI3Characters: new Map([
        ['Kiana (Finality)', {
            name: 'Kiana (Finality)',
            imageUrl: 'https://fastcdn.hoyoverse.com/content-v2/bh3/106465/43af2fa9982de4057823e4b4acab9c34_2359781441771530851.png',
            rarity: 'S'
        }],
        ['Kiana (Flamescion)', {
            name: 'Kiana (Flamescion)',
            imageUrl: 'https://fastcdn.hoyoverse.com/static-resource-v2/2023/11/29/7a39f094c7c5c2eb6ee5be0f1c3c3d87_3836757876260027273.png',
            rarity: 'S'
        }],
        ['Mei (Origin)', {
            name: 'Mei (Origin)',
            imageUrl: 'https://fastcdn.hoyoverse.com/content-v2/bh3/106464/a12be74e3fc641ab26882893df1e13bc_7895934126129485958.png',
            rarity: 'S'
        }],
        ['Mei (Thunder)', {
            name: 'Mei (Thunder)',
            imageUrl: 'https://fastcdn.hoyoverse.com/static-resource-v2/2023/11/29/e875c7b7b191d3630d0d4d44c475e529_8491859648500634990.png',
            rarity: 'S'
        }],
        ['Bronya (Truth)', {
            name: 'Bronya (Truth)',
            imageUrl: 'https://fastcdn.hoyoverse.com/static-resource-v2/2023/11/29/3d23575aeff9cd0834b843c756f45fd8_7910243926780422038.png',
            rarity: 'S'
        }],
        ['Bronya (Reason)', {
            name: 'Bronya (Reason)',
            imageUrl: 'https://fastcdn.hoyoverse.com/static-resource-v2/2023/11/29/78f5b9cb683c471307d0fd3721373efb_8309173550830057042.png',
            rarity: 'S'
        }],
        ['Elysia', {
            name: 'Elysia',
            imageUrl: 'https://fastcdn.hoyoverse.com/static-resource-v2/2023/11/29/3761d9c301a6b4e9c76fb7ceadfeab00_8358303087609118910.png',
            rarity: 'S'
        }],
        ['Aponia', {
            name: 'Aponia',
            imageUrl: 'https://fastcdn.hoyoverse.com/static-resource-v2/2023/11/29/28b89f04499eda9f440643b9b94eaad1_7429427251492566339.png',
            rarity: 'S'
        }],
        ['Eden', {
            name: 'Eden',
            imageUrl: 'https://fastcdn.hoyoverse.com/static-resource-v2/2023/11/29/2168a109bdf99ecd0bd42663ca426e3d_4359629639516317217.png',
            rarity: 'A'
        }],
        ['Lunar Vow', {
            name: 'Lunar Vow',
            imageUrl: 'https://fastcdn.hoyoverse.com/static-resource-v2/2023/11/29/5c43575612b164af8ee792ff719766f5_1774145765586399421.png',
            rarity: 'S'
        }],
        ['Durandal', {
            name: 'Durandal',
            imageUrl: 'https://fastcdn.hoyoverse.com/static-resource-v2/2023/11/29/5db36df0e233241539fc446d5c5efd41_864049022999020706.png',
            rarity: 'S'
        }],
        ['Lantern', {
            name: 'Lantern',
            imageUrl: 'https://fastcdn.hoyoverse.com/content-v2/bh3/123889/0126d4c686166a882dedd458f9ec6bca_5343513819856290934.png',
            rarity: 'S'
        }],
        ['Ai', {
            name: 'Ai',
            imageUrl: 'https://fastcdn.hoyoverse.com/static-resource-v2/2023/11/29/cba5a8dab8232d7515aaba6033e2fab1_5193210831169590339.png',
            rarity: 'A'
        }],
    ])
}
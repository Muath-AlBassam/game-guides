const TeamsRepository = {
    GITeams: new Map([
        ['Pyro', {
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
        }],
        ['Hydro', {
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
        }],
        ['Dendro', {
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
        }],
        ['Electro', {
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
                ['Chevreuse', `Skill ${smallText('(Hold)')} ${arrow}`],
                ['Clorinde', `Skill + Ult`]
            ]
        }],
        ['Anemo', {
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
        }],
        ['Cryo', {
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
        }],
        ['Geo', {
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
        }],
        ['Physical', {
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
        }]
    ]),

    HSRTeams: new Map([
        ['Physical', {
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
        }],
        ['Fire', {
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
        }],
        ['Ice', {
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
        }],
        ['Lightning', {
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
        }],
        ['Wind', {
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
        }],
        ['Quantum', {
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
        }],
        ['Imaginary', {
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
        }],
        ['DoT', {
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
        }],
        // ['Follow-up', {
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
        // }],
    ]),

    ZZZTeams: new Map([
        ['Physical',  {
            name: 'Physical',
            iconUrl: 'assets/zzz/ZZZ_Physical.jpg',
            characters: []
        }],
        ['Fire', {
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
        }],
        ['Ice', {
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
                ['Ellen', `Dash + CA ${arrow}`],
                ['Lycaon', `CA / EX Special ${arrow} Stun ${arrow}`],
                ['Soukaku', `Special ${smallText('(hold)')} ${arrow} Chain/Quick-Assist ${arrow}`],
                ['Ellen', `Basic + EX Special`],
            ]
        }],
        ['Electric', {
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
        }],
        ['Ether', {
            name: 'Ether',
            iconUrl: 'assets/zzz/ZZZ_Ether.jpg',
            characters: [
                {
                    name: 'Zhu Yuan',
                    role: 'Main [Ex Special + CA]',
                    isMain: false,
                    replacedBy: [],
                },
                {
                    name: 'Anby',
                    role: 'Stun',
                    isMain: false,
                    replacedBy: [],
                },
                {
                    name: 'Nicole',
                    role: 'Debuff',
                    isMain: false,
                    replacedBy: [],
                }
            ],
            rotations: [
                ['Anby', `Basic${times}3 ${arrow} CA ${arrow} EX Special ${arrow} Stun ${arrow}`],
                ['Nicole', `EX Special ${smallText('(hold)')} ${arrow} Basic${times}1 ${arrow}`],
                ['Zhu Yuan', `CA ${smallText('(hold)')} + EX Special`],
            ]
        }]
    ]),

    HI3Teams: new Map([
        ['Fire', {
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
        }],
        ['Lightning', {
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
        }],
        ['Ice', {
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
        }],
        ['Physical', {
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
        }],
        ['Herrscher Trio', {
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
        }]
    ]),
}
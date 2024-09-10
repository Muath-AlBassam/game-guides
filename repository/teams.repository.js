
class TeamsRepository {
    static getAllTeams(gameCode) {
        switch (gameCode) {
            case Constants.games.GI:
                return this.data.GITeams;
            case Constants.games.HSR:
                return this.data.HSRTeams;
            case Constants.games.ZZZ:
                return this.data.ZZZTeams;
            case Constants.games.HI3:
                return this.data.HI3Teams;
            default:
                return new Map([]);
        }
    }
    
    static getTeam(gameCode, teamName) {
        let team = this.getAllTeams(gameCode).get(teamName);
        return team ?? { name: teamName }
    }

    // TODO : add team variation name
    static data = {
        GITeams: new Map([
            ['Pyro', {
                name: 'Pyro',
                iconUrl: 'assets/gi/GI_Pyro.png',
                characters: [
                    {
                        name: 'Arlecchino',
                        role: 'DPS',
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
                        role: 'Atk Buff + Heal + Energy',
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
            }],
            ['Hydro', {
                name: 'Hydro',
                iconUrl: 'assets/gi/GI_Hydro.png',
                characters: [
                    {
                        name: 'Neuvillette',
                        role: 'DPS',
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
                        role: 'Sub DPS + DMG Buff + Heal',
                        isMain: false,
                        replacedBy: [],
                    }
                ],
            }],
            ['Dendro', {
                name: 'Dendro',
                iconUrl: 'assets/gi/GI_Dendro.png',
                characters: [
                    {
                        name: 'Nahida',
                        role: 'Dendro Applicator',
                        isMain: true,
                        replacedBy: [],
                    },
                    {
                        name: 'Yae Miko',
                        role: 'Sub DPS + Dendro reaction',
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
                        role: 'Sub DPS + Dendro reaction + DMG Buff',
                        isMain: false,
                        replacedBy: ['Xingqiu'],
                    }
                ],
                variations: [
                    ['Nahida', 'Nilou', 'Kirara', 'Kokomi'],
                    ['Emilie', 'Bennett', 'Xianling', 'Kazuha'],
                ],
            }],
            ['Electro', {
                name: 'Electro',
                iconUrl: 'assets/gi/GI_Electro.png',
                characters: [
                    {
                        name: 'Clorinde',
                        role: 'DPS',
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
                        role: 'Atk Buff + RES Shred + Heal',
                        isMain: false,
                        replacedBy: [],
                    }
                ],
                variations: [
                    ['Clorinde', 'Xingqiu', 'Nahida', 'Zhongli']
                ],
            }],
            ['Anemo', {
                name: 'Anemo',
                iconUrl: 'assets/gi/GI_Anemo.png',
                characters: [
                    {
                        name: 'Lynette',
                        role: 'DPS',
                        isMain: true,
                        replacedBy: ['Xiao'],
                    },
                    {
                        name: 'Faruzan',
                        role: 'Anemo DMG Buff + RES Shred',
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
            }],
            ['Cryo', {
                name: 'Cryo',
                iconUrl: 'assets/gi/GI_Cryo.png',
                characters: [
                    {
                        name: 'Wriothesley',
                        role: 'DPS',
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
            }],
            ['Geo', {
                name: 'Geo',
                iconUrl: 'assets/gi/GI_Geo.png',
                characters: [
                    {
                        name: 'Navia',
                        role: 'DPS',
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
                        role: 'Shield + Crystalize',
                        isMain: false,
                        replacedBy: [],
                    }
                ],
                variations: [
                    ['Chiori', 'Gorou', 'Yun Jin', 'Zhongli']
                ],
            }],
            ['Physical', {
                name: 'Physical',
                iconUrl: 'assets/gi/GI_Physical.png',
                characters: [
                    {
                        name: 'Eula',
                        role: 'DPS',
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
                        role: 'Shield + Phys RES Shred',
                        isMain: false,
                        replacedBy: [],
                    }
                ],
            }]
        ]),
    
        HSRTeams: new Map([
            ['Physical', {
                name: 'Physical',
                iconUrl: 'assets/hsr/HSR_Physical.jpg',
                characters: [
                    {
                        name: 'Huohuo',
                        role: 'Heal + Energy Regeneration + Atk Buff',
                        isMain: false,
                        replacedBy: ['Lynx'],
                    },
                    {
                        name: 'Yunli',
                        role: 'DPS [Ult + FUA]',
                        isMain: true,
                        replacedBy: ['Clara'],
                    },
                    {
                        name: 'Tingyun',
                        role: 'Energy Regeneration + Atk Buff',
                        isMain: false,
                        replacedBy: [],
                    },
                    {
                        name: 'Robin',
                        role: 'Advance + Atk Buff',
                        isMain: false,
                        replacedBy: [],
                    }
                ],
                variations: [
                    ['Gallagher', 'Boothill', 'Ruan Mei', 'Bronya'],
                ]
            }],
            ['Fire', {
                name: 'Fire',
                iconUrl: 'assets/hsr/HSR_Fire.jpg',
                characters: [
                    {
                        name: 'Gallagher',
                        role: 'Heal + Debuff',
                        isMain: false,
                        replacedBy: [],
                    },
                    {
                        name: 'Firefly',
                        role: 'DPS',
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
                        role: 'Break Effect Buff + Super Break',
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
                        role: 'DPS',
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
                        replacedBy: ['Tingyun', 'Pela'],
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
                        role: 'DPS',
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
                        role: 'DPS',
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
                        role: 'DPS',
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
                        role: 'DPS',
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
                        role: 'Heal + Atk Buff',
                        isMain: false,
                        replacedBy: [],
                    },
                    {
                        name: 'Kafka',
                        role: 'DoT Ignition',
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
                        replacedBy: ['Robin', 'Silver Wolf'],
                    }
                ]
            }],
            ['FUA', {
                name: 'FUA',
                iconUrl: null,
                characters: [
                    {
                        name: 'Fu Xuan',
                        role: 'Tank + Crit Buff',
                        isMain: false,
                        replacedBy: [],
                    },
                    {
                        name: 'Jade',
                        role: 'Sub DPS',
                        isMain: true,
                        replacedBy: [],
                    },
                    {
                        name: 'Herta',
                        role: 'Sub DPS',
                        isMain: true,
                        replacedBy: ['Blade', 'Xueyi'],
                    },
                    {
                        name: 'Robin',
                        role: 'Atk & FUA DMG Buff',
                        isMain: false,
                        replacedBy: [],
                    }
                ],
                variations: [
                    ['Fu Xuan', 'Feixiao', 'Topaz', 'Sparkle']
                ]
            }]
        ]),
    
        ZZZTeams: new Map([
            ['Physical',  {
                name: 'Physical',
                iconUrl: 'assets/zzz/ZZZ_Physical.jpg',
                characters: [
                    {
                        name: 'Jane',
                        role: 'Assault Anomaly',
                        isMain: true,
                        replacedBy: [],
                    },
                    {
                        name: 'Seth',
                        role: 'Anomaly Proficiency Buff + Shield',
                        isMain: false,
                        replacedBy: [],
                    },
                    {
                        name: 'Lucy',
                        role: 'Atk Buff',
                        isMain: false,
                        replacedBy: ['Anby', 'Grace'],
                    }
                ]
            }],
            ['Fire', {
                name: 'Fire',
                iconUrl: 'assets/zzz/ZZZ_Fire.jpg',
                characters: [
                    {
                        name: 'Soldier 11',
                        role: 'DPS',
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
                ]
            }],
            ['Ice', {
                name: 'Ice',
                iconUrl: 'assets/zzz/ZZZ_Ice.jpg',
                characters: [
                    {
                        name: 'Ellen',
                        role: 'DPS',
                        isMain: true,
                        replacedBy: [],
                    },
                    {
                        name: 'Lycaon',
                        role: 'Stun + Ice RES Shred',
                        isMain: false,
                        replacedBy: [],
                    },
                    {
                        name: 'Soukaku',
                        role: 'Atk Buff',
                        isMain: false,
                        replacedBy: [],
                    }
                ]
            }],
            ['Electric', {
                name: 'Electric',
                iconUrl: 'assets/zzz/ZZZ_Electric.jpg',
                characters: []
            }],
            ['Ether', {
                name: 'Ether',
                iconUrl: 'assets/zzz/ZZZ_Ether.jpg',
                characters: [
                    {
                        name: 'Zhu Yuan',
                        role: 'DPS',
                        isMain: false,
                        replacedBy: [],
                    },
                    {
                        name: 'Qingyi',
                        role: 'Stun',
                        isMain: false,
                        replacedBy: ['Anby'],
                    },
                    {
                        name: 'Nicole',
                        role: 'Ether DMG Buff + DEF Reduction',
                        isMain: false,
                        replacedBy: [],
                    }
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
                        role: 'DPS',
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
                ]
            }],
            ['Lightning', {
                name: 'Lightning',
                iconUrl: 'assets/hi3/HI3_Lightning.png',
                characters: [
                    {
                        name: 'Lunar Vow',
                        role: 'DPS',
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
                ]
            }],
            ['Ice', {
                name: 'Ice',
                iconUrl: 'assets/hi3/HI3_Ice.png',
                characters: [
                    {
                        name: 'Elysia',
                        role: 'DPS',
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
                        role: 'DPS',
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
                ]
            }],
            ['Herrscher Trio', {
                name: 'Herrscher Trio',
                iconUrl: null,
                characters: [
                    {
                        name: 'Kiana (HoFi)',
                        role: 'DPS',
                        isMain: false,
                        replacedBy: [],
                    },
                    {
                        name: 'Mei (HoO)',
                        role: 'DPS',
                        isMain: false,
                        replacedBy: [],
                    },
                    {
                        name: 'Bronya (HoT)',
                        role: 'Fire & Lightning DMG Buff',
                        isMain: false,
                        replacedBy: [],
                    },
                ]
            }]
        ]),
    }
}
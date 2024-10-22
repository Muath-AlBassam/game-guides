
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
                        replacements: ['Diluc', 'Hu Tao'],
                    },
                    {
                        name: 'Yelan',
                        role: 'Vaporize',
                        isMain: false,
                        replacements: ['Xingqiu'],
                    },
                    {
                        name: 'Bennett',
                        role: 'Atk Buff + Heal + Energy',
                        isMain: false,
                        replacements: [],
                    },
                    {
                        name: 'Zhongli',
                        role: 'Shield',
                        isMain: false,
                        replacements: ['Kazuha'],
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
                        replacements: [],
                    },
                    {
                        name: 'Raiden Shogun',
                        role: 'Electro-Charge + Energy',
                        isMain: false,
                        replacements: ['Fischl'],
                    },
                    {
                        name: 'Kazuha',
                        role: 'Hydro Swirl',
                        isMain: false,
                        replacements: [],
                    },
                    {
                        name: 'Furina',
                        role: 'Sub DPS + DMG Buff + Heal',
                        isMain: false,
                        replacements: [],
                    }
                ],
                variations: [
                    { name: 'Vaporize', characters: ['Mualani', 'Dehya', 'Xilonen', 'Zhongli'] }
                ]
            }],
            ['Dendro', {
                name: 'Dendro',
                iconUrl: 'assets/gi/GI_Dendro.png',
                characters: [
                    {
                        name: 'Nahida',
                        role: 'Dendro Applicator',
                        isMain: true,
                        replacements: [],
                    },
                    {
                        name: 'Yae Miko',
                        role: 'Sub DPS + Dendro reaction',
                        isMain: false,
                        replacements: ['Raiden Shogun'],
                    },
                    {
                        name: 'Kuki Shinobu',
                        role: 'Dendro reaction + Heal',
                        isMain: false,
                        replacements: [],
                    },
                    {
                        name: 'Furina',
                        role: 'Sub DPS + Dendro reaction + DMG Buff',
                        isMain: false,
                        replacements: ['Xingqiu'],
                    }
                ],
                variations: [
                    { name: 'Nilou Bloom', characters: ['Nahida', 'Nilou', 'Kirara', 'Kokomi'] },
                    { name: 'Burning', characters: ['Kinich', 'Emilie',  'Thoma', 'Bennett'] },
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
                        replacements: [],
                    },
                    {
                        name: 'Raiden Shogun',
                        role: 'Overload',
                        isMain: false,
                        replacements: ['Fischl'],
                    },
                    {
                        name: 'Thoma',
                        role: 'Overload + NA Buff + Sheild',
                        isMain: false,
                        replacements: ['Xianling', 'Bennett'],
                    },
                    {
                        name: 'Chevreuse',
                        role: 'Atk Buff + RES Shred + Heal',
                        isMain: false,
                        replacements: [],
                    }
                ],
                variations: [
                    { name: 'Hyper Bloom', characters: ['Clorinde', 'Xingqiu', 'Nahida', 'Zhongli'] }
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
                        replacements: ['Xiao'],
                    },
                    {
                        name: 'Faruzan',
                        role: 'Anemo DMG Buff + RES Shred',
                        isMain: false,
                        replacements: [],
                    },
                    {
                        name: 'Xianyun',
                        role: 'Buff',
                        isMain: false,
                        replacements: [],
                    },
                    {
                        name: 'Zhongli',
                        role: 'Shield',
                        isMain: false,
                        replacements: [],
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
                        replacements: ['Ayaka', 'Ganyu'],
                    },
                    {
                        name: 'Shenhe',
                        role: null,
                        isMain: false,
                        replacements: [],
                    },
                    {
                        name: 'Kazuha',
                        role: 'Cryo Swirl',
                        isMain: false,
                        replacements: [],
                    },
                    {
                        name: 'Kokomi',
                        role: 'Heal + Freeze',
                        isMain: false,
                        replacements: [],
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
                        replacements: [],
                    },
                    {
                        name: 'Fischl',
                        role: 'Crystalize',
                        isMain: false,
                        replacements: [],
                    },
                    {
                        name: 'Xingqiu',
                        role: 'Crystalize',
                        isMain: false,
                        replacements: [],
                    },
                    {
                        name: 'Zhongli',
                        role: 'Shield + Crystalize',
                        isMain: false,
                        replacements: [],
                    }
                ],
                variations: [
                    { name: 'Mono Geo', characters: ['Chiori', 'Gorou', 'Yun Jin', 'Zhongli'] }
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
                        replacements: [],
                    },
                    {
                        name: 'Raiden Shogun',
                        role: 'Superconduct + Energy',
                        isMain: false,
                        replacements: [],
                    },
                    {
                        name: 'Mika',
                        role: 'Physical DMG & Atk SPD Buff',
                        isMain: false,
                        replacements: [],
                    },
                    {
                        name: 'Zhongli',
                        role: 'Shield + Physical RES Shred',
                        isMain: false,
                        replacements: [],
                    }
                ],
            }]
        ]),
    
        HSRTeams: new Map([
            ['Physical', {
                name: 'Physical',
                iconUrl: 'assets/hsr/HSR_Physical.png',
                characters: [
                    {
                        name: 'Huohuo',
                        role: 'Heal + Energy Regeneration + Atk Buff',
                        isMain: false,
                        replacements: ['Lynx'],
                    },
                    {
                        name: 'Yunli',
                        role: 'DPS [Ult + FUA]',
                        isMain: true,
                        replacements: ['Clara'],
                    },
                    {
                        name: 'Tingyun',
                        role: 'Energy Regeneration + Atk Buff',
                        isMain: false,
                        replacements: [],
                    },
                    {
                        name: 'Robin',
                        role: 'Advance + Atk Buff',
                        isMain: false,
                        replacements: [],
                    }
                ],
                variations: [
                    { name: null, characters: ['Gallagher', 'Boothill', 'Ruan Mei', 'Bronya'] },
                ]
            }],
            ['Fire', {
                name: 'Fire',
                iconUrl: 'assets/hsr/HSR_Fire.png',
                characters: [
                    {
                        name: 'Gallagher',
                        role: 'Heal + Debuff',
                        isMain: false,
                        replacements: [],
                    },
                    {
                        name: 'Firefly',
                        role: 'DPS',
                        isMain: true,
                        replacements: [],
                    },
                    {
                        name: 'Ruan Mei',
                        role: 'DMG, RES PEN & Break Efficiency Buff',
                        isMain: false,
                        replacements: [],
                    },
                    {
                        name: 'MC (Harmony)',
                        role: 'Break Effect Buff + Super Break',
                        isMain: false,
                        replacements: [],
                    }
                ]
            }],
            ['Ice', {
                name: 'Ice',
                iconUrl: 'assets/hsr/HSR_Ice.png',
                characters: [
                    {
                        name: 'Luocha',
                        role: 'Heal',
                        isMain: false,
                        replacements: ['Fu Xuan', 'Huohuo'],
                    },
                    {
                        name: 'Jingliu',
                        role: 'DPS',
                        isMain: true,
                        replacements: [],
                    },
                    {
                        name: 'Bronya',
                        role: 'DMG & Crit Buff',
                        isMain: false,
                        replacements: ['Sparkle'],
                    },
                    {
                        name: 'Pela',
                        role: 'Ice RES Shred + DEF Reduction',
                        isMain: false,
                        replacements: ['Tingyun', 'Ruan Mei'],
                    }
                ]
            }],
            ['Lightning', {
                name: 'Lightning',
                iconUrl: 'assets/hsr/HSR_Lightning.png',
                characters: [
                    {
                        name: 'Fu Xuan',
                        role: 'Tank + Crit Buff + Debuff',
                        isMain: false,
                        replacements: ['Gepard'],
                    },
                    {
                        name: 'Acheron',
                        role: 'DPS',
                        isMain: true,
                        replacements: [],
                    },
                    {
                        name: 'Sparkle',
                        role: 'DMG & Crit Buff',
                        isMain: false,
                        replacements: [],
                    },
                    {
                        name: 'Pela',
                        role: 'DEF Reduction',
                        isMain: false,
                        replacements: ['Silver Wolf'],
                    }
                ]
            }],
            ['Wind', {
                name: 'Wind',
                iconUrl: 'assets/hsr/HSR_Wind.png',
                characters: [
                    {
                        name: 'Luocha',
                        role: 'Heal',
                        isMain: false,
                        replacements: [],
                    },
                    {
                        name: 'Blade',
                        role: 'DPS',
                        isMain: true,
                        replacements: [],
                    },
                    {
                        name: 'Bronya',
                        role: 'DMG & Crit Buff',
                        isMain: false,
                        replacements: ['Sparkle'],
                    },
                    {
                        name: 'Ruan Mei',
                        role: 'DMG & RES PEN Buff',
                        isMain: false,
                        replacements: [],
                    }
                ]
            }],
            ['Quantum', {
                name: 'Quantum',
                iconUrl: 'assets/hsr/HSR_Quantum.png',
                characters: [
                    {
                        name: 'Fu Xuan',
                        role: 'Tank + Crit Buff',
                        isMain: false,
                        replacements: [],
                    },
                    {
                        name: 'Seele',
                        role: 'DPS',
                        isMain: true,
                        replacements: ['Xueyi'],
                    },
                    {
                        name: 'Bronya',
                        role: 'DMG & Crit Buff',
                        isMain: false,
                        replacements: ['Sparkle'],
                    },
                    {
                        name: 'Silver Wolf',
                        role: 'Debuff',
                        isMain: false,
                        replacements: ['Ruan Mei'],
                    }
                ]
            }],
            ['Imaginary', {
                name: 'Imaginary',
                iconUrl: 'assets/hsr/HSR_Imaginary.png',
                characters: [
                    {
                        name: 'Luocha',
                        role: 'Heal',
                        isMain: false,
                        replacements: [],
                    },
                    {
                        name: 'Dang Heng · IL', // to get the dot: alt+0183 
                        role: 'DPS',
                        isMain: true,
                        replacements: [],
                    },
                    {
                        name: 'Sparkle',
                        role: 'DMG & Crit Buff + SP Recovery',
                        isMain: false,
                        replacements: [],
                    },
                    {
                        name: 'Welt',
                        role: 'Break + Debuff',
                        isMain: false,
                        replacements: ['Hanya'],
                    }
                ],
                variations: [
                    { name: null, characters: ['Luocha', 'Dr. Ratio', 'Silver Wolf', 'Ruan Mei'] }
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
                        replacements: [],
                    },
                    {
                        name: 'Kafka',
                        role: 'DoT Ignition',
                        isMain: true,
                        replacements: [],
                    },
                    {
                        name: 'Black Swan',
                        role: 'DoT + Debuff',
                        isMain: false,
                        replacements: [],
                    },
                    {
                        name: 'Ruan Mei',
                        role: 'DMG & RES PEN Buff',
                        isMain: false,
                        replacements: ['Robin', 'Silver Wolf'],
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
                        replacements: [],
                    },
                    {
                        name: 'Feixiao',
                        role: 'DPS',
                        isMain: true,
                        replacements: [],
                    },
                    {
                        name: 'Topaz',
                        role: 'DPS',
                        isMain: true,
                        replacements: [],
                    },
                    {
                        name: 'Robin',
                        role: 'Atk & FUA DMG Buff',
                        isMain: false,
                        replacements: ['Sparkle'],
                    }
                ],
                variations: [
                    { name: null, characters: ['Fu Xuan', 'Jade', 'Herta', 'Robin'] }
                ]
            }]
        ]),
    
        ZZZTeams: new Map([
            ['Physical',  {
                name: 'Physical',
                iconUrl: 'assets/zzz/ZZZ_Physical.png',
                characters: [
                    {
                        name: 'Jane',
                        role: 'Assault Anomaly',
                        isMain: true,
                        replacements: [],
                    },
                    {
                        name: 'Seth',
                        role: 'Anomaly Proficiency Buff + Shield',
                        isMain: false,
                        replacements: [],
                    },
                    {
                        name: 'Caesar',
                        role: 'Stun + Atk Buff + Shield',
                        isMain: false,
                        replacements: ['Lucy', 'Anby'],
                    }
                ]
            }],
            ['Fire', {
                name: 'Fire',
                iconUrl: 'assets/zzz/ZZZ_Fire.png',
                characters: [
                    {
                        name: 'Soldier 11',
                        role: 'DPS',
                        isMain: true,
                        replacements: [],
                    },
                    {
                        name: 'Burnice',
                        role: 'Burn + Sub DPS',
                        isMain: false,
                        replacements: ['Lucy'],
                    },
                    {
                        name: 'Caesar',
                        role: 'Stun + Atk Buff + Shield',
                        isMain: false,
                        replacements: ['Koleda'],
                    },
                ]
            }],
            ['Ice', {
                name: 'Ice',
                iconUrl: 'assets/zzz/ZZZ_Ice.png',
                characters: [
                    {
                        name: 'Ellen',
                        role: 'DPS',
                        isMain: true,
                        replacements: [],
                    },
                    {
                        name: 'Lycaon',
                        role: 'Stun + Ice RES Shred',
                        isMain: false,
                        replacements: [],
                    },
                    {
                        name: 'Soukaku',
                        role: 'Atk Buff',
                        isMain: false,
                        replacements: [],
                    }
                ]
            }],
            ['Electric', {
                name: 'Electric',
                iconUrl: 'assets/zzz/ZZZ_Electric.png',
                characters: []
            }],
            ['Ether', {
                name: 'Ether',
                iconUrl: 'assets/zzz/ZZZ_Ether.png',
                characters: [
                    {
                        name: 'Zhu Yuan',
                        role: 'DPS',
                        isMain: false,
                        replacements: [],
                    },
                    {
                        name: 'Qingyi',
                        role: 'Stun',
                        isMain: false,
                        replacements: ['Anby'],
                    },
                    {
                        name: 'Nicole',
                        role: 'Ether DMG Buff + DEF Reduction',
                        isMain: false,
                        replacements: [],
                    }
                ]
            }],
            ['Disorder', {
                name: 'Disorder',
                iconUrl: null,
                characters: [
                    {
                        name: 'Grace',
                        role: 'Shock Anomaly',
                        isMain: false,
                        replacements: [],
                    },
                    {
                        name: 'Burnice',
                        role: 'Burn Anomaly',
                        isMain: false,
                        replacements: [],
                    },
                    {
                        name: 'Caesar',
                        role: 'Stun + Atk Buff + Shield',
                        isMain: false,
                        replacements: [],
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
                        replacements: [],
                    },
                    {
                        name: 'Ai',
                        role: 'Fire DMG Buff + Ignite',
                        isMain: false,
                        replacements: [],
                    },
                    {
                        name: 'Bronya (HoT)',
                        role: 'Fire DMG Buff',
                        isMain: false,
                        replacements: [],
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
                        replacements: [],
                    },
                    {
                        name: 'Eden',
                        role: 'Buff?',
                        isMain: false,
                        replacements: [],
                    },
                    {
                        name: 'Bronya (HoT)',
                        role: 'Lightning DMG Buff',
                        isMain: false,
                        replacements: [],
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
                        replacements: [],
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
                        replacements: [],
                    },
                    {
                        name: 'Carole',
                        role: 'Physical & Total DMG Buff',
                        isMain: false,
                        replacements: [],
                    },
                    {
                        name: 'Fu Hua (HoS)',
                        role: 'DEF Reduction',
                        isMain: false,
                        replacements: [],
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
                        replacements: [],
                    },
                    {
                        name: 'Mei (HoO)',
                        role: 'DPS',
                        isMain: false,
                        replacements: [],
                    },
                    {
                        name: 'Bronya (HoT)',
                        role: 'Fire & Lightning DMG Buff',
                        isMain: false,
                        replacements: [],
                    },
                ]
            }]
        ]),
    }
}
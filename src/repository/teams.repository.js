
class TeamsRepository {
    getAllTeams(gameCode) {
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
    
    getTeam(gameCode, teamName) {
        let team = this.getAllTeams(gameCode).get(teamName);
        return team ?? { name: teamName }
    }

    data = {
        GITeams: new Map([
            ['Pyro', {
                name: 'Pyro',
                iconUrl: 'assets/images/gi/icons/GI_Pyro.png',
                characters: [
                    {
                        name: 'Mavuika',
                        role: 'DPS',
                        isMain: true,
                        replacements: [],
                    },
                    {
                        name: 'Citlali',
                        role: 'Pyro RES Shred + DMG Buff + Melt',
                        isMain: false,
                        replacements: [],
                    },
                    {
                        name: 'Bennett',
                        role: 'Atk Buff + Heal + Energy',
                        isMain: false,
                        replacements: [],
                    },
                    {
                        name: 'Xilonen',
                        role: 'RES Shred + DMG Buff + Heal',
                        isMain: false,
                        replacements: ['Zhongli'],
                    }
                ],
                variations: [
                    { name: '', characters: [['Arlecchino', 'Diluc', 'Hu Tao'], ['Yelan', 'Xingqiu'], 'Bennett', 'Zhongli'] }
                ]
            }],
            ['Hydro', {
                name: 'Hydro',
                iconUrl: 'assets/images/gi/icons/GI_Hydro.png',
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
                    { name: 'Vaporize', characters: ['Mualani', ['Dehya', 'Mavuika'], 'Xilonen', 'Zhongli'] }
                ]
            }],
            ['Dendro', {
                name: 'Dendro',
                iconUrl: 'assets/images/gi/icons/GI_Dendro.png',
                characters: [
                    {
                        name: 'Tighnari',
                        role: 'DPS',
                        isMain: true,
                        replacements: [],
                    },
                    {
                        name: 'Nahida',
                        role: 'Sub DPS + Dendro RES Shred',
                        isMain: false,
                        replacements: [],
                    },
                    {
                        name: 'Yae Miko',
                        role: 'Sub DPS + Dendro reaction',
                        isMain: false,
                        replacements: ['Fischl'],
                    },
                    {
                        name: 'Zhongli',
                        role: 'Shield',
                        isMain: false,
                        replacements: [],
                    }
                ],
                variations: [
                    { name: null, characters: ['Nahida', 'Yae Miko', 'Kuki Shinobu', 'Furina'] },
                    { name: 'Nilou Bloom', characters: ['Nahida', 'Nilou', 'Kirara', 'Kokomi'] },
                    { name: 'Burning', characters: ['Kinich', 'Emilie',  ['Mavuika', 'Dehya', 'Thoma'], 'Bennett'] },
                ],
            }],
            ['Electro', {
                name: 'Electro',
                iconUrl: 'assets/images/gi/icons/GI_Electro.png',
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
            }],
            ['Anemo', {
                name: 'Anemo',
                iconUrl: 'assets/images/gi/icons/GI_Anemo.png',
                characters: [
                    {
                        name: 'Chasca',
                        role: 'DPS + Swirl',
                        isMain: true,
                        replacements: [],
                    },
                    {
                        name: 'Bennett',
                        role: '...',
                        isMain: false,
                        replacements: [],
                    },
                    {
                        name: 'Ororon',
                        role: '...',
                        isMain: false,
                        replacements: [],
                    },
                    {
                        name: 'Furina',
                        role: 'Sub DPS + DMG Buff',
                        isMain: false,
                        replacements: [],
                    },
                ],
                variations: [
                    { name: '', characters: [['Xiao', 'Lynette'], 'Faruzan', 'Xianyun', 'Zhongli'] }
                ]
            }],
            ['Cryo', {
                name: 'Cryo',
                iconUrl: 'assets/images/gi/icons/GI_Cryo.png',
                characters: [
                    {
                        name: 'Wriothesley',
                        role: 'DPS',
                        isMain: true,
                        replacements: ['Ayaka', 'Ganyu'],
                    },
                    {
                        name: 'Shenhe',
                        role: 'Atk Buff + RES Shred',
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
                iconUrl: 'assets/images/gi/icons/GI_Geo.png',
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
                iconUrl: 'assets/images/gi/icons/GI_Physical.png',
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
                iconUrl: 'assets/images/hsr/icons/HSR_Physical.png',
                characters: [
                    {
                        name: 'Huohuo',
                        role: 'Heal + Energy Regeneration + Atk Buff',
                        isMain: false,
                        replacements: ['Lynx'],
                    },
                    {
                        name: 'Yunli',
                        role: 'DPS + Counter (FUA)',
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
                ]
            }],
            ['Fire', {
                name: 'Fire',
                iconUrl: 'assets/images/hsr/icons/HSR_Fire.png',
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
                        replacements: ['Fugue'],
                    }
                ]
            }],
            ['Ice', {
                name: 'Ice',
                iconUrl: 'assets/images/hsr/icons/HSR_Ice.png',
                characters: [
                    {
                        name: 'Aventurine',
                        role: 'Tank',
                        isMain: false,
                        replacements: ['Fu Xuan'],
                    },
                    {
                        name: 'The Herta',
                        role: 'DPS',
                        isMain: true,
                        replacements: [],
                    },
                    {
                        name: 'Herta',
                        role: 'Sub DPS',
                        isMain: false,
                        replacements: ['Jade'],
                    },
                    {
                        name: 'MC (Remembrance)',
                        role: 'Crit Buff + True DMG',
                        isMain: false,
                        replacements: ['Tribbie'],
                    }
                ],
                variations: [
                    { name: null, characters: ['Luocha', 'Jingliu', ['Bronya', 'Sparkle'], 'Pela'] }
                ]
            }],
            ['Lightning', {
                name: 'Lightning',
                iconUrl: 'assets/images/hsr/icons/HSR_Lightning.png',
                characters: [
                    {
                        name: 'Fu Xuan',
                        role: 'Tank + Crit Buff + Debuff',
                        isMain: false,
                        replacements: ['Aventurine', 'Gepard'],
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
                iconUrl: 'assets/images/hsr/icons/HSR_Wind.png',
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
                iconUrl: 'assets/images/hsr/icons/HSR_Quantum.png',
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
                        replacements: [],
                    },
                    {
                        name: 'Sparkle',
                        role: 'DMG & Crit Buff',
                        isMain: false,
                        replacements: ['Bronya'],
                    },
                    {
                        name: 'Silver Wolf',
                        role: 'Debuff',
                        isMain: false,
                        replacements: [],
                    }
                ],
                variations: [
                    { name: null, characters: ['Fu Xuan', 'Xueyi', 'Fugue', 'Ruan Mei'] }
                ]
            }],
            ['Imaginary', {
                name: 'Imaginary',
                iconUrl: 'assets/images/hsr/icons/HSR_Imaginary.png',
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
                    { name: 'L-Ratio', characters: ['Luocha', 'Dr. Ratio', 'Silver Wolf', 'Ruan Mei'] },
                ]
            }],
            ['DoT', {
                name: 'DoT',
                iconUrl: 'assets/images/hsr/icons/HSR_DoT.png',
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
                iconUrl: 'assets/images/hsr/icons/HSR_FUA.png',
                characters: [
                    {
                        name: 'Aventurine',
                        role: 'Shield',
                        isMain: false,
                        replacements: ['Fu Xuan'],
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
                    { name: 'AoE FUA', characters: ['Aventurine', 'Jade', 'Herta', 'Robin'] }
                ]
            }],
            ['Break', {
                name: 'Break',
                iconUrl: 'assets/images/hsr/icons/HSR_Break.png',
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
                        replacements: ['Fugue'],
                    }
                ],
                variations: [
                    { name: 'AoE Break', characters: ['Gallagher', 'Rappa', 'Ruan Mei', 'Fugue'] },
                    { name: 'Gunslinger', characters: ['Gallagher', 'Boothill', 'Fugue', 'Bronya'] },
                ]
            }],
        ]),
    
        ZZZTeams: new Map([
            ['Miyabi',  {
                name: 'Miyabi',
                iconUrl: 'assets/images/zzz/icons/ZZZ_Frost.png',
                characters: [
                    {
                        name: 'Miyabi',
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
                        name: 'Lucy',
                        role: 'Atk Buff',
                        isMain: false,
                        replacements: ['Soukaku'],
                    }
                ],
                pet: 'Agent Gulliver'
            }],
            ['Physical',  {
                name: 'Physical',
                iconUrl: 'assets/images/zzz/icons/ZZZ_Physical.png',
                characters: [
                    {
                        name: 'Jane',
                        role: 'Assault',
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
                        replacements: ['Lucy'],
                    }
                ],
                pet: 'Officer Cui'
            }],
            ['Fire', {
                name: 'Fire',
                iconUrl: 'assets/images/zzz/icons/ZZZ_Fire.png',
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
                ],
                variations: [
                    { name: 'Chain', characters: ['Evelyn', 'Koleda', ['Caesar', 'Lucy']] }
                ],
                pet: 'Rocketboo'
            }],
            ['Ice', {
                name: 'Ice',
                iconUrl: 'assets/images/zzz/icons/ZZZ_Ice.png',
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
                ],
                pet: 'Sharkboo'
            }],
            ['Electric', {
                name: 'Electric',
                iconUrl: 'assets/images/zzz/icons/ZZZ_Electric.png',
                characters: []
            }],
            ['Ether', {
                name: 'Ether',
                iconUrl: 'assets/images/zzz/icons/ZZZ_Ether.png',
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
                ],
                pet: 'Resonaboo'
            }],
            ['Disorder', {
                name: 'Disorder',
                iconUrl: null,
                characters: [
                    {
                        name: 'Yanagi',
                        role: 'Shock + Disorder',
                        isMain: false,
                        replacements: ['Grace', 'Jane'],
                    },
                    {
                        name: 'Burnice',
                        role: 'Burn + Sub DPS',
                        isMain: false,
                        replacements: ['Jane'],
                    },
                    {
                        name: 'Caesar',
                        role: 'Stun + Atk Buff + Shield',
                        isMain: false,
                        replacements: ['Seth'],
                    }
                ],
                pet: 'Red Moccus'
            }]
        ]),
    
        HI3Teams: new Map([
            ['Fire', {
                name: 'Fire',
                iconUrl: 'assets/images/hi3/icons/HI3_Fire.png',
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
                iconUrl: 'assets/images/hi3/icons/HI3_Lightning.png',
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
                iconUrl: 'assets/images/hi3/icons/HI3_Ice.png',
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
                iconUrl: 'assets/images/hi3/icons/HI3_Physical.png',
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

const teamsRepository = new TeamsRepository();
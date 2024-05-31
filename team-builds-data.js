function getGames() {
    return [
        {
            label: 'Genshin Impact',
            code: 'GI',
            logoUrl: 'assets/gi/GenshinImpact_Logo.png',
            backgroundUrl: 'assets/gi/GenshinImpact_BG.png',
            guideUrl: 'https://genshin-builds.com/characters'
        },
        {
            label: 'Honkai Star Rail',
            code: 'HSR',
            logoUrl: 'assets/hsr/HonkaiStarRail_Logo.png',
            backgroundUrl: 'assets/hsr/HonkaiStarRail_BG.png',
            guideUrl: 'https://www.prydwen.gg/star-rail/tier-list'
        }
    ]
}

function getGITeams() {
    return [
        {
            name: 'Pyro',
            iconUrl: 'assets/gi/GenshinImpact_Pyro.png',
            characters: [
                {
                    name: 'Arlecchino',
                    role: 'Main <b>[NA]</b>',
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
            ]
        },
        {
            name: 'Hydro',
            iconUrl: 'assets/gi/GenshinImpact_Hydro.png',
            characters: [
                {
                    name: 'Neuvillette',
                    role: 'Main <b>[CA]</b>',
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
            ]
        },
        {
            name: 'Dendro',
            iconUrl: 'assets/gi/GenshinImpact_Dendro.png',
            characters: [
                {
                    name: 'Nahida',
                    role: 'Main <b>[NA + CA + Skill + Ult]</b>',
                    isMain: true,
                    replacedBy: [],
                },
                {
                    name: 'Raiden Shogun',
                    role: 'Dendro reaction',
                    isMain: false,
                    replacedBy: ['Yae Miko'],
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
            ]
        },
        {
            name: 'Electro',
            iconUrl: 'assets/gi/GenshinImpact_Electro.png',
            characters: [
                {
                    name: 'Yae Miko',
                    role: null,
                    isMain: true,
                    replacedBy: [],
                },
                {
                    name: null,
                    role: null,
                    isMain: false,
                    replacedBy: [],
                },
                {
                    name: null,
                    role: null,
                    isMain: false,
                    replacedBy: [],
                },
                {
                    name: null,
                    role: null,
                    isMain: false,
                    replacedBy: [],
                }
            ]
        },
        {
            name: 'Anemo',
            iconUrl: 'assets/gi/GenshinImpact_Anemo.png',
            characters: [
                {
                    name: 'Lynette',
                    role: 'Main <b>[Skill + NA + Ult]</b>',
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
            ]
        },
        {
            name: 'Cryo',
            iconUrl: 'assets/gi/GenshinImpact_Cryo.png',
            characters: [
                {
                    name: 'Wriothesley',
                    role: 'Main <b>[NA + CA]</b>',
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
            ]
        },
        {
            name: 'Geo',
            iconUrl: 'assets/gi/GenshinImpact_Geo.png',
            characters: [
                {
                    name: 'Navia',
                    role: 'Main <b>[Skill + NA + Ult]</b>',
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
            ]
        },
        {
            name: 'Physical',
            iconUrl: 'assets/gi/GenshinImpact_Physical.png',
            characters: [
                {
                    name: 'Eula',
                    role: 'Main <b>[NA + Skill + Ult]</b>',
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
            ]
        }
    ]
}

function getHSRTeams() {
    return [
        {
            name: 'Physical',
            iconUrl: 'assets/hsr/HonkaiStarRail_Physical.jpg',
            characters: [
                {
                    name: 'Gallagher',
                    role: 'Heal',
                    isMain: false,
                    replacedBy: [],
                },
                {
                    name: 'Boothill',
                    role: 'Main <b>[Skill + Ult]</b> + Break',
                    isMain: true,
                    replacedBy: [],
                },
                {
                    name: 'MC (Harmony)',
                    role: 'Break Buff + Super Break',
                    isMain: false,
                    replacedBy: [],
                },
                {
                    name: 'Ruan Mei',
                    role: 'DMG & RES PEN & Break Buff',
                    isMain: false,
                    replacedBy: [],
                }
            ],
            variations: [
                ['Lynx', 'Clara', 'Ruan Mei', 'Tingyun']
            ]
        },
        {
            name: 'Fire',
            iconUrl: 'assets/hsr/HonkaiStarRail_Fire.jpg',
            characters: [
                {
                    name: 'Gepard',
                    role: 'Shield',
                    isMain: false,
                    replacedBy: [],
                },
                {
                    name: 'Topaz',
                    role: 'Main <b>[FUA + Skill]</b>',
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
                    name: 'Robin',
                    role: 'ATK & FUA DMG Buff',
                    isMain: false,
                    replacedBy: ['Ruan Mei'],
                }
            ]
        },
        {
            name: 'Ice',
            iconUrl: 'assets/hsr/HonkaiStarRail_Ice.jpg',
            characters: [
                {
                    name: 'Luocha',
                    role: 'Heal',
                    isMain: false,
                    replacedBy: ['Fu Xuan', 'Huohuo'],
                },
                {
                    name: 'Jingliu',
                    role: 'Main <b>[Skill + Ult]</b>',
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
            iconUrl: 'assets/hsr/HonkaiStarRail_Lightning.jpg',
            characters: [
                {
                    name: 'Fu Xuan',
                    role: 'Tank + Crit Buff + Debuff',
                    isMain: false,
                    replacedBy: ['Gepard'],
                },
                {
                    name: 'Acheron',
                    role: 'Main <b>[Skill + Ult]</b>',
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
            iconUrl: 'assets/hsr/HonkaiStarRail_Wind.jpg',
            characters: [
                {
                    name: 'Luocha',
                    role: 'Heal',
                    isMain: false,
                    replacedBy: [],
                },
                {
                    name: 'Blade',
                    role: 'Main DPS <b>[Basic + Ult]</b>',
                    isMain: true,
                    replacedBy: [],
                },
                {
                    name: 'Bronya',
                    role: 'DMG & Crit Buff',
                    isMain: false,
                    replacedBy: [],
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
            iconUrl: 'assets/hsr/HonkaiStarRail_Quantum.jpg',
            characters: [
                {
                    name: 'Fu Xuan',
                    role: 'Tank + Crit Buff',
                    isMain: false,
                    replacedBy: [],
                },
                {
                    name: 'Seele',
                    role: 'Main <b>[Skill + Ult]</b>',
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
            iconUrl: 'assets/hsr/HonkaiStarRail_Imaginary.jpg',
            characters: [
                {
                    name: 'Luocha',
                    role: 'Heal',
                    isMain: false,
                    replacedBy: [],
                },
                {
                    name: 'Dang Heng · IL', // to get the dot: alt+0183
                    role: 'Main <b>[Basic]</b>',
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
            iconUrl: 'assets/hsr/HonkaiStarRail_DoT.png',
            characters: [
                {
                    name: 'Huohuo',
                    role: 'Heal',
                    isMain: false,
                    replacedBy: [],
                },
                {
                    name: 'Kafka',
                    role: 'Main <b>[Skill + Ult]</b> + DoT Ignition',
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
        {
            name: 'Follow-up',
            iconUrl: null,
            characters: [
                {
                    name: 'Gepard',
                    role: 'Shield',
                    isMain: false,
                    replacedBy: [],
                },
                {
                    name: 'Dr. Ratio',
                    role: 'Main <b>[Skill + FUA]</b>',
                    isMain: true,
                    replacedBy: [],
                },
                {
                    name: 'Topaz',
                    role: 'Main <b>[Skill + FUA]</b>',
                    isMain: true,
                    replacedBy: [],
                },
                {
                    name: 'Robin',
                    role: 'ATK & FUA DMG Buff',
                    isMain: false,
                    replacedBy: ['Ruan Mei'],
                }
            ]
        },
    ]
}

function getGICharacters() {
    return new Map([
        ['Arlecchino', {
            name: 'Arlecchino',
            imageUrl: 'https://i2.wp.com/genshinbuilds.aipurrjects.com/genshin/characters/arlecchino/image.png?strip=all&quality=75&w=256',
            rarity: '5'
        }],
        ['Chiori', {
            name: 'Chiori',
            imageUrl: 'https://i2.wp.com/genshinbuilds.aipurrjects.com/genshin/characters/chiori/image.png?strip=all&quality=75&w=256',
            rarity: '5'
        }],
        ['Bennett', {
            name: 'Bennett',
            imageUrl: 'https://i2.wp.com/genshinbuilds.aipurrjects.com/genshin/characters/bennett/image.png?strip=all&quality=75&w=256',
            rarity: '4'
        }],
        ['Diluc', {
            name: 'Diluc',
            imageUrl: 'https://i2.wp.com/genshinbuilds.aipurrjects.com/genshin/characters/diluc/image.png?strip=all&quality=75&w=256',
            rarity: '5'
        }],
        ['Eula', {
            name: 'Eula',
            imageUrl: 'https://i2.wp.com/genshinbuilds.aipurrjects.com/genshin/characters/eula/image.png?strip=all&quality=75&w=256',
            rarity: '5'
        }],
        ['Faruzan', {
            name: 'Faruzan',
            imageUrl: 'https://i2.wp.com/genshinbuilds.aipurrjects.com/genshin/characters/faruzan/image.png?strip=all&quality=75&w=256',
            rarity: '4'
        }],
        ['Fischl', {
            name: 'Fischl',
            imageUrl: 'https://i2.wp.com/genshinbuilds.aipurrjects.com/genshin/characters/fischl/image.png?strip=all&quality=75&w=256',
            rarity: '4'
        }],
        ['Furina', {
            name: 'Furina',
            imageUrl: 'https://i2.wp.com/genshinbuilds.aipurrjects.com/genshin/characters/furina/image.png?strip=all&quality=75&w=256',
            rarity: '5'
        }],
        ['Ayaka', {
            name: 'Ayaka',
            imageUrl: 'https://i2.wp.com/genshinbuilds.aipurrjects.com/genshin/characters/kamisato_ayaka/image.png?strip=all&quality=75&w=256',
            rarity: '5'
        }],
        ['Kazuha', {
            name: 'Kazuha',
            imageUrl: 'https://i2.wp.com/genshinbuilds.aipurrjects.com/genshin/characters/kaedehara_kazuha/image.png?strip=all&quality=75&w=256',
            rarity: '5'
        }],
        ['Hu Tao', {
            name: 'Hu Tao',
            imageUrl: 'https://i2.wp.com/genshinbuilds.aipurrjects.com/genshin/characters/hu_tao/image.png?strip=all&quality=75&w=256',
            rarity: '5'
        }],
        ['Gorou', {
            name: 'Gorou',
            imageUrl: 'https://i2.wp.com/genshinbuilds.aipurrjects.com/genshin/characters/gorou/image.png?strip=all&quality=75&w=256',
            rarity: '4'
        }],
        ['Ganyu', {
            name: 'Ganyu',
            imageUrl: 'https://i2.wp.com/genshinbuilds.aipurrjects.com/genshin/characters/ganyu/image.png?strip=all&quality=75&w=256',
            rarity: '5'
        }],
        ['Kirara', {
            name: 'Kirara',
            imageUrl: 'https://i2.wp.com/genshinbuilds.aipurrjects.com/genshin/characters/kirara/image.png?strip=all&quality=75&w=256',
            rarity: '4'
        }],
        ['Kuki Shinobu', {
            name: 'Kuki Shinobu',
            imageUrl: 'https://i2.wp.com/genshinbuilds.aipurrjects.com/genshin/characters/kuki_shinobu/image.png?strip=all&quality=75&w=256',
            rarity: '4'
        }],
        ['Lynette', {
            name: 'Lynette',
            imageUrl: 'https://i2.wp.com/genshinbuilds.aipurrjects.com/genshin/characters/lynette/image.png?strip=all&quality=75&w=256',
            rarity: '4'
        }],
        ['Nilou', {
            name: 'Nilou',
            imageUrl: 'https://i2.wp.com/genshinbuilds.aipurrjects.com/genshin/characters/nilou/image.png?strip=all&quality=75&w=256',
            rarity:  '5'
        }],
        ['Neuvillette', {
            name: 'Neuvillette',
            imageUrl: 'https://i2.wp.com/genshinbuilds.aipurrjects.com/genshin/characters/neuvillette/image.png?strip=all&quality=75&w=256',
            rarity: '5'
        }],
        ['Navia', {
            name: 'Navia',
            imageUrl: 'https://i2.wp.com/genshinbuilds.aipurrjects.com/genshin/characters/navia/image.png?strip=all&quality=75&w=256',
            rarity: '5'
        }],
        ['Nahida', {
            name: 'Nahida',
            imageUrl: 'https://i2.wp.com/genshinbuilds.aipurrjects.com/genshin/characters/nahida/image.png?strip=all&quality=75&w=256',
            rarity: '5'
        }],
        ['Mika', {
            name: 'Mika',
            imageUrl: 'https://i2.wp.com/genshinbuilds.aipurrjects.com/genshin/characters/mika/image.png?strip=all&quality=75&w=256',
            rarity: '4'
        }],
        ['Raiden Shogun', {
            name: 'Raiden Shogun',
            imageUrl: 'https://i2.wp.com/genshinbuilds.aipurrjects.com/genshin/characters/raiden_shogun/image.png?strip=all&quality=75&w=256',
            rarity: '5'
        }],
        ['Kokomi', {
            name: 'Kokomi',
            imageUrl: 'https://i2.wp.com/genshinbuilds.aipurrjects.com/genshin/characters/sangonomiya_kokomi/image.png?strip=all&quality=75&w=256',
            rarity: '5'
        }],
        ['Wriothesley', {
            name: 'Wriothesley',
            imageUrl: 'https://i2.wp.com/genshinbuilds.aipurrjects.com/genshin/characters/wriothesley/image.png?strip=all&quality=75&w=256',
            rarity: '5'
        }],
        ['Xianyun', {
            name: 'Xianyun',
            imageUrl: 'https://i2.wp.com/genshinbuilds.aipurrjects.com/genshin/characters/xianyun/image.png?strip=all&quality=75&w=256',
            rarity: '5'
        }],
        ['Xiao', {
            name: 'Xiao',
            imageUrl: 'https://i2.wp.com/genshinbuilds.aipurrjects.com/genshin/characters/xiao/image.png?strip=all&quality=75&w=256',
            rarity: '5'
        }],
        ['Xingqiu', {
            name: 'Xingqiu',
            imageUrl: 'https://i2.wp.com/genshinbuilds.aipurrjects.com/genshin/characters/xingqiu/image.png?strip=all&quality=75&w=256',
            rarity: '4'
        }],
        ['Yae Miko', {
            name: 'Yae Miko',
            imageUrl: 'https://i2.wp.com/genshinbuilds.aipurrjects.com/genshin/characters/yae_miko/image.png?strip=all&quality=75&w=256',
            rarity: '5'
        }],
        ['Zhongli', {
            name: 'Zhongli',
            imageUrl: 'https://i2.wp.com/genshinbuilds.aipurrjects.com/genshin/characters/zhongli/image.png?strip=all&quality=75&w=256',
            rarity: '5'
        }],
        ['Yun Jin', {
            name: 'Yun Jin',
            imageUrl: 'https://i2.wp.com/genshinbuilds.aipurrjects.com/genshin/characters/yun_jin/image.png?strip=all&quality=75&w=256',
            rarity: '4'
        }],
        ['Yelan', {
            name: 'Yelan',
            imageUrl: 'https://i2.wp.com/genshinbuilds.aipurrjects.com/genshin/characters/yelan/image.png?strip=all&quality=75&w=256',
            rarity: '5'
        }],
    ]);
}

function getHSRCharacters() {
    return new Map([
        ['MC (Harmony)', {
            name: 'MC (Harmony)',
            imageUrl: 'https://www.prydwen.gg/static/286541431fc0e4242b16eb307e2a71b0/60b4d/img_mc_icon.webp',
            rarity: '5'
        }],
        ['Lynx', {
            name: 'Lynx',
            imageUrl: 'https://www.prydwen.gg/static/033124afa0122cd8b0ae20b533140ec5/60b4d/35_sm.webp',
            rarity: '4'
        }],
        ['Clara', {
            name: 'Clara',
            imageUrl: 'https://www.prydwen.gg/static/a3d2d3e7db3d202b575b6fa1d95baf2c/60b4d/18_sm.webp',
            rarity: '5'
        }],
        ['Tingyun', {
            name: 'Tingyun',
            imageUrl: 'https://www.prydwen.gg/static/03bcec36a01c78f33767b7098f6fa1f0/60b4d/25_sm.webp',
            rarity: '4'
        }],
        ['Ruan Mei', {
            name: 'Ruan Mei',
            imageUrl: 'https://www.prydwen.gg/static/ab077ecba896b3a6d406c1c170a7a471/60b4d/43_sm.webp',
            rarity: '5'
        }],
        ['Acheron', {
            name: 'Acheron',
            imageUrl: 'https://www.prydwen.gg/static/dfb18cf34a31662aa1393c25266ed749/60b4d/47_sm.webp',
            rarity: '5'
        }],
        ['Dang Heng · IL', {
            name: 'Dang Heng · IL',
            imageUrl: 'https://www.prydwen.gg/static/4604f205c9f9e6cf4a1d8b90943b8ed6/60b4d/34_sm.webp',
            rarity: '5'
        }],
        ['Jingliu', {
            name: 'Jingliu',
            imageUrl: 'https://www.prydwen.gg/static/90e9d33472fcc0b7fbd1251cd0beb6e5/60b4d/35_sm.webp',
            rarity: '5'
        }],
        ['Kafka', {
            name: 'Kafka',
            imageUrl: 'https://www.prydwen.gg/static/5eaaf9ec3518805762b5f5a69091d86c/60b4d/7_sm.webp',
            rarity: '5'
        }],
        ['Sparkle', {
            name: 'Sparkle',
            imageUrl: 'https://www.prydwen.gg/static/c52297074e0c2fff0184fe534ac31617/60b4d/47_sm.webp',
            rarity: '5'
        }],
        ['Fu Xuan', {
            name: 'Fu Xuan',
            imageUrl: 'https://www.prydwen.gg/static/e454e011effe543ecd5f2706541c8cbb/60b4d/29_sm.webp',
            rarity: '5'
        }],
        ['Dr. Ratio', {
            name: 'Dr. Ratio',
            imageUrl: 'https://www.prydwen.gg/static/26f302952d6728c2b270c9160566e614/60b4d/44_sm.webp',
            rarity: '5'
        }],
        ['Seele', {
            name: 'Seele',
            imageUrl: 'https://www.prydwen.gg/static/7bf27624888af02b16ed1ad2fdec10f2/60b4d/13_sm.webp',
            rarity: '5'
        }],
        ['Black Swan', {
            name: 'Black Swan',
            imageUrl: 'https://www.prydwen.gg/static/f3045047e4708b372aff23fe67fe63d7/60b4d/46_sm.webp',
            rarity: '5'
        }],
        ['Bronya', {
            name: 'Bronya',
            imageUrl: 'https://www.prydwen.gg/static/3c0e87556bcf541135c909a18f87ec6a/60b4d/12_sm.webp',
            rarity: '5'
        }],
        ['Silver Wolf', {
            name: 'Silver Wolf',
            imageUrl: 'https://www.prydwen.gg/static/46b350599121f6a83272a0635061d071/60b4d/8_sm.webp',
            rarity: '5'
        }],
        ['Huohuo', {
            name: 'Huohuo',
            imageUrl: 'https://www.prydwen.gg/static/35eddc3b09b3d2c610af2013992e732f/60b4d/40.webp',
            rarity: '5'
        }],
        ['Luocha', {
            name: 'Luocha',
            imageUrl: 'https://www.prydwen.gg/static/3db1e95f0be0c78a233f851614ff4620/60b4d/21_sm.webp',
            rarity: '5'
        }],
        ['Blade', {
            name: 'Blade',
            imageUrl: 'https://www.prydwen.gg/static/f2663c739baa73864052b7c8daff327b/60b4d/28_sm.webp',
            rarity: '5'
        }],
        ['Xueyi', {
            name: 'Xueyi',
            imageUrl: 'https://www.prydwen.gg/static/255178791ab42f44cb633b15df66c30f/60b4d/45_sm.webp',
            rarity: '4'
        }],
        ['Pela', {
            name: 'Pela',
            imageUrl: 'https://www.prydwen.gg/static/b8f7e6d5e067908eea06f4286a3381fa/60b4d/17_sm.webp',
            rarity: '4'
        }],
        ['Welt', {
            name: 'Welt',
            imageUrl: 'https://www.prydwen.gg/static/b24ce106a4a283e6cf1a077413fbf9d0/60b4d/6_sm.webp',
            rarity: '5'
        }],
        ['Topaz', {
            name: 'Topaz',
            imageUrl: 'https://www.prydwen.gg/static/0ab4d7f7d2a2e2afc7c5979531904fe1/60b4d/38_sm.webp',
            rarity: '5'
        }],
        ['Gepard', {
            name: 'Gepard',
            imageUrl: 'https://www.prydwen.gg/static/cff01461a4e4266e9b213e4d73c6c5c3/60b4d/15_sm.webp',
            rarity: '5'
        }],
        ['Robin', {
            name: 'Robin',
            imageUrl: 'https://www.prydwen.gg/static/887bd7ed4c8537a52cd285d35931ab4d/60b4d/52_sm.webp',
            rarity: '5'
        }],
        ['Hanya', {
            name: 'Hanya',
            imageUrl: 'https://www.prydwen.gg/static/a4e55e309e35bc1f4d5ed3808c8dcf51/60b4d/42_sm.webp',
            rarity: '4'
        }],
        ['Boothill', {
            name: 'Boothill',
            imageUrl: 'https://www.prydwen.gg/static/b57af11d0edb3f76d9e130bb9611c63b/60b4d/53_sm.webp',
            rarity: '5'
        }],
        ['Gallagher', {
            name: 'Gallagher',
            imageUrl: 'https://www.prydwen.gg/static/014e5fd9e1557e4dbef87ae673e12116/60b4d/51_sm.webp',
            rarity: '4'
        }]
    ]);
}
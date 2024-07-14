const GIData = {
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
                ['Chevreuse', `Skill ${smallText('(Hold)')} ${arrow}`],
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
}
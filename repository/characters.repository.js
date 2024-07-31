
const space = Constants.unicode.space;

function getAllCharacters(gameCode) {
    let data;
    switch (gameCode) {
        case Constants.games.GI:
            return CharactersRepository.GICharacters;
        case Constants.games.HSR:
            return CharactersRepository.HSRCharacters;
        case Constants.games.ZZZ:
            return CharactersRepository.ZZZCharacters;
        case Constants.games.HI3:
            return CharactersRepository.HI3Characters;
        case Constants.games.TK8:
            return CharactersRepository.TK8Characters;
        default:
            return new Map([]);
    }
}

function getCharacterMetadata(gameCode, characterName) {
    let data = getAllCharacters(gameCode).get(characterName)
    return data ?? { name: characterName }
}

// ----------------------------------------------------------------------------

const CharactersRepository = {
    GICharacters: new Map([
        ['Arlecchino', {
            name: 'Arlecchino',
            imageUrl: 'assets/gi/character/GI_Arlecchino.png',
            element: 'Pyro',
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
            element: 'Geo',
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
            element: 'Pyro',
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
            element: 'Pyro',
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
            element: 'Cryo',
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
            element: 'Anemo',
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
            element: 'Electro',
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
            element: 'Hydro',
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
            element: 'Cryo',
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
            element: 'Anemo',
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
            element: 'Pyro',
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
            element: 'Geo',
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
            element: 'Cryo',
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
            element: 'Dendro',
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
            element: 'Electro',
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
            element: 'Anemo',
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
            element: 'Hydro',
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
            element: 'Hydro',
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
            element: 'Geo',
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
            element: 'Dendro',
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
            element: 'Cryo',
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
            element: 'Electro',
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
            element: 'Hydro',
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
            element: 'Cryo',
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
            element: 'Anemo',
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
            element: 'Anemo',
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
            element: 'Hydro',
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
            element: 'Electro',
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
            element: 'Geo',
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
            element: 'Geo',
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
            element: 'Hydro',
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
            element: 'Electro',
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
            element: 'Pyro',
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
            element: 'Pyro',
            rarity: '4',
            build: {
                weapon: { name: 'The Catch' },
                sets: [
                    { name: 'Noblesse Oblige', pieceCount: '2' },
                    { name: 'Emblem of Severed Fate', pieceCount: '2' }
                ]
            }
        }]
    ]),

    HSRCharacters: new Map([
        ['MC (Harmony)', {
            name: 'MC (Harmony)',
            imageUrl: 'assets/hsr/character/HSR_MCHarmony.jpg',
            element: 'Imaginary',
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
            element: 'Quantum',
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
            element: 'Physical',
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
            element: 'Lightning',
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
            element: 'Ice',
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
            element: 'Lightning',
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
            element: 'Imaginary',
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
            element: 'Ice',
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
            element: 'Lightning',
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
            element: 'Quantum',
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
            element: 'Quantum',
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
            element: 'Imaginary',
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
            element: 'Quantum',
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
            element: 'Wind',
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
            element: 'Wind',
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
            element: 'Quantum',
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
            element: 'Wind',
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
            element: 'Imaginary',
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
            element: 'Wind',
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
            element: 'Quantum',
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
            element: 'Ice',
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
            element: 'Imaginary',
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
            element: 'Fire',
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
            element: 'Ice',
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
            element: 'Physical',
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
            element: 'Physical',
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
            element: 'Physical',
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
            element: 'Fire',
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
            element: 'Fire',
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
            element: 'Quantum',
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
            element: 'Ice',
            role: 'Erudition',
            rarity: '4',
            build: {
                weapon: { name: 'Night on the Milky Way' },
                sets: [
                    { name: 'Hunter of Glacial Forest', pieceCount: '2' },
                    { name: 'The Ashblazing Grand Duke', pieceCount: '2' },
                    { name: 'Inert Salsotto', pieceCount: '2' }
                ]
            }
        }],
        ['Yunli', {
            name: 'Yunli',
            imageUrl: 'assets/hsr/character/HSR_Yunli.jpg',
            element: 'Physical',
            role: 'Destruction',
            rarity: '5',
            build: {
                weapon: { name: 'Dance at Sunset' },
                sets: [
                    { name: 'The Wind-Soaring Valorous', pieceCount: '4' },
                    { name: 'Duran, Dynasty of Running Wolves', pieceCount: '2' }
                ]
            }
        }],
    ]),

    ZZZCharacters: new Map([
        ['Ellen', {
            name: 'Ellen',
            imageUrl: 'assets/zzz/character/ZZZ_Ellen.jpg',
            element: 'Ice',
            role: 'Attack',
            rarity: 'S',
            build: {
                weapon: { name: 'Deep Sea Visitor' },
                sets: [
                    { name: 'Polar Metal', pieceCount: '4' },
                    { name: 'Woodpecker Electro', pieceCount: '2' },
                ]
            }
        }],
        ['Soukaku', {
            name: 'Soukaku',
            imageUrl: 'assets/zzz/character/ZZZ_Soukaku.jpg',
            element: 'Ice',
            role: 'Support',
            rarity: 'A',
            build: {
                weapon: { name: 'Bashful Demon' },
                sets: [
                    { name: 'Swing Jazz', pieceCount: '4' },
                    { name: 'Hormone Punk', pieceCount: '2' }
                ]
            }
        }],
        ['Anby', {
            name: 'Anby',
            imageUrl: 'assets/zzz/character/ZZZ_Anby.jpg',
            element: 'Electric',
            role: 'Stun',
            rarity: 'A',
            build: {
                weapon: { name: 'Demara Battery Mark II' },
                sets: [
                    { name: 'Shockstar Disco', pieceCount: '4' },
                    { name: 'Swing Jazz', pieceCount: '2' }
                ]
            }
        }],
        ['Lycaon', {
            name: 'Lycaon',
            imageUrl: 'assets/zzz/character/ZZZ_Lycaon.jpg',
            element: 'Ice',
            role: 'Stun',
            rarity: 'S',
            build: {
                weapon: { name: 'The Restrained' },
                sets: [
                    { name: 'Shockstar Disco', pieceCount: '4' },
                    { name: 'Swing Jazz', pieceCount: '2' }
                ]
            }
        }],
        ['Grace', {
            name: 'Grace',
            imageUrl: 'assets/zzz/character/ZZZ_Grace.jpg',
            element: 'Electric',
            role: 'Anomaly',
            rarity: 'S',
            build: {
                weapon: { name: 'Fusion Compiler' },
                sets: [
                    { name: 'Thunder Metal', pieceCount: '4' },
                    { name: 'Freedom Blues', pieceCount: '2' }
                ]
            }
        }],
        ['Koleda', {
            name: 'Koleda',
            imageUrl: 'assets/zzz/character/ZZZ_Koleda.jpg',
            element: 'Fire',
            role: 'Stun',
            rarity: 'S',
            build: {
                weapon: { name: 'Hellfire Gears' },
                // sets: [
                //     { name: 'Shockstar Disco', pieceCount: '4' }
                // ]
            }
        }],
        ['Soldier 11', {
            name: 'Soldier 11',
            imageUrl: 'assets/zzz/character/ZZZ_Soldier11.jpg',
            element: 'Fire',
            role: 'Attack',
            rarity: 'S',
            build: {
                weapon: { name: 'Starlight Engine' }
            }
        }],
        ['Lucy', {
            name: 'Lucy',
            imageUrl: 'assets/zzz/character/ZZZ_Lucy.jpg',
            element: 'Fire',
            role: 'Support',
            rarity: 'A',
            build: {
                weapon: { name: 'Kaboom the Cannon' },
                // sets: [
                //     { name: 'Hormone Punk', pieceCount: '4' }
                // ]
            }
        }],
        ['Zhu Yuan', {
            name: 'Zhu Yuan',
            imageUrl: 'assets/zzz/character/ZZZ_ZhuYuan.jpg',
            element: 'Ether',
            role: 'Attack',
            rarity: 'S',
            build: {
                weapon: { name: 'Riot Suppressor Mark VI' },
                sets: [
                    { name: 'Chaotic Metal', pieceCount: '4' },
                    { name: 'Woodpecker Electro', pieceCount: '2' },
                ]
            }
        }],
        ['Nicole', {
            name: 'Nicole',
            imageUrl: 'assets/zzz/character/ZZZ_Nicole.jpg',
            element: 'Ether',
            role: 'Support',
            rarity: 'A',
            build: {
                weapon: { name: 'The Vault' },
                sets: [
                    { name: 'Swing Jazz', pieceCount: '4' },
                    { name: 'Freedom Blues', pieceCount: '2'}
                ]
            }
        }],
    ]),

    HI3Characters: new Map([
        ['Kiana (HoFi)', {
            name: 'Kiana (HoFi)',
            imageUrl: 'assets/hi3/character/HI3_Kiana_HoFi.png',
            element: 'Fire',
            rarity: 'S'
        }],
        ['Kiana (HoF)', {
            name: 'Kiana (HoF)',
            imageUrl: 'assets/hi3/character/HI3_Kiana_HoF.png',
            element: 'Fire',
            rarity: 'S'
        }],
        ['Mei (HoO)', {
            name: 'Mei (HoO)',
            imageUrl: 'assets/hi3/character/HI3_Mei_HoO.png',
            element: 'Lightning',
            rarity: 'S'
        }],
        ['Mei (HoT)', {
            name: 'Mei (HoT)',
            imageUrl: 'assets/hi3/character/HI3_Mei_HoT.png',
            element: 'Lightning',
            rarity: 'S'
        }],
        ['Bronya (HoT)', {
            name: 'Bronya (HoT)',
            imageUrl: 'assets/hi3/character/HI3_Bronya_HoT.png',
            element: 'Ice',
            rarity: 'S'
        }],
        ['Bronya (HoR)', {
            name: 'Bronya (HoR)',
            imageUrl: 'assets/hi3/character/HI3_Bronya_HoR.png',
            element: 'Ice',
            rarity: 'S'
        }],
        ['Elysia', {
            name: 'Elysia',
            imageUrl: 'assets/hi3/character/HI3_Elysia.png',
            element: 'Ice',
            rarity: 'S'
        }],
        ['Aponia', {
            name: 'Aponia',
            imageUrl: 'assets/hi3/character/HI3_Aponia.png',
            element: 'Lightning',
            rarity: 'S'
        }],
        ['Eden', {
            name: 'Eden',
            imageUrl: 'assets/hi3/character/HI3_Eden.png',
            element: 'Lightning',
            rarity: 'A'
        }],
        ['Lunar Vow', {
            name: 'Lunar Vow',
            imageUrl: 'assets/hi3/character/HI3_LunarVow.png',
            element: 'Lightning',
            rarity: 'S'
        }],
        ['Durandal', {
            name: 'Durandal',
            imageUrl: 'assets/hi3/character/HI3_Durandal.png',
            element: 'Physical',
            rarity: 'S'
        }],
        ['Lantern', {
            name: 'Lantern',
            imageUrl: 'assets/hi3/character/HI3_Lantern.png',
            element: 'Fire',
            rarity: 'S'
        }],
        ['Ai', {
            name: 'Ai',
            imageUrl: 'assets/hi3/character/HI3_Ai.png',
            element: 'Fire',
            rarity: 'A'
        }],
        ['Fu Hua (HoS)', {
            name: 'Fu Hua (HoS)',
            imageUrl: 'assets/hi3/character/HI3_FuHua_HoS.png',
            element: 'Physical',
            rarity: 'S'
        }],
        ['Carole', {
            name: 'Carole',
            imageUrl: 'assets/hi3/character/HI3_Carole.png',
            element: 'Physical',
            rarity: 'A'
        }],
    ]),

    TK8Characters: new Map([
        ['Reina', {
            name: 'Reina',
            imageUrl: 'assets/tk8/character/TK8_Reina.png',
            combos: [
                ['X', space, 'X', space, 'Y'],
                ['X', space, 'Y', space, 'Y'],
                ['Y', space, 'Y', space, 'X'],
                ['YX'],
                ['DR', space, 'X', space, 'Y'],
            ]
        }]
    ])
}
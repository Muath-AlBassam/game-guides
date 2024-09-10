
class BuildsRepository {
    static getCharacterBuild(gameCode, characterName) {
        let data;
        switch (gameCode) {
            case Constants.games.GI:
                data = this.data.GIBuilds.get(characterName);
                break;
            case Constants.games.HSR:
                data = this.data.HSRBuilds.get(characterName);
                break;
            case Constants.games.ZZZ:
                data = this.data.ZZZBuilds.get(characterName);
                break;
        }
        return data;
    }

    static data = {
        GIBuilds: new Map([
            ['Arlecchino', {
                weapon: { name: 'Crimson Moon\'s Semblance' },
                sets: [
                    { name: 'Gladiator\'s Finale', pieceCount: '4' }
                ]
            }],
            ['Chiori', {
                weapon: { name: 'Uraku Misugiri' },
                sets: [
                    { name: 'Husk of Opulent Dreams', pieceCount: '4' }
                ]
            }],
            ['Bennett', {
                weapon: { name: 'Skyward Blade' },
                sets: [
                    { name: 'Noblesse Oblige', pieceCount: '4' }
                ]
            }],
            ['Diluc', {
                weapon: { name: 'Wolf\'s Gravestone' },
                sets: [
                    { name: 'Crimson Witch of Flames', pieceCount: '4' }
                ]
            }],
            ['Eula', {
                weapon: { name: 'Song of Broken Pines' },
                sets: [
                    { name: 'Bloodstained Chivalry', pieceCount: '2' },
                    { name: 'Pale Flame', pieceCount: '2' }
                ]
            }],
            ['Faruzan', {
                weapon: { name: 'Favonius Warbow' },
                sets: [
                    { name: 'Emblem of Severed Fate', pieceCount: '4' }
                ]
            }],
            ['Fischl', {
                weapon: { name: 'Mitternachts Waltz' },
                sets: [
                    { name: 'Golden Troupe', pieceCount: '4' }
                ]
            }],
            ['Furina', {
                weapon: { name: 'Splendor of Tranquil Waters' },
                sets: [
                    { name: 'Golden Troupe', pieceCount: '4' }
                ]
            }],
            ['Ayaka', {
                weapon: { name: 'Mistsplitter Reforged' },
                sets: [
                    { name: 'Blizzard Strayer', pieceCount: '4' }
                ]
            }],
            ['Kazuha', {
                weapon: { name: 'Xiphos\' Moonlight' },
                sets: [
                    { name: 'Viridescent Venerer', pieceCount: '4' }
                ]
            }],
            ['Hu Tao', {
                weapon: { name: 'Staff of Homa' },
                sets: [
                    { name: 'Crimson Witch of Flames', pieceCount: '4' }
                ]
            }],
            ['Gorou', {
                weapon: { name: 'Favonius Warbow' },
                sets: [
                    { name: 'Emblem of Severed Fate', pieceCount: '2' }
                ]
            }],
            ['Ganyu', {
                weapon: { name: 'Amos\' Bow' },
                sets: [
                    { name: 'Blizzard Strayer', pieceCount: '4' }
                ]
            }],
            ['Kirara', {
                weapon: { name: 'Sacrificial Sword' },
                sets: [
                    { name: 'Tenacity of the Millelith', pieceCount: '2' },
                    { name: 'Vourukasha\'s Glow', pieceCount: '2' }
                ]
            }],
            ['Kuki Shinobu', {
                weapon: { name: 'Iron Sting' },
                sets: [
                    { name: 'Flower of Paradise Lost', pieceCount: '4' }
                ]
            }],
            ['Lynette', {
                weapon: { name: 'The Black Sword' },
                sets: [
                    { name: 'Viridescent Venerer', pieceCount: '2' },
                    { name: 'Echoes of an Offering', pieceCount: '2' }
                ]
            }],
            ['Nilou', {
                weapon: { name: 'Key of Khaj-Nisut' },
                sets: [
                    { name: 'Tenacity of the Millelith', pieceCount: '2' },
                    { name: 'Vourukasha\'s Glow', pieceCount: '2' }
                ]
            }],
            ['Neuvillette', {
                weapon: { name: 'Tome of the Eternal Flow' },
                sets: [
                    { name: 'Marechaussee Hunter', pieceCount: '4' }
                ]
            }],
            ['Navia', {
                weapon: { name: 'Verdict' },
                sets: [
                    { name: 'Nighttime Whispers in the Echoing Woods', pieceCount: '4' }
                ]
            }],
            ['Nahida', {
                weapon: { name: 'A Thousand Floating Dreams' },
                sets: [
                    { name: 'Deepwood Memories', pieceCount: '4' }
                ]
            }],
            ['Mika', {
                weapon: { name: 'Favonius Lance' },
                sets: [
                    { name: 'Noblesse Oblige', pieceCount: '2' },
                    { name: 'Emblem of Severed Fate', pieceCount: '2' }
                ]
            }],
            ['Raiden Shogun', {
                weapon: { name: 'Engulfing Lightning' },
                sets: [
                    { name: 'Emblem of Severed Fate', pieceCount: '4' }
                ]
            }],
            ['Kokomi', {
                weapon: { name: 'Jadefall\'s Splendor' },
                sets: [
                    { name: 'Ocean-Hued Clam', pieceCount: '4' }
                ]
            }],
            ['Wriothesley', {
                weapon: { name: 'Cashflow Supervision' },
                sets: [
                    { name: 'Marechaussee Hunter', pieceCount: '4' }
                ]
            }],
            ['Xianyun', {
                weapon: { name: 'Oathsworn Eye' },
                sets: [
                    { name: 'Gladiator\'s Finale', pieceCount: '2' },
                    { name: 'Nighttime Whispers in the Echoing Woods', pieceCount: '2' },
                ]
            }],
            ['Xiao', {
                weapon: { name: 'Primordial Jade Winged-Spear' },
                sets: [
                    { name: 'Gladiator\'s Finale', pieceCount: '2' },
                    { name: 'Viridescent Venerer', pieceCount: '2' },
                ]
            }],
            ['Xingqiu', {
                weapon: { name: 'Sacrificial Sword' },
                sets: [
                    { name: 'Emblem of Severed Fate', pieceCount: '4' }
                ]
            }],
            ['Yae Miko', {
                weapon: { name: 'Kagura\'s Verity' },
                sets: [
                    { name: 'Gladiator\'s Finale', pieceCount: '2' },
                    { name: 'Shimenawa\'s Reminiscence', pieceCount: '2' },
                ]
            }],
            ['Zhongli', {
                weapon: { name: 'Black Tassel' },
                sets: [
                    { name: 'Tenacity of the Millelith', pieceCount: '4' }
                ]
            }],
            ['Yun Jin', {
                weapon: { name: 'Favonius Lance' },
                sets: [
                    { name: 'Husk of Opulent Dreams', pieceCount: '2' }
                ]
            }],
            ['Yelan', {
                weapon: { name: 'Favonius Warbow' },
                sets: [
                    { name: 'Tenacity of the Millelith', pieceCount: '2' },
                    { name: 'Heart of Depth', pieceCount: '2' },
                ]
            }],
            ['Clorinde', {
                weapon: { name: 'Absolution' },
                sets: [
                    { name: 'Fragment of Harmonic Whimsy', pieceCount: '4' }
                ]
            }],
            ['Chevreuse', {
                weapon: { name: 'Dialogues of the Desert Sages' },
                sets: [
                    { name: 'Emblem of Severed Fate', pieceCount: '2' },
                    { name: 'Tenacity of the Millelith', pieceCount: '2' },
                ]
            }],
            ['Xianling', {
                weapon: { name: 'The Catch' },
                sets: [
                    { name: 'Noblesse Oblige', pieceCount: '2' },
                    { name: 'Emblem of Severed Fate', pieceCount: '2' }
                ]
            }],
            ['Emilie', {
                weapon: { name: 'Lumidouce Elegy' },
                sets: [
                    { name: 'Unfinished Reverie', pieceCount: '4' }
                ]
            }]
        ]),

        HSRBuilds: new Map([
            ['MC (Harmony)', {
                weapon: { name: 'Memories of the Past' },
                sets: [
                    { name: 'Watchmaker, Master of Dream Machinations', pieceCount: '4' },
                    { name: 'Talia: Kingdom of Banditry', pieceCount: '2' }
                ]
            }],
            ['Lynx', {
                weapon: { name: 'Warmth Shortens Cold Nights' },
                sets: [
                    { name: 'Longevous Disciple', pieceCount: '2' },
                    { name: 'Passerby of Wandering Cloud', pieceCount: '2' },
                    { name: 'Fleet of the Ageless', pieceCount: '2' }
                ]
            }],
            ['Clara', {
                weapon: { name: 'Something Irreplaceable' },
                sets: [
                    { name: 'Champion of Streetwise Boxing', pieceCount: '4' },
                    { name: 'Inert Salsotto', pieceCount: '2' }
                ]
            }],
            ['Tingyun', {
                weapon: { name: 'Carve the Moon, Weave the Clouds' },
                sets: [
                    { name: 'Messenger Traversing Hackerspace', pieceCount: '2' },
                    { name: 'Musketeer of Wild Wheat', pieceCount: '2' },
                    { name: 'Fleet of the Ageless', pieceCount: '2' }
                ]
            }],
            ['Ruan Mei', {
                weapon: { name: 'Past Self in Mirror' },
                sets: [
                    { name: 'Messenger Traversing Hackerspace', pieceCount: '2' },
                    { name: 'Thief of Shooting Meteor', pieceCount: '2' },
                    { name: 'Talia: Kingdom of Banditry', pieceCount: '2' }
                ]
            }],
            ['Acheron', {
                weapon: { name: 'Along the Passing Shore' },
                sets: [
                    { name: 'Pioneer Diver of Dead Waters', pieceCount: '4' },
                    { name: 'Izumo Gensei and Takama Divine Realm', pieceCount: '2' }
                ]
            }],
            ['Dang Heng · IL', {
                weapon: { name: 'Brighter Than the Sun' },
                sets: [
                    { name: 'Musketeer of Wild Wheat', pieceCount: '2' },
                    { name: 'Wastelander of Banditry Desert', pieceCount: '2' },
                    { name: 'Rutilant Arena', pieceCount: '2' }
                ]
            }],
            ['Jingliu', {
                weapon: { name: 'I Shall Be My Own Sword' },
                sets: [
                    { name: 'Hunter of Glacial Forest', pieceCount: '4' },
                    { name: 'Rutilant Arena', pieceCount: '2' }
                ]
            }],
            ['Kafka', {
                weapon: { name: 'Patience Is All You Need' },
                sets: [
                    { name: 'Prisoner in Deep Confinement', pieceCount: '4' },
                    { name: 'Firmament Frontline: Glamoth', pieceCount: '2' }
                ]
            }],
            ['Sparkle', {
                weapon: { name: 'Earthly Escapade' },
                sets: [
                    { name: 'Messenger Traversing Hackerspace', pieceCount: '4' },
                    { name: 'Penacony, Land of the Dreams', pieceCount: '2' }
                ]
            }],
            ['Fu Xuan', {
                weapon: { name: 'She Already Shut Her Eyes' },
                sets: [
                    { name: 'Longevous Disciple', pieceCount: '2' },
                    { name: 'Guard of Wuthering Snow', pieceCount: '2' },
                    { name: 'Fleet of the Ageless', pieceCount: '2' }
                ]
            }],
            ['Dr. Ratio', {
                weapon: { name: 'Baptism of Pure Thought' },
                sets: [
                    { name: 'Prisoner in Deep Confinement', pieceCount: '2' },
                    { name: 'Wastelander of Banditry Desert', pieceCount: '2' },
                    { name: 'Inert Salsotto', pieceCount: '2' }
                ]
            }],
            ['Seele', {
                weapon: { name: 'In the Night' },
                sets: [
                    { name: 'Genius of Brilliant Stars', pieceCount: '4' },
                    { name: 'Inert Salsotto', pieceCount: '2' }
                ]
            }],
            ['Black Swan', {
                weapon: { name: 'Reforged Remembrance' },
                sets: [
                    { name: 'Prisoner in Deep Confinement', pieceCount: '4' },
                    { name: 'Pan-Cosmic Commercial Enterprise', pieceCount: '2' }
                ]
            }],
            ['Bronya', {
                weapon: { name: 'But the Battle Isn\'t Over' },
                sets: [
                    { name: 'Musketeer of Wild Wheat', pieceCount: '2' },
                    { name: 'Thief of Shooting Meteor', pieceCount: '2' },
                    { name: 'Fleet of the Ageless', pieceCount: '2' }
                ]
            }],
            ['Silver Wolf', {
                weapon: { name: 'Before the Tutorial Mission Starts' },
                sets: [
                    { name: 'Messenger Traversing Hackerspace', pieceCount: '2' },
                    { name: 'Knight of Purity Palace', pieceCount: '2' },
                    { name: 'Pan-Cosmic Commercial Enterprise', pieceCount: '2' }
                ]
            }],
            ['Huohuo', {
                weapon: { name: 'Hey, Over Here' },
                sets: [
                    { name: 'Messenger Traversing Hackerspace', pieceCount: '2' },
                    { name: 'Passerby of Wandering Cloud', pieceCount: '2' },
                    { name: 'Fleet of the Ageless', pieceCount: '2' }
                ]
            }],
            ['Luocha', {
                weapon: { name: 'Perfect Timing' },
                sets: [
                    { name: 'Passerby of Wandering Cloud', pieceCount: '2' },
                    { name: 'Musketeer of Wild Wheat', pieceCount: '2' },
                    { name: 'Space Sealing Station', pieceCount: '2' }
                ]
            }],
            ['Blade', {
                weapon: { name: 'The Unreachable Side' },
                sets: [
                    { name: 'Longevous Disciple', pieceCount: '4' },
                    { name: 'Rutilant Arena', pieceCount: '2' }
                ]
            }],
            ['Xueyi', {
                weapon: { name: 'Brighter Than the Sun' },
                sets: [
                    { name: 'Genius of Brilliant Stars', pieceCount: '4' },
                    { name: 'Inert Salsotto', pieceCount: '2' }
                ]
            }],
            ['Pela', {
                weapon: { name: 'Resolution Shines As Pearls of Sweat' },
                sets: [
                    { name: 'Messenger Traversing Hackerspace', pieceCount: '2' },
                    { name: 'Longevous Disciple', pieceCount: '2' },
                    { name: 'Belobog of the Architects', pieceCount: '2' }
                ]
            }],
            ['Welt', {
                weapon: { name: 'In the Name of the World' },
                sets: [
                    { name: 'Pioneer Diver of Dead Waters', pieceCount: '4' },
                    { name: 'Pan-Cosmic Commercial Enterprise', pieceCount: '2' }
                ]
            }],
            ['Topaz', {
                weapon: { name: 'Worrisome, Blissful' },
                sets: [
                    { name: 'The Ashblazing Grand Duke', pieceCount: '4' },
                    { name: 'Inert Salsotto', pieceCount: '2' }
                ]
            }],
            ['Gepard', {
                weapon: { name: 'Moment of Victory' },
                sets: [
                    { name: 'Knight of Purity Palace', pieceCount: '4' },
                    { name: 'Belobog of the Architects', pieceCount: '2' }
                ]
            }],
            ['Robin', {
                weapon: { name: 'Flowing Nightglow' },
                sets: [
                    { name: 'Prisoner in Deep Confinement', pieceCount: '2' },
                    { name: 'Musketeer of Wild Wheat', pieceCount: '2' },
                    { name: 'Fleet of the Ageless', pieceCount: '2' }
                ]
            }],
            ['Hanya', {
                weapon: { name: 'Dance! Dance! Dance!' },
                sets: [
                    { name: 'Messenger Traversing Hackerspace', pieceCount: '4' },
                    { name: 'Penacony, Land of the Dreams', pieceCount: '2' }
                ]
            }],
            ['Boothill', {
                weapon: { name: 'Sailing Towards A Second Life' },
                sets: [
                    { name: 'Thief of Shooting Meteor', pieceCount: '4' },
                    { name: 'Talia: Kingdom of Banditry', pieceCount: '2' }
                ]
            }],
            ['Gallagher', {
                weapon: { name: 'What Is Real?' },
                sets: [
                    { name: 'Messenger Traversing Hackerspace', pieceCount: '2' },
                    { name: 'Passerby of Wandering Cloud', pieceCount: '2' },
                    { name: 'Broken Keel', pieceCount: '2' }
                ]
            }],
            ['Firefly', {
                weapon: { name: 'Whereabouts Should Dreams Rest' },
                sets: [
                    { name: 'Iron Cavalry Against the Scourge', pieceCount: '4' },
                    { name: 'Forge of the Kalpagni Lantern', pieceCount: '2' }
                ]
            }],
            ['Jade', {
                weapon: { name: 'Yet Hope Is Priceless' },
                sets: [
                    { name: 'The Wind-Soaring Valorous', pieceCount: '4' },
                    { name: 'Duran, Dynasty of Running Wolves', pieceCount: '2' }
                ]
            }],
            ['Herta', {
                weapon: { name: 'Night on the Milky Way' },
                sets: [
                    { name: 'Hunter of Glacial Forest', pieceCount: '2' },
                    { name: 'The Ashblazing Grand Duke', pieceCount: '2' },
                    { name: 'Inert Salsotto', pieceCount: '2' }
                ]
            }],
            ['Yunli', {
                weapon: { name: 'Dance at Sunset' },
                sets: [
                    { name: 'The Wind-Soaring Valorous', pieceCount: '4' },
                    { name: 'Duran, Dynasty of Running Wolves', pieceCount: '2' }
                ]
            }],
            ['Feixiao', {
                weapon: { name: 'I Venture Forth to Hunt' },
                sets: [
                    { name: 'The Wind-Soaring Valorous', pieceCount: '4' },
                    { name: 'Duran, Dynasty of Running Wolves', pieceCount: '2' }
                ]
            }],
        ]),

        ZZZBuilds: new Map([
            ['Ellen', {
                weapon: { name: 'Deep Sea Visitor' },
                sets: [
                    { name: 'Polar Metal', pieceCount: '4' },
                    { name: 'Woodpecker Electro', pieceCount: '2' },
                ]
            }],
            ['Soukaku', {
                weapon: { name: 'Bashful Demon' },
                sets: [
                    { name: 'Swing Jazz', pieceCount: '4' },
                    { name: 'Hormone Punk', pieceCount: '2' }
                ]
            }],
            ['Anby', {
                weapon: { name: 'Demara Battery Mark II' },
                sets: [
                    { name: 'Shockstar Disco', pieceCount: '4' },
                    { name: 'Swing Jazz', pieceCount: '2' }
                ]
            }],
            ['Lycaon', {
                weapon: { name: 'The Restrained' },
                sets: [
                    { name: 'Shockstar Disco', pieceCount: '4' },
                    { name: 'Swing Jazz', pieceCount: '2' }
                ]
            }],
            ['Grace', {
                weapon: { name: 'Fusion Compiler' },
                sets: [
                    { name: 'Thunder Metal', pieceCount: '4' },
                    { name: 'Freedom Blues', pieceCount: '2' }
                ]
            }],
            ['Koleda', {
                weapon: { name: 'Hellfire Gears' },
                // sets: [
                //     { name: 'Shockstar Disco', pieceCount: '4' }
                // ]
            }],
            ['Soldier 11', {
                weapon: { name: 'The Brimstone' }
            }],
            ['Lucy', {
                weapon: { name: 'Kaboom the Cannon' },
                sets: [
                    { name: 'Swing Jazz', pieceCount: '2' },
                    { name: 'Hormone Punk', pieceCount: '2' }
                ]
            }],
            ['Zhu Yuan', {
                weapon: { name: 'Riot Suppressor Mark VI' },
                sets: [
                    { name: 'Chaotic Metal', pieceCount: '4' },
                    { name: 'Woodpecker Electro', pieceCount: '2' },
                ]
            }],
            ['Nicole', {
                weapon: { name: 'The Vault' },
                sets: [
                    { name: 'Swing Jazz', pieceCount: '4' },
                    { name: 'Freedom Blues', pieceCount: '2' }
                ]
            }],
            ['Qingyi', {
                weapon: { name: 'The Restrained' },
                sets: [
                    { name: 'Shockstar Disco', pieceCount: '4' },
                    { name: 'Swing Jazz', pieceCount: '2' }
                ]
            }],
            ['Jane', {
                weapon: { name: 'Sharpened Stinger' },
                sets: [
                    { name: 'Fanged Metal', pieceCount: '4' },
                    { name: 'Freedom Blues', pieceCount: '2' }
                ]
            }],
            ['Seth', {
                weapon: { name: 'Peacekeeper - Specialized' },
                sets: [
                    { name: 'Swing Jazz', pieceCount: '4' },
                    { name: 'Hormone Punk', pieceCount: '2' }
                ]
            }],
        ]),
    }
}
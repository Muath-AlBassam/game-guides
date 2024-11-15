
class CharactersRepository {
    static getAllCharacters(gameCode) {
        switch (gameCode) {
            case Constants.games.GI:
                return this.data.GICharacters;
            case Constants.games.HSR:
                return this.data.HSRCharacters;
            case Constants.games.ZZZ:
                return this.data.ZZZCharacters;
            case Constants.games.HI3:
                return this.data.HI3Characters;
            case Constants.games.TK8:
                return this.data.TK8Characters;
            default:
                return new Map([]);
        }
    }
    
    static getCharacterMetadata(gameCode, characterName) {
        let data = this.getAllCharacters(gameCode).get(characterName)
        return data ?? { name: characterName }
    }
    
    static data = {
        GICharacters: new Map([
            ['Arlecchino', {
                name: 'Arlecchino',
                imageUrl: 'assets/images/gi/character/GI_Arlecchino.png',
                element: 'Pyro',
                rarity: '5',
            }],
            ['Chiori', {
                name: 'Chiori',
                imageUrl: 'assets/images/gi/character/GI_Chiori.png',
                element: 'Geo',
                rarity: '5',
            }],
            ['Bennett', {
                name: 'Bennett',
                imageUrl: 'assets/images/gi/character/GI_Bennett.png',
                element: 'Pyro',
                rarity: '4',
            }],
            ['Diluc', {
                name: 'Diluc',
                imageUrl: 'assets/images/gi/character/GI_Diluc.png',
                element: 'Pyro',
                rarity: '5',
            }],
            ['Eula', {
                name: 'Eula',
                imageUrl: 'assets/images/gi/character/GI_Eula.png',
                element: 'Cryo',
                rarity: '5',
            }],
            ['Faruzan', {
                name: 'Faruzan',
                imageUrl: 'assets/images/gi/character/GI_Faruzan.png',
                element: 'Anemo',
                rarity: '4',
            }],
            ['Fischl', {
                name: 'Fischl',
                imageUrl: 'assets/images/gi/character/GI_Fischl.png',
                element: 'Electro',
                rarity: '4',
            }],
            ['Furina', {
                name: 'Furina',
                imageUrl: 'assets/images/gi/character/GI_Furina.png',
                element: 'Hydro',
                rarity: '5',
            }],
            ['Ayaka', {
                name: 'Ayaka',
                imageUrl: 'assets/images/gi/character/GI_Ayaka.png',
                element: 'Cryo',
                rarity: '5',
            }],
            ['Kazuha', {
                name: 'Kazuha',
                imageUrl: 'assets/images/gi/character/GI_Kazuha.png',
                element: 'Anemo',
                rarity: '5',
            }],
            ['Hu Tao', {
                name: 'Hu Tao',
                imageUrl: 'assets/images/gi/character/GI_HuTao.png',
                element: 'Pyro',
                rarity: '5',
            }],
            ['Gorou', {
                name: 'Gorou',
                imageUrl: 'assets/images/gi/character/GI_Gorou.png',
                element: 'Geo',
                rarity: '4',
            }],
            ['Ganyu', {
                name: 'Ganyu',
                imageUrl: 'assets/images/gi/character/GI_Ganyu.png',
                element: 'Cryo',
                rarity: '5',
            }],
            ['Kirara', {
                name: 'Kirara',
                imageUrl: 'assets/images/gi/character/GI_Kirara.png',
                element: 'Dendro',
                rarity: '4',
            }],
            ['Kuki Shinobu', {
                name: 'Kuki Shinobu',
                imageUrl: 'assets/images/gi/character/GI_KukiShinobu.png',
                element: 'Electro',
                rarity: '4',
            }],
            ['Lynette', {
                name: 'Lynette',
                imageUrl: 'assets/images/gi/character/GI_Lynette.png',
                element: 'Anemo',
                rarity: '4',
            }],
            ['Nilou', {
                name: 'Nilou',
                imageUrl: 'assets/images/gi/character/GI_Nilou.png',
                element: 'Hydro',
                rarity:  '5',
            }],
            ['Neuvillette', {
                name: 'Neuvillette',
                imageUrl: 'assets/images/gi/character/GI_Neuvillette.png.png',
                element: 'Hydro',
                rarity: '5',
            }],
            ['Navia', {
                name: 'Navia',
                imageUrl: 'assets/images/gi/character/GI_Navia.png',
                element: 'Geo',
                rarity: '5',
            }],
            ['Nahida', {
                name: 'Nahida',
                imageUrl: 'assets/images/gi/character/GI_Nahida.png',
                element: 'Dendro',
                rarity: '5',
            }],
            ['Mika', {
                name: 'Mika',
                imageUrl: 'assets/images/gi/character/GI_Mika.png',
                element: 'Cryo',
                rarity: '4',
            }],
            ['Raiden Shogun', {
                name: 'Raiden Shogun',
                imageUrl: 'assets/images/gi/character/GI_RaidenShogun.png',
                element: 'Electro',
                rarity: '5',
            }],
            ['Kokomi', {
                name: 'Kokomi',
                imageUrl: 'assets/images/gi/character/GI_Kokomi.png',
                element: 'Hydro',
                rarity: '5',
            }],
            ['Wriothesley', {
                name: 'Wriothesley',
                imageUrl: 'assets/images/gi/character/GI_Wriothesley.png.png',
                element: 'Cryo',
                rarity: '5',
            }],
            ['Xianyun', {
                name: 'Xianyun',
                imageUrl: 'assets/images/gi/character/GI_Xianyun.png',
                element: 'Anemo',
                rarity: '5',
            }],
            ['Xiao', {
                name: 'Xiao',
                imageUrl: 'assets/images/gi/character/GI_Xiao.png',
                element: 'Anemo',
                rarity: '5',
            }],
            ['Xingqiu', {
                name: 'Xingqiu',
                imageUrl: 'assets/images/gi/character/GI_Xingqiu.png',
                element: 'Hydro',
                rarity: '4',
            }],
            ['Yae Miko', {
                name: 'Yae Miko',
                imageUrl: 'assets/images/gi/character/GI_YaeMiko.png',
                element: 'Electro',
                rarity: '5',
            }],
            ['Zhongli', {
                name: 'Zhongli',
                imageUrl: 'assets/images/gi/character/GI_Zhongli.png',
                element: 'Geo',
                rarity: '5',
            }],
            ['Yun Jin', {
                name: 'Yun Jin',
                imageUrl: 'assets/images/gi/character/GI_YunJin.png',
                element: 'Geo',
                rarity: '4',
            }],
            ['Yelan', {
                name: 'Yelan',
                imageUrl: 'assets/images/gi/character/GI_Yelan.png',
                element: 'Hydro',
                rarity: '5',
            }],
            ['Clorinde', {
                name: 'Clorinde',
                imageUrl: 'assets/images/gi/character/GI_Clorinde.png',
                element: 'Electro',
                rarity: '5',
            }],
            ['Chevreuse', {
                name: 'Chevreuse',
                imageUrl: 'assets/images/gi/character/GI_Chevreuse.png',
                element: 'Pyro',
                rarity: '4',
            }],
            ['Xianling', {
                name: 'Xianling',
                imageUrl: 'assets/images/gi/character/GI_Xianling.png',
                element: 'Pyro',
                rarity: '4',
            }],
            ['Emilie', {
                name: 'Emilie',
                imageUrl: 'assets/images/gi/character/GI_Emilie.png',
                element: 'Dendro',
                rarity: '5',
            }],
            ['Dehya', {
                name: 'Dehya',
                imageUrl: 'assets/images/gi/character/GI_Dehya.png',
                element: 'Pyro',
                rarity: '5',
            }],
            ['Mualani', {
                name: 'Mualani',
                imageUrl: 'assets/images/gi/character/GI_Mualani.png',
                element: 'Hydro',
                rarity: '5',
            }],
            ['Kinich', {
                name: 'Kinich',
                imageUrl: 'assets/images/gi/character/GI_Kinich.png',
                element: 'Dendro',
                rarity: '5',
            }],
            ['Thoma', {
                name: 'Thoma',
                imageUrl: 'assets/images/gi/character/GI_Thoma.png',
                element: 'Pyro',
                rarity: '4',
            }],
            ['Xilonen', {
                name: 'Xilonen',
                imageUrl: 'assets/images/gi/character/GI_Xilonen.png',
                element: 'Geo',
                rarity: '5',
            }],
        ]),
    
        HSRCharacters: new Map([
            ['MC (Harmony)', {
                name: 'MC (Harmony)',
                imageUrl: 'assets/images/hsr/character/HSR_MCHarmony.jpg',
                element: 'Imaginary',
                role: 'Harmony',
                rarity: '5',
            }],
            ['Lynx', {
                name: 'Lynx',
                imageUrl: 'assets/images/hsr/character/HSR_Lynx.jpg',
                element: 'Quantum',
                role: 'Abundance',
                rarity: '4',
            }],
            ['Clara', {
                name: 'Clara',
                imageUrl: 'assets/images/hsr/character/HSR_Clara.jpg',
                element: 'Physical',
                role: 'Destruction',
                rarity: '5',
            }],
            ['Tingyun', {
                name: 'Tingyun',
                imageUrl: 'assets/images/hsr/character/HSR_Tingyun.jpg',
                element: 'Lightning',
                role: 'Harmony',
                rarity: '4',
            }],
            ['Ruan Mei', {
                name: 'Ruan Mei',
                imageUrl: 'assets/images/hsr/character/HSR_RuanMei.jpg',
                element: 'Ice',
                role: 'Harmony',
                rarity: '5',
            }],
            ['Acheron', {
                name: 'Acheron',
                imageUrl: 'assets/images/hsr/character/HSR_Acheron.jpg',
                element: 'Lightning',
                role: 'Nihility',
                rarity: '5',
            }],
            ['Dang Heng · IL', {
                name: 'Dang Heng · IL',
                imageUrl: 'assets/images/hsr/character/HSR_DanHengIL.jpg',
                element: 'Imaginary',
                role: 'Destruction',
                rarity: '5',
            }],
            ['Jingliu', {
                name: 'Jingliu',
                imageUrl: 'assets/images/hsr/character/HSR_Jingliu.jpg',
                element: 'Ice',
                role: 'Destruction',
                rarity: '5',
            }],
            ['Kafka', {
                name: 'Kafka',
                imageUrl: 'assets/images/hsr/character/HSR_Kafka.jpg',
                element: 'Lightning',
                role: 'Nihility',
                rarity: '5',
            }],
            ['Sparkle', {
                name: 'Sparkle',
                imageUrl: 'assets/images/hsr/character/HSR_Sparkle.jpg',
                element: 'Quantum',
                role: 'Harmony',
                rarity: '5',
            }],
            ['Fu Xuan', {
                name: 'Fu Xuan',
                imageUrl: 'assets/images/hsr/character/HSR_FuXuan.jpg',
                element: 'Quantum',
                role: 'Preservation',
                rarity: '5',
            }],
            ['Dr. Ratio', {
                name: 'Dr. Ratio',
                imageUrl: 'assets/images/hsr/character/HSR_DrRatio.jpg',
                element: 'Imaginary',
                role: 'Hunt',
                rarity: '5',
            }],
            ['Seele', {
                name: 'Seele',
                imageUrl: 'assets/images/hsr/character/HSR_Seele.jpg',
                element: 'Quantum',
                role: 'Hunt',
                rarity: '5',
            }],
            ['Black Swan', {
                name: 'Black Swan',
                imageUrl: 'assets/images/hsr/character/HSR_BlackSwan.jpg',
                element: 'Wind',
                role: 'Nihility',
                rarity: '5',
            }],
            ['Bronya', {
                name: 'Bronya',
                imageUrl: 'assets/images/hsr/character/HSR_Bronya.jpg',
                element: 'Wind',
                role: 'Harmony',
                rarity: '5',
            }],
            ['Silver Wolf', {
                name: 'Silver Wolf',
                imageUrl: 'assets/images/hsr/character/HSR_SilverWolf.jpg',
                element: 'Quantum',
                role: 'Nihility',
                rarity: '5',
            }],
            ['Huohuo', {
                name: 'Huohuo',
                imageUrl: 'assets/images/hsr/character/HSR_Huohuo.jpg',
                element: 'Wind',
                role: 'Abundance',
                rarity: '5',
            }],
            ['Luocha', {
                name: 'Luocha',
                imageUrl: 'assets/images/hsr/character/HSR_Luocha.jpg',
                element: 'Imaginary',
                role: 'Abundance',
                rarity: '5',
            }],
            ['Blade', {
                name: 'Blade',
                imageUrl: 'assets/images/hsr/character/HSR_Blade.jpg',
                element: 'Wind',
                role: 'Destruction',
                rarity: '5',
            }],
            ['Xueyi', {
                name: 'Xueyi',
                imageUrl: 'assets/images/hsr/character/HSR_Xueyi.jpg',
                element: 'Quantum',
                role: 'Destruction',
                rarity: '4',
            }],
            ['Pela', {
                name: 'Pela',
                imageUrl: 'assets/images/hsr/character/HSR_Pela.jpg',
                element: 'Ice',
                role: 'Nihility',
                rarity: '4',
            }],
            ['Welt', {
                name: 'Welt',
                imageUrl: 'assets/images/hsr/character/HSR_Welt.jpg',
                element: 'Imaginary',
                role: 'Nihility',
                rarity: '5',
            }],
            ['Topaz', {
                name: 'Topaz',
                imageUrl: 'assets/images/hsr/character/HSR_Topaz.jpg',
                element: 'Fire',
                role: 'Hunt',
                rarity: '5',
            }],
            ['Gepard', {
                name: 'Gepard',
                imageUrl: 'assets/images/hsr/character/HSR_Gepard.jpg',
                element: 'Ice',
                role: 'Preservation',
                rarity: '5',
            }],
            ['Robin', {
                name: 'Robin',
                imageUrl: 'assets/images/hsr/character/HSR_Robin.jpg',
                element: 'Physical',
                role: 'Harmony',
                rarity: '5',
            }],
            ['Hanya', {
                name: 'Hanya',
                imageUrl: 'assets/images/hsr/character/HSR_Hanya.jpg',
                element: 'Physical',
                role: 'Harmony',
                rarity: '4',
            }],
            ['Boothill', {
                name: 'Boothill',
                imageUrl: 'assets/images/hsr/character/HSR_Boothill.jpg',
                element: 'Physical',
                role: 'Hunt',
                rarity: '5',
            }],
            ['Gallagher', {
                name: 'Gallagher',
                imageUrl: 'assets/images/hsr/character/HSR_Gallagher.jpg',
                element: 'Fire',
                role: 'Abundance',
                rarity: '4',
            }],
            ['Firefly', {
                name: 'Firefly',
                imageUrl: 'assets/images/hsr/character/HSR_Firefly.jpg',
                element: 'Fire',
                role: 'Destruction',
                rarity: '5',
            }],
            ['Jade', {
                name: 'Jade',
                imageUrl: 'assets/images/hsr/character/HSR_Jade.jpg',
                element: 'Quantum',
                role: 'Erudition',
                rarity: '5',
            }],
            ['Herta', {
                name: 'Herta',
                imageUrl: 'assets/images/hsr/character/HSR_Herta.jpg',
                element: 'Ice',
                role: 'Erudition',
                rarity: '4',
            }],
            ['Yunli', {
                name: 'Yunli',
                imageUrl: 'assets/images/hsr/character/HSR_Yunli.jpg',
                element: 'Physical',
                role: 'Destruction',
                rarity: '5',
            }],
            ['Feixiao', {
                name: 'Feixiao',
                imageUrl: 'assets/images/hsr/character/HSR_Feixiao.jpg',
                element: 'Wind',
                role: 'Hunt',
                rarity: '5',
            }],
            ['Rappa', {
                name: 'Rappa',
                imageUrl: 'assets/images/hsr/character/HSR_Rappa.jpg',
                element: 'Imaginary',
                role: 'Erudition',
                rarity: '5',
            }],
            ['Aventurine', {
                name: 'Aventurine',
                imageUrl: 'assets/images/hsr/character/HSR_Aventurine.jpg',
                element: 'Imaginary',
                role: 'Preservation',
                rarity: '5',
            }],
        ]),
    
        ZZZCharacters: new Map([
            ['Ellen', {
                name: 'Ellen',
                imageUrl: 'assets/zzz/character/ZZZ_Ellen.jpg',
                element: 'Ice',
                role: 'Attack',
                rarity: 'S',
            }],
            ['Soukaku', {
                name: 'Soukaku',
                imageUrl: 'assets/zzz/character/ZZZ_Soukaku.jpg',
                element: 'Ice',
                role: 'Support',
                rarity: 'A',
            }],
            ['Anby', {
                name: 'Anby',
                imageUrl: 'assets/zzz/character/ZZZ_Anby.jpg',
                element: 'Electric',
                role: 'Stun',
                rarity: 'A',
            }],
            ['Lycaon', {
                name: 'Lycaon',
                imageUrl: 'assets/zzz/character/ZZZ_Lycaon.jpg',
                element: 'Ice',
                role: 'Stun',
                rarity: 'S',
            }],
            ['Grace', {
                name: 'Grace',
                imageUrl: 'assets/zzz/character/ZZZ_Grace.jpg',
                element: 'Electric',
                role: 'Anomaly',
                rarity: 'S',
            }],
            ['Koleda', {
                name: 'Koleda',
                imageUrl: 'assets/zzz/character/ZZZ_Koleda.jpg',
                element: 'Fire',
                role: 'Stun',
                rarity: 'S',
            }],
            ['Soldier 11', {
                name: 'Soldier 11',
                imageUrl: 'assets/zzz/character/ZZZ_Soldier11.jpg',
                element: 'Fire',
                role: 'Attack',
                rarity: 'S',
            }],
            ['Lucy', {
                name: 'Lucy',
                imageUrl: 'assets/zzz/character/ZZZ_Lucy.jpg',
                element: 'Fire',
                role: 'Support',
                rarity: 'A',
            }],
            ['Zhu Yuan', {
                name: 'Zhu Yuan',
                imageUrl: 'assets/zzz/character/ZZZ_ZhuYuan.jpg',
                element: 'Ether',
                role: 'Attack',
                rarity: 'S',
            }],
            ['Nicole', {
                name: 'Nicole',
                imageUrl: 'assets/zzz/character/ZZZ_Nicole.jpg',
                element: 'Ether',
                role: 'Support',
                rarity: 'A',
            }],
            ['Qingyi', {
                name: 'Qingyi',
                imageUrl: 'assets/zzz/character/ZZZ_Qingyi.jpg',
                element: 'Electric',
                role: 'Stun',
                rarity: 'S',
            }],
            ['Jane', {
                name: 'Jane',
                imageUrl: 'assets/zzz/character/ZZZ_Jane.jpg',
                element: 'Physical',
                role: 'Anomaly',
                rarity: 'S',
            }],
            ['Seth', {
                name: 'Seth',
                imageUrl: 'assets/zzz/character/ZZZ_Seth.jpg',
                element: 'Electric',
                role: 'Defence',
                rarity: 'A',
            }],
            ['Caesar', {
                name: 'Caesar',
                imageUrl: 'assets/zzz/character/ZZZ_Caesar.jpg',
                element: 'Physical',
                role: 'Defence',
                rarity: 'S',
            }],
            ['Burnice', {
                name: 'Burnice',
                imageUrl: 'assets/zzz/character/ZZZ_Burnice.jpg',
                element: 'Fire',
                role: 'Anomaly',
                rarity: 'S',
            }],
            ['Yanagi', {
                name: 'Yanagi',
                imageUrl: 'assets/zzz/character/ZZZ_Yanagi.jpg',
                element: 'Electric',
                role: 'Anomaly',
                rarity: 'S',
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
                    ['X', Constants.unicode.space, 'X', Constants.unicode.space, 'Y'],
                    ['X', Constants.unicode.space, 'Y', Constants.unicode.space, 'Y'],
                    ['Y', Constants.unicode.space, 'Y', Constants.unicode.space, 'X'],
                    ['YX'],
                    ['DR', Constants.unicode.space, 'X', Constants.unicode.space, 'Y'],
                ]
            }]
        ])
    }
}
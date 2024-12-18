
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
                role: 'DPS',
                rarity: '5',
            }],
            ['Chiori', {
                name: 'Chiori',
                imageUrl: 'assets/images/gi/character/GI_Chiori.png',
                element: 'Geo',
                role: 'DPS',
                rarity: '5',
            }],
            ['Bennett', {
                name: 'Bennett',
                imageUrl: 'assets/images/gi/character/GI_Bennett.png',
                element: 'Pyro',
                role: 'Support',
                rarity: '4',
            }],
            ['Diluc', {
                name: 'Diluc',
                imageUrl: 'assets/images/gi/character/GI_Diluc.png',
                element: 'Pyro',
                role: 'DPS',
                rarity: '5',
            }],
            ['Eula', {
                name: 'Eula',
                imageUrl: 'assets/images/gi/character/GI_Eula.png',
                element: 'Cryo',
                role: 'DPS',
                rarity: '5',
            }],
            ['Faruzan', {
                name: 'Faruzan',
                imageUrl: 'assets/images/gi/character/GI_Faruzan.png',
                element: 'Anemo',
                role: 'Support',
                rarity: '4',
            }],
            ['Fischl', {
                name: 'Fischl',
                imageUrl: 'assets/images/gi/character/GI_Fischl.png',
                element: 'Electro',
                role: 'Sub DPS',
                rarity: '4',
            }],
            ['Furina', {
                name: 'Furina',
                imageUrl: 'assets/images/gi/character/GI_Furina.png',
                element: 'Hydro',
                role: 'Support',
                rarity: '5',
            }],
            ['Ayaka', {
                name: 'Ayaka',
                imageUrl: 'assets/images/gi/character/GI_Ayaka.png',
                element: 'Cryo',
                role: 'DPS',
                rarity: '5',
            }],
            ['Kazuha', {
                name: 'Kazuha',
                imageUrl: 'assets/images/gi/character/GI_Kazuha.png',
                element: 'Anemo',
                role: 'Support',
                rarity: '5',
            }],
            ['Hu Tao', {
                name: 'Hu Tao',
                imageUrl: 'assets/images/gi/character/GI_HuTao.png',
                element: 'Pyro',
                role: 'DPS',
                rarity: '5',
            }],
            ['Gorou', {
                name: 'Gorou',
                imageUrl: 'assets/images/gi/character/GI_Gorou.png',
                element: 'Geo',
                role: 'Support',
                rarity: '4',
            }],
            ['Ganyu', {
                name: 'Ganyu',
                imageUrl: 'assets/images/gi/character/GI_Ganyu.png',
                element: 'Cryo',
                role: 'DPS',
                rarity: '5',
            }],
            ['Kirara', {
                name: 'Kirara',
                imageUrl: 'assets/images/gi/character/GI_Kirara.png',
                element: 'Dendro',
                // role: 'Support',
                rarity: '4',
            }],
            ['Kuki Shinobu', {
                name: 'Kuki Shinobu',
                imageUrl: 'assets/images/gi/character/GI_KukiShinobu.png',
                element: 'Electro',
                role: 'Sub DPS',
                rarity: '4',
            }],
            ['Lynette', {
                name: 'Lynette',
                imageUrl: 'assets/images/gi/character/GI_Lynette.png',
                element: 'Anemo',
                // role: 'Support',
                rarity: '4',
            }],
            ['Nilou', {
                name: 'Nilou',
                imageUrl: 'assets/images/gi/character/GI_Nilou.png',
                element: 'Hydro',
                role: 'Support',
                rarity:  '5',
            }],
            ['Neuvillette', {
                name: 'Neuvillette',
                imageUrl: 'assets/images/gi/character/GI_Neuvillette.png.png',
                element: 'Hydro',
                role: 'DPS',
                rarity: '5',
            }],
            ['Navia', {
                name: 'Navia',
                imageUrl: 'assets/images/gi/character/GI_Navia.png',
                element: 'Geo',
                role: 'DPS',
                rarity: '5',
            }],
            ['Nahida', {
                name: 'Nahida',
                imageUrl: 'assets/images/gi/character/GI_Nahida.png',
                element: 'Dendro',
                role: 'DPS',
                rarity: '5',
            }],
            ['Mika', {
                name: 'Mika',
                imageUrl: 'assets/images/gi/character/GI_Mika.png',
                element: 'Cryo',
                role: 'Support',
                rarity: '4',
            }],
            ['Raiden Shogun', {
                name: 'Raiden Shogun',
                imageUrl: 'assets/images/gi/character/GI_RaidenShogun.png',
                element: 'Electro',
                role: 'Sub DPS',
                rarity: '5',
            }],
            ['Kokomi', {
                name: 'Kokomi',
                imageUrl: 'assets/images/gi/character/GI_Kokomi.png',
                element: 'Hydro',
                role: 'Healer',
                rarity: '5',
            }],
            ['Wriothesley', {
                name: 'Wriothesley',
                imageUrl: 'assets/images/gi/character/GI_Wriothesley.png.png',
                element: 'Cryo',
                role: 'DPS',
                rarity: '5',
            }],
            ['Xianyun', {
                name: 'Xianyun',
                imageUrl: 'assets/images/gi/character/GI_Xianyun.png',
                element: 'Anemo',
                role: 'Support',
                rarity: '5',
            }],
            ['Xiao', {
                name: 'Xiao',
                imageUrl: 'assets/images/gi/character/GI_Xiao.png',
                element: 'Anemo',
                role: 'DPS',
                rarity: '5',
            }],
            ['Xingqiu', {
                name: 'Xingqiu',
                imageUrl: 'assets/images/gi/character/GI_Xingqiu.png',
                element: 'Hydro',
                role: 'Sub DPS',
                rarity: '4',
            }],
            ['Yae Miko', {
                name: 'Yae Miko',
                imageUrl: 'assets/images/gi/character/GI_YaeMiko.png',
                element: 'Electro',
                role: 'Sub DPS',
                rarity: '5',
            }],
            ['Zhongli', {
                name: 'Zhongli',
                imageUrl: 'assets/images/gi/character/GI_Zhongli.png',
                element: 'Geo',
                role: 'Support',
                rarity: '5',
            }],
            ['Yun Jin', {
                name: 'Yun Jin',
                imageUrl: 'assets/images/gi/character/GI_YunJin.png',
                element: 'Geo',
                role: 'Support',
                rarity: '4',
            }],
            ['Yelan', {
                name: 'Yelan',
                imageUrl: 'assets/images/gi/character/GI_Yelan.png',
                element: 'Hydro',
                role: 'Sub DPS',
                rarity: '5',
            }],
            ['Clorinde', {
                name: 'Clorinde',
                imageUrl: 'assets/images/gi/character/GI_Clorinde.png',
                element: 'Electro',
                role: 'DPS',
                rarity: '5',
            }],
            ['Chevreuse', {
                name: 'Chevreuse',
                imageUrl: 'assets/images/gi/character/GI_Chevreuse.png',
                element: 'Pyro',
                role: 'Support',
                rarity: '4',
            }],
            ['Xianling', {
                name: 'Xianling',
                imageUrl: 'assets/images/gi/character/GI_Xianling.png',
                element: 'Pyro',
                role: 'Sub DPS',
                rarity: '4',
            }],
            ['Emilie', {
                name: 'Emilie',
                imageUrl: 'assets/images/gi/character/GI_Emilie.png',
                element: 'Dendro',
                role: 'Sub DPS',
                rarity: '5',
            }],
            ['Dehya', {
                name: 'Dehya',
                imageUrl: 'assets/images/gi/character/GI_Dehya.png',
                element: 'Pyro',
                role: 'Sub DPS',
                rarity: '5',
            }],
            ['Mualani', {
                name: 'Mualani',
                imageUrl: 'assets/images/gi/character/GI_Mualani.png',
                element: 'Hydro',
                role: 'DPS',
                rarity: '5',
            }],
            ['Kinich', {
                name: 'Kinich',
                imageUrl: 'assets/images/gi/character/GI_Kinich.png',
                element: 'Dendro',
                role: 'DPS',
                rarity: '5',
            }],
            ['Thoma', {
                name: 'Thoma',
                imageUrl: 'assets/images/gi/character/GI_Thoma.png',
                element: 'Pyro',
                role: 'Support',
                rarity: '4',
            }],
            ['Xilonen', {
                name: 'Xilonen',
                imageUrl: 'assets/images/gi/character/GI_Xilonen.png',
                element: 'Geo',
                role: 'Support',
                rarity: '5',
            }],
            ['Chasca', {
                name: 'Chasca',
                imageUrl: 'assets/images/gi/character/GI_Chasca.png',
                element: 'Anemo',
                role: 'DPS',
                rarity: '5',
            }],
            ['Ororon', {
                name: 'Ororon',
                imageUrl: 'assets/images/gi/character/GI_Ororon.png',
                element: 'Electro',
                role: 'Support',
                rarity: '4',
            }],
        ]),
    
        HSRCharacters: new Map([
            ['MC (Harmony)', {
                name: 'MC (Harmony)',
                imageUrl: 'assets/images/hsr/character/HSR_MCHarmony.png',
                element: 'Imaginary',
                role: 'Harmony',
                rarity: '5',
            }],
            ['Lynx', {
                name: 'Lynx',
                imageUrl: 'assets/images/hsr/character/HSR_Lynx.png',
                element: 'Quantum',
                role: 'Abundance',
                rarity: '4',
            }],
            ['Clara', {
                name: 'Clara',
                imageUrl: 'assets/images/hsr/character/HSR_Clara.png',
                element: 'Physical',
                role: 'Destruction',
                rarity: '5',
            }],
            ['Tingyun', {
                name: 'Tingyun',
                imageUrl: 'assets/images/hsr/character/HSR_Tingyun.png',
                element: 'Lightning',
                role: 'Harmony',
                rarity: '4',
            }],
            ['Ruan Mei', {
                name: 'Ruan Mei',
                imageUrl: 'assets/images/hsr/character/HSR_RuanMei.png',
                element: 'Ice',
                role: 'Harmony',
                rarity: '5',
            }],
            ['Acheron', {
                name: 'Acheron',
                imageUrl: 'assets/images/hsr/character/HSR_Acheron.png',
                element: 'Lightning',
                role: 'Nihility',
                rarity: '5',
            }],
            ['Dang Heng · IL', {
                name: 'Dang Heng · IL',
                imageUrl: 'assets/images/hsr/character/HSR_DanHengIL.png',
                element: 'Imaginary',
                role: 'Destruction',
                rarity: '5',
            }],
            ['Jingliu', {
                name: 'Jingliu',
                imageUrl: 'assets/images/hsr/character/HSR_Jingliu.png',
                element: 'Ice',
                role: 'Destruction',
                rarity: '5',
            }],
            ['Kafka', {
                name: 'Kafka',
                imageUrl: 'assets/images/hsr/character/HSR_Kafka.png',
                element: 'Lightning',
                role: 'Nihility',
                rarity: '5',
            }],
            ['Sparkle', {
                name: 'Sparkle',
                imageUrl: 'assets/images/hsr/character/HSR_Sparkle.png',
                element: 'Quantum',
                role: 'Harmony',
                rarity: '5',
            }],
            ['Fu Xuan', {
                name: 'Fu Xuan',
                imageUrl: 'assets/images/hsr/character/HSR_FuXuan.png',
                element: 'Quantum',
                role: 'Preservation',
                rarity: '5',
            }],
            ['Dr. Ratio', {
                name: 'Dr. Ratio',
                imageUrl: 'assets/images/hsr/character/HSR_DrRatio.png',
                element: 'Imaginary',
                role: 'Hunt',
                rarity: '5',
            }],
            ['Seele', {
                name: 'Seele',
                imageUrl: 'assets/images/hsr/character/HSR_Seele.png',
                element: 'Quantum',
                role: 'Hunt',
                rarity: '5',
            }],
            ['Black Swan', {
                name: 'Black Swan',
                imageUrl: 'assets/images/hsr/character/HSR_BlackSwan.png',
                element: 'Wind',
                role: 'Nihility',
                rarity: '5',
            }],
            ['Bronya', {
                name: 'Bronya',
                imageUrl: 'assets/images/hsr/character/HSR_Bronya.png',
                element: 'Wind',
                role: 'Harmony',
                rarity: '5',
            }],
            ['Silver Wolf', {
                name: 'Silver Wolf',
                imageUrl: 'assets/images/hsr/character/HSR_SilverWolf.png',
                element: 'Quantum',
                role: 'Nihility',
                rarity: '5',
            }],
            ['Huohuo', {
                name: 'Huohuo',
                imageUrl: 'assets/images/hsr/character/HSR_Huohuo.png',
                element: 'Wind',
                role: 'Abundance',
                rarity: '5',
            }],
            ['Luocha', {
                name: 'Luocha',
                imageUrl: 'assets/images/hsr/character/HSR_Luocha.png',
                element: 'Imaginary',
                role: 'Abundance',
                rarity: '5',
            }],
            ['Blade', {
                name: 'Blade',
                imageUrl: 'assets/images/hsr/character/HSR_Blade.png',
                element: 'Wind',
                role: 'Destruction',
                rarity: '5',
            }],
            ['Xueyi', {
                name: 'Xueyi',
                imageUrl: 'assets/images/hsr/character/HSR_Xueyi.png',
                element: 'Quantum',
                role: 'Destruction',
                rarity: '4',
            }],
            ['Pela', {
                name: 'Pela',
                imageUrl: 'assets/images/hsr/character/HSR_Pela.png',
                element: 'Ice',
                role: 'Nihility',
                rarity: '4',
            }],
            ['Welt', {
                name: 'Welt',
                imageUrl: 'assets/images/hsr/character/HSR_Welt.png',
                element: 'Imaginary',
                role: 'Nihility',
                rarity: '5',
            }],
            ['Topaz', {
                name: 'Topaz',
                imageUrl: 'assets/images/hsr/character/HSR_Topaz.png',
                element: 'Fire',
                role: 'Hunt',
                rarity: '5',
            }],
            ['Gepard', {
                name: 'Gepard',
                imageUrl: 'assets/images/hsr/character/HSR_Gepard.png',
                element: 'Ice',
                role: 'Preservation',
                rarity: '5',
            }],
            ['Robin', {
                name: 'Robin',
                imageUrl: 'assets/images/hsr/character/HSR_Robin.png',
                element: 'Physical',
                role: 'Harmony',
                rarity: '5',
            }],
            ['Hanya', {
                name: 'Hanya',
                imageUrl: 'assets/images/hsr/character/HSR_Hanya.png',
                element: 'Physical',
                role: 'Harmony',
                rarity: '4',
            }],
            ['Boothill', {
                name: 'Boothill',
                imageUrl: 'assets/images/hsr/character/HSR_Boothill.png',
                element: 'Physical',
                role: 'Hunt',
                rarity: '5',
            }],
            ['Gallagher', {
                name: 'Gallagher',
                imageUrl: 'assets/images/hsr/character/HSR_Gallagher.png',
                element: 'Fire',
                role: 'Abundance',
                rarity: '4',
            }],
            ['Firefly', {
                name: 'Firefly',
                imageUrl: 'assets/images/hsr/character/HSR_Firefly.png',
                element: 'Fire',
                role: 'Destruction',
                rarity: '5',
            }],
            ['Jade', {
                name: 'Jade',
                imageUrl: 'assets/images/hsr/character/HSR_Jade.png',
                element: 'Quantum',
                role: 'Erudition',
                rarity: '5',
            }],
            ['Herta', {
                name: 'Herta',
                imageUrl: 'assets/images/hsr/character/HSR_Herta.png',
                element: 'Ice',
                role: 'Erudition',
                rarity: '4',
            }],
            ['Yunli', {
                name: 'Yunli',
                imageUrl: 'assets/images/hsr/character/HSR_Yunli.png',
                element: 'Physical',
                role: 'Destruction',
                rarity: '5',
            }],
            ['Feixiao', {
                name: 'Feixiao',
                imageUrl: 'assets/images/hsr/character/HSR_Feixiao.png',
                element: 'Wind',
                role: 'Hunt',
                rarity: '5',
            }],
            ['Rappa', {
                name: 'Rappa',
                imageUrl: 'assets/images/hsr/character/HSR_Rappa.png',
                element: 'Imaginary',
                role: 'Erudition',
                rarity: '5',
            }],
            ['Aventurine', {
                name: 'Aventurine',
                imageUrl: 'assets/images/hsr/character/HSR_Aventurine.png',
                element: 'Imaginary',
                role: 'Preservation',
                rarity: '5',
            }],
        ]),
    
        ZZZCharacters: new Map([
            ['Ellen', {
                name: 'Ellen',
                imageUrl: 'assets/images/zzz/character/ZZZ_Ellen.png',
                element: 'Ice',
                role: 'Attack',
                rarity: 'S',
            }],
            ['Soukaku', {
                name: 'Soukaku',
                imageUrl: 'assets/images/zzz/character/ZZZ_Soukaku.png',
                element: 'Ice',
                role: 'Support',
                rarity: 'A',
            }],
            ['Anby', {
                name: 'Anby',
                imageUrl: 'assets/images/zzz/character/ZZZ_Anby.png',
                element: 'Electric',
                role: 'Stun',
                rarity: 'A',
            }],
            ['Lycaon', {
                name: 'Lycaon',
                imageUrl: 'assets/images/zzz/character/ZZZ_Lycaon.png',
                element: 'Ice',
                role: 'Stun',
                rarity: 'S',
            }],
            ['Grace', {
                name: 'Grace',
                imageUrl: 'assets/images/zzz/character/ZZZ_Grace.png',
                element: 'Electric',
                role: 'Anomaly',
                rarity: 'S',
            }],
            ['Koleda', {
                name: 'Koleda',
                imageUrl: 'assets/images/zzz/character/ZZZ_Koleda.png',
                element: 'Fire',
                role: 'Stun',
                rarity: 'S',
            }],
            ['Soldier 11', {
                name: 'Soldier 11',
                imageUrl: 'assets/images/zzz/character/ZZZ_Soldier11.png',
                element: 'Fire',
                role: 'Attack',
                rarity: 'S',
            }],
            ['Lucy', {
                name: 'Lucy',
                imageUrl: 'assets/images/zzz/character/ZZZ_Lucy.png',
                element: 'Fire',
                role: 'Support',
                rarity: 'A',
            }],
            ['Zhu Yuan', {
                name: 'Zhu Yuan',
                imageUrl: 'assets/images/zzz/character/ZZZ_ZhuYuan.png',
                element: 'Ether',
                role: 'Attack',
                rarity: 'S',
            }],
            ['Nicole', {
                name: 'Nicole',
                imageUrl: 'assets/images/zzz/character/ZZZ_Nicole.png',
                element: 'Ether',
                role: 'Support',
                rarity: 'A',
            }],
            ['Qingyi', {
                name: 'Qingyi',
                imageUrl: 'assets/images/zzz/character/ZZZ_Qingyi.png',
                element: 'Electric',
                role: 'Stun',
                rarity: 'S',
            }],
            ['Jane', {
                name: 'Jane',
                imageUrl: 'assets/images/zzz/character/ZZZ_Jane.png',
                element: 'Physical',
                role: 'Anomaly',
                rarity: 'S',
            }],
            ['Seth', {
                name: 'Seth',
                imageUrl: 'assets/images/zzz/character/ZZZ_Seth.png',
                element: 'Electric',
                role: 'Defence',
                rarity: 'A',
            }],
            ['Caesar', {
                name: 'Caesar',
                imageUrl: 'assets/images/zzz/character/ZZZ_Caesar.png',
                element: 'Physical',
                role: 'Defence',
                rarity: 'S',
            }],
            ['Burnice', {
                name: 'Burnice',
                imageUrl: 'assets/images/zzz/character/ZZZ_Burnice.png',
                element: 'Fire',
                role: 'Anomaly',
                rarity: 'S',
            }],
            ['Yanagi', {
                name: 'Yanagi',
                imageUrl: 'assets/images/zzz/character/ZZZ_Yanagi.png',
                element: 'Electric',
                role: 'Anomaly',
                rarity: 'S',
            }],
            ['Miyabi', {
                name: 'Miyabi',
                imageUrl: 'assets/images/zzz/character/ZZZ_Miyabi.png',
                element: 'Frost',
                role: 'Anomaly',
                rarity: 'S',
            }],
        ]),
    
        HI3Characters: new Map([
            ['Kiana (HoFi)', {
                name: 'Kiana (HoFi)',
                imageUrl: 'assets/images/hi3/character/HI3_Kiana_HoFi.png',
                element: 'Fire',
                rarity: 'S'
            }],
            ['Kiana (HoF)', {
                name: 'Kiana (HoF)',
                imageUrl: 'assets/images/hi3/character/HI3_Kiana_HoF.png',
                element: 'Fire',
                rarity: 'S'
            }],
            ['Mei (HoO)', {
                name: 'Mei (HoO)',
                imageUrl: 'assets/images/hi3/character/HI3_Mei_HoO.png',
                element: 'Lightning',
                rarity: 'S'
            }],
            ['Mei (HoT)', {
                name: 'Mei (HoT)',
                imageUrl: 'assets/images/hi3/character/HI3_Mei_HoT.png',
                element: 'Lightning',
                rarity: 'S'
            }],
            ['Bronya (HoT)', {
                name: 'Bronya (HoT)',
                imageUrl: 'assets/images/hi3/character/HI3_Bronya_HoT.png',
                element: 'Ice',
                rarity: 'S'
            }],
            ['Bronya (HoR)', {
                name: 'Bronya (HoR)',
                imageUrl: 'assets/images/hi3/character/HI3_Bronya_HoR.png',
                element: 'Ice',
                rarity: 'S'
            }],
            ['Elysia', {
                name: 'Elysia',
                imageUrl: 'assets/images/hi3/character/HI3_Elysia.png',
                element: 'Ice',
                rarity: 'S'
            }],
            ['Aponia', {
                name: 'Aponia',
                imageUrl: 'assets/images/hi3/character/HI3_Aponia.png',
                element: 'Lightning',
                rarity: 'S'
            }],
            ['Eden', {
                name: 'Eden',
                imageUrl: 'assets/images/hi3/character/HI3_Eden.png',
                element: 'Lightning',
                rarity: 'A'
            }],
            ['Lunar Vow', {
                name: 'Lunar Vow',
                imageUrl: 'assets/images/hi3/character/HI3_LunarVow.png',
                element: 'Lightning',
                rarity: 'S'
            }],
            ['Durandal', {
                name: 'Durandal',
                imageUrl: 'assets/images/hi3/character/HI3_Durandal.png',
                element: 'Physical',
                rarity: 'S'
            }],
            ['Lantern', {
                name: 'Lantern',
                imageUrl: 'assets/images/hi3/character/HI3_Lantern.png',
                element: 'Fire',
                rarity: 'S'
            }],
            ['Ai', {
                name: 'Ai',
                imageUrl: 'assets/images/hi3/character/HI3_Ai.png',
                element: 'Fire',
                rarity: 'A'
            }],
            ['Fu Hua (HoS)', {
                name: 'Fu Hua (HoS)',
                imageUrl: 'assets/images/hi3/character/HI3_FuHua_HoS.png',
                element: 'Physical',
                rarity: 'S'
            }],
            ['Carole', {
                name: 'Carole',
                imageUrl: 'assets/images/hi3/character/HI3_Carole.png',
                element: 'Physical',
                rarity: 'A'
            }],
        ]),
    
        TK8Characters: new Map([
            ['Reina', {
                name: 'Reina',
                imageUrl: 'assets/images/tk8/character/TK8_Reina.png',
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

class RotationsRepository {

    static arrow = `<span style="margin: auto 5px;">${Constants.unicode.arrow}</span>`;
    static times = Constants.unicode.times;

    static smallText = (text) => `<span style="font-size: 0.8rem; font-weight: normal; margin-left: 2px;">${text}</span>`;
    static tooltip = (text, tooltip) => `<span title="${tooltip}">${text}</span>`;
    static repeat = (text) => `<span class="arrow-border">${text}</span>`;
    static imageOf = (path, tooltip) => `<img src="${path}" width="30" title="${tooltip}" />`;

    // GI moves shortcuts
    static gi = {
        // normal: this.imageOf('assets/images/gi/icons/GI_NormalAttack.png', 'Normal Attack'),
        // charged: this.tooltip('CA', 'Charged Attack'),
        // skill: this.imageOf('assets/images/gi/icons/GI_Skill.png', 'Skill'),
        // ultimate: this.imageOf('assets/images/gi/icons/GI_Ultimate.png', 'Ultimate'),
        // plunge: this.imageOf('assets/images/gi/icons/GI_Plunge.png', 'Plunge'),
        normal: this.tooltip('N', 'Normal Attack'),
        charged: this.tooltip('CA', 'Charged Attack'),
        skill: this.tooltip('E', 'Skill'),
        ultimate: this.tooltip('Q', 'Ultimate'),
        plunge: this.tooltip('Plunge', 'Plunge'),
    }

    // ZZZ moves shortcuts
    static zzz = {
        basic: this.imageOf('assets/images/zzz/icons/ZZZ_Basic.png', 'Basic'),
        charged: this.tooltip('CA', 'Charged Attack'),
        exSpecial: this.imageOf('assets/images/zzz/icons/ZZZ_ExSpecial.png', 'EX Special'),
        special: this.imageOf('assets/images/zzz/icons/ZZZ_Special.png', 'Special'),
        QTE: this.imageOf('assets/images/zzz/icons/ZZZ_QTE.png', 'Switch (Chain / Quick-Assist)'),
        dash: this.imageOf('assets/images/zzz/icons/ZZZ_Dash.png', 'Dash'),
        assault: this.imageOf('assets/images/zzz/icons/ZZZ_Physical.png', 'Assault'),
        burn: this.imageOf('assets/images/zzz/icons/ZZZ_Fire.png', 'Burn'),
        sock: this.imageOf('assets/images/zzz/icons/ZZZ_Electric.png', 'Shock'),
    }

    static getAllRotations(gameCode) {
        switch (gameCode) {
            case Constants.games.GI:
                return this.data.GIRotations;
            case Constants.games.ZZZ:
                return this.data.ZZZRotations;
            case Constants.games.HI3:
                return this.data.HI3Rotations;
            default:
                return new Map([]);
        }
    }
    
    static getRotations(gameCode, teamName) {
        let rotations = this.getAllRotations(gameCode).get(teamName);
        return rotations ?? []
    }

    static data = {
        GIRotations: new Map([
            ['Pyro', [
                ['Xilonen', `${this.gi.skill} ${this.arrow} ${this.gi.normal}${this.times}2 ${this.arrow}`],
                ['Citlali', `${this.gi.skill} ${this.arrow} ${this.gi.ultimate} ${this.arrow}`],
                ['Bennett', `${this.gi.ultimate} ${this.arrow}`],
                ['Mavuika', `${this.gi.ultimate} ${this.arrow} ${this.gi.normal} + ${this.gi.charged}`],
            ]],
            ['Hydro', [
                ['Neuvillette', `${this.gi.normal}${this.times}1 ${this.arrow}`],
                ['Kazuha', `${this.gi.skill} ${this.arrow}`],
                ['Raiden Shogun', `${this.gi.skill} ${this.arrow}`],
                ['Furina', `${this.gi.skill} ${this.arrow} ${this.gi.ultimate} ${this.arrow}`],
                ['Neuvillette', `${this.gi.skill}/${this.gi.ultimate} ${this.arrow} ${this.gi.charged}`],
            ]],
            ['Dendro', [
                ['Zhongli', `${this.gi.skill} ${this.smallText('(Hold)')} ${this.arrow}`],
                ['Nahida', `${this.gi.ultimate} ${this.arrow} ${this.gi.skill} ${this.arrow}`],
                ['Fischl', `${this.gi.skill} ${this.arrow}`],
                ['Tighnari', `${this.gi.ultimate} ${this.arrow} ${this.repeat(this.gi.charged)}`],
            ]],
            ['Electro', [
                ['Raiden Shogun', `${this.gi.skill} ${this.arrow}`],
                ['Chevreuse', `${this.gi.skill} ${this.smallText('(Hold)')} ${this.arrow} ${this.gi.ultimate} ${this.arrow}`],
                ['Thoma', `${this.gi.ultimate} ${this.arrow} ${this.gi.skill} ${this.arrow}`],
                ['Clorinde', `${this.repeat(`${this.gi.skill} + ${this.gi.normal}`)} ${this.arrow} ${this.gi.ultimate}`]
            ]],
            ['Anemo', [
                ['Ororon', ` ${this.gi.ultimate} ${this.arrow} ${this.gi.skill} ${this.arrow}`],
                ['Furina', `${this.gi.skill} ${this.arrow} ${this.gi.ultimate} ${this.arrow}`],
                ['Bennett', `${this.gi.ultimate} ${this.arrow}`],
                ['Chasca', `${this.gi.skill} ${this.arrow} ${this.gi.charged} ${this.smallText('(Hold)')}`]
            ]],
            ['Cryo', [
                ['Wriothesley', `${this.gi.normal}${this.times}1 ${this.arrow}`],
                ['Kazuha', `${this.gi.skill} ${this.arrow}`],
                ['Kokomi', `${this.gi.skill} ${this.arrow}`],
                ['Wriothesley', `${this.gi.skill} ${this.arrow} ${this.repeat(`${this.gi.normal} + ${this.gi.charged}`)}`],
            ]],
            ['Geo', [
                ['Zhongli', `${this.gi.skill} ${this.smallText('(Hold)')} ${this.arrow}`],
                ['Fischl', `${this.gi.skill} ${this.arrow}`],
                ['Xingqiu', `${this.gi.ultimate} ${this.arrow}`],
                ['Navia', `${this.gi.ultimate} ${this.arrow} ${this.gi.skill} + ${this.gi.normal}`],
            ]],
            ['Physical', [
                ['Zhongli', `${this.gi.skill} ${this.smallText('(Hold)')} ${this.arrow}`],
                ['Raiden Shogun', `${this.gi.skill} ${this.arrow}`],
                ['Mika', `${this.gi.skill} ${this.arrow}`],
                ['Eula', `${this.gi.normal} + ${this.gi.skill} + ${this.gi.ultimate}`],
            ]]
        ]),
    
        ZZZRotations: new Map([
            ['Miyabi', [
                ['Lucy', `${this.zzz.exSpecial} ${this.arrow} ${this.zzz.QTE} ${this.arrow}`],
                ['Miyabi', `${this.repeat(`${this.zzz.exSpecial} + ${this.zzz.basic} ${this.smallText('(Until 6 charges)')} ${this.arrow} ${this.zzz.charged}`)}`],
                ['Lycaon', `${this.zzz.QTE} ${this.smallText('(Optional)')}`],
            ]],
            ['Physical',  [
                ['Caesar', `${this.zzz.exSpecial} ${this.arrow}`],
                ['Seth', `${this.zzz.exSpecial} ${this.smallText('(Until 75%+ Resolve)')} ${this.arrow} ${this.zzz.charged} ${this.arrow} ${this.zzz.QTE} ${this.arrow}`],
                ['Jane', `${this.zzz.basic} ${this.smallText('(Until Passion State)')} ${this.arrow} ${this.zzz.basic} + ${this.zzz.charged} + ${this.zzz.exSpecial}`]
            ]],
            ['Fire', [
                ['Caesar', `${this.repeat(`${this.zzz.exSpecial} ${this.smallText('(Parry)')} + ${this.zzz.basic} + ${this.zzz.charged}`)} ${this.arrow} Stun ${this.arrow}`],
                ['Burnice', `${this.repeat(`${this.zzz.charged} / ${this.zzz.exSpecial} ${this.smallText('(Hold)')}`)} ${this.arrow} ${this.zzz.burn}`],
                ['Soldier 11', `(${this.zzz.exSpecial} ${this.arrow} ${this.zzz.basic}) / Timed ${this.zzz.basic}`],
            ]],
            ['Ice', [
                ['Ellen', `${this.zzz.dash} + ${this.zzz.charged} ${this.arrow}`],
                ['Lycaon', `${this.repeat(`${this.zzz.charged} + ${this.zzz.exSpecial}`)} ${this.arrow} Stun ${this.arrow} ${this.zzz.QTE} ${this.arrow}`],
                ['Soukaku', `${this.zzz.special} ${this.smallText('(Hold)')} ${this.arrow} ${this.zzz.QTE} ${this.arrow}`],
                ['Ellen', `${this.zzz.basic} + ${this.zzz.exSpecial}`],
            ]],
            ['Ether', [
                ['Qingyi', `${this.repeat(`${this.zzz.basic} ${this.smallText('(Until 75%+ Voltage)')} ${this.arrow} ${this.zzz.charged}`)} ${this.arrow} Stun ${this.arrow} ${this.zzz.QTE} ${this.arrow}`],
                ['Nicole', `${this.zzz.exSpecial} ${this.smallText('(Hold)')} ${this.arrow} ${this.zzz.basic}${this.times}1 ${this.arrow}`],
                ['Zhu Yuan', `${this.zzz.charged} + ${this.zzz.exSpecial}`],
            ]],
            ['Disorder', [
                ['Caesar', `${this.zzz.exSpecial} ${this.arrow}`],
                ['Burnice', `${this.repeat(`${this.zzz.charged} / ${this.zzz.exSpecial} ${this.smallText('(Hold)')}`)} ${this.arrow} ${this.zzz.burn}`],
                ['Yanagi', `${this.repeat(`(${this.zzz.basic} + ${this.zzz.special}) / ${this.zzz.exSpecial} ${this.smallText('(Hold)')}`)} ${this.arrow} ${this.zzz.shock}`],
            ]],
        ]),
    
        HI3Rotations: new Map([
            ['Fire', [
                ['Bronya (HoT)', `Skill ${this.arrow} QTE ${this.arrow}`],
                ['Ai', `Skill ${this.arrow}`],
                ['Bronya (HoT)', `Ult${this.times}2 ${this.arrow} QTE ${this.arrow}`],
                ['Lantern', `Basic + Skill ${this.arrow} Charged ${this.arrow} Ult`],
            ]],
            ['Lightning', [
                ['Bronya (HoT)', `Skill ${this.arrow} Ult${this.times}2 ${this.arrow} QTE ${this.arrow}`],
                ['Eden', `Ult ${this.arrow} QTE ${this.arrow}`],
                ['Lunar Vow', `Skill ${this.arrow} Ult`]
            ]],
            ['Ice', []],
            ['Physical', [
                ['Fu Hua (HoS)', `Basic ${this.smallText('(Spear combo)')} ${this.arrow} QTE ${this.arrow}`],
                ['Carole', `CA ${this.arrow} Ult ${this.arrow} QTE ${this.arrow}`],
                ['Durandal', `Basic + CA + Ult`]
            ]],
            ['Herrscher Trio',[
                ['Bronya (HoT)', `Skill ${this.arrow} Ult${this.times}2 ${this.arrow} QTE ${this.arrow}`],
                ['Kiana (HoFi)', `Basic ${this.arrow} CA ${this.arrow}`],
                ['Mei (HoO)', `Basic ${this.arrow} CA ${this.arrow} Ult ${this.arrow} QTE ${this.arrow}`],
                ['Kiana (HoFi)', `Skill ${this.arrow} Basic ${this.arrow} CA ${this.arrow} Evade ${this.smallText('(Hold)')} ${this.arrow} Basic ${this.arrow} Ult`],
            ]]
        ])
    }
}

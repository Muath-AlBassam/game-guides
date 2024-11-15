
class RotationsRepository {

    static arrow = `<span style="margin: auto 5px;">${Constants.unicode.arrow}</span>`;
    static times = Constants.unicode.times;

    static smallText = (text) => `<span style="font-size: 0.8rem; font-weight: normal; margin-left: 5px;">${text}</span>`;
    static tooltip = (text, tooltip) => `<span title="${tooltip}">${text}</span>`;
    static repeat = (text) => `<span class="arrow-border">${text}</span>`;
    static imageOf = (path, tooltip) => `<img src="${path}" width="30" title="${tooltip}" />`;

    // GI moves shortcuts
    // static giNormal = this.imageOf('assets/images/gi/icons/GI_NormalAttack.png', 'Normal Attack');
    // static giCharged = this.tooltip('CA', 'Charged Attack');
    // static giSkill = this.imageOf('assets/images/gi/icons/GI_Skill.png', 'Skill');
    // static giUltimate = this.imageOf('assets/images/gi/icons/GI_Ultimate.png', 'Ultimate');
    // static giPlunge = this.imageOf('assets/images/gi/icons/GI_Plunge.png', 'Plunge');
    static giNormal = this.tooltip('N', 'Normal Attack');
    static giCharged = this.tooltip('CA', 'Charged Attack');
    static giSkill = this.tooltip('E', 'Skill');
    static giUltimate = this.tooltip('Q', 'Ultimate');
    static giPlunge = this.tooltip('Plunge', 'Plunge');

    // ZZZ moves shortcuts
    static zzzBasic = this.imageOf('assets/images/zzz/icons/ZZZ_Basic.png', 'Basic');
    static zzzCharged = this.tooltip('CA', 'Charged Attack');
    static zzzExSpecial = this.imageOf('assets/images/zzz/icons/ZZZ_ExSpecial.png', 'EX Special');
    static zzzSpecial = this.imageOf('assets/images/zzz/icons/ZZZ_Special.png', 'Special');
    static zzzQTE = this.imageOf('assets/images/zzz/icons/ZZZ_QTE.png', 'Switch (Chain / Quick-Assist)');
    static zzzDash = this.imageOf('assets/images/zzz/icons/ZZZ_Dash.png', 'Dash');
    static zzzAssault = this.imageOf('assets/images/zzz/icons/ZZZ_Physical.png', 'Assault');
    static zzzBurn = this.imageOf('assets/images/zzz/icons/ZZZ_Fire.png', 'Burn');
    static zzzShock = this.imageOf('assets/images/zzz/icons/ZZZ_Electric.png', 'Shock');


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
                ['Zhongli', `${this.giSkill} ${this.smallText('(Hold)')} ${this.arrow}`],
                ['Bennett', `${this.giUltimate} ${this.arrow}`],
                ['Yelan', `${this.giUltimate} ${this.arrow} ${this.giSkill}${this.times}2 ${this.arrow} `],
                ['Arlecchino', `${this.giSkill} ${this.arrow} ${this.giCharged} ${this.arrow} ${this.repeat(`${this.giNormal} ${this.smallText('(Until BoL is 0)')}`)}`],
            ]],
            ['Hydro', [
                ['Neuvillette', `${this.giNormal}${this.times}1 ${this.arrow}`],
                ['Kazuha', `${this.giSkill} ${this.arrow}`],
                ['Raiden Shogun', `${this.giSkill} ${this.arrow}`],
                ['Furina', `${this.giSkill} ${this.arrow} ${this.giUltimate} ${this.arrow}`],
                ['Neuvillette', `${this.giSkill}/${this.giUltimate} ${this.arrow} ${this.giCharged}`],
            ]],
            ['Dendro', [
                ['Nahida', `${this.giUltimate} ${this.arrow} ${this.giSkill} ${this.arrow}`],
                ['Furina', `${this.giSkill} ${this.arrow} ${this.giUltimate} ${this.smallText('(optional)')} ${this.arrow}`],
                ['Yae Miko', `${this.giSkill}${this.times}3 ${this.arrow}`],
                ['Kuki Shinobu', `${this.giSkill} ${this.arrow}`],
                ['Nahida', `${this.repeat(`${this.giNormal} + ${this.giCharged}`)}`],
            ]],
            ['Electro', [
                ['Raiden Shogun', `${this.giSkill} ${this.arrow}`],
                ['Chevreuse', `${this.giSkill} ${this.smallText('(Hold)')} ${this.arrow} ${this.giUltimate} ${this.arrow}`],
                ['Thoma', `${this.giUltimate} ${this.arrow} ${this.giSkill} ${this.arrow}`],
                ['Clorinde', `${this.repeat(`${this.giSkill} + ${this.giNormal}`)} ${this.arrow} ${this.giUltimate}`]
            ]],
            ['Anemo', [
                ['Zhongli', `${this.giSkill} ${this.smallText('(Hold)')} ${this.arrow}`],
                ['Xianyun', `${this.giUltimate} ${this.arrow}`],
                ['Faruzan', `${this.giUltimate} ${this.arrow}`],
                ['Lynette', `${this.giUltimate} ${this.arrow} ${this.giSkill} + ${this.giNormal}/${this.giPlunge}`],
            ]],
            ['Cryo', [
                ['Wriothesley', `${this.giNormal}${this.times}1 ${this.arrow}`],
                ['Kazuha', `${this.giSkill} ${this.arrow}`],
                ['Kokomi', `${this.giSkill} ${this.arrow}`],
                ['Wriothesley', `${this.giSkill} ${this.arrow} ${this.repeat(`${this.giNormal} + ${this.giCharged}`)}`],
            ]],
            ['Geo', [
                ['Zhongli', `${this.giSkill} ${this.smallText('(Hold)')} ${this.arrow}`],
                ['Fischl', `${this.giSkill} ${this.arrow}`],
                ['Xingqiu', `${this.giUltimate} ${this.arrow}`],
                ['Navia', `${this.giUltimate} ${this.arrow} ${this.giSkill} + ${this.giNormal}`],
            ]],
            ['Physical', [
                ['Zhongli', `${this.giSkill} ${this.smallText('(Hold)')} ${this.arrow}`],
                ['Raiden Shogun', `${this.giSkill} ${this.arrow}`],
                ['Mika', `${this.giSkill} ${this.arrow}`],
                ['Eula', `${this.giNormal} + ${this.giSkill} + ${this.giUltimate}`],
            ]]
        ]),
    
        ZZZRotations: new Map([
            ['Physical',  [
                ['Caesar', `${this.zzzExSpecial} ${this.arrow}`],
                ['Seth', `${this.zzzExSpecial} ${this.smallText('(Until 75%+ Resolve)')} ${this.arrow} ${this.zzzCharged} ${this.arrow} ${this.zzzQTE} ${this.arrow}`],
                ['Jane', `${this.zzzBasic} ${this.smallText('(Until Passion State)')} ${this.arrow} ${this.zzzBasic} + ${this.zzzCharged} + ${this.zzzExSpecial}`]
            ]],
            ['Fire', [
                ['Caesar', `${this.repeat(`${this.zzzExSpecial} ${this.smallText('(Parry)')} + ${this.zzzBasic} + ${this.zzzCharged}`)} ${this.arrow} Stun ${this.arrow}`],
                ['Burnice', `${this.repeat(`${this.zzzCharged} / ${this.zzzExSpecial} ${this.smallText('(Hold)')}`)} ${this.arrow} ${this.zzzBurn}`],
                ['Soldier 11', `(${this.zzzExSpecial} ${this.arrow} ${this.zzzBasic}) / Timed ${this.zzzBasic}`],
            ]],
            ['Ice', [
                ['Ellen', `${this.zzzDash} + ${this.zzzCharged} ${this.arrow}`],
                ['Lycaon', `${this.repeat(`${this.zzzCharged} + ${this.zzzExSpecial}`)} ${this.arrow} Stun ${this.arrow} ${this.zzzQTE} ${this.arrow}`],
                ['Soukaku', `${this.zzzSpecial} ${this.smallText('(Hold)')} ${this.arrow} ${this.zzzQTE} ${this.arrow}`],
                ['Ellen', `${this.zzzBasic} + ${this.zzzExSpecial}`],
            ]],
            ['Ether', [
                ['Qingyi', `${this.repeat(`${this.zzzBasic} ${this.smallText('(Until 75%+ Voltage)')} ${this.arrow} ${this.zzzCharged}`)} ${this.arrow} Stun ${this.arrow} ${this.zzzQTE} ${this.arrow}`],
                ['Nicole', `${this.zzzExSpecial} ${this.smallText('(Hold)')} ${this.arrow} ${this.zzzBasic}${this.times}1 ${this.arrow}`],
                ['Zhu Yuan', `${this.zzzCharged} + ${this.zzzExSpecial}`],
            ]],
            ['Disorder', [
                ['Caesar', `${this.zzzExSpecial} ${this.arrow}`],
                ['Burnice', `${this.repeat(`${this.zzzCharged} / ${this.zzzExSpecial} ${this.smallText('(Hold)')}`)} ${this.arrow} ${this.zzzBurn}`],
                ['Yanagi', `${this.repeat(`(${this.zzzBasic} + ${this.zzzSpecial}) / ${this.zzzExSpecial} ${this.smallText('(Hold)')}`)} ${this.arrow} ${this.zzzShock}`],
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

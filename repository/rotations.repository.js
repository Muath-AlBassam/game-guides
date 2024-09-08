
class RotationsRepository {

    static arrow = `<span style="margin: auto 5px;">${Constants.unicode.arrow}</span>`;
    static times = Constants.unicode.times;
    static infinity = Constants.unicode.infinity;

    static smallText = (text) => `<span style="font-size: 0.8rem; font-weight: normal; margin-left: 5px;">${text}</span>`;
    static tooltip = (text, tooltip) => `<span title="${tooltip}">${text}</span>`;
    static repeat = (text) => `<span class="arrow-border">${text}</span>`;
    static zzzQTE = this.tooltip('QTE', 'Chain / Quick-Assist');


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
                ['Zhongli', `Skill ${this.smallText('(Hold)')} ${this.arrow}`],
                ['Bennett', `Ult ${this.arrow}`],
                ['Yelan', `Ult ${this.arrow}`],
                ['Arlecchino', `Skill ${this.arrow} CA ${this.arrow} NA`],
            ]],
            ['Hydro', [
                ['Neuvillette', `NA${this.times}1 ${this.arrow}`],
                ['Kazuha', `Skill ${this.arrow}`],
                ['Raiden Shogun', `Skill ${this.arrow}`],
                ['Furina', `Skill ${this.arrow} Ult ${this.arrow}`],
                ['Neuvillette', `Skill/Ult ${this.arrow} CA`],
            ]],
            ['Dendro', [
                ['Nahida', `Ult ${this.arrow} Skill ${this.arrow}`],
                ['Furina', `Skill ${this.arrow} Ult ${this.smallText('(optional)')} ${this.arrow}`],
                ['Yae Miko', `Skill${this.times}3 ${this.arrow}`],
                ['Kuki Shinobu', `Skill ${this.arrow}`],
                ['Nahida', `NA + CA`],
            ]],
            ['Electro', [
                ['Raiden Shogun', `Skill ${this.arrow}`],
                ['Xianling', `Ult ${this.arrow}`],
                ['Chevreuse', `Skill ${this.smallText('(Hold)')} ${this.arrow}`],
                ['Clorinde', `Skill + Ult`]
            ]],
            ['Anemo', [
                ['Zhongli', `Skill ${this.smallText('(Hold)')} ${this.arrow}`],
                ['Xianyun', `Ult ${this.arrow}`],
                ['Faruzan', `Ult ${this.arrow}`],
                ['Lynette', `Ult ${this.arrow} Skill + NA/Plunge`],
            ]],
            ['Cryo', [
                ['Wriothesley', `NA${this.times}1 ${this.arrow}`],
                ['Kazuha', `Skill ${this.arrow}`],
                ['Kokomi', `Skill ${this.arrow}`],
                ['Wriothesley', `Skill ${this.arrow} NA + CA`],
            ]],
            ['Geo', [
                ['Zhongli', `Skill ${this.smallText('(Hold)')} ${this.arrow}`],
                ['Fischl', `Skill ${this.arrow}`],
                ['Xingqiu', `Ult ${this.arrow}`],
                ['Navia', `Ult ${this.arrow} Skill + NA`],
            ]],
            ['Physical', [
                ['Zhongli', `Skill ${this.smallText('(Hold)')} ${this.arrow}`],
                ['Raiden Shogun', `Skill ${this.arrow}`],
                ['Mika', `Skill ${this.arrow}`],
                ['Eula', `NA + Skill + Ult`],
            ]]
        ]),
    
        ZZZRotations: new Map([
            ['Physical',  [
                ['Seth', `Basic/Special ${this.smallText('(Until 75%+ Resolve)')} ${this.arrow}`],
                ['Lucy', `Special ${this.smallText('(Hold)')} ${this.arrow}`],
                ['Seth', `Basic ${this.smallText('(Hold)')} ${this.arrow} ${this.zzzQTE} ${this.arrow}`],
                ['Jane', `Basic ${this.smallText('(Until Passion State)')} ${this.arrow} Basic + CA + Special`]
            ]],
            ['Fire', [
                ['Koleda', `${this.repeat(`Basic${this.times}2 ${this.arrow} Special`)} ${this.arrow} Stun ${this.arrow}`],
                ['Lucy', `EX Special ${this.arrow}`],
                ['Soldier 11', `(EX Special ${this.arrow} Basic) / Timed Basic`],
            ]],
            ['Ice', [
                ['Ellen', `Dash + CA ${this.arrow}`],
                ['Lycaon', `${this.repeat('CA + EX Special')} ${this.arrow} Stun ${this.arrow} ${this.zzzQTE} ${this.arrow}`],
                ['Soukaku', `Special ${this.smallText('(hold)')} ${this.arrow} ${this.zzzQTE} ${this.arrow}`],
                ['Ellen', `Basic + EX Special`],
            ]],
            ['Electric', []],
            ['Ether', [
                ['Qingyi', `${this.repeat(`Basic ${this.times + ' ' + this.infinity} ${this.smallText('(Until 75%+ Voltage)')} ${this.arrow} CA`)} ${this.arrow} Stun ${this.arrow} ${this.zzzQTE} ${this.arrow}`],
                ['Nicole', `EX Special ${this.smallText('(hold)')} ${this.arrow} Basic${this.times}1 ${this.arrow}`],
                ['Zhu Yuan', `CA + EX Special`],
            ]]
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

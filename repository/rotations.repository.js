// TODO make it a class...

function getAllRotations(gameCode) {
    switch (gameCode) {
        case Constants.games.GI:
            return RotationsRepository.GIRotations;
        case Constants.games.HSR:
            return RotationsRepository.HSRRotations;
        case Constants.games.ZZZ:
            return RotationsRepository.ZZZRotations;
        case Constants.games.HI3:
            return RotationsRepository.HI3Rotations;
        default:
            return new Map([]);
    }
}

function getRotations(gameCode, teamName) {
    let rotations = getAllRotations(gameCode).get(teamName);
    return rotations ?? []
}

// ----------------------------------------------------------------------------

const arrow = `<span style="margin: auto 5px;">${Constants.unicode.arrow}</span>`;
const times = Constants.unicode.times;
const infinity = Constants.unicode.infinity;

smallText = (text) => `<span style="font-size: 0.8rem; font-weight: normal; margin-left: 5px;">${text}</span>`;
tooltip = (text, tooltip) => `<span title="${tooltip}">${text}</span>`;
repeat = (text) => `<span class="arrow-border">${text}</span>`;
const zzzQTE = tooltip('QTE', 'Chain / Quick-Assist');

const RotationsRepository = {
    GIRotations: new Map([
        ['Pyro', [
            ['Zhongli', `Skill ${smallText('(Hold)')} ${arrow}`],
            ['Bennett', `Ult ${arrow}`],
            ['Yelan', `Ult ${arrow}`],
            ['Arlecchino', `Skill ${arrow} CA ${arrow} NA`],
        ]],
        ['Hydro', [
            ['Neuvillette', `NA${times}1 ${arrow}`],
            ['Kazuha', `Skill ${arrow}`],
            ['Raiden Shogun', `Skill ${arrow}`],
            ['Furina', `Skill ${arrow} Ult ${arrow}`],
            ['Neuvillette', `Skill/Ult ${arrow} CA`],
        ]],
        ['Dendro', [
            ['Nahida', `Ult ${arrow} Skill ${arrow}`],
            ['Furina', `Skill ${arrow} Ult ${smallText('(optional)')} ${arrow}`],
            ['Yae Miko', `Skill${times}3 ${arrow}`],
            ['Kuki Shinobu', `Skill ${arrow}`],
            ['Nahida', `NA + CA`],
        ]],
        ['Electro', [
            ['Raiden Shogun', `Skill ${arrow}`],
            ['Xianling', `Ult ${arrow}`],
            ['Chevreuse', `Skill ${smallText('(Hold)')} ${arrow}`],
            ['Clorinde', `Skill + Ult`]
        ]],
        ['Anemo', [
            ['Zhongli', `Skill ${smallText('(Hold)')} ${arrow}`],
            ['Xianyun', `Ult ${arrow}`],
            ['Faruzan', `Ult ${arrow}`],
            ['Lynette', `Ult ${arrow} Skill + NA/Plunge`],
        ]],
        ['Cryo', [
            ['Wriothesley', `NA${times}1 ${arrow}`],
            ['Kazuha', `Skill ${arrow}`],
            ['Kokomi', `Skill ${arrow}`],
            ['Wriothesley', `Skill ${arrow} NA + CA`],
        ]],
        ['Geo', [
            ['Zhongli', `Skill ${smallText('(Hold)')} ${arrow}`],
            ['Fischl', `Skill ${arrow}`],
            ['Xingqiu', `Ult ${arrow}`],
            ['Navia', `Ult ${arrow} Skill + NA`],
        ]],
        ['Physical', [
            ['Zhongli', `Skill ${smallText('(Hold)')} ${arrow}`],
            ['Raiden Shogun', `Skill ${arrow}`],
            ['Mika', `Skill ${arrow}`],
            ['Eula', `NA + Skill + Ult`],
        ]]
    ]),

    HSRRotations: new Map([]),

    ZZZRotations: new Map([
        ['Physical',  [
            ['Seth', `Basic/Special ${smallText('(Until 75%+ Resolve)')} ${arrow}`],
            ['Lucy', `Special ${smallText('(Hold)')} ${arrow}`],
            ['Seth', `Basic ${smallText('(Hold)')} ${arrow} ${zzzQTE} ${arrow}`],
            ['Jane', `Basic ${smallText('(Until Passion State)')} ${arrow} Basic + CA + Special`]
        ]],
        ['Fire', [
            ['Koleda', `${repeat(`Basic${times}2 ${arrow} Special`)} ${arrow} Stun ${arrow}`],
            ['Lucy', `EX Special ${arrow}`],
            ['Soldier 11', `(EX Special ${arrow} Basic) / Timed Basic`],
        ]],
        ['Ice', [
            ['Ellen', `Dash + CA ${arrow}`],
            ['Lycaon', `${repeat('CA + EX Special')} ${arrow} Stun ${arrow} ${zzzQTE} ${arrow}`],
            ['Soukaku', `Special ${smallText('(hold)')} ${arrow} ${zzzQTE} ${arrow}`],
            ['Ellen', `Basic + EX Special`],
        ]],
        ['Electric', []],
        ['Ether', [
            ['Qingyi', `${repeat(`Basic ${times + ' ' + infinity} ${smallText('(Until 75%+ Voltage)')} ${arrow} CA`)} ${arrow} Stun ${arrow} ${zzzQTE} ${arrow}`],
            ['Nicole', `EX Special ${smallText('(hold)')} ${arrow} Basic${times}1 ${arrow}`],
            ['Zhu Yuan', `CA + EX Special`],
        ]]
    ]),

    HI3Rotations: new Map([
        ['Fire', [
            ['Bronya (HoT)', `Skill ${arrow} QTE ${arrow}`],
            ['Ai', `Skill ${arrow}`],
            ['Bronya (HoT)', `Ult${times}2 ${arrow} QTE ${arrow}`],
            ['Lantern', `Basic + Skill ${arrow} Charged ${arrow} Ult`],
        ]],
        ['Lightning', [
            ['Bronya (HoT)', `Skill ${arrow} Ult${times}2 ${arrow} QTE ${arrow}`],
            ['Eden', `Ult ${arrow} QTE ${arrow}`],
            ['Lunar Vow', `Skill ${arrow} Ult`]
        ]],
        ['Ice', []],
        ['Physical', [
            ['Fu Hua (HoS)', `Basic ${smallText('(Spear combo)')} ${arrow} QTE ${arrow}`],
            ['Carole', `CA ${arrow} Ult ${arrow} QTE ${arrow}`],
            ['Durandal', `Basic + CA + Ult`]
        ]],
        ['Herrscher Trio',[
            ['Bronya (HoT)', `Skill ${arrow} Ult${times}2 ${arrow} QTE ${arrow}`],
            ['Kiana (HoFi)', `Basic ${arrow} CA ${arrow}`],
            ['Mei (HoO)', `Basic ${arrow} CA ${arrow} Ult ${arrow} QTE ${arrow}`],
            ['Kiana (HoFi)', `Skill ${arrow} Basic ${arrow} CA ${arrow} Evade ${smallText('(Hold)')} ${arrow} Basic ${arrow} Ult`],
        ]]
    ])
}
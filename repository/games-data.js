const arrow = Constants.unicode.arrow;
const times = Constants.unicode.times;

smallText = (text) => `<span style="font-size: 0.8rem; font-weight: normal">${text}</span>`;
tooltip = (text, tooltip) => `<span title="${tooltip}">${text}</span>`;


const GamesData = {
    games: new Map ([
        [Constants.games.GI, {
            label: 'Genshin Impact',
            code: Constants.games.GI,
            style: 'TEAM',
            teamSize: 4,
            logoUrl: 'assets/gi/GI_Logo.png',
            backgroundUrl: 'assets/gi/GI_BG.png',
            guideUrl: 'https://genshin-builds.com/characters'
        }],
        [Constants.games.HSR, {
            label: 'Honkai Star Rail',
            code: Constants.games.HSR,
            style: 'TEAM',
            teamSize: 4,
            logoUrl: 'assets/hsr/HSR_Logo.png',
            backgroundUrl: 'assets/hsr/HSR_BG.png',
            guideUrl: 'https://www.prydwen.gg/star-rail/tier-list'
        }],
        [Constants.games.ZZZ, {
            label: 'Zenless Zone Zero',
            code: Constants.games.ZZZ,
            style: 'TEAM',
            teamSize: 3,
            logoUrl: 'assets/zzz/ZZZ_Logo.png',
            backgroundUrl: 'assets/zzz/ZZZ_BG.png',
            guideUrl: 'https://www.prydwen.gg/zenless/tier-list'
        }],
        [Constants.games.HI3, {
            label: 'Honkai Impact 3rd',
            code: Constants.games.HI3,
            style: 'TEAM',
            teamSize: 3,
            logoUrl: 'assets/hi3/HI3_Logo.png',
            backgroundUrl: 'assets/hi3/HI3_BG.jpg',
            guideUrl: 'https://honkaiimpact3.hoyoverse.com/global/en-us/valkyries'
        }]
    ]),
}
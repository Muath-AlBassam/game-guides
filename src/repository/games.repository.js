
class GamesRepository {
    static getAllGames() {
        return this.data.games;
    }
    
    static getGame(gameCode) {
        if (gameCode == '' || gameCode == null) {
            return null;
        }
        return this.getAllGames().get(gameCode);
    }

    static data = {
        games: new Map ([
            [Constants.games.GI, {
                label: 'Genshin Impact',
                code: Constants.games.GI,
                style: Constants.gameStyles.TEAMS,
                teamSize: 4,
                hasPet: false,
                iconUrl: 'assets/images/gi/GI_Icon.png',
                logoUrl: 'assets/images/gi/GI_Logo.png',
                backgroundUrl: 'assets/images/gi/GI_BG.png',
                guideUrl: 'https://keqingmains.com/#search'
            }],
            [Constants.games.HSR, {
                label: 'Honkai Star Rail',
                code: Constants.games.HSR,
                style: Constants.gameStyles.TEAMS,
                teamSize: 4,
                hasPet: false,
                iconUrl: 'assets/images/hsr/HSR_Icon.png',
                logoUrl: 'assets/images/hsr/HSR_Logo.png',
                backgroundUrl: 'assets/images/hsr/HSR_BG.png',
                guideUrl: 'https://www.prydwen.gg/star-rail/characters'
            }],
            [Constants.games.ZZZ, {
                label: 'Zenless Zone Zero',
                code: Constants.games.ZZZ,
                style: Constants.gameStyles.TEAMS,
                teamSize: 3,
                hasPet: true,
                iconUrl: 'assets/images/zzz/ZZZ_Icon.png',
                logoUrl: 'assets/images/zzz/ZZZ_Logo.png',
                backgroundUrl: 'assets/images/zzz/ZZZ_BG.png',
                guideUrl: 'https://www.prydwen.gg/zenless/characters'
            }],
            [Constants.games.HI3, {
                label: 'Honkai Impact 3rd',
                code: Constants.games.HI3,
                style: Constants.gameStyles.TEAMS,
                teamSize: 3,
                hasPet: true,
                iconUrl: 'assets/images/hi3/HI3_Icon.png',
                logoUrl: 'assets/images/hi3/HI3_Logo.png',
                backgroundUrl: 'assets/images/hi3/HI3_BG.jpg',
                guideUrl: 'https://honkaiimpact3.hoyoverse.com/global/en-us/valkyries'
            }],
            [Constants.games.TK8, {
                label: 'Tekken 8',
                code: Constants.games.TK8,
                style: Constants.gameStyles.FIGHT,
                iconUrl: 'assets/images/tk8/TK8_Icon.jpg',
                logoUrl: 'assets/images/tk8/TK8_Logo.png',
                backgroundUrl: 'assets/images/tk8/TK8_BG.jpg',
                guideUrl: 'https://en.bandainamcoent.eu/tekken/tekken-8/characters'
            }]
        ]),
    }
}
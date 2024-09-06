
class GamesRepository {
    static getAllGames() {
        return GamesRepository.data.games;
    }
    
    static getGame(gameCode) {
        gameCode = gameCode == '' || gameCode == null ? Constants.games.GI : gameCode; 
        return GamesRepository.getAllGames().get(gameCode);
    }

    static data = {
        games: new Map ([
            [Constants.games.GI, {
                label: 'Genshin Impact',
                code: Constants.games.GI,
                style: Constants.gameStyles.TEAMS,
                teamSize: 4,
                logoUrl: 'assets/gi/GI_Logo.png',
                backgroundUrl: 'assets/gi/GI_BG.png',
                // sets & weapons : https://genshin.gg/
                // character image : https://genshin-impact.fandom.com/wiki/Character/List
                // -- open image change url path variable (50) to 256 then download
                guideUrl: 'https://genshin-impact.fandom.com/wiki/Character/List'
            }],
            [Constants.games.HSR, {
                label: 'Honkai Star Rail',
                code: Constants.games.HSR,
                style: Constants.gameStyles.TEAMS,
                teamSize: 4,
                logoUrl: 'assets/hsr/HSR_Logo.png',
                backgroundUrl: 'assets/hsr/HSR_BG.png',
                guideUrl: 'https://www.prydwen.gg/star-rail/tier-list'
            }],
            [Constants.games.ZZZ, {
                label: 'Zenless Zone Zero',
                code: Constants.games.ZZZ,
                style: Constants.gameStyles.TEAMS,
                teamSize: 3,
                logoUrl: 'assets/zzz/ZZZ_Logo.png',
                backgroundUrl: 'assets/zzz/ZZZ_BG.png',
                guideUrl: 'https://www.prydwen.gg/zenless/tier-list'
            }],
            [Constants.games.HI3, {
                label: 'Honkai Impact 3rd',
                code: Constants.games.HI3,
                style: Constants.gameStyles.TEAMS,
                teamSize: 3,
                logoUrl: 'assets/hi3/HI3_Logo.png',
                backgroundUrl: 'assets/hi3/HI3_BG.jpg',
                guideUrl: 'https://honkaiimpact3.hoyoverse.com/global/en-us/valkyries'
            }],
            [Constants.games.TK8, {
                label: 'Tekken 8',
                code: Constants.games.TK8,
                style: Constants.gameStyles.FIGHT,
                logoUrl: 'assets/tk8/TK8_Logo.png',
                backgroundUrl: 'assets/tk8/TK8_BG.jpg',
                guideUrl: 'https://en.bandainamcoent.eu/tekken/tekken-8/characters'
            }]
        ]),
    }
}
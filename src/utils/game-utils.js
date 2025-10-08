class GameUtils {

    static getWeaponsLabel(gameCode) {
        switch (gameCode) {
            case Constants.games.GI:
                return 'Weapon';
            case Constants.games.HSR:
                return 'Light Cone';
            case Constants.games.ZZZ:
                return 'W-Engine';
            case Constants.games.BL4:
                return 'Guns';
            default:
                return 'Weapon';
        }
    }
    
    static getSetsLabel(gameCode) {
        switch (gameCode) {
            case Constants.games.GI:
                return 'Artifacts';
            case Constants.games.HSR:
                return 'Relics';
            case Constants.games.ZZZ:
                return 'Drive Discs';
            case Constants.games.HI3:
                return 'Stigmata';
            case Constants.games.BL4:
                return 'Equipment';
            default:
                return 'Sets';
        }
    }
}
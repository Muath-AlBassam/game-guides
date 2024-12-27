class NotesRepository {
    static getTeamNotes(gameCode, teamName) {
        let data;
        switch (gameCode) {
            case Constants.games.HSR:
                data = this.data.HSRTeamNotes.get(teamName);
                break;
        }
        return data;
    }

    static data = {
        HSRTeamNotes: new Map([
            ['Lightning', [
                { text: 'Recommended for the sustainer (Preservation) to equip the lightcone: <b>Trend of the Universal Market</b>' }
            ]],
        ]),
    }
}
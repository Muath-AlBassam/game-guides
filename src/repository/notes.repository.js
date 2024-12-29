class NotesRepository {
    static getTeamNotes(gameCode, teamName) {
        let data;
        switch (gameCode) {
            case Constants.games.GI:
                data = this.data.GITeamNotes.get(teamName);
                break;
            case Constants.games.HSR:
                data = this.data.HSRTeamNotes.get(teamName);
                break;
        }
        return data;
    }

    static data = {
        GITeamNotes: new Map([
            ['Electro', [
                { text: 'Pyro & Electro teammates only, to benefit from Chevreuse\'s buff.' }
            ]],
            ['Nilou Bloom', [
                { text: 'Dendro & Hydro teammates only, to activate Nilou\'s A1: Bountiful Bloom.' }
            ]],
        ]),

        HSRTeamNotes: new Map([
            ['Lightning', [
                { text: 'Recommended for the sustainer (Preservation) to equip the Light Cone: <b>Trend of the Universal Market</b>' }
            ]],
        ]),
    }
}
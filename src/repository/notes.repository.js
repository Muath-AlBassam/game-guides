class NotesRepository {
    getTeamNotes(gameCode, teamName) {
        let data;
        switch (gameCode) {
            case Constants.games.GI:
                data = this.data.GITeamNotes.get(teamName);
                break;
            case Constants.games.HSR:
                data = this.data.HSRTeamNotes.get(teamName);
                break;
            case Constants.games.ZZZ:
                data = this.data.ZZZTeamNotes.get(teamName);
                break;
        }
        return data;
    }

    data = {
        GITeamNotes: new Map([
            ['Electro', [
                { text: 'Pyro & Electro teammates only, to benefit from Chevreuse\'s A1\'s RES Shred.' }
            ]],
            ['Nilou Bloom', [
                { text: 'Dendro & Hydro teammates only, to activate Nilou\'s A1\'s Bountiful Bloom.' }
            ]],
        ]),

        HSRTeamNotes: new Map([
            ['Lightning', [
                { text: 'Recommended for the sustainer (Preservation) to equip the Light Cone: <b>Trend of the Universal Market</b>' }
            ]],
        ]),

        ZZZTeamNotes: new Map([
            ['Chain', [
                { 
                    text: 'After treiggering chain attack, do one with <b>Evelyn</b>, then cancel. Then trigger it again and do one with <b>Evelyn</b>. Then consume <b>Evelyn</b>\'s charges to do a manual chain attack' 
                },
                {
                    text: 'Trigger the chain attack with <u>anyone</u> other than <b>Evelyn</b>'
                }
            ]]
        ])
    }
}

const notesRepository = new NotesRepository();
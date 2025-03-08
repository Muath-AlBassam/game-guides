
class NotesRepository {

    constructor() {
        this.fetchData();
    }

    fetchData() {
        dataClient.loadData('NOTES').then(notes => {
            this.data = dataClient.arrayTo2LevelMap(
                notes,
                vArr => {
                    return vArr.map(v => {
                       return { text: v.TEXT };
                    });
                },
                'OWNER_CODE'
            );
        });
    }

    getTeamNotes(gameCode, teamName) {
        let notes = this.data.get(gameCode);
        return notes ? notes.get(teamName) : null;
    }

    data = new Map([]);
}

const notesRepository = new NotesRepository();
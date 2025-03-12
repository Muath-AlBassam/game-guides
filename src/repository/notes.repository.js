
class NotesRepository {

    notesMap = new Map([]);

    constructor() {
        this.fetchData();
    }

    fetchData() {
        dataClient.loadData('NOTES').then(notes => {
            this.notesMap = DataUtils.arrayTo2LevelMap(
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
        let notes = this.notesMap.get(gameCode);
        return notes ? notes.get(teamName) : null;
    }
}

const notesRepository = new NotesRepository();
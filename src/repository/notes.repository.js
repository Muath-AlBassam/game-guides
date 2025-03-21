
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

    getAllByTeam(gameCode, teamCode) {
        let notes = this.notesMap.get(gameCode);
        return notes ? notes.get(teamCode) : null;
    }
}

const notesRepository = new NotesRepository();
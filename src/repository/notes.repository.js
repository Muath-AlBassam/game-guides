
class NotesRepository {

    notesMap = new Map([]);

    constructor() {
        this.fetchData();
    }

    fetchData() {
        dataClient.loadData('NOTES').then(notes => {
            this.notesMap = RepositoryMapper.mapNotes(notes);
        });
    }

    getAllByTeam(gameCode, teamCode) {
        let notes = this.notesMap.get(gameCode);
        return notes ? notes.get(teamCode) : null;
    }
}

const notesRepository = new NotesRepository();
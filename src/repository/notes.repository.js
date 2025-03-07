
class NotesRepository {

    constructor() {
        loadFormattedData(
            'NOTES',
            vArr => {
                let mappedArr = [];
                vArr.forEach(v => {
                    mappedArr.push({ text: v.TEXT })
                });
                return mappedArr;
            },
            'OWNER_CODE'
        ).then(notes => {
            this.data = notes;
        });
    }

    getTeamNotes(gameCode, teamName) {
        let notes = this.data.get(gameCode);
        return notes ? notes.get(teamName) : null;
    }

    data = new Map([]);
}

const notesRepository = new NotesRepository();
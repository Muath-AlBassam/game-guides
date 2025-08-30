
class NotesRepository {

    notesList = [];

    constructor() {
        this.fetchData();
    }

    fetchData() {
        dataClient.loadData('NOTES').then(notes => {
            const flatList = notes.map(n => ({
                gameCode: n.GAME_CODE, ownerCode: n.OWNER_CODE, ownerType: n.OWNER_TYPE, text: n.TEXT
            }));
            
            const grouped = Utils.groupList(flatList, 'gameCode', 'ownerCode');

            this.notesList =  Object.values(grouped).map(ownerNotesList => {
                return {
                    gameCode: ownerNotesList[0].gameCode,
                    ownerCode: ownerNotesList[0].ownerCode,
                    ownerType: ownerNotesList[0].ownerType,
                    notes: ownerNotesList.map(v => ({ text: v.text })),
                };
            });
        });
    }

    getAllByTeam(gameCode, teamCode) {
        const data = this.notesList
            .find(n => n.gameCode == gameCode && n.ownerCode == teamCode && n.ownerType == 'TEAM');
        return data ? data.notes : null;
    }
}

const notesRepository = new NotesRepository();
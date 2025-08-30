
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
            
            const grouped = Utils.groupBy(flatList, 'gameCode', 'ownerCode');
            grouped.forEach((val, key) => {
                this.notesList.push({
                    gameCode: val[0].gameCode,
                    ownerCode: val[0].ownerCode,
                    ownerType: val[0].ownerType,
                    notes: val.map(n => ({ text: n.text })),
                });
            })
        });
    }

    getAllByTeam(gameCode, teamCode) {
        const data = this.notesList
            .find(n => n.gameCode == gameCode && n.ownerCode == teamCode && n.ownerType == 'TEAM');
        return data ? data.notes : null;
    }
}

const notesRepository = new NotesRepository();
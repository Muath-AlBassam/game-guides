
class TeamsRepository {

    teamsList = [];

    constructor() {
        this.fetchData();
    }

    fetchData() {
        dataClient.loadData(['TEAMS', 'TEAMS_CHARACTERS']).then(resMap => {
            this.teamsList = this.mapTeams(resMap);
        });
    }

    mapTeams(resMap) {
        const teamCharacterList = this.mapTeamsCharacters(resMap.get('TEAMS_CHARACTERS'));
        return resMap.get('TEAMS').map(t => ({
            gameCode: t.GAME_CODE,
            code: t.CODE,
            category: t.CATEGORY,
            name: t.NAME,
            iconUrl: Utils.appendRepoUrl(t.ICON_URL),
            pet: t.PET,
            parentCode: t.PARENT_CODE,
            order: t.ORDER,
            characters: teamCharacterList
                .filter(c => c.gameCode == t.GAME_CODE && c.teamCode == t.CODE)
        }))
        .sort((a, b) => (a.order > b.order) ? 1 : ((b.order > a.order) ? -1 : 0));;
    }

    mapTeamsCharacters(characters) {
        return characters.map(c => ({
            gameCode: c.GAME_CODE,
            teamCode: c.TEAM_CODE,
            name: c.NAME,
            roleCode: c.ROLE_CODE,
            roleDescription: c.ROLE_DESCRIPTION,
            isMain: c.IS_MAIN,
            replacements: c.REPLACEMENTS?.split(',')
        }));
    }

    getAll(gameCode) {
        return this.teamsList.filter(t => t.gameCode == gameCode);
    }

    getAllMain(gameCode) {
        return this.getAllByParent(gameCode, null);
    }

    getAllByParent(gameCode, parentTeamCode) {
        return this.teamsList.filter(t => t.gameCode == gameCode && t.parentCode == parentTeamCode);
    }

    getAllByCategory(gameCode, categoryCode) {
        return this.teamsList.filter(t => t.gameCode == gameCode && t.category == categoryCode);
    }

    getOne(gameCode, code) {
        const data = this.teamsList.find(t => t.gameCode == gameCode && t.code == code);
        return data ?? { code: code, name: code }
    }
}

const teamsRepository = new TeamsRepository();
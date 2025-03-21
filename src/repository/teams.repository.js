
class TeamsRepository {

    teamsMap = new Map([]);

    constructor() {
        this.fetchData();
    }

    fetchData() {
        dataClient.loadData(['TEAMS', 'TEAMS_CHARACTERS']).then(resMap => {
            this.teamsMap = RepositoryMapper.mapTeams(resMap);
        });
    }

    getAll(gameCode) {
        return this.teamsMap.get(gameCode) ?? new Map([]);
    }

    getAllMain(gameCode) {
        return new Map([...this.getAll(gameCode).entries()]
            .filter((keyValue) => keyValue[1].parentCode == null));
    }

    getAllByParent(gameCode, parentTeamCode) {
        return new Map([...this.getAll(gameCode).entries()]
            .filter((keyValue) => keyValue[1].parentCode == parentTeamCode));
    }

    getOne(gameCode, teamCode) {
        let team = this.getAll(gameCode).get(teamCode);
        return team ?? { name: teamCode };
    }
}

const teamsRepository = new TeamsRepository();

class TeamsRepository {

    teamsMap = new Map([]);

    constructor() {
        this.fetchData();
    }

    fetchData() {
        dataClient.loadData(['TEAMS', 'TEAMS_CHARACTERS']).then(resMap => {
            this.teamsMap = this.mapTeams(resMap);
        });
    }

    mapTeams(resMap) {
        let teamsData = resMap.get('TEAMS');
        let teamsByGame = Utils.arrayTo2LevelMap(
            teamsData,
            v => { 
                return { 
                    code: v[0].CODE,
                    category: v[0].CATEGORY,
                    categoryV2: v[0].CATEGORY_V2,
                    name: v[0].NAME,
                    iconUrl: Utils.appendRepoUrl(v[0].ICON_URL),
                    pet: v[0].PET,
                    parentCode: v[0].PARENT_CODE,
                    order: v[0].ORDER
                }
            }
        );
        return this.appendCharactersToTeam(teamsByGame, resMap);
    }

    appendCharactersToTeam(teamsByGame, resMap) {
        teamsByGame.forEach((gameTeams, gameCode) => {
            gameTeams.forEach((team, teamCode) => {
                team.characters = this.mapTeamsCharacters(resMap.get('TEAMS_CHARACTERS')).get(gameCode)?.get(teamCode) ?? [];
                gameTeams.set(teamCode, team);
            });
            // custom order (default: alphabetical)
            const sortedTeams = new Map([...gameTeams.entries()].sort((a, b) => a[1].order - b[1].order));
            teamsByGame.set(gameCode, sortedTeams);
        });
        return teamsByGame;
    }

    mapTeamsCharacters(charactersData) {
        return Utils.arrayTo2LevelMap(
            charactersData,
            vArr => {
                return vArr.map(v => {
                    return {
                        name: v.NAME,
                        roleCode: v.ROLE_CODE,
                        roleDescription: v.ROLE_DESCRIPTION,
                        isMain: v.IS_MAIN,
                        replacements: v.REPLACEMENTS?.split(',')
                    };
                }) 
            },
            'TEAM_CODE'
        );
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

    getAllByCategory(gameCode, categoryCode) {
        return new Map([...this.getAll(gameCode).entries()]
            .filter((keyValue) => keyValue[1].categoryV2 == categoryCode));
    }

    getOne(gameCode, teamCode) {
        let team = this.getAll(gameCode).get(teamCode);
        return team ?? { name: teamCode };
    }
}

const teamsRepository = new TeamsRepository();
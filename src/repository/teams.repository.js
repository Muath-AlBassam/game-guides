
class TeamsRepository {

    constructor() {
        this.fetchData();
    }

    fetchData() {
        dataClient.loadData(['TEAMS', 'TEAMS_CHARACTERS', 'TEAMS_VARIATIONS']).then(resMap => {
            let characters = this.fetchMappedTeamsCharacters(resMap.get('TEAMS_CHARACTERS'));
            let variations = this.fetchMappedTeamsVariations(resMap.get('TEAMS_VARIATIONS'));
            this.data = this.fetchMappedTeams(resMap.get('TEAMS'), characters, variations);
        });
    }

    fetchMappedTeams(teamsData, characters, variations) {
        let teamsMap = dataClient.arrayTo2LevelMap(
            teamsData,
            v => { return { name: v[0].NAME, iconUrl: v[0].ICON_URL, pet: v[0].PET, order: v[0].ORDER } }
        );
        teamsMap.forEach((gameTeams, gameCode) => {
            gameTeams.forEach((team, teamCode) => {
                team.characters = characters.get(gameCode)?.get(teamCode);
                if (team.characters == null) {
                    team.characters = [];
                }
                team.variations = variations.get(gameCode)?.get(teamCode);
                gameTeams.set(teamCode, team);
            });
            // custom order (default: alphabetical)
            const sortedTeams = new Map([...gameTeams.entries()].sort((a, b) => a[1].order - b[1].order));
            teamsMap.set(gameCode, sortedTeams);
        });
        return teamsMap;
    }

    fetchMappedTeamsCharacters(charactersData) {
        return dataClient.arrayTo2LevelMap(
            charactersData,
            vArr => { 
                return vArr.map(v => {
                    return { name: v.NAME, role: v.ROLE, isMain: v.IS_MAIN, replacements: v.REPLACEMENTS?.split(',') };
                }) 
            },
            'TEAM_CODE'
        );
    }

    fetchMappedTeamsVariations(variationsData) {
        return dataClient.arrayTo2LevelMap(
            variationsData,
            vArr => { 
                return vArr.map(v => {
                    return { name: v.NAME, characters: Utils.fromJSONString(v.MEMBERS) };
                }) 
            },
            'TEAM_CODE'
        );
    }

    getAllTeams(gameCode) {
        return this.data.get(gameCode) ?? new Map([]);
    }
    
    getTeam(gameCode, teamName) {
        let team = this.getAllTeams(gameCode).get(teamName);
        return team ?? { name: teamName };
    }

    data = new Map([]);
}

const teamsRepository = new TeamsRepository();
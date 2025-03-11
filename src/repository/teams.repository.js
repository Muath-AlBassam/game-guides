
class TeamsRepository {

    constructor() {
        this.fetchData();
    }

    fetchData() {
        dataClient.loadData(['TEAMS', 'TEAMS_CHARACTERS', 'TEAMS_VARIATIONS']).then(resMap => {
            let allCharacters = this.mapTeamsCharacters(resMap.get('TEAMS_CHARACTERS'));
            let allVariations = this.mapTeamsVariations(resMap.get('TEAMS_VARIATIONS'));
            this.data = this.mapTeams(resMap.get('TEAMS'), allCharacters, allVariations);
        });
    }

    mapTeams(teamsData, allCharacters, allVariations) {
        let teamsByGame = Utils.arrayTo2LevelMap(
            teamsData,
            v => { return { name: v[0].NAME, iconUrl: Utils.getImageUrl(v[0].ICON_URL), pet: v[0].PET, order: v[0].ORDER } }
        );
        teamsByGame.forEach((gameTeams, gameCode) => {
            gameTeams.forEach((team, teamCode) => {
                team.characters = allCharacters.get(gameCode)?.get(teamCode) ?? [];
                team.variations = allVariations.get(gameCode)?.get(teamCode);
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
                    return { name: v.NAME, role: v.ROLE, isMain: v.IS_MAIN, replacements: v.REPLACEMENTS?.split(',') };
                }) 
            },
            'TEAM_CODE'
        );
    }

    mapTeamsVariations(variationsData) {
        return Utils.arrayTo2LevelMap(
            variationsData,
            vArr => {
                const uniqueIds = [...new Set(vArr.map(item => item.ID))];
                let mappedList = [];
                uniqueIds.forEach(id => {
                    let variIdMembers = vArr.filter(vari => vari.ID == id);
                    let chars = [];
                    variIdMembers.forEach(vari => chars.push(vari.MEMBER.includes(',') ? vari.MEMBER.split(',') : vari.MEMBER))
                    mappedList.push({ name: variIdMembers[0].NAME, characters: chars });
                })
                return mappedList;
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
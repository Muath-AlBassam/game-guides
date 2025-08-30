
class RotationsRepository {

    rotationsList = [];

    constructor() {
        this.fetchData();
    }

    fetchData() {
        dataClient.loadData('ROTATIONS').then(rotations => {
            const flatList = rotations.map(r => ({
                gameCode: r.GAME_CODE, teamCode: r.TEAM_CODE, stepNumber: r.STEP_NUMBER, action: r.ACTION
            }));
            
            const grouped = Utils.groupList(flatList, 'gameCode', 'teamCode');
            // loop through object variables and read list items
            this.rotationsList = Object.values(grouped).map(teamRotationList => {
                return {
                    gameCode: teamRotationList[0].gameCode,
                    teamCode: teamRotationList[0].teamCode,
                    rotations: teamRotationList
                        .map(r => ({ stepNumber: r.stepNumber, action: RotationsUtils.formatStepAction(r.action, r.gameCode) }))
                };
            });
        });
    }

    getAllByTeam(gameCode, teamCode) {
        const data = this.rotationsList.find(r => r.gameCode == gameCode && r.teamCode == teamCode);
        return data ? data.rotations : [];
    }
}

const rotationsRepository = new RotationsRepository();
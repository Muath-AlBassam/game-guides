
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
            
            const grouped = Utils.groupBy(flatList, 'gameCode', 'teamCode');
            grouped.forEach((val, key) => {
                this.rotationsList.push({
                    gameCode: val[0].gameCode,
                    teamCode: val[0].teamCode,
                    rotations: val
                        .map(r => ({ stepNumber: r.stepNumber, action: RotationsUtils.formatStepAction(r.action, r.gameCode) }))
                });
            })
        });
    }

    getAllByTeam(gameCode, teamCode) {
        const data = this.rotationsList.find(r => r.gameCode == gameCode && r.teamCode == teamCode);
        return data ? data.rotations : [];
    }
}

const rotationsRepository = new RotationsRepository();
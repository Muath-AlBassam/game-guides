
class RotationsRepository {

    rotationsMap = new Map([]);

    constructor() {
        this.fetchData();
    }

    fetchData() {
        dataClient.loadData('ROTATIONS').then(rotations => {
            this.rotationsMap = Utils.arrayTo2LevelMap(
                rotations,
                vArr => {
                    return vArr.map(step => {
                        return {
                            stepNumber: step.STEP_NUMBER,
                            action: RotationsUtils.formatStepAction(step.ACTION, step.GAME_CODE)
                        };
                    })
                },
                'TEAM_CODE'
            );
        });
    }

    getAllByTeam(gameCode, teamCode) {
        let rotations = this.rotationsMap.get(gameCode)?.get(teamCode);
        return rotations ?? []
    }
}

const rotationsRepository = new RotationsRepository();
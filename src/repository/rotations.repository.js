
class RotationsRepository {

    rotationsMap = new Map([]);

    constructor() {
        this.fetchData();
    }

    fetchData() {
        dataClient.loadData('ROTATIONS').then(rotations => {
            this.rotationsMap = DataUtils.arrayTo2LevelMap(
                rotations,
                vArr => {
                    return vArr.map(step => {
                        return {
                            stepNumber: step.STEP_NUMBER,
                            character: step.MEMBER,
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
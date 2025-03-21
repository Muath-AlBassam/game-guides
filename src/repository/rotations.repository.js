
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

    getAllByTeam(gameCode, teamName) {
        let rotations = this.rotationsMap.get(gameCode)?.get(teamName);
        return rotations ?? []
    }
}

const rotationsRepository = new RotationsRepository();
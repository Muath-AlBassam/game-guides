
class RotationsRepository {

    rotationsMap = new Map([]);

    constructor() {
        this.fetchData();
    }

    fetchData() {
        dataClient.loadData('ROTATIONS').then(rotations => {
            this.rotationsMap = RepositoryMapper.mapRotations(rotations);
        });
    }

    getAllByTeam(gameCode, teamCode) {
        let rotations = this.rotationsMap.get(gameCode)?.get(teamCode);
        return rotations ?? []
    }
}

const rotationsRepository = new RotationsRepository();
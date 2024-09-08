class TeamListComponent extends HTMLElement {

    characterPFPSize = 160;

    componentStyle = `
    <style>
        /**/
    </style>`;
    
    constructor() {
      super();
    }

    connectedCallback() {
        const activeGame = GamesRepository.getGame(Utils.getGameFromUrl());
        const teams = TeamsRepository.getAllTeams(activeGame.code);

        this.innerHTML = this.buildHTML(teams);

        window.addEventListener('search', (event) => {
            this.filterTeams(event.detail, teams);
        })
    }

    buildHTML(teams) {
        return this.componentStyle + `
        <app-build-modal id="build-modal"></app-build-modal>
        <div class="row">
            <div class="col-md-12">
                <div class="content-header">Teams</div>
            </div>
        </div>
        <app-search></app-search>
        <div id="teams">
            ${this.buildTeams(teams)}
        </div>`;
    }

    filterTeams(searchTerm, allTeams) {
        // map all characters' names into a list
        const filtered = new Map([...allTeams].filter((teamMapItem) => {
            let team = teamMapItem[1]
            let charactersNames = [];
            if (team.characters) {
                team.characters.forEach(ch => {
                    charactersNames.push(ch.name);
                    if (ch.replacedBy && ch.replacedBy.length > 0) {
                        charactersNames.push(...ch.replacedBy);
                    }
                });
            }
            if (team.variations) {
                team.variations.forEach(vari => {
                    charactersNames.push(...vari)
                })
            }
            // true if one item from the list contains the searchTerm
            return charactersNames.some(name => name.toLowerCase().includes(searchTerm.toLowerCase()))
        }))

        document.getElementById('teams').innerHTML = this.buildTeams(filtered);
    }

    buildTeams(teams) {
        let teamsListHTML = '';
        let index = 1;
        teams.forEach((team, key) => {
            teamsListHTML += `
                <app-team-details teamName="${team.name}" teamIndex="${index}"></app-team-details>`;
            index++;
        });

        return teamsListHTML;
    }
}

customElements.define('app-team-list', TeamListComponent);

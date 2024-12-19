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

    filterTeams(searchTerm, allTeams) {
        // map all characters' names into a list
        const filtered = new Map([...allTeams].filter((teamMapKeyValue) => {
            // 0: key, 1: value
            let team = teamMapKeyValue[1]
            let charactersNames = [];
            // add names from team characters list
            if (team.characters) {
                team.characters.forEach(ch => {
                    charactersNames.push(ch.name);
                    if (ch.replacements && ch.replacements.length > 0) {
                        charactersNames.push(...ch.replacements);
                    }
                });
            }
            // add names from team variations list
            if (team.variations) {
                team.variations.forEach(vari => {
                    charactersNames.push(...vari.characters)
                })
            }
            // true if one item from the list contains the searchTerm
            return charactersNames.some(name => name.toLowerCase().includes(searchTerm.toLowerCase()))
        }))

        document.getElementById('teams').innerHTML = this.buildTeams(filtered);
    }
}

customElements.define('app-team-list', TeamListComponent);

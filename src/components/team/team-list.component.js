class TeamListComponent extends HTMLElement {

    characterPFPSize = 160;
    activeGame = null;
    searchTerm = '';
    allTeams = null;
    teams = null;
    
    constructor() {
      super();
    }

    connectedCallback() {
        this.loadData();
        this.innerHTML = this.buildHTML();
        window.addEventListener('search', (event) => {
            this.searchTerm = event.detail;
            this.teams = this.filterTeams();
            this.innerHTML = this.buildHTML();
        })
    }

    loadData() {
        this.activeGame = GamesRepository.getGame(Utils.getGameFromUrl());
        this.allTeams = TeamsRepository.getAllTeams(this.activeGame.code);
        this.teams = this.allTeams;
    }

    buildHTML() {
        return `
        <div class="row">
            <div class="col-md-12">
                <div class="content-header">Teams</div>
            </div>
        </div>
        <app-search q="${this.searchTerm}"></app-search>
        <div id="teams">
            ${Utils.ngForMap(this.teams, (team, index) => `<app-team-details teamName="${team.name}" teamIndex="${index + 1}"></app-team-details>`)}
        </div>`;
    }

    filterTeams() {
        // map all characters' names into a list
        const filteredList = [...this.allTeams].filter((teamMapKeyValue) => {
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
            let characterFound = charactersNames.some(name => name.toLowerCase().includes(this.searchTerm.toLowerCase()));
            let teamNameFound = team.name.toLowerCase().includes(this.searchTerm.toLowerCase());

            return characterFound || teamNameFound;
        })
        return new Map(filteredList);
    }
}

customElements.define('app-team-list', TeamListComponent);

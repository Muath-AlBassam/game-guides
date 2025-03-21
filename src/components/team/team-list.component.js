class TeamListComponent extends HTMLElement {

    characterPFPSize = 160;
    activeGame = null;
    allTeams = null;
    teams = null;
    
    constructor() {
      super();
    }

    connectedCallback() {
        this.loadData();
        this.innerHTML = this.buildHTML();
        this.listenToEvents();
    }

    loadData() {
        this.activeGame = gamesRepository.getOne(Utils.getGameFromUrl());
        this.allTeams = teamsRepository.getAllMain(this.activeGame.code);
        this.teams = this.allTeams;
    }

    listenToEvents() {
        window.addEventListener('search-team', (event) => {
            this.teams = this.filterTeams(event.detail);
            document.getElementById('team-list-header').innerHTML = this.buildHeader();
            document.getElementById('teams').innerHTML = this.buildListHTML();
        });
    }

    buildHTML() {
        return `
        <div class="row" id="team-list-header">
            ${this.buildHeader()}
        </div>

        <app-team-search showrarities="false" showelements="false" showroles="false"></app-team-search>

        <div id="teams">
            ${this.buildListHTML()}
        </div>`;
    }

    buildHeader() {
        return `
        <div class="col-md-12">
            <div class="content-header">
                Teams
                <span class="additional-text">Showing (${this.teams?.size}) Teams</span>
            </div>
        </div>
        `;
    }

    buildListHTML() {
        return `
        ${Utils.ngIf(this.teams.size > 0, `
            ${Utils.ngFor(this.teams, (team, index) => `
            <app-team-details teamcode="${team.code}" teamindex="${index + 1}"></app-team-details>
            `)}
        `,
        `
        <div>
            <img src="assets/svg/shrug.svg" height="${Utils.isMobile() ? '150' : '300'}" />
        </div>
        `)}
        `;
    }

    filterTeams(searchTerm) {
        // map all characters' names into a list
        const filteredList = [...this.allTeams].filter((teamMapKeyValue) => {
            // 0: key, 1: value
            let teamCode = teamMapKeyValue[0];
            let team = teamMapKeyValue[1];
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
            let variations = teamsRepository.getAllByParent(this.activeGame.code, teamCode)
            if (variations) {
                variations.forEach(vari => {
                    if (vari.characters) {
                        vari.characters.forEach(ch => {
                            charactersNames.push(ch.name);
                            if (ch.replacements && ch.replacements.length > 0) {
                                charactersNames.push(...ch.replacements);
                            }
                        });
                    }
                })
            }
            // true if one item from the list contains the searchTerm
            let characterFound = charactersNames.some(name => name.toLowerCase().includes(searchTerm.toLowerCase()));
            let teamNameFound = team.name.toLowerCase().includes(searchTerm.toLowerCase());

            return characterFound || teamNameFound;
        })
        return new Map(filteredList);
    }
}

customElements.define('app-team-list', TeamListComponent);

class TeamListComponent extends HTMLElement {

    // inputs
    gameCode = null;

    characterPFPSize = 160;
    allTeams = null;
    teamsByCategory = null;
    
    constructor() {
      super();
    }

    connectedCallback() {
        this.loadData();
        this.innerHTML = this.buildHTML();
        this.listenToEvents();
    }

    loadData() {
        this.gameCode = this.getAttribute('gamecode');
        this.allTeams = teamsRepository.getAllMain(this.gameCode);
        this.teamsByCategory = this.categorizeTeams(this.allTeams);
    }

    listenToEvents() {
        window.addEventListener('search-team', (event) => {
            this.teamsByCategory = this.categorizeTeams(this.filterTeams(event.detail));
            if (document.getElementById('teams') != null) {
                document.getElementById('team-list-header').innerHTML = this.buildHeader();
                document.getElementById('teams').innerHTML = this.buildListHTML();
            }
        });
    }

    buildHTML() {
        return `
        <div class="row" id="team-list-header">
            ${this.buildHeader()}
        </div>

        <app-team-search gamecode="${this.gameCode}" showrarities="false" showelements="false" showroles="false" placeholder="Search teams, characters..."></app-team-search>

        <div id="teams">
            ${this.buildListHTML()}
        </div>`;
    }

    buildHeader() {
        let count = 0;
        this.teamsByCategory.forEach((v, k) => {
            count += this.teamsByCategory.get(k).teams.size;
        })
        return `
        <div class="col-md-12">
            <div class="content-header">
                Teams
                <span class="additional-text">Showing (${count}) Teams</span>
            </div>
        </div>
        `;
    }

    buildListHTML() {
        return `
        ${Utils.ngIf(this.teamsByCategory.size > 0, `
            ${Utils.ngFor(this.teamsByCategory, category => `
            <div class="line-text pointer collapsed" data-bs-toggle="collapse" data-bs-target="#${category.text}">
                ${category.text}
            </div>
            
            <div class="collapse show" id="${category.text}">
                ${Utils.ngFor(category.teams, team => `
                <app-team-details gamecode="${this.gameCode}" teamcode="${team.code}" teamindex="${team.order}"></app-team-details>
                `)}
            </div>
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
            let variations = teamsRepository.getAllByParent(this.gameCode, teamCode)
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

    categorizeTeams(map) {
        const groupedMap = new Map([]);
        for (const [key, obj] of map) {
          if (!groupedMap.has(obj.category)) {
            groupedMap.set(obj.category, { text: obj.category, teams: new Map([]) });
          }
          groupedMap.get(obj.category).teams.set(key, obj);
        }
        return groupedMap;
    }
}

customElements.define('app-team-list', TeamListComponent);

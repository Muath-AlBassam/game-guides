class TeamsListComponent extends HTMLElement {
    
    // attribute that on change will trigger "attributeChangedCallback"
    // https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements#responding_to_attribute_changes
    static observedAttributes = ["name"];

    componentStyle = `
        <style>
            .team-container {
                border: 1px solid #33343a;
                border-radius: 0;
                display: flex;
                margin: 20px 0 0 0;
                height: 150px;
                width: 100%;
            }

            .team-container .team-number {
                align-items: center;
                background-color: #ef5350;
                color: #191817;
                display: flex;
                font-size: 22px;
                font-weight: 700;
                justify-content: center;
                width: 65px;
            }

            .team-container .team-container-item {
                grid-gap: 0;
                background-color: #2c2d33;
                border-radius: 0;
                display: grid;
                grid-template-columns: 30% 40% 30%;
                justify-content: space-between;
                position: relative;
                width: 100%;
            }

            .team-container-item div:nth-child(even) {
                background-color: #36373f;
            }

            .team-container-item .team-name {
                font-size: 30px;
                font-weight: bold;
                display: grid;
                grid-template-columns: 20% 80%;
                align-items: center;
                justify-items: center;
            }

            .team-container-item .team-members {
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .team-container-item .team-actions {
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .team-actions .action {
                margin: 10px;
                cursor: pointer;
            }

            .team-details {
                display: grid;
                grid-template-columns: 25% 25% 25% 25%;
            }

            .accordion-content {
                display: none;
                transition: all 0.5s ease;
            }
        </style>`;
    
    constructor() {
      super();
    }

    connectedCallback() {
        const activeGame = getGame(window.location.hash.replace('#', ''));
        const teams = getAllTeams(activeGame.code);

        this.innerHTML = this.buildHTML(activeGame, teams);
    }
    
    attributeChangedCallback(name, oldValue, newValue) {
        const activeGame = getGame(window.location.hash.replace('#', ''));
        const teams = getAllTeams(activeGame.code);

        document.getElementById('teams').innerHTML = this.buildTeams(activeGame, teams);
    }

    buildHTML(activeGame, teams) {
        return this.componentStyle +
        `<div id="teams">`
        + this.buildTeams(activeGame, teams) +
        `</div>`;
    }

    // all teams
    buildTeams(activeGame, teams) {
        let teamsListHTML = '';
        teams.forEach((team, index) => {
            const teamId = `${activeGame.code}-${team.name.replaceAll(' ', '-')}`;

            let content = 
                this.buildTeamContainer(activeGame, team, teamId, index) +
                this.buildTeamDetails(activeGame, team, teamId);
            teamsListHTML += content;
        });

        return teamsListHTML;
    }

    // a row for one team
    buildTeamContainer(activeGame, team, teamId, index) {
        return `<div class="team-container">
                    <div class="team-number">${index + 1}</div>
                    <div class="team-container-item">
                        <div class="team-name">
                            <img src="${team.iconUrl ?? 'assets/Placeholder_Logo.png'}" height="30"></img>
                            <span>${team.name}</span>
                        </div>
                        <div class="team-members">${this.buildMemebersImages(activeGame, team)}</div>
                        <div class="team-actions">
                            <img src="assets/svg/arrow-down.svg" height="60" title="Details" 
                                class="action" data-bs-toggle="collapse" data-bs-target="#${teamId}">
                            </img>
                        </div>
                    </div>
                </div>`;
    }

    buildMemebersImages(activeGame, team) {
        let membersImages = ``;
        for (let i = 0; i < activeGame.teamSize; i++) {
            const character = team.characters[i]
            const charmd = getCharacterMetadata(activeGame.code, character?.name);
            membersImages += createCharacterImage(activeGame.code, charmd, 100, 'margin: 5px 10px;');
        }
        return membersImages;
    }

    // team details (collapsable/accordion content)
    buildTeamDetails(activeGame, team, teamId) {
        return `<div class="team-details collapse" data-bs-parent="#teams" id="${teamId}">
                    <roles-component game="${activeGame.code}" team="${team.name}"></roles-component>
                    <variations-component game="${activeGame.code}" team="${team.name}"></variations-component>
                    <replacements-component game="${activeGame.code}" team="${team.name}"></replacements-component>
                    <rotations-component game="${activeGame.code}" team="${team.name}"></rotations-component>
                </div>`;
    }
}

customElements.define('teams-list-component', TeamsListComponent);

//------------------------------------------------------------------------------------

window.addEventListener('hashchange', () => {
    // change attribute to trigger "attributeChangedCallback"
    document.getElementsByTagName('teams-list-component')[0].setAttribute('name', window.location.hash.replace('#', ''));
});

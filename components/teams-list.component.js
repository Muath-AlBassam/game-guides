class TeamsListComponent extends HTMLElement {
    
    // attribute that on change will trigger "attributeChangedCallback"
    // https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements#responding_to_attribute_changes
    static observedAttributes = ["name"];

    characterPFPSize = 125;

    componentStyle = `
    <style>
        .team-container {
            border: 1px solid #33343a;
            border-radius: 0;
            display: flex;
            margin: 20px 0 0 0;
            width: 100%;
            height: ${this.characterPFPSize + 50}px;
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

        .team-actions img {
            transition: all 0.5s ease-out;
        }
        .team-actions:not(.collapsed) img {
            transform: rotate(-180deg);
        }
        .team-actions.collapsed img {
            transform: rotate(0deg);
        }
        
        .action {
            cursor: pointer;
        }

        .team-details {
            display: grid;
            grid-template-columns: 25% 25% 25% 25%;
            border: 2px solid #33343a;
        }

        .accordion-content {
            display: none;
            transition: all 0.5s ease;
        }

        @media (min-width: 769px) {
            /* none mobile view only */
            .team-details {
                /* 
                    split container into 4 vertical sections separated by lines (3 lines) 
                    https://stackoverflow.com/questions/43628280/create-a-div-with-7-dividing-vertical-lines
                */
                background:linear-gradient(
                    to right, 
                    transparent, transparent calc(100% / 4 * 1 - 3px), #33343a, transparent calc(100% / 4 * 1), 
                    transparent, transparent calc(100% / 4 * 2 - 3px), #33343a, transparent calc(100% / 4 * 2), 
                    transparent, transparent calc(100% / 4 * 3 - 3px), #33343a, transparent calc(100% / 4 * 3)
                );
            }
        }

        @media (max-width: 768px) {
            /* not complete */
            .team-container .team-container-item {
                grid-template-columns: 1fr;
            }

            .team-details {
                grid-template-columns: 1fr;
            }
        }
    </style>`;
    
    constructor() {
      super();
    }

    connectedCallback() {
        const activeGame = getGame(getGameFromUrl());
        const teams = getAllTeams(activeGame.code);

        this.innerHTML = this.buildHTML(activeGame, teams);
    }
    
    attributeChangedCallback(name, oldValue, newValue) {
        const activeGame = getGame(getGameFromUrl());
        const teams = getAllTeams(activeGame.code);

        document.getElementById('teams').innerHTML = this.buildTeams(activeGame, teams);
    }

    buildHTML(activeGame, teams) {
        return this.componentStyle + `
        <build-modal id="build-modal"></build-modal>
        <div class="row">
            <div class="col-md-12">
                <div class="content-header">Teams</div>
            </div>
        </div>
        <div id="teams">
            ${this.buildTeams(activeGame, teams)}
        </div>`;
    }

    // all teams
    buildTeams(activeGame, teams) {
        let teamsListHTML = '';
        let index = 0;
        teams.forEach((team, key) => {
            const teamId = `${activeGame.code}-${team.name.replaceAll(' ', '-')}`;

            let content = 
                this.buildTeamContainer(activeGame, team, teamId, index) +
                this.buildTeamDetails(activeGame, team, teamId);
            teamsListHTML += `<div> ${content} </div>`;
            index++;
        });

        return teamsListHTML;
    }

    // a row for one team
    buildTeamContainer(activeGame, team, teamId, index) {
        return `<div class="team-container action">
                    <div class="team-number">${index + 1}</div>
                    <div class="team-container-item">
                        <div class="team-name collapsed" data-bs-toggle="collapse" data-bs-target="#${teamId}">
                            <img src="${team.iconUrl ?? 'assets/Placeholder_Logo.png'}" height="50">
                            <span>${team.name}</span>
                        </div>
                        <div class="team-members">${this.buildMemebersImages(activeGame, team)}</div>
                        <div class="team-actions collapsed" data-bs-toggle="collapse" data-bs-target="#${teamId}">
                            <img src="assets/svg/arrow-down.svg" height="60" title="Details" class="action">
                        </div>
                    </div>
                </div>`;
    }

    buildMemebersImages(activeGame, team) {
        let membersImages = ``;
        for (let i = 0; i < activeGame.teamSize; i++) {
            const character = team.characters[i]
            const charmd = getCharacterMetadata(activeGame.code, character?.name);
            membersImages += createCharacterImage(activeGame.code, charmd, 
                {dimensions: this.characterPFPSize, styles: 'margin: 5px 10px;', withBuildModal: true});
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
    document.getElementsByTagName('teams-list-component')[0].setAttribute('name', getGameFromUrl());
});

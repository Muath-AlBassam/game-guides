class TeamsTable extends HTMLElement {
    
    // attribute that on change will trigger "attributeChangedCallback"
    // https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements#responding_to_attribute_changes
    static observedAttributes = ["name"];

    componentStyle = `
        <style>
            .team-container {
                border: 1px solid #33343a;
                border-radius: 0;
                display: flex;
                margin: 10px 0;
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
                grid-template-columns: 33% 33% 33%;
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
        </style>`;
    
    constructor() {
      super();
    }

    connectedCallback() {
        this.innerHTML = 
            this.componentStyle +
            `<div id="teams">`
            + this.createTeams() +
            `</div>`;
    }
    
    attributeChangedCallback(name, oldValue, newValue) {
        document.getElementById('teams').innerHTML = this.createTeams();
    }

    createTeams() {
        const activeGame = getGame(window.location.hash.replace('#', ''));
        const teams = getTeams(activeGame.code);

        let teamsListHTML = '';
        teams.forEach((team, index) => {
            let characters = ``;
            for (let i = 0; i < activeGame.teamSize; i++) {
                const character = team.characters[i]
                const charmd = getCharacterMetadata(activeGame.code, character?.name);
                characters +=  
                    `<img 
                        src='${charmd.imageUrl ?? 'assets/Unknown.png'}' alt='${charmd.name}' title='${charmd.name ?? '?'}'
                        class='${activeGame.code}-rarity-${charmd.rarity ?? ''}'
                        width='100' height='100' style='margin: 10px;'
                    />`;
            }

            let content = 
            `<div class="team-container">
                <div class="team-number">${index + 1}</div>
                <div class="team-container-item">
                    <div class="team-name">
                        <img src="${team.iconUrl ?? 'assets/Placeholder_Logo.png'}" height="30"></img>
                        <span>${team.name}</span>
                    </div>
                    <div class="team-members">${characters}</div>
                    <div class="team-actions">
                        <img src="assets/svg/roles.svg" height="40" title="Roles" class="action"></img>
                        <img src="assets/svg/replacements.svg" height="40" title="Replacements" class="action"></img>
                        <img src="assets/svg/variations.svg" height="40" title="Variations" class="action"></img>
                        <img src="assets/svg/rotations.svg" height="40" title="Rotations" class="action"></img>
                    </div>
                </div>
            </div>`;
            teamsListHTML += content;
        });

        return teamsListHTML;
    }
}

customElements.define('teams-list-component', TeamsTable);

window.addEventListener('hashchange', () => {
    // change attribute to trigger "attributeChangedCallback"
    document.getElementsByTagName('teams-list-component')[0].setAttribute('name', window.location.hash.replace('#', ''));
});
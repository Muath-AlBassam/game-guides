class VariationsComponent extends HTMLElement {

    characterPFPSize = 80;

    componentStyle = `
    <style>
        .variations-container {
            /**/
        }
    </style>`;

    constructor() {
      super();
    }
  
    connectedCallback() {
        const gameCode = this.getAttribute('game');
        const teamName = this.getAttribute('team');
        const activeGame = getGame(gameCode);
        const currentTeam = getTeam(gameCode, teamName);

        this.innerHTML = this.buildHTML(activeGame, currentTeam);
    }

    buildHTML(activeGame, currentTeam) {
        return this.componentStyle + `
        <div class="container variations-container">
            <div>
                <h5 class="content-header">
                    <img src="assets/svg/variations.svg" height="20" class="action">
                    Variations
                </h5>
            </div>
            <table class="table table-striped table-bordered">
                <tbody>
                ${this.buildVariationsContent(activeGame, currentTeam)}
                </tbody>
            </table>
        </div>`;
    }

    buildVariationsContent(activeGame, currentTeam) {
        let variationsContent = '';

        let childTeams = getTeamsByParent(activeGame.code, currentTeam.name);
        if (childTeams != null && childTeams.size > 0) {
            childTeams.forEach((v, k) => {
                variationsContent += `<tr><td style="width: 50px; text-align: center">`;
                variationsContent += `
                    <img src="assets/svg/info.svg" width="26" height="26" title="View details" 
                        onclick="openTeamDetailsModal('${k}')"
                        style="cursor: pointer; margin-top: -50%; transform: translateY(360%)"/>`;
                
                v.characters.forEach(character => {
                    variationsContent += this.createCharacterContent(activeGame, character.name, false);
                })
                variationsContent += `</td></tr>`;
            })
        } else if (currentTeam.variations) {
            currentTeam.variations.forEach(vari => {
                variationsContent += `<tr><td style="width: 50px; text-align: center">`;
                vari.forEach(character => {
                    variationsContent += this.createCharacterContent(activeGame, character, true);
                })
                variationsContent += `</td></tr>`;
            })
        } else {
            variationsContent += `
                <h1 class="empty-details">...</h1>
            `;
        }

        return variationsContent;
    }

    createCharacterContent(activeGame, characterName, withBuildModal) {
        const charmd = getCharacterMetadata(activeGame.code, characterName);
        return createCharacterImage(activeGame.code, charmd, 
            {dimensions: this.characterPFPSize, styles: 'margin: 5px 10px;', withBuildModal: withBuildModal, withElement: true});
    }
}

customElements.define('variations-component', VariationsComponent);

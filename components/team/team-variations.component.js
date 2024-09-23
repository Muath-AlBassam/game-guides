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
        const activeGame = GamesRepository.getGame(gameCode);
        const currentTeam = TeamsRepository.getTeam(gameCode, teamName);

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
            <div style="height: ${107 * activeGame.teamSize}px; overflow: auto;">
                <table class="table table-striped table-bordered">
                    <tbody>
                    ${this.buildVariationsContent(activeGame, currentTeam)}
                    </tbody>
                </table>
            </div>
        </div>`;
    }

    buildVariationsContent(activeGame, team) {
        let variationsContent = '';

        if (team.variations) {
            team.variations.forEach(vari => {
                variationsContent += `<tr><td style="display: flex; text-align: center">`;
                // add name
                if (vari.name) {
                    variationsContent += `<h6 style="width: 75px">${vari.name}</h6>`;
                }
                // add characters
                variationsContent += this.buildCharactersImages(vari.characters, activeGame.code);
                variationsContent += `</td></tr>`;
            })
        } else {
            variationsContent += `
                <h1 class="empty-details">...</h1>
            `;
        }

        return variationsContent;
    }

    buildCharactersImages(variationCharacters, gameCode) {
        let content = '';
        variationCharacters.forEach(character => {
            const charmd = CharactersRepository.getCharacterMetadata(gameCode, character);
            content += Utils.createCharacterImage(gameCode, charmd, 
                {dimensions: this.characterPFPSize, styles: 'margin: 5px 10px;', withBuildDialog: true, withElement: true});
        });
        return content;
    }
}

customElements.define('app-team-variations', VariationsComponent);

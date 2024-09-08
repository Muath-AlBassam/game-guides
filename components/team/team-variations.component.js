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
            <table class="table table-striped table-bordered">
                <tbody>
                ${this.buildVariationsContent(activeGame, currentTeam)}
                </tbody>
            </table>
        </div>`;
    }

    buildVariationsContent(activeGame, currentTeam) {
        let variationsContent = '';

        if (currentTeam.variations) {
            currentTeam.variations.forEach(vari => {
                variationsContent += `<tr><td style="width: 50px; text-align: center">`;
                vari.forEach(character => {
                    const charmd = CharactersRepository.getCharacterMetadata(activeGame.code, character);
                    variationsContent += Utils.createCharacterImage(activeGame.code, charmd, 
                        {dimensions: this.characterPFPSize, styles: 'margin: 5px 10px;', withBuildModal: true, withElement: true});
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
}

customElements.define('app-team-variations', VariationsComponent);

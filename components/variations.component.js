class VariationsComponent extends HTMLElement {

    /*html*/
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
        <div class="team-details-container variations-container">
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
                    const charmd = getCharacterMetadata(activeGame.code, character);
                    variationsContent += createCharacterImage(activeGame.code, charmd, 60, 'margin: 5px 10px;');
                })
                variationsContent += `</td></tr>`;
            })
        }

        return variationsContent;
    }
}

customElements.define('variations-component', VariationsComponent);

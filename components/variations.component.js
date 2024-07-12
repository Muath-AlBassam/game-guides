class VariationsComponent extends HTMLElement {

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
        const currentTeam = getTeams(gameCode).find(team => team.name == teamName);

        let variationsContent = '';

        if (currentTeam.variations) {
            currentTeam.variations.forEach(vari => {
                variationsContent += '<tr><td style="width: 50px; text-align: center">';
                vari.forEach(character => {
                    const charmd = getCharacterMetadata(activeGame.code, character);
                    variationsContent += createCharacterImage(gameCode, charmd, 60, 'margin: 5px 10px;');
                })
                variationsContent += '</td></tr>';
            })
        }

        this.innerHTML = 
            this.componentStyle + 
            `<div class="team-details-container variations-container">
                <div>
                    <h5 class="content-header">
                        <img src="assets/svg/variations.svg" height="20" class="action"></img>
                        Variations
                    </h5>
                </div>
                <table class="table table-striped table-bordered">
                    <tbody>
                    ${variationsContent}
                    </tbody>
                </table>
            </div>`;
    }
}

customElements.define('variations-component', VariationsComponent);

class RotationsComponent extends HTMLElement {

    componentStyle = `
        <style>
            .rotations-container {
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
        return this.componentStyle + 
        `<div class="team-details-container roles-container">
            <h5 class="content-header">
                <img src="assets/svg/rotations.svg" height="20" class="action"></img>
                Rotations
            </h5>
            <div>
                ${this.buildRotationsContent(activeGame, currentTeam)}
            </div>
        </div>`;
    }

    buildRotationsContent(activeGame, currentTeam) {
        let rotationsContent = '';

        if (currentTeam.rotations) {
            currentTeam.rotations.forEach(step => {
                const charmd = getCharacterMetadata(activeGame.code, step[0]);
                rotationsContent += 
                    `${createCharacterImage(activeGame.code, charmd, 40, 'margin: 5px 10px 5px 0;')}
                    <b style="margin-right: 8px;">${step[1]}</b>`;
            })
        }

        return rotationsContent;
    }
}

customElements.define('rotations-component', RotationsComponent);

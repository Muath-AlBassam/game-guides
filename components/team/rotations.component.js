class RotationsComponent extends HTMLElement {

    characterPFPSize = 40;

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
        return this.componentStyle + `
        <div class="container rotations-container">
            <h5 class="content-header">
                <img src="assets/svg/rotations.svg" height="20" class="action">
                Rotations
            </h5>
            <div style="font-size: 1.2em;">
                ${this.buildRotationsContent(activeGame, currentTeam)}
            </div>
        </div>`;
    }

    buildRotationsContent(activeGame, currentTeam) {
        let rotationsContent = '';

        if (currentTeam.rotations) {
            currentTeam.rotations.forEach(step => {
                const charmd = getCharacterMetadata(activeGame.code, step[0]);
                rotationsContent += `
                <div>
                    <span>
                        ${createCharacterImage(activeGame.code, charmd, 
                            {dimensions: this.characterPFPSize, styles: 'margin: 5px 10px; border-radius: 100%;', withContainer: false})}
                    </span>
                    <b style="margin-right: 8px; display: inline-flex; align-items: center;">
                        ${step[1]}
                    </b>
                </div>`;
            })
        } else {
            rotationsContent += `
                <h1 class="empty-details">...</h1>
            `;
        }

        return rotationsContent;
    }
}

customElements.define('rotations-component', RotationsComponent);

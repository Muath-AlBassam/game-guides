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
        const teamRotations = RotationsRepository.getRotations(gameCode, teamName);

        this.innerHTML = this.buildHTML(gameCode, teamRotations);
    }

    buildHTML(gameCode, teamRotations) {
        return this.componentStyle + `
        <div class="container rotations-container">
            <h5 class="content-header">
                <img src="assets/svg/rotations.svg" height="20" class="action">
                Rotations
            </h5>
            <div style="font-size: 1.2em;">
                ${this.buildRotationsContent(gameCode, teamRotations)}
            </div>
        </div>`;
    }

    buildRotationsContent(gameCode, teamRotations) {
        let rotationsContent = '';

        if (teamRotations && teamRotations.length > 0) {
            teamRotations.forEach(step => {
                const charmd = CharactersRepository.getCharacterMetadata(gameCode, step[0]);
                rotationsContent += `
                <div>
                    <span>
                        ${Utils.createCharacterImage(gameCode, charmd, 
                            {dimensions: this.characterPFPSize, styles: 'margin: 5px 10px; border-radius: 100%;', withContainer: false})}
                    </span>
                    <b style="margin-right: 8px;">
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

customElements.define('app-team-rotations', RotationsComponent);

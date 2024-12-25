class RotationsComponent extends HTMLElement {

    // inputs
    gameCode = null;
    teamName = null;

    characterPFPSize = 40;
    teamRotations = null;

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
        this.loadData();
        this.innerHTML = this.componentStyle + this.buildHTML();
    }

    loadData() {
        this.gameCode = this.getAttribute('game');
        this.teamName = this.getAttribute('team');

        this.teamRotations = RotationsRepository.getRotations(this.gameCode, this.teamName);
    }

    buildHTML() {
        return `
        <div class="container rotations-container">
            <h5 class="content-header">
                <img src="assets/svg/rotations.svg" height="20" class="action">
                Rotations
            </h5>
            <div style="font-size: 1.2em;">
                ${Utils.ngForIf(this.teamRotations && this.teamRotations.length > 0, this.teamRotations, step => `
                <div>
                    <span>
                        <character-image 
                            gamecode="${this.gameCode}"
                            charactername="${step[0]}"
                            dimensions="${this.characterPFPSize}"
                            styles="margin: 5px 10px; border-radius: 100%;"
                            withcontainer="false">
                        </character-image>
                    </span>
                    <b style="margin-right: 8px;">
                        ${step[1]}
                    </b>
                </div> 
                `,
                `<h1 class="empty-details">...</h1>`
                )}  
            </div>
        </div>`;
    }
}

customElements.define('app-team-rotations', RotationsComponent);

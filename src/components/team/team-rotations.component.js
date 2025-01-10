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

        .rotation-step__character {
            vertical-align: middle;
        }

        .rotation-step__actions {
            /**/
        }

        .arrow-border {
            position: relative;
            border: 1px solid var(--text-color);
            border-radius: 10px;
            padding: 8px;
            /* font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; */
        }
        .arrow-border::before {/* Top arrow */
            position: absolute;
            content: "<";
            top: -0.9em;
        }
        .arrow-border::after {/* Bottom arrow */
            position: absolute;
            margin-left: -15px;
            content: ">";
            bottom: -0.70em;
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
                    <span class="rotation-step__character">
                        <app-character-image 
                            gamecode="${this.gameCode}"
                            charactername="${step[0]}"
                            dimensions="${this.characterPFPSize}"
                            styles="margin: 5px 10px; border-radius: 100%;"
                            resizingvalue="2"
                        >
                        </app-character-image>
                    </span>
                    <b class="rotation-step__actions">
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

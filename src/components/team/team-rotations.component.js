class RotationsComponent extends HTMLElement {

    // inputs
    gameCode = null;
    teamCode = null;

    teamRotations = null;

    componentStyle = `
    <style>
        .rotations-container {
            /**/
        }

        .rotation-step__character {
            /* !! class is used in RotationsUtils !! */
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
        this.gameCode = this.getAttribute('gamecode');
        this.teamCode = this.getAttribute('teamcode');

        this.teamRotations = rotationsRepository.getAllByTeam(this.gameCode, this.teamCode);
    }

    buildHTML() {
        return `
        <div class="container rotations-container">
            <h5 class="content-header">
                <img src="assets/svg/rotations.svg" height="20" style="margin-right: 5px;">
                Rotations
            </h5>
            <div style="font-size: 1.2em;">
                ${Utils.ngIf(this.teamRotations && this.teamRotations.length > 0, `
                ${Utils.ngFor(this.teamRotations, step => `
                <div>
                    <b class="rotation-step__actions">
                        ${step.action}
                    </b>
                </div>
                `)} 
                `,`
                <h1 class="empty-details">...</h1>`
                )}  
            </div>
        </div>`;
    }
}

customElements.define('app-team-rotations', RotationsComponent);

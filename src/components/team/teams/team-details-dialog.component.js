class TeamDetailsDialogComponent extends HTMLElement {

    static observedAttributes = ["teamcode"];

    // inputs
    gameCode = null;
    teamCode = null;

    componentStyle = `
    <style>
        .team-dialog.dialog-shown {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .team-dialog-content {
            width: 80%;
            background-size: 100% auto;
            background-position: top center;
            background-repeat: no-repeat;
        }

        @media (max-width: ${Constants.code.mobileMaxWidth}) {
            .team-dialog {
                padding-top: 0;
            }

            .team-dialog-content {
                width: 100%;
            }
        }
    </style>`;
    
    constructor() {
      super();
    }

    connectedCallback() {
        this.loadData();
        this.innerHTML = this.componentStyle + this.buildHTML();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.loadData()
        if (this.teamCode) {
            this.innerHTML = this.componentStyle + this.buildHTML();
        }
    }

    loadData() {
        this.gameCode = this.getAttribute('gamecode');
        this.teamCode = this.getAttribute('teamcode');
    }

    buildHTML() {
        return `
        <div class="gagu-dialog team-dialog" id="team-dialog-body">
            <div class="gagu-dialog-content team-dialog-content">

                <div class="gagu-dialog-header">
                    <h5>Team Details</h5>
                    <div class="close-dialog" onclick="closeDialog()">${Constants.unicode.times}</div>
                </div>

                ${Utils.ngIf(this.teamCode, `
                <app-team-details gamecode="${this.gameCode}" teamcode="${this.teamCode}" teamindex="1"></app-team-details>    
                `)}
            </div>
        </div>`;
    }
}

customElements.define('app-team-details-dialog', TeamDetailsDialogComponent);


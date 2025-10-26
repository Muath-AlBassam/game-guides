class TeamInfoComponent extends HTMLElement {

    gameCode = null;
    teamCode = null;

    characterPFPSize = 100;
    team = null;

    componentStyle = `
    <style>
        .team-info-container {
            background-color: transparent;
            border: 2px solid #33343a;
        }

        .team-info-container .name-container {
            padding: 5px;
            color: #ffffff;
            background-color: #33343a;
        }

        .team-info-container .ti-characters-container {
            display: flex;
            color: #ffffff;
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

        this.team = teamsRepository.getOne(this.gameCode, this.teamCode);
    }

    buildHTML() {
        return `
        <div class="team-info-container row" style="margin: auto;">
            <div class="name-container col-12 d-flex justify-content-center align-self-center pointer"
                onclick="openTeamDetailsDialog('${this.gameCode}', '${this.teamCode}')">
                <h5> ${this.team.name ?? '...'} </h5>
            </div>
            <div class="ti-characters-container col-12 d-flex justify-content-center">
                ${Utils.ngFor(this.team.characters, character => `
                <app-character-image 
                    gamecode="${this.gameCode}"
                    charactername="${character.name}"
                    dimensions="${this.characterPFPSize}"
                    styles="margin: 5px 10px;"
                    withdetailsdialog="true"
                    withelement="true"
                    mobilesizeratio="0.7"
                    mobileiconsizeratio="0.8"
                >
                </app-character-image>
                `)}
            </div>
        </div>
        `;
    }
}

customElements.define('app-team-info', TeamInfoComponent);

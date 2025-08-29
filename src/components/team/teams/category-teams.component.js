class CategoryTeamsComponent extends HTMLElement {

    // inputs
    gameCode = null;
    categoryCode = null;

    characterPFPSize = 80;
    teams = [];

    componentStyle = `
    <style>
        .cat-team-container {
            overflow: hidden;
        }

        .cat-team-container .team-column {
            border: 1px solid #33343a;
        }

        .cat-team-container .team-container {
            display: grid;
            grid-template-columns: 20% 80%;
            background-color: transparent;
        }

        .cat-team-container .team-container .team-name {
            height: 80px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #ffffff;
        }

        .cat-team-container .team-container .team-name .info-icon {
            cursor: pointer;
            padding: 0 3px;
        }

        .cat-team-container .team-container .team-characters {
            display: flex;
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
        this.categoryCode = this.getAttribute('categoryCode');
        this.teams = teamsRepository.getAllByCategory(this.gameCode, this.categoryCode);
    }

    buildHTML() {
        return `
        <div class="cat-team-container">
           <div class="row">
                ${Utils.ngFor(this.teams, team => `
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 team-column">
                    <div style="overflow: auto;">
                        <div class="team-container">
                            <h6 class="team-name">
                                ${team.name ?? '...'}
                                <span class="info-icon" onclick="openTeamDetailsDialog('${this.gameCode}', '${team.code}')">
                                    <img src="assets/svg/info.svg" height="15">
                                </span>
                            </h6>
                            
                            <div class="team-characters">
                                ${Utils.ngFor(team.characters, character => `
                                <app-character-image 
                                    gamecode="${this.gameCode}"
                                    charactername="${character.name}"
                                    dimensions="${this.characterPFPSize}"
                                    styles="margin: 5px 10px;"
                                    withelement="true"
                                    mobilesizeratio="0.8"
                                    mobileiconsizeratio="0.8"
                                >
                                </app-character-image>
                                `)}
                            </div>
                        </div>
                    </div>
                </div>
                `)}
           </div>
        </div>`;
    }
}

customElements.define('app-category-teams', CategoryTeamsComponent);

//------------------------------------------------------------------------------------

function openTeamDetailsDialog(gameCode, teamCode) {
    closeDialog();
    // trigger attributeChangedCallback & set data
    document.getElementById('team-dialog').setAttribute('gamecode', gameCode);
    document.getElementById('team-dialog').setAttribute('teamCode', teamCode);
    // add show class to dialog
    document.getElementById('team-dialog-body').classList.add('dialog-shown');
    initializePopovers();
}
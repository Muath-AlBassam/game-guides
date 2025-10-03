class CategoryTeamsComponent extends HTMLElement {

    // inputs
    gameCode = null;
    categoryCode = null;

    characterPFPSize = 100;
    teams = [];

    componentStyle = `
    <style>
        .cat-team-container {
            /**/
        }

        .cat-team-container .team-column {
            border: 2px solid #33343a;
        }

        .cat-team-container .team-container {
            background-color: transparent;
        }

        .cat-team-container .team-container .team-name {
            color: #ffffff;
            border-radius: 10px;
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
        <div class="cat-team-container row" style="margin: auto;">
            ${Utils.ngFor(this.teams, team => `
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 team-column">
                <div style="overflow: hidden;">
                    <div class="team-container row" style="margin: auto;">
                        <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12 d-flex justify-content-center align-self-center">
                            <button class="btn btn-secondary team-name" onclick="openTeamDetailsDialog('${this.gameCode}', '${team.code}')">
                                <h5> ${team.name ?? '...'} </h5>
                            </button>
                        </div>
                        <div class="col-xl-9 col-lg-9 col-md-9 col-sm-12 d-flex justify-content-center">
                            <div class="team-characters">
                                ${Utils.ngFor(team.characters, character => `
                                <app-character-image 
                                    gamecode="${this.gameCode}"
                                    charactername="${character.name}"
                                    dimensions="${this.characterPFPSize}"
                                    styles="margin: 5px 10px;"
                                    withelement="true"
                                    mobilesizeratio="0.7"
                                    mobileiconsizeratio="0.8"
                                >
                                </app-character-image>
                                `)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `)}
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
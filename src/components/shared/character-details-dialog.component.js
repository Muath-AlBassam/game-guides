// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal
class CharacterDetailsDialogComponent extends HTMLElement {

    // attribute that on change will trigger "attributeChangedCallback"
    // https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements#responding_to_attribute_changes
    static observedAttributes = ["character"];

    // inputs
    gameCode = null;
    character = null;

    characterPFPSize = 260;
    teamCharacterPFPSize = 80;
    charmd = null;
    buildmd = null;
    characterTeams = [];

    componentStyle = `
    <style>
        .character-details-dialog {
            /**/
        }

        .character-details-dialog-content {
            width: 60%;
            background-size: 100% auto;
            background-position: top center;
            background-repeat: no-repeat;
        }

        .character-teams-container {
            max-height: 320px;
            overflow-y: scroll;
        }
        .character-teams-container::-webkit-scrollbar {
            width: 2px;
        }

        .character-teams-container .team-column {
            border: 2px solid #33343a;
            overflow: hidden;
            padding: 0;
        }

        .character-teams-container .team-container {
            background-color: transparent;
        }

        .character-teams-container .team-container .team-name {
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #ffffff;
            text-align: center;
            border-radius: 10px;
        }

        .character-teams-container .team-container .team-characters {
            display: flex;
        }

        .empty-dialog {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100px;
        }

        @media (max-width: ${Constants.code.mobileMaxWidth}) {
            .character-details-dialog {
                padding-top: 0;
            }

            .character-details-dialog-content {
                width: 100%;
            }
        }
    </style>`;

    constructor() {
        super();
    }
  
    connectedCallback() {
        this.loadData()
        if (this.character) {
            this.innerHTML = this.componentStyle + this.buildHTML();
        }
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.loadData()
        if (this.character) {
            this.innerHTML = this.componentStyle + this.buildHTML();
        }
    }

    loadData() {
        this.gameCode = this.getAttribute('gamecode');
        this.character = this.getAttribute('character');
        if (this.character) {
            this.charmd = charactersRepository.getOne(this.gameCode, this.character);
            this.buildmd = buildsRepository.getByCharacter(this.gameCode, this.character);
            this.characterTeams = this.filterTeams();
        }
    }

    buildHTML() {
        return `
        <div class="gagu-dialog character-details-dialog" id="character-details-dialog-body">
            <div class="gagu-dialog-content character-details-dialog-content">

                <div class="gagu-dialog-header" style="margin-bottom: 2em;">
                    <h5>${this.character}'s Details</h5>
                    <div class="close-dialog" onclick="closeDialog()">${Constants.unicode.times}</div>
                </div>

                <div class="row gy-3 gx-3">
                    <div class="col-md-3">
                        <div class="gagu-box-shadow d-flex justify-content-center align-items-center p-3" style="width: 100%; height: 100%;">
                            <app-character-image 
                                gamecode="${this.gameCode}"
                                charactername="${this.character}"
                                dimensions="${this.characterPFPSize}"
                                withelement="true"
                                withtype="true"
                                imagestyle="card"
                                mobilesizeratio="0.6"
                            >
                            </app-character-image>
                        </div>
                    </div>
                    <div class="col-md-9">
                        <div class="gagu-box-shadow p-3" style="width: 100%; height: 100%;">
                            ${Utils.ngIf(this.buildmd, `
                            <h5 class="content-header" style="margin-top: 0;">
                                ${GameUtils.getWeaponsLabel(this.gameCode)}
                            </h5>
                            <div class="row">
                                ${Utils.ngFor(this.buildmd?.weapons, weapon => `
                                <div class="${!Utils.isMobile() && this.buildmd?.weapons?.length > 1 ? 'col-md-6' : 'col-md-12'}">
                                    <app-weapon-details gamecode="${this.gameCode}" weaponname="${weapon.name}" showadditionalinfo="false"></app-weapon-details>
                                </div>
                                `)}
                            </div>
                            
                            <h5 class="content-header">
                                ${GameUtils.getSetsLabel(this.gameCode)}
                            </h5>
                            <div class="row">
                                ${Utils.ngFor(this.buildmd?.sets, set => `
                                <div class="${!Utils.isMobile() && this.buildmd?.sets?.length > 2 ? 'col-md-6' : 'col-md-12'}">
                                    <app-set-details gamecode="${this.gameCode}" setname="${set.name}" piececount="${set.pieceCount}"></app-set-details>
                                </div>
                                `)}
                            </div>
                            `)}
                        </div>
                    </div>

                    ${Utils.ngIf(this.characterTeams?.length > 0, `
                    <div class="col-md-12">
                        <div class="gagu-box-shadow p-3" style="width: 100%; height: 100%;">
                            <h5 class="content-header" style="margin-top: 0;">
                                Teams
                                <span class="additional-text">(${this.characterTeams?.length})</span>
                            </h5>
                            <div class="character-teams-container row justify-content-center">
                                ${Utils.ngFor(this.characterTeams, team => `
                                <div class="col-xl-5 col-lg-5 col-md-5 col-sm-10 team-column m-1">
                                    <div class="team-container row" style="margin: auto;">
                                        <div class="col-xl-2 col-lg-2 col-md-2 col-sm-12 d-flex justify-content-center align-self-center">
                                            <button class="btn btn-secondary team-name" onclick="openTeamDetailsDialog('${this.gameCode}', '${team.code}')">
                                                <h6> ${team.name ?? '...'} </h6>
                                            </button>
                                        </div>
                                        <div class="col-xl-10 col-lg-10 col-md-10 col-sm-12 d-flex justify-content-center" style="background-color: #33343a;">
                                            <div class="team-characters">
                                                ${Utils.ngFor(team.characters, char => `
                                                <app-character-image 
                                                    gamecode="${this.gameCode}"
                                                    charactername="${char.name}"
                                                    dimensions="${this.teamCharacterPFPSize}"
                                                    styles="margin: 5px 10px;"
                                                    withdetailsdialog="true"
                                                    mobilesizeratio="0.7"
                                                >
                                                </app-character-image>
                                                `)}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                `)}
                                ${Utils.ngIf(!Utils.isMobile() && this.characterTeams?.length > 1 && this.characterTeams?.length % 2 != 0, `
                                <div class="col-xl-5 col-lg-5 col-md-5 col-sm-10 m-1"></div>
                                `)}
                            </div>
                        </div>
                    </div>
                    `)}
                </div>
            </div>
        </div>`;
    }

    filterTeams() {
        let allTeams = teamsRepository.getAll(this.gameCode);
        return allTeams.filter(team => {
            return team.characters.some(ch => {
                let all = [];
                all.push(ch.name);
                if (ch.replacements && ch.replacements.length > 0) {
                    all.push(...ch.replacements);
                }
                return all.includes(this.character);
            });
        });
    }
}

customElements.define('app-character-details-dialog', CharacterDetailsDialogComponent);

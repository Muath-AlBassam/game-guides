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
            width: 40%;
            background-size: 100% auto;
            background-position: top center;
            background-repeat: no-repeat;
        }

        .sets-list {
            max-height: 260px; /* 3 items (256) + extra */
            overflow-y: scroll;
        }
        .sets-list::-webkit-scrollbar {
            width: 1px;
        }

        .empty-dialog {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100px;
        }

        .character-team-container .team-column {
            border: 2px solid #33343a;
        }

        .character-team-container .team-container {
            background-color: transparent;
        }

        .character-team-container .team-container .team-name {
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #ffffff;
        }

        .character-team-container .team-container .team-name .info-icon {
            cursor: pointer;
            padding: 0 3px;
        }

        .character-team-container .team-container .team-characters {
            display: flex;
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

                <div class="row">
                    <div class="col-md-4 d-flex justify-content-center">
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
                    <div class="col-md-8">
                        ${Utils.ngIf(this.buildmd, `
                        <h5 class="content-header" style="${Utils.isMobile() ? '' : 'margin-top: 0;'}">
                            ${GameUtils.getWeaponsLabel(this.gameCode)}
                        </h5>
                        <app-weapon-details gamecode="${this.gameCode}" weaponname="${this.buildmd.weapon.name}" showadditionalinfo="false"></app-weapon-details>
                        
                        <h5 class="content-header">
                            ${GameUtils.getSetsLabel(this.gameCode)}
                        </h5>
                        <div class="sets-list">
                            ${Utils.ngFor(this.buildmd?.sets, set => `
                            <app-set-details gamecode="${this.gameCode}" setname="${set.name}" piececount="${set.pieceCount}"></app-set-details>
                            `)}
                        </div>
                        `)}
                    </div>
                </div>

                <h5 class="content-header" style="margin-top: 2em;">
                    Teams
                </h5>
                <div class="character-team-container row" style="margin: auto;">
                    ${Utils.ngFor(this.characterTeams, team => `
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 team-column">
                        <div style="overflow: auto;">
                            <div class="team-container row" style="margin: auto;">
                                <div class="col-12 d-flex justify-content-center">
                                    <div class="team-characters">
                                        ${Utils.ngFor(team.characters, char => `
                                        <app-character-image 
                                            gamecode="${this.gameCode}"
                                            charactername="${char}"
                                            dimensions="${this.teamCharacterPFPSize}"
                                            styles="margin: 5px 10px;"
                                            mobilesizeratio="0.5"
                                        >
                                        </app-character-image>
                                        `)}
                                    </div>
                                </div>
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
        let mappedTeamsList = [];
        // map all characters' names into a list
        allTeams.forEach(team => {
            let teamCharactersNames = [];
            // add names from team characters list
            if (team.characters) {
                team.characters.forEach(ch => {
                    if (ch.replacements && ch.replacements.length > 0) {
                        teamCharactersNames.push([ch.name, ...ch.replacements]);
                    } else {
                        teamCharactersNames.push(ch.name);
                    }
                });
                mappedTeamsList.push({
                    name: team.name,
                    characters: teamCharactersNames
                });
            }
        })
        // filter list
        return mappedTeamsList.filter(mappedTeam => {
            return mappedTeam.characters.some(char => {
                return char.includes(this.character);
            })
        });
    }
}

customElements.define('app-character-details-dialog', CharacterDetailsDialogComponent);

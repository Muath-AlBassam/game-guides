class TeamCharacterTeamsComponent extends HTMLElement {

    static observedAttributes = ["character"];

    // inputs
    gameCode = null;
    character = null;

    characterPFPSize = 125;
    teamCharacterPFPSize = 80;
    charmd = null;
    rolemd = null;
    elementmd = null;
    raritymd = null;
    characterTeams = [];

    componentStyle = `
    <style>
        .teams-dialog {
            padding-top: 15vh;
        }

        .teams-dialog-content {
            width: 30%;
        }

        .teams-table-container {
            max-height: 440px;
            overflow: auto;
            padding: 0;
            margin-top: 25px;
        }

        .teams-table-container .team-name-cell {
            width: 150px;
            text-align: center;
        }

        @media (max-width: ${Constants.code.mobileMaxWidth}) {
            .teams-dialog {
                padding-top: 0;
            }

            .teams-dialog-content {
                width: 100%;
            }

            .teams-table-container .team-name {
                font-size: 1em;
            }
        }
    </style>`;

    constructor() {
        super();
    }
  
    connectedCallback() {
        this.loadData();
        if (this.character) {
            this.innerHTML = this.componentStyle + this.buildHTML();
        }
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.loadData();
        if (this.character) {
            this.innerHTML = this.componentStyle + this.buildHTML();
        }
    }

    loadData() {
        this.gameCode = Utils.getGameFromUrl();
        this.character = this.getAttribute('character');
        if (this.character) {
            this.charmd = charactersRepository.getOne(this.gameCode, this.character);
            this.rolemd = rolesRepository.getOne(this.gameCode, this.charmd.role);
            this.elementmd = elementsRepository.getOne(this.gameCode, this.charmd.element);
            this.raritymd = rarityRepository.getOne(this.gameCode, this.charmd.rarity);
        }
        this.characterTeams = this.filterTeams();
    }

    buildHTML() {
        return `
        <div class="gagu-dialog teams-dialog" id="teams-dialog-body">
            <div class="gagu-dialog-content teams-dialog-content">
                <div class="close-dialog" onclick="closeDialog()">${Constants.unicode.times}</div>
                <div>
                    <div>
                        <div class="center-content" style="margin-top: 20px;">
                            <div class="character-container">
                                <app-character-image 
                                    gamecode="${this.gameCode}" 
                                    charactername="${this.character}"
                                    dimensions="${this.characterPFPSize}"
                                    classes="character-image" 
                                    styles="border-radius: 100%;" 
                                    withbackgroundclass="true" 
                                >
                                </app-character-image>
                            </div>
                        </div>
                        <div class="center-content">
                            ${Utils.ngIf(this.charmd.role, `<img src="${this.rolemd.imageUrl}" height="30" title="${this.rolemd.name}" style="margin-right: 5px;">`)}
                            <h5>${this.character}</h5>
                            ${Utils.ngIf(this.charmd.element, `<img src="${this.elementmd.imageUrl}" height="30" title="${this.elementmd.name}" style="margin-left: 5px;">`)}
                        </div>
                        <div class="center-content">
                            ${Utils.ngIf(this.charmd.rarity, `<img src="${this.raritymd.imageUrl}" height="30" title="${this.raritymd.label}" style="margin: 0 5px;">`)}
                        </div>
                    </div>
                    <div class="teams-table-container">
                        <table class="table table-striped table-bordered" style="margin: 0;">
                            <tbody>
                                ${Utils.ngForIf(this.characterTeams.length > 0, this.characterTeams, team => `
                                <tr>
                                    <td class="team-name-cell">
                                        <h5 class="team-name">${team.name ?? "..."}</h5>
                                    </td>
                                    <td style="display: flex; text-align: center">
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
                                    </td>
                                </tr>  
                                `, `
                                <div style="display: flex; justify-content: center;">
                                    <img src="assets/svg/shrug.svg" height="${Utils.isMobile() ? '150' : '300'}" />
                                </div>
                                `)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        `;
    }

    filterTeams() {
        let allTeams = teamsRepository.getAllMain(this.gameCode);

        if (this.character == null) {
            return [];
        }

        let mappedTeamsList = [];
        // map all characters' names into a list
        allTeams.forEach((team, code) => {
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
            // add names from team variations list
            if (team.variations) {
                team.variations.forEach(vari => {
                    let variationsCharactersNames = [];
                    vari.characters.forEach(vc => {
                        variationsCharactersNames.push(vc)
                    });
                    mappedTeamsList.push({
                        name: vari.name,
                        characters: variationsCharactersNames
                    })
                })
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

customElements.define('app-team-character-teams', TeamCharacterTeamsComponent);

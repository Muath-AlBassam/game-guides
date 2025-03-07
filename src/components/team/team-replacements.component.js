class ReplacementsComponent extends HTMLElement {

    // inputs
    gameCode = null;
    teamName = null;

    characterPFPSize = 80;
    mobileSizeRatio = 0.5;
    currentTeam = null;

    componentStyle = `
    <style>
        .replacements-container {
            /**/
        }

        .replacements-container .none {
            margin: 5px 10px;
            display: flex;
            justify-content: center;
            width: ${this.characterPFPSize}px;
        }

        @media (max-width: ${Constants.code.mobileMaxWidth}) {
            .replacements-container .none {
                width: ${this.characterPFPSize * this.mobileSizeRatio}px;
            }
            .none {}
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

        this.currentTeam = teamsRepository.getTeam(this.gameCode, this.teamName);
    }

    buildHTML() {
        return `
        <div class="container replacements-container">
            <h5 class="content-header">
                <img src="assets/svg/replacements.svg" height="20" style="margin-right: 5px;">
                Replacements
            </h5>
            <table class="table table-striped table-bordered">
                <tbody>
                    ${Utils.ngFor(this.currentTeam.characters, character => `
                    <tr>
                        <td style="width: 50px; text-align: center">
                            <app-character-image 
                                gamecode="${this.gameCode}"
                                charactername="${character?.name}"
                                dimensions="${this.characterPFPSize}"
                                styles="margin: 5px 10px;"
                                mobilesizeratio="0.5"
                            >
                            </app-character-image>
                        </td>
                        <td>
                            ${Utils.ngForIf(character.replacements && character.replacements.length > 0, character.replacements, rep => `
                            <app-character-image 
                                gamecode="${this.gameCode}"
                                charactername="${rep}"
                                dimensions="${this.characterPFPSize}"
                                styles="margin: 5px 10px;"
                                withbuilddialog="true"
                                withelement="true"
                                mobilesizeratio="${this.mobileSizeRatio}"
                                mobileiconsizeratio="${this.mobileSizeRatio}"
                            >
                            </app-character-image>
                            `,
                            `<div class="none">
                                <h1 class="empty-details" style="color: #000">${Constants.unicode.times}</h1>
                            </div>`
                            )}
                        </td>
                    </tr>
                    `)}
                </tbody>
            </table>
        </div>`;
    }
}

customElements.define('app-team-replacements', ReplacementsComponent);

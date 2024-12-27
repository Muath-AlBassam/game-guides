class ReplacementsComponent extends HTMLElement {

    // inputs
    gameCode = null;
    teamName = null;

    characterPFPSize = 80;
    currentTeam = null;

    componentStyle = `
    <style>
        .replacements-container {
            /**/
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

        this.currentTeam = TeamsRepository.getTeam(this.gameCode, this.teamName);
    }

    buildHTML() {
        return `
        <div class="container replacements-container">
            <h5 class="content-header">
                <img src="assets/svg/replacements.svg" height="20" class="action">
                Replacements
            </h5>
            <table class="table table-striped table-bordered">
                <tbody>
                    ${Utils.ngFor(this.currentTeam.characters, character => `
                    <tr>
                        <td style="width: 50px; text-align: center">
                            <character-image 
                                gamecode="${this.gameCode}"
                                charactername="${character?.name}"
                                dimensions="${this.characterPFPSize}"
                                styles="margin: 5px 10px;">
                            </character-image>
                        </td>
                        <td>
                            ${Utils.ngForIf(character.replacements && character.replacements.length > 0, character.replacements, rep => `
                            <character-image 
                                gamecode="${this.gameCode}"
                                charactername="${rep}"
                                dimensions="${this.characterPFPSize}"
                                styles="margin: 5px 10px;"
                                withbuilddialog="true"
                                withelement="true">
                            </character-image>
                            `,
                            `<div style="margin: 5px 10px; width: ${this.characterPFPSize}px; display: flex; justify-content: center;">
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

class VariationsComponent extends HTMLElement {

    // inputs
    gameCode = null;
    teamName = null;

    characterPFPSize = 80;
    activeGame = null;
    currentTeam = null;

    componentStyle = `
    <style>
        .variations-container {
            /**/
        }

        .variation-name {
            width: 80px;
            display: grid;
            grid-template-columns: 80% 20%;
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

        this.activeGame = GamesRepository.getGame(this.gameCode);
        this.currentTeam = TeamsRepository.getTeam(this.gameCode, this.teamName);
    }

    buildHTML() {
        return `
        <div class="container variations-container">
            <div>
                <h5 class="content-header">
                    <img src="assets/svg/variations.svg" height="20" class="action">
                    Variations
                </h5>
            </div>
            <div style="height: ${107 * this.activeGame.teamSize}px; overflow: auto;">
                <table class="table table-striped table-bordered">
                    <tbody>
                        ${Utils.ngForIf(this.currentTeam.variations, this.currentTeam.variations, vari => `
                        <tr>
                            <td style="display: flex; text-align: center">
                                <span class="variation-name">
                                    ${Utils.ngIf(vari.name, `<h6>${vari.name}</h6>`)}
                                    <app-notes-popover teamname="${vari.name}" position="inline"></app-notes-popover>
                                </span>
                                
                                ${Utils.ngFor(vari.characters, character => `
                                <app-character-image 
                                    gamecode="${this.gameCode}"
                                    charactername="${character}"
                                    dimensions="${this.characterPFPSize}"
                                    styles="margin: 5px 10px;"
                                    withbuilddialog="true"
                                    withelement="true">
                                </app-character-image>
                                `)}
                            </td>
                        </tr>
                        `,
                        `<h1 class="empty-details">...</h1>`
                        )}
                    </tbody>
                </table>
            </div>
        </div>`;
    }
}

customElements.define('app-team-variations', VariationsComponent);

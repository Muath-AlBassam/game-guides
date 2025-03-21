class VariationsComponent extends HTMLElement {

    // inputs
    gameCode = null;
    teamCode = null;

    characterPFPSize = 80;
    activeGame = null;
    variations = [];

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
        this.gameCode = this.getAttribute('gamecode');
        this.teamCode = this.getAttribute('teamcode');

        this.activeGame = gamesRepository.getOne(this.gameCode);
        this.variations = teamsRepository.getAllByParent(this.gameCode, this.teamCode);
    }

    buildHTML() {
        return `
        <div class="container variations-container">
            <h5 class="content-header">
                <img src="assets/svg/variations.svg" height="20" style="margin-right: 5px;">
                Variations
            </h5>
            ${Utils.ngIf(this.variations && this.variations?.size > 0, `
            <div style="overflow: auto;">
                <table class="table table-striped table-bordered">
                    <tbody>
                        ${Utils.ngForMap(this.variations, vari => `
                        <tr>
                            <td style="display: flex; text-align: center">
                                <span class="variation-name">
                                    ${Utils.ngIf(vari.name, `<h6>${vari.name}</h6>`)}
                                    <app-notes-popover teamcode="${vari.code}" position="inline"></app-notes-popover>
                                </span>
                                
                                ${Utils.ngFor(vari.characters, character => `
                                <app-character-image 
                                    gamecode="${this.gameCode}"
                                    charactername="${[character.name, ...(character.replacements ?? [])]}"
                                    dimensions="${this.characterPFPSize}"
                                    styles="margin: 5px 10px;"
                                    withbuilddialog="true"
                                    withelement="true"
                                    mobilesizeratio="0.5"
                                    mobileiconsizeratio="0.5"
                                >
                                </app-character-image>
                                `)}
                            </td>
                        </tr>
                        `)}
                    </tbody>
                </table>
            </div>    
            `,
            `<h1 class="empty-details">...</h1>`)}
        </div>`;
    }
}

customElements.define('app-team-variations', VariationsComponent);

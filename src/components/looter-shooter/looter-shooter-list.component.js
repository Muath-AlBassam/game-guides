class LooterShooterCharacterListComponent extends HTMLElement {

    gameCode = null;
    characters = null;

    componentStyle = `
    <style>
        .characters-container {
            grid-gap: 8px 8px;
            display: grid;
            grid-template-columns: repeat(auto-fill, 160px);
            justify-content: space-between;
            margin-top: 24px;
        }

        @media (max-width: ${Constants.code.mobileMaxWidth}) {
            .characters-container {
                padding: 0 1em;
            }
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
        this.characters = charactersRepository.getAllOrdered(this.gameCode);
    }

    buildHTML() {
        return `
        <div class="row" id="team-characters-header">
            <div class="col-md-12">
                <div class="content-header">
                    Characters
                </div>
            </div>
        </div>

        <div class="characters-container" id="characters-container">
            ${Utils.ngIf(this.characters.length > 0, `
            ${Utils.ngFor(this.characters, charmd => `
            <app-character-image 
                gamecode="${this.gameCode}"
                charactername="${charmd.name}"
                dimensions="160"
                withdetailsdialog="true"
                withelement="true"
                withtype="true"
                imagestyle="card"
            >
            </app-character-image>
            `)}
            `, `
            <div class="char-card">
                <img src="assets/svg/shrug.svg" width="160" />
            </div>
            `)}
        </div>
        `;
    }
}

customElements.define('app-ls-character-list', LooterShooterCharacterListComponent);

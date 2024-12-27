class TeamCharactersComponent extends HTMLElement {

    characterPFPSize = 80;
    gameCode = null;
    characters = null;

    componentStyle = `
    <style>
        .characters__container {
            background-color: #2c2d33;
            padding: 0.5em;
            user-select: none;
        }

        .characters__slider {
        }
    </style>`;

    constructor() {
      super();
    }
  
    connectedCallback() {
        this.loadData();
        this.innerHTML = this.componentStyle + this.buildHTML();
        
        tns({
            container: '.characters__slider',
            fixedWidth: this.characterPFPSize + 20,
            controls: false,
            navPosition: 'bottom',
            mouseDrag: true,
            loop: false,
        });
    }

    loadData() {
        this.gameCode = Utils.getGameFromUrl();
        this.characters = CharactersRepository.getSortedCharactersList(this.gameCode);
    }

    buildHTML() {
        return `
        <div class="row">
            <div class="col-md-12">
                <div class="content-header">Characters</div>
            </div>
        </div>
        <div class="characters__container">
            <div class="characters__slider draggable">
                ${Utils.ngForMap(this.characters, charmd => `
                    <character-image 
                        gamecode="${this.gameCode}"
                        charactername="${charmd.name}"
                        dimensions="${this.characterPFPSize}"
                        styles="margin: 5px 10px;"
                        withbuilddialog="true"
                        withelement="true">
                    </character-image>
                `)}
            </div>
        </div>
        `;
    }
}

customElements.define('app-team-characters', TeamCharactersComponent);

class TeamCharactersComponent extends HTMLElement {

    characterPFPSize = 80;
    gameCode = null;
    allCharacters = null;
    characters = null;

    componentStyle = `
    <style>
        .characters__container {
            background-color: #2c2d33;
            padding: 0.5em;
        }

        .characters__slider {
            user-select: none;
        }
    </style>`;

    constructor() {
      super();
    }
  
    connectedCallback() {
        this.loadData();
        this.innerHTML = this.componentStyle + this.buildHTML();
        this.createSlider();

        window.addEventListener('search-team', (event) => {
            this.characters = this.filterCharacters(event.detail);
            this.innerHTML = this.componentStyle + this.buildHTML();
            this.createSlider();
        })
    }

    loadData() {
        this.gameCode = Utils.getGameFromUrl();
        this.allCharacters = CharactersRepository.getSortedCharactersList(this.gameCode);
        this.characters = this.allCharacters;
    }

    createSlider() {
        tns({
            container: '.characters__slider',
            fixedWidth: this.characterPFPSize + 20,
            controls: false,
            navPosition: 'bottom',
            mouseDrag: true,
            loop: false,
        });
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

    filterCharacters(searchTerm) {
        const filteredList = [...this.allCharacters].filter((charMapKeyValue) => {
            // 0: key, 1: value
            let char = charMapKeyValue[0];
            return char.toLowerCase().includes(searchTerm.toLowerCase());
        })
        return new Map(filteredList);
    }
}

customElements.define('app-team-characters', TeamCharactersComponent);

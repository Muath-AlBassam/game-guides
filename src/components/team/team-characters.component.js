class TeamCharactersComponent extends HTMLElement {

    characterPFPSize = 80;
    gameCode = null;
    allCharacters = null;
    characters = null;

    searchTerm = '';
    searchRarity = '';
    searchElement = '';
    searchRole = '';

    componentStyle = `
    <style>
        .characters-slider-container {
            background-color: #2c2d33;
            padding: 0.5em;
        }

        .characters-slider-container .characters-slider {
            user-select: none;
        }

        .characters-container {
            background-color: #2c2d33;
            padding: 15px;
            grid-gap: 15px 15px;
            display: grid;
            grid-template-columns: repeat(auto-fill, 160px);
            justify-content: space-between;
            margin-top: 24px;
        }
    </style>`;

    constructor() {
      super();
    }
  
    connectedCallback() {
        this.loadData();
        this.innerHTML = this.componentStyle + this.buildHTML();
        this.createSlider();
        this.listenToEvents();
    }

    loadData() {
        this.gameCode = Utils.getGameFromUrl();
        this.allCharacters = CharactersRepository.getSortedCharactersList(this.gameCode);
        this.characters = this.allCharacters;
        this.rarities = RarityRepository.getAllRarities(this.gameCode);
    }

    createSlider() {
        tns({
            container: '.characters-slider',
            fixedWidth: this.characterPFPSize + 20,
            controls: false,
            navPosition: 'bottom',
            mouseDrag: true,
            loop: false,
        });
    }

    listenToEvents() {
        window.addEventListener('search-team', (event) => {
            this.searchTerm = event.detail;
            this.filterListAndReloadHTML();
        });
        window.addEventListener('search-rarity', (event) => {
            this.searchRarity = event.detail;
            this.filterListAndReloadHTML();
        });
        window.addEventListener('search-element', (event) => {
            this.searchElement = event.detail;
            this.filterListAndReloadHTML();
        });
        window.addEventListener('search-role', (event) => {
            this.searchRole = event.detail;
            this.filterListAndReloadHTML();
        });
    }

    filterListAndReloadHTML() {
        this.characters = this.filterCharacters();
        document.getElementById('team-characters-header').innerHTML = this.buildHeader();
        document.getElementById('characters-slider-container').innerHTML = this.buildSliderListHTML();
        document.getElementById('characters-container').innerHTML = this.buildListHTML();
        this.createSlider();
    }

    buildHTML() {
        return `
        <div class="row" id="team-characters-header">
            ${this.buildHeader()}
        </div>
        <app-team-search></app-team-search>
        <div class="characters-slider-container" id="characters-slider-container">
           ${this.buildSliderListHTML()}
        </div>

        <div class="characters-container" id="characters-container">
           ${this.buildListHTML()}
        </div>
        `;
    }

    buildHeader() {
        return `
        <div class="col-md-12">
            <div class="content-header">
                Characters
                <span class="additional-text">Showing (${this.characters?.size}) Characters</span>
            </div>
        </div>
        `;
    }

    buildSliderListHTML() {
        return `
        <div class="characters-slider draggable">
            ${Utils.ngIf(this.characters.size > 0, `
            ${Utils.ngForMap(this.characters, charmd => `
            <app-character-image 
                gamecode="${this.gameCode}"
                charactername="${charmd.name}"
                dimensions="${this.characterPFPSize}"
                styles="margin: 5px 10px;"
                withbuilddialog="true"
                withelement="true"
            >
            </app-character-image>
            `)}
            `, `
            <app-character-image 
                gamecode="${this.gameCode}"
                charactername="..."
                dimensions="${this.characterPFPSize}"
                styles="margin: 5px 10px;"
                withbuilddialog="true"
                withelement="true"
            >
            </app-character-image>
            `)}
        </div>
        `;
    }

    buildListHTML() {
        return `
            ${Utils.ngIf(this.characters.size > 0, `
            ${Utils.ngForMap(this.characters, charmd => `
            <app-character-image 
                gamecode="${this.gameCode}"
                charactername="${charmd.name}"
                dimensions="160"
                withbuilddialog="true"
                withelement="true"
                imagestyle="card"
            >
            </app-character-image>
            `)}
            `, `
            <div class="char-card">
                <img src="assets/svg/shrug.svg" width="160" />
            </div>
            `)}
        `;
    }

    filterCharacters() {
        const filteredList = [...this.allCharacters].filter((charMapKeyValue) => {
            // 0: key, 1: value
            let charKey = charMapKeyValue[0];
            let charVal = charMapKeyValue[1];

            let filterByName = charKey.toLowerCase().includes(this.searchTerm.toLowerCase());
            let filterByRarity = this.searchRarity ? charVal.rarity == this.searchRarity : true;
            let filterByElement = this.searchElement ? charVal.element == this.searchElement : true;
            let filterByRole = this.searchRole ? charVal.role == this.searchRole : true;

            return filterByName && filterByRarity && filterByElement && filterByRole;
        })
        return new Map(filteredList);
    }
}

customElements.define('app-team-characters', TeamCharactersComponent);

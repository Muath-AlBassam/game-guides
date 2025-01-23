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

        .characters-container .char-card {
            width: 160px;
            height: 219px;
            transform: scale(1);
            overflow: hidden;
            cursor: pointer;
        }
        .characters-container .char-card .char-img {
            display: block;
            margin: auto;
            transition: all 0.3s ease-out;
        }
        .characters-container .char-card:hover .char-img {
            transform: scale(1.1);
        }

        .characters-container .char-card .ele-img {
            position: absolute;
            background-color: #23242a;
            padding: 2px;
            width: 29px;
            height: 29px;
        }

        .characters-container .char-card .role-img {
            position: absolute;
            background-color: #23242a;
            padding: 2px;
            width: 29px;
            height: 29px;
            top: 29px;
        }

        .characters-container .char-card .smoky-overlay {
            position: absolute;
            bottom: 0; /* Position the overlay at the bottom */
            left: 0;
            width: 100%;
            height: 30%; /* Adjust this to control how far up the gradient goes */
            background: linear-gradient(to top, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0));
            /*mix-blend-mode: lighten;*/
            pointer-events: none;
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
        document.getElementById('characters-slider-container').innerHTML = this.buildSliderListHTML();
        document.getElementById('characters-container').innerHTML = this.buildListHTML();
        this.createSlider();
    }

    buildHTML() {
        return `
        <div class="row">
            <div class="col-md-12">
                <div class="content-header">
                    Characters
                    <span class="additional-text">Showing (${this.characters?.size}) Characters</span>
                </div>
            </div>
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
            <div class="char-card ${this.gameCode+'-rarity-'+charmd.rarity}">
                <img
                    class="ele-img"
                    src="${ElementsRepository.getElement(this.gameCode, charmd.element).imageUrl ?? Constants.images.transparent}"
                    width="25"
                    height="25"/>
                <img
                    class="role-img"
                    src="${RolesRepository.getRole(this.gameCode, charmd.role).imageUrl ?? Constants.images.transparent}"
                    width="25"
                    height="25"/>
                <img
                    class="char-img"
                    src="${charmd.cardImageUrl}" 
                    alt="${charmd.name ?? '?'}" 
                    title="${charmd.name ?? '?'}"
                    width="160"
                    onclick="openBuildDialog('${charmd.name}')"
                />
                <div class="smoky-overlay"></div>
            </div>
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

class CharacterListComponent extends HTMLElement {

    characterPFPSize = 80;
    gameCode = null;
    allCharacters = null;
    characters = null;

    searchTerm = '';
    searchRarity = '';
    searchElement = '';
    searchRole = '';
    searchWeaponType = '';

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
        this.listenToEvents();
    }

    loadData() {
        this.gameCode = this.getAttribute('gamecode');
        this.allCharacters = charactersRepository.getAllOrdered(this.gameCode);
        this.characters = this.allCharacters;
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
        window.addEventListener('search-weapon-type', (event) => {
            this.searchWeaponType = event.detail;
            this.filterListAndReloadHTML();
        });
        window.addEventListener('search-reset', (event) => {
            this.searchTerm = '';
            this.searchRarity = '';
            this.searchElement = '';
            this.searchRole = '';
            this.searchWeaponType = '';
            this.filterListAndReloadHTML();
        });
    }

    filterListAndReloadHTML() {
        this.characters = this.filterCharacters();
        if (document.getElementById('characters-container') != null) {
            document.getElementById('team-characters-header').innerHTML = this.buildHeader();
            document.getElementById('characters-container').innerHTML = this.buildListHTML();
        }
    }

    buildHTML() {
        return `
        <div class="row" id="team-characters-header">
            ${this.buildHeader()}
        </div>
        <app-team-search
            gamecode="${this.gameCode}" 
            showrarities="true"
            showelements="true"
            showroles="true"
            showeapontypes="${this.gameCode == Constants.games.GI}"
            showresetbutton="true">
        </app-team-search>

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

    buildListHTML() {
        return `
            ${Utils.ngIf(this.characters.size > 0, `
            ${Utils.ngFor(this.characters, charmd => `
            <app-character-image 
                gamecode="${this.gameCode}"
                charactername="${charmd.name}"
                dimensions="160"
                withbuilddialog="true"
                withelement="true"
                withrole="true"
                imagestyle="card"
                showteamicon="true"
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

            let filterByName = charVal.name.toLowerCase().includes(this.searchTerm.toLowerCase());
            let filterByRarity = this.searchRarity ? charVal.rarity == this.searchRarity : true;
            let filterByElement = this.searchElement ? charVal.element == this.searchElement : true;
            let filterByRole = this.searchRole ? charVal.role == this.searchRole : true;
            let filterByWeaponType = this.searchWeaponType ? charVal.weaponType == this.searchWeaponType : true;

            return filterByName && filterByRarity && filterByElement && filterByRole && filterByWeaponType;
        })
        return new Map(filteredList);
    }
}

customElements.define('app-character-list', CharacterListComponent);

class TeamWeaponsComponent extends HTMLElement {

    weaponsLabel = '';

    gameCode = null;
    allWeapons = null;
    weapons = null;

    searchTerm = '';
    searchRarity = '';
    searchType = '';

    componentStyle = `
    <style>
        /* */
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
        this.weaponsLabel = GameUtils.getWeaponsLabel(this.gameCode) + 's'; // 's' for plural
        this.allWeapons = weaponsRepository.getAllOrdered(this.gameCode);
        this.weapons = this.allWeapons;
        this.rarities = rarityRepository.getAll(this.gameCode);
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
        window.addEventListener('search-weapon-type', (event) => {
            this.searchType = event.detail;
            this.filterListAndReloadHTML();
        });
        window.addEventListener('search-reset', (event) => {
            this.searchTerm = '';
            this.searchRarity = '';
            this.searchType = '';
            this.filterListAndReloadHTML();
        });
    }

    filterListAndReloadHTML() {
        this.weapons = this.filterWeapons();
        if (document.getElementById('weapons-container') != null) {
            document.getElementById('weapon-list-header').innerHTML = this.buildHeader();
            document.getElementById('weapons-container').innerHTML = this.buildListHTML();
        }
    }

    buildHTML() {
        return `
        <div class="row" id="weapon-list-header">
            ${this.buildHeader()}
        </div>

        <app-team-search gamecode="${this.gameCode}" showeapontypes="true" showrarities="true" showresetbutton="true" placeholder="Search ${this.weaponsLabel}..."></app-team-search>

        <div id="weapons-container">
            ${this.buildListHTML()}
        </div>`;
    }

    buildHeader() {
        return `
        <div class="col-md-12">
            <div class="content-header">
                ${this.weaponsLabel}
                <span class="additional-text">Showing (${this.weapons?.size}) ${this.weaponsLabel}</span>
            </div>
        </div>
        `;
    }

    buildListHTML() {
        return `
            ${Utils.ngIf(this.weapons.size > 0, `
            <div class="row">
            ${Utils.ngFor(this.weapons, weapon => `
            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 mt-3">
                <app-team-weapon-details gamecode="${this.gameCode}" weaponname="${weapon.name}"></app-team-weapon-details>
            </div>
            `)}
            </div>
            `, `
            <div class="char-card">
                <img src="assets/svg/shrug.svg" width="160" />
            </div>
            `)}
        `;
    }

    filterWeapons() {
        const filteredList = [...this.allWeapons].filter((weaponMapKeyValue) => {
            // 0: key, 1: value
            let weaponVal = weaponMapKeyValue[1];

            let filterByName = weaponVal.name.toLowerCase().includes(this.searchTerm.toLowerCase());
            let filterByRarity = this.searchRarity ? weaponVal.rarity == this.searchRarity : true;
            let filterByType = this.searchType ? weaponVal.type == this.searchType : true;

            return filterByName && filterByRarity && filterByType;
        })
        return new Map(filteredList);
    }
}

customElements.define('app-team-weapons', TeamWeaponsComponent);

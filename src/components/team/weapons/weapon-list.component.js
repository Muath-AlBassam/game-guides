class WeaponListComponent extends HTMLElement {

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
        window.addEventListener('search-type', (event) => {
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

        <app-team-search gamecode="${this.gameCode}" showtypes="true" showrarities="true" showresetbutton="true" placeholder="Search ${this.weaponsLabel}..."></app-team-search>

        <div id="weapons-container">
            ${this.buildListHTML()}
        </div>`;
    }

    buildHeader() {
        return `
        <div class="col-md-12">
            <div class="content-header">
                ${this.weaponsLabel}
                <span class="additional-text">Showing (${this.weapons?.length}) ${this.weaponsLabel}</span>
            </div>
        </div>
        `;
    }

    buildListHTML() {
        return `
            ${Utils.ngIf(this.weapons.length > 0, `
            <div class="row">
            ${Utils.ngFor(this.weapons, weapon => `
            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 mt-3">
                <app-weapon-details gamecode="${this.gameCode}" weaponname="${weapon.name}"></app-weapon-details>
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
        return this.allWeapons.filter(weapon => {
            let filterByName = weapon.name.toLowerCase().includes(this.searchTerm.toLowerCase());
            let filterByRarity = this.searchRarity ? weapon.rarity == this.searchRarity : true;
            let filterByType = this.searchType ? weapon.type == this.searchType : true;

            return filterByName && filterByRarity && filterByType;
        })
    }
}

customElements.define('app-weapon-list', WeaponListComponent);

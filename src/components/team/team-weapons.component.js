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
        .weapon-container {
            background-color: #36373d;
            border: 2px solid #484950;
            grid-gap: 0;
            align-items: center;
            display: grid;
            grid-template-columns: 90px calc(100% - 80px);
            justify-content: space-between;
            width: 100%;
        }

        .weapon-container .weapon-image {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 80px;
            width: 80px;
        }

        .weapon-container .weapon-info {
            align-items: center;
            display: flex;
        }

        .weapon-container .weapon-info .weapon-name {
            margin-bottom: 5px;
        }

        .weapon-container .weapon-info .weapon-metadata {
            font-size: 15px;
            line-height: 25px;
            margin-top: 5px;
            margin-bottom: 0;
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
        this.weaponsLabel = GameUtils.getWeaponsLabel(this.gameCode) + 's'; // 's' for plural
        this.allWeapons = weaponsRepository.getAll(this.gameCode);
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
            this.weapons = this.filterWeapons();
            this.innerHTML = this.componentStyle + this.buildHTML();
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
                <div class="weapon-container">
                    <div class="weapon-image">
                        <img src="${weapon.imageUrl ?? 'assets/svg/unknown.svg'}" class="${this.gameCode}-rarity-${weapon.rarity}" height="80" />
                    </div>
                    <div class="weapon-info">
                        <div>
                            <h5 class="weapon-name">
                                ${weapon.name}
                            </h5>
                            <p class="weapon-metadata">
                                <img src="${this.getRarityImage(weapon.rarity)}" alt="${weapon.rarity}" title="${weapon.rarity}" height="24"/>
                                |
                                <img src="${this.getTypeImage(weapon.type)}" alt="${weapon.type}" title="${weapon.type}" height="24"/>
                            </p>
                        </div>
                    </div>
                </div>
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

    // TODO
    getRarityImage(rarity) {
        return rarityRepository.getOne(this.gameCode, rarity)?.imageUrl;
    }

    // TODO
    getTypeImage(type) {
        return weaponsTypesRepository.getOne(this.gameCode, type)?.imageUrl;
    }
}

customElements.define('app-team-weapons', TeamWeaponsComponent);

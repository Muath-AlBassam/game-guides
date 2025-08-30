class SetListComponent extends HTMLElement {

    setsLabel = '';

    gameCode = null;
    allSets = null;
    setByType = null;

    searchTerm = '';

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
        this.setsLabel = GameUtils.getSetsLabel(this.gameCode);
        this.allSets = setsRepository.getAllOrdered(this.gameCode);
        this.setByType = Utils.groupBy(this.allSets, 'type');
    }

    listenToEvents() {
        window.addEventListener('search-team', (event) => {
            this.searchTerm = event.detail;
            this.filterListAndReloadHTML();
        });
        window.addEventListener('search-reset', (event) => {
            this.searchTerm = '';
            this.filterListAndReloadHTML();
        });
    }

    filterListAndReloadHTML() {
        this.setByType = Utils.groupBy(this.filterSets(), 'type');
        if (document.getElementById('sets-container') != null) {
            document.getElementById('set-list-header').innerHTML = this.buildHeader();
            document.getElementById('sets-container').innerHTML = this.buildListHTML();
        }
    }

    buildHTML() {
        return `
        <div class="row" id="set-list-header">
            ${this.buildHeader()}
        </div>

        <app-team-search gamecode="${this.gameCode}" placeholder="Search ${this.setsLabel}..."></app-team-search>

        <div id="sets-container">
            ${this.buildListHTML()}
        </div>`;
    }

    buildHeader() {
        let count = 0;
        this.setByType.forEach((v, k) => {
            count += v.length;
        })
        return `
        <div class="col-md-12">
            <div class="content-header">
                ${this.setsLabel}
                <span class="additional-text">Showing (${count}) ${this.setsLabel}</span>
            </div>
        </div>
        `;
    }

    buildListHTML() {
        return `
            ${Utils.ngIf(this.setByType.size > 0, `
            <div class="row">
                ${Utils.ngFor(this.setByType, category => `
                ${Utils.ngIf(this.setByType.size > 1, `
                <div class="line-text">
                    ${category[0]}
                </div>
                `)}
                
                ${Utils.ngFor(category[1], set => `
                <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 mt-3">
                    <app-set-details gamecode="${this.gameCode}" setname="${set.name}"></app-set-details>
                </div>
                `)}
                `)}
            </div>
            `, `
            <div class="char-card">
                <img src="assets/svg/shrug.svg" width="160" />
            </div>
            `)}
        `;
    }

    filterSets() {
        return this.allSets.filter(set => {
            return set.name.toLowerCase().includes(this.searchTerm.toLowerCase());
        })
    }
}

customElements.define('app-set-list', SetListComponent);

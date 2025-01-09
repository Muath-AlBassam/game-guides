class TeamSearchComponent extends HTMLElement {

    gameCode = null;
    rarities = null;

    searchTerm = '';
    searchRarity = '';

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
        this.gameCode = Utils.getGameFromUrl();
        this.rarities = [...RarityRepository.getAllRarities(this.gameCode).values()];
    }

    listenToEvents() {
        window.addEventListener('search-team', (event) => {
            this.searchTerm = event.detail;
        });
        window.addEventListener('search-rarity', (event) => {
            this.searchRarity = event.detail;
        });
    }

    buildHTML() {
        return `
        <div>
            <app-search eventname="search-team"></app-search>

            ${Utils.ngIf(this.rarities?.length > 0, `
            <app-button-group
                style="margin: 0 1em"
                buttonlist="${Utils.toJSONString(this.rarities)}"
                titlelabel="label"
                changeeventname="search-rarity"
            >
            </app-button-group>
            `)}
        </div>
        `;
    }
}

customElements.define('app-team-search', TeamSearchComponent);

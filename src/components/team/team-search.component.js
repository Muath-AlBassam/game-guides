class TeamSearchComponent extends HTMLElement {

    gameCode = null;
    rarities = [];
    elements = [];
    roles = [];

    searchTerm = '';
    searchRarity = '';
    searchElement = '';

    componentStyle = `
    <style>
        .team-search-container {
            /* */
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
        this.gameCode = Utils.getGameFromUrl();
        this.rarities = [...RarityRepository.getAllRarities(this.gameCode).values()];
        this.elements = [...ElementsRepository.getAllElements(this.gameCode).values()];
        this.roles = [...RolesRepository.getAllRoles(this.gameCode).values()];
    }

    listenToEvents() {
        window.addEventListener('search-team', (event) => {
            this.searchTerm = event.detail;
        });
        window.addEventListener('search-rarity', (event) => {
            this.searchRarity = event.detail;
        });
        window.addEventListener('search-element', (event) => {
            this.searchElement = event.detail;
        });
        window.addEventListener('search-role', (event) => {
            this.searchElement = event.detail;
        });
    }

    buildHTML() {
        return `
        <div class="team-search-container">
            <span>
                <app-search eventname="search-team" placeholder="Search characters..."></app-search>
            </span>

            ${Utils.ngIf(this.rarities?.length > 0, `
            <span>
                <app-button-group
                    buttonlist="${Utils.toJSONString(this.rarities)}"
                    titlelabel="label"
                    changeeventname="search-rarity"
                >
                </app-button-group>
            </span>
            `)}

            ${Utils.ngIf(this.elements?.length > 0, `
            <span>
                <app-button-group
                    buttonlist="${Utils.toJSONString(this.elements)}"
                    valuelabel="name"
                    changeeventname="search-element"
                >
                </app-button-group>
            </span>
            `)}

            ${Utils.ngIf(this.roles?.length > 0, `
            <span>
                <app-button-group
                    buttonlist="${Utils.toJSONString(this.roles)}"
                    valuelabel="name"
                    changeeventname="search-role"
                >
                </app-button-group>
            </span>
            `)}
        </div>
        `;
    }
}

customElements.define('app-team-search', TeamSearchComponent);

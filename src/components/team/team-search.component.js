class TeamSearchComponent extends HTMLElement {

    gameCode = null;
    rarities = [];
    elements = [];
    roles = [];
    showRarities = true;
    showElements = true;
    showRoles = true;
    showResetButton = false;

    searchTerm = '';
    searchRarity = '';
    searchElement = '';
    searchRole = '';

    componentStyle = `
    <style>
        .team-search-container {
            margin-top: 12px;
            margin-bottom: 12px;
        }

        .btn-reset {
            font-weight: 700;
            padding-right: 1em;
        }
        .btn-reset .clear-icon {
            font-size: 1.2em;
            line-height: 1.1em;
            padding: 0 .2em;
            position: absolute;
        }
        
        @media (max-width: ${Constants.code.mobileMaxWidth}) {
            .btn-reset {
                margin: 0.5em 0;
                width: 100%;
                flex: 1;
                text-align: center;
                padding-left: 0;
                padding-right: 0;
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
        if (this.hasAttribute('showrarities')) this.showRarities = this.getAttribute('showrarities') == 'true';
        if (this.hasAttribute('showelements')) this.showElements = this.getAttribute('showelements') == 'true';
        if (this.hasAttribute('showroles')) this.showRoles = this.getAttribute('showroles') == 'true';
        if (this.hasAttribute('showresetbutton')) this.showResetButton = this.getAttribute('showresetbutton') == 'true';

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
            this.searchRole = event.detail;
        });
        window.addEventListener('search-reset', (event) => {
            this.searchTerm = '';
            this.searchRarity = '';
            this.searchElement = '';
            this.searchRole = '';
        });
    }

    buildHTML() {
        return `
        <!--<div class="row">
            <div class="col-md-12">
                <div class="content-header">Search</div>
            </div>
        </div>-->
        <div class="team-search-container">
            <span>
                <app-search eventname="search-team" placeholder="Search characters..."></app-search>
            </span>

            ${Utils.ngIf(this.showRarities && this.rarities?.length > 0, `
            <span>
                <app-button-group
                    buttonlist="${Utils.toJSONString(this.rarities)}"
                    titlelabel="label"
                    changeeventname="search-rarity"
                >
                </app-button-group>
            </span>
            `)}

            ${Utils.ngIf(this.showElements && this.elements?.length > 0, `
            <span>
                <app-button-group
                    buttonlist="${Utils.toJSONString(this.elements)}"
                    valuelabel="name"
                    changeeventname="search-element"
                >
                </app-button-group>
            </span>
            `)}

            ${Utils.ngIf(this.showRoles && this.roles?.length > 0, `
            <span>
                <app-button-group
                    buttonlist="${Utils.toJSONString(this.roles)}"
                    valuelabel="name"
                    changeeventname="search-role"
                >
                </app-button-group>
            </span>
            `)}

            ${Utils.ngIf(this.showResetButton, `
            <span>
                <button 
                    class="btn btn-secondary btn-reset" 
                    title="Reset" 
                    onclick="emitEvent('search-reset','');"
                >
                    <span class="clear-icon" role="button">
                        ${Constants.unicode.times}
                    </span>
                    <span style="margin-left: 25px;">Reset</span>
                </button>
            </span>
            `)}
        </div>
        `;
    }
}

customElements.define('app-team-search', TeamSearchComponent);

class TeamSearchComponent extends HTMLElement {

    gameCode = null;
    rarities = [];
    elements = [];
    roles = [];
    weaponTypes = [];
    showRarities = false;
    showElements = false;
    showRoles = false;
    showWeaponTypes = false;
    showResetButton = false;
    searchPlaceholder = 'Search characters...';

    searchTerm = '';
    searchRarity = '';
    searchElement = '';
    searchRole = '';
    searchWeaponType = '';

    componentStyle = `
    <style>
        .team-search-container {
            display: grid;
            column-gap: 1em;
            grid-template-columns: 2fr 1fr 2fr 2fr 1fr 1fr;
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
            .team-search-container {
                grid-template-columns: 1fr;
            }

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
        this.gameCode = this.getAttribute('gamecode');

        if (this.hasAttribute('showrarities')) this.showRarities = this.getAttribute('showrarities') == 'true';
        if (this.hasAttribute('showelements')) this.showElements = this.getAttribute('showelements') == 'true';
        if (this.hasAttribute('showroles')) this.showRoles = this.getAttribute('showroles') == 'true';
        if (this.hasAttribute('showeapontypes')) this.showWeaponTypes = this.getAttribute('showeapontypes') == 'true';
        if (this.hasAttribute('showresetbutton')) this.showResetButton = this.getAttribute('showresetbutton') == 'true';
        if (this.hasAttribute('placeholder')) this.searchPlaceholder = this.getAttribute('placeholder');

        if (this.showRarities) { this.rarities = [...rarityRepository.getAll(this.gameCode).values()]; }
        if (this.showElements) { this.elements = [...elementsRepository.getAll(this.gameCode).values()]; }
        if (this.showRoles) { this.roles = [...rolesRepository.getAll(this.gameCode).values()]; }
        if (this.showWeaponTypes) { this.weaponTypes = [...weaponsTypesRepository.getAll(this.gameCode).values()]; }
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
        window.addEventListener('search-weapon-type', (event) => {
            this.searchWeaponType = event.detail;
        });
        window.addEventListener('search-reset', (event) => {
            this.searchTerm = '';
            this.searchRarity = '';
            this.searchElement = '';
            this.searchRole = '';
            this.searchWeaponType = '';
        });
    }

    buildHTML() {
        return `
        <div class="team-search-container">
            <div>
                <app-search eventname="search-team" placeholder="${this.searchPlaceholder}"></app-search>
            </div>

            ${Utils.ngIf(this.showRarities && this.rarities?.length > 0, `
            <div>
                <app-button-group
                    buttonlist="${Utils.toJSONString(this.rarities)}"
                    titlelabel="label"
                    changeeventname="search-rarity"
                >
                </app-button-group>
            </div>
            `)}

            ${Utils.ngIf(this.showElements && this.elements?.length > 0, `
            <div>
                <app-button-group
                    buttonlist="${Utils.toJSONString(this.elements)}"
                    valuelabel="name"
                    changeeventname="search-element"
                >
                </app-button-group>
            </div>
            `)}

            ${Utils.ngIf(this.showRoles && this.roles?.length > 0, `
            <div>
                <app-button-group
                    buttonlist="${Utils.toJSONString(this.roles)}"
                    valuelabel="name"
                    changeeventname="search-role"
                >
                </app-button-group>
            </div>
            `)}

            ${Utils.ngIf(this.showWeaponTypes && this.weaponTypes?.length > 0, `
            <div>
                <app-button-group
                    buttonlist="${Utils.toJSONString(this.weaponTypes)}"
                    valuelabel="name"
                    changeeventname="search-weapon-type"
                >
                </app-button-group>
            </div>
            `)}

            ${Utils.ngIf(this.showResetButton, `
            <div>
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
            </div>
            `)}
        </div>
        `;
    }
}

customElements.define('app-team-search', TeamSearchComponent);

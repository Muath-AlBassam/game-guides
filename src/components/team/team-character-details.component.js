// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal
class TeamCharacterDetailsComponent extends HTMLElement {

    // attribute that on change will trigger "attributeChangedCallback"
    // https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements#responding_to_attribute_changes
    static observedAttributes = ["character"];

    // inputs
    gameCode = null;
    character = null;

    characterPFPSize = 125;
    charmd = null;
    rolemd = null;
    elementmd = null;
    raritymd = null;
    buildmd = null;
    weaponmd = null;
    setsmd = [];

    componentStyle = `
    <style>
        .build-dialog {
            padding-top: 15vh;
        }

        .build-dialog-content {
            width: 20%;
        }
        
        .build-dialog-content .character-image {
            border: 2px solid #484950;
            border-radius: 100%; 
        }

        .build-container {
            background-color: #2c2d33;
            border: 2px solid #484950;
            display: flex;
            flex-direction: column;
            padding: 0;
            max-height: 250px; /* 3 items (243) + extra */
            overflow-y: scroll;
        }
        .build-container::-webkit-scrollbar {
            width: 1px;
        }

        .build-container .build-item {
            grid-gap: 0;
            align-items: center;
            background-color: #36373d;
            border-bottom: 1px solid #484950;
            display: grid;
            grid-template-columns: 80px calc(100% - 80px);
            justify-content: space-between;
            width: 100%;
        }

        .build-container .build-item .build-image {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 80px;
            width: 80px;
        }

        .build-container .build-item .build-name {
            display: flex;
            align-items: center;
            padding-left: 15px;
        }

        .build-container .build-item .build-name .piece-count {
            color: hsla(0, 0%, 100%, .75);
            display: inline;
            padding-right: 5px;
        }

        .close-dialog {
            color: #aaaaaa;
            font-size: 28px;
            height: 28px;
            font-weight: bold;
        }
        .close-dialog:hover, .close-dialog:focus {
            color: #fff;
            text-decoration: none;
            cursor: pointer;
        }

        .empty-dialog {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100px;
        }

        @media (max-width: ${Constants.code.mobileMaxWidth}) {
            .build-dialog {
                padding-top: 0;
            }

            .build-dialog-content {
                width: 100%;
            }
        }
    </style>`;

    constructor() {
      super();
    }
  
    connectedCallback() {
        this.loadData()
        if (this.character) {
            this.innerHTML = this.componentStyle + this.buildHTML();
        }
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.loadData()
        if (this.character) {
            this.innerHTML = this.componentStyle + this.buildHTML();
        }
    }

    loadData() {
        this.gameCode = Utils.getGameFromUrl();
        this.character = this.getAttribute('character');
        if (this.character) {
            this.charmd = CharactersRepository.getCharacterMetadata(this.gameCode, this.character);
            this.rolemd = RolesRepository.getRole(this.gameCode, this.charmd.role);
            this.elementmd = ElementsRepository.getElement(this.gameCode, this.charmd.element);
            this.raritymd = RarityRepository.getRarity(this.gameCode, this.charmd.rarity);
            this.buildmd = BuildsRepository.getCharacterBuild(this.gameCode, this.character);
            this.weaponmd = WeaponsRepository.getWeaponMetadata(this.gameCode, this.buildmd.weapon.name);
            this.setsmd = this.buildmd.sets.map(set => { return { pieceCount: set.pieceCount, md: SetsRepository.getSetMetadata(this.gameCode, set.name) } })
        }
    }

    buildHTML() {
        return `
        <div class="gagu-dialog build-dialog" id="build-dialog-body">
            <div class="gagu-dialog-content build-dialog-content">
                <div class="close-dialog" onclick="closeDialog()">${Constants.unicode.times}</div>
                <div>
                    <div class="center-content" style="margin-top: 20px;">
                        <div class="character-container">
                            <app-character-image 
                                gamecode="${this.gameCode}" 
                                charactername="${this.character}"
                                dimensions="${this.characterPFPSize}"
                                classes="character-image" 
                                styles="border-radius: 100%;" 
                                withbackgroundclass="true" 
                            >
                            </app-character-image>
                        </div>
                    </div>
                    <div class="center-content">
                        ${Utils.ngIf(this.charmd.role, `<img src="${this.rolemd.imageUrl}" height="30" title="${this.rolemd.name}" style="margin-right: 5px;">`)}
                        <h5>${this.character}</h5>
                        ${Utils.ngIf(this.charmd.element, `<img src="${this.elementmd.imageUrl}" height="30" title="${this.elementmd.name}" style="margin-left: 5px;">`)}
                    </div>
                    <div class="center-content">
                        ${Utils.ngIf(this.charmd.rarity, `<img src="${this.raritymd.imageUrl}" height="30" title="${this.raritymd.label}" style="margin: 0 5px;">`)}
                    </div>
                </div>

                ${Utils.ngIf(this.buildmd, `
                <h5 class="content-header">
                    ${this.getWeaponsLabel(this.gameCode)}
                </h5>
                <div class="build-container">
                    <div class="build-item">
                        <div class="build-image">
                            <img src="${this.weaponmd.imageUrl ?? 'assets/svg/unknown.svg'}" class="${this.gameCode}-rarity-${this.weaponmd.rarity}" height="80" />
                        </div>
                        <div class="build-name">
                            <h5 style="margin-bottom: 0;">${this.weaponmd.name}</h5>
                        </div>
                    </div>
                </div>
                `,
                `<h1 class="empty-dialog">...</h1>`
                )}

                <h5 class="content-header">
                    ${this.getSetsLabel(this.gameCode)}
                </h5>
                <div class="build-container">
                    ${Utils.ngFor(this.setsmd, set => `
                    <div class="build-item">
                        <div class="build-image" style="background-color: #2c2d33;">
                            <img src="${set.md.imageUrl ?? 'assets/svg/unknown.svg'}" height="70" style="margin: 5px;" />
                        </div>
                        <div class="build-name">
                            <span class="piece-count">(${set.pieceCount})</span>
                            <h5 style="margin-bottom: 0;">${set.md.name}</h5>
                        </div>
                    </div>    
                    `)}
                </div>
            </div>
        </div>`;
    }

    getWeaponsLabel(gameCode) {
        switch (gameCode) {
            case Constants.games.GI:
                return 'Weapon';
            case Constants.games.HSR:
                return 'Light Cone';
            case Constants.games.ZZZ:
                return 'W-Engine';
            case Constants.games.HI3:
                return 'Weapon';
            default:
                return '';
        }
    }
    
    getSetsLabel(gameCode) {
        switch (gameCode) {
            case Constants.games.GI:
                return 'Artifacts';
            case Constants.games.HSR:
                return 'Relics & Planar';
            case Constants.games.ZZZ:
                return 'Drive Discs';
            case Constants.games.HI3:
                return 'Stigmata';
            default:
                return '';
        }
    }
}

customElements.define('app-team-character-details', TeamCharacterDetailsComponent);

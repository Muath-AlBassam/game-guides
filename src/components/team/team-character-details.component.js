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
            background-size: 100% auto;
            background-position: top center;
            background-repeat: no-repeat;
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
        this.gameCode = this.getAttribute('gamecode');
        this.character = this.getAttribute('character');
        if (this.character) {
            this.charmd = charactersRepository.getOne(this.gameCode, this.character);
            this.buildmd = buildsRepository.getByCharacter(this.gameCode, this.character);
            if (this.buildmd) {
                this.weaponmd = weaponsRepository.getOne(this.gameCode, this.buildmd.weapon.name);
                this.setsmd = this.buildmd.sets.map(set => { return { pieceCount: set.pieceCount, md: setsRepository.getOne(this.gameCode, set.name) } })
            }
        }
    }

    buildHTML() {
        return `
        <div class="gagu-dialog build-dialog" id="build-dialog-body">
            <div class="gagu-dialog-content build-dialog-content" 
                style="background-image: linear-gradient(rgba(35, 36, 42, 0.95), rgba(35, 36, 42, 0.95)), url('${this.charmd.cardImageUrl}')">

                <div class="gagu-dialog-header">
                    <h5>${this.character}'s Build</h5>
                    <div class="close-dialog" onclick="closeDialog()">${Constants.unicode.times}</div>
                </div>

                <app-character-profile gamecode="${this.gameCode}" character="${this.character}"></app-character-profile>

                ${Utils.ngIf(this.buildmd, `
                <h5 class="content-header">
                    ${GameUtils.getWeaponsLabel(this.gameCode)}
                </h5>
                <div class="build-container">
                    <div class="build-item">
                        <div class="build-image">
                            <img src="${this.weaponmd?.imageUrl ?? 'assets/svg/unknown.svg'}" class="${this.gameCode}-rarity-${this.weaponmd?.rarity}" height="80" />
                        </div>
                        <div class="build-name">
                            <h5 style="margin-bottom: 0;">${this.weaponmd?.name}</h5>
                        </div>
                    </div>
                </div>
                
                
                <h5 class="content-header">
                    ${GameUtils.getSetsLabel(this.gameCode)}
                </h5>
                <div class="build-container">
                    ${Utils.ngFor(this.setsmd, set => `
                    <div class="build-item">
                        <div class="build-image" style="background-color: #2c2d33;">
                            <img src="${set.md.imageUrl ?? 'assets/svg/unknown.svg'}" height="70" style="margin: 5px;" />
                        </div>
                        <div class="build-name">
                            <span class="piece-count">(${set?.pieceCount})</span>
                            <h5 style="margin-bottom: 0;">${set?.md?.name}</h5>
                        </div>
                    </div>    
                    `)}
                </div>
                `,
                `<h1 class="empty-dialog">...</h1>`
                )}
            </div>
        </div>`;
    }
}

customElements.define('app-team-character-details', TeamCharacterDetailsComponent);

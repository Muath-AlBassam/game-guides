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

        .sets-list {
            max-height: 260px; /* 3 items (256) + extra */
            overflow-y: scroll;
        }
        .sets-list::-webkit-scrollbar {
            width: 1px;
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
                <app-team-weapon-details gamecode="${this.gameCode}" weaponname="${this.buildmd.weapon.name}" showadditionalinfo="false"></app-team-weapon-details>
                
                <h5 class="content-header">
                    ${GameUtils.getSetsLabel(this.gameCode)}
                </h5>
                <div class="sets-list">
                    ${Utils.ngFor(this.buildmd?.sets, set => `
                    <app-team-set-details gamecode="${this.gameCode}" setname="${set.name}" piececount="${set.pieceCount}"></app-team-set-details>
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

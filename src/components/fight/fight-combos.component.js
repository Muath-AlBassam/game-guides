class FightCombosComponent extends HTMLElement {

    gameCode = null;
    character = null;
    combos = [];
    
    componentStyle = `
    <style>
        .combos {
            margin: 0 2em;
        }

        .combos .combos-list {
            height: 55%;
            overflow: scroll;
        }
        .combos .combos-list::-webkit-scrollbar {
            display: none;
        }

        @media (max-width: ${Constants.code.mobileMaxWidth}) {
            .combos {
                margin: 0 0.5em;
            }

            .combos .combos-list {
                height: 35%;
                overflow: scroll;
            }
        }
    </style>`;

    constructor() {
      super();
    }
  
    connectedCallback() {
        this.loadData();
        this.innerHTML = this.componentStyle + this.buildHTML();
    }

    loadData() {
        this.gameCode = Utils.getGameFromUrl();
        this.character = this.getAttribute('character');
        this.combos = combosRepository.getAllByCharacter(this.gameCode, this.character);
    }

    buildHTML() {
        return `
        <div class="combos">
            <div class="content-header">Combos</div>
            <div class="combos-list">
                <ul>
                    ${Utils.ngFor(this.combos, combo => `
                    <li>
                        ${Utils.ngFor(combo, buttonCode => 
                            `${Utils.ngIf(this.getButtonImage(buttonCode), 
                            `<img src="${this.getButtonImage(buttonCode)}" width="40" title="${buttonCode}" />`,
                            buttonCode)}`
                        )}
                    </li>
                    `)}
                </ul>
            </div>
        </div>
        `;
    }

    // TODO
    getButtonImage(buttonCode) {
        return buttonsRepository.getOne(this.gameCode, buttonCode).imageUrl
    }
}

customElements.define('app-fight-combos', FightCombosComponent);

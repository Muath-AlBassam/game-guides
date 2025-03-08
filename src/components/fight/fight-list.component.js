class FightComponent extends HTMLElement {

    characterPFPSize = 250;
    gameCode = null;
    characters = null;
    
    componentStyle = `
    <style>
        .fight__container {
            border: 1px solid #33343a;
            border-radius: 0;
            display: flex;
            margin: 20px 0 0 0;
            width: 100%;
            height: ${this.characterPFPSize + 100}px;
        }

        .fight__container .number {
            align-items: center;
            background-color: #ef5350;
            color: #191817;
            display: flex;
            font-size: 22px;
            font-weight: 700;
            justify-content: center;
            width: 65px;
        }

        .fight__container .item {
            grid-gap: 0;
            background-color: #2c2d33;
            border-radius: 0;
            display: grid;
            grid-template-columns: 20% 80%;
            justify-content: space-between;
            position: relative;
            width: 100%;
        }
        .fight__container .item ::-webkit-scrollbar {
            display: none;
        }

        .fight__container .item>div:nth-child(odd) {
            background-color: #36373f;
        }

        .fight__container .item .character {
            font-size: 30px;
            font-weight: bold;
            display: grid;
            align-items: center;
            justify-items: center;
        }

        .fight__container .item .character .name {
            border-top: 2px solid #6b6b6b;
            font-size: 20px;
            font-weight: bold;
            line-height: 20px;
            padding: 8px 0;
            width: 90%;
            text-align: center;
            justify-items: center;
        }

        @media (max-width: ${Constants.code.mobileMaxWidth}) {
            .fight__container {
                display: grid;
                grid-template-columns: 1fr;
            }

            .fight__container .number {
                width: 100%;
            }

            .fight__container .item {
                overflow: hidden;
                grid-template-columns: 1fr;
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
        this.characters = charactersRepository.getAllCharacters(this.gameCode);
    }

    buildHTML() {
        return `
        <div class="row">
            <div class="col-md-12">
                <div class="content-header">Characters</div>
            </div>
        </div>
        <div id="fights">
            ${Utils.ngForMap(this.characters, (character, index) => `
            <div class="fight__container">
                <div class="number">${index + 1}</div>
                <div class="item">
                    <div class="character">
                        <app-character-image 
                            gamecode="${this.gameCode}"
                            charactername="${character?.name}"
                            dimensions="${this.characterPFPSize}"
                            mobilesizeratio="0.5"
                        >
                        </app-character-image>
                        <div class="name">
                            ${character.name}
                        </div>
                    </div>
                    <app-fight-combos character="${character?.name}"></app-fight-combos>
                </div>
            </div>   
            `)}
        </div>`;
    }

    // TODO
    getButtonImage(buttonCode) {
        return buttonsRepository.getButton(this.gameCode, buttonCode).imageUrl
    }
}

customElements.define('app-fight-list', FightComponent);

class FightComponent extends HTMLElement {

    characterPFPSize = 250;
    
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

        .fight__container .item .combos {
            margin: 0 2em;
        }
    </style>`;

    constructor() {
      super();
    }
  
    connectedCallback() {
        const activeGame = getGame(this.getAttribute("name"));
        const characters = getAllCharacters(activeGame.code);
        this.innerHTML = this.buildHTML(activeGame, characters);
    }

    buildHTML(activeGame, characters) {
        return this.componentStyle + `
        <div class="row">
            <div class="col-md-12">
                <div class="content-header">Characters</div>
            </div>
        </div>
        <div id="fights">
            ${this.buildContainer(activeGame, characters)}
        </div>`;
    }

    buildContainer(activeGame, characters) {
        let html = '';
        let index = 0;
        characters.forEach((char, key) => {
            html += this.buildCharacter(activeGame, char, index);
            index++;
        });

        return html;
    }

    buildCharacter(activeGame, character, index) {
        return `
        <div class="fight__container">
            <div class="number">${index + 1}</div>
            <div class="item">
                <div class="character">
                    ${createCharacterImage(activeGame.code, character, {dimensions: this.characterPFPSize})}
                    <div class="name">
                        ${character.name}
                    </div>
                </div>
                <div class="combos">
                    <div class="content-header">Combos</div>
                    ${this.buildCombos(activeGame.code, character)}
                </div>
            </div>
        </div>`;
    }

    buildCombos(gameCode, character) {
        let combosList = '';
        character.combos.forEach(combo => {
            let comboButtons = '';
            combo.forEach(b => {
                comboButtons += this.generateButtonImage(gameCode, b);
            })
            combosList += `<li> ${comboButtons} </li>`;
        });
        return `
        <ul>
            ${combosList}
        </ul>
        `;
    }

    generateButtonImage(gameCode, buttonCode) {
        const button = getButton(gameCode, buttonCode);
        if (button.imageUrl) {
            buttonCode = `<img src="${button.imageUrl}" width="30" />`;
        }
        return buttonCode;
    }
}

customElements.define('gagu-fight-component', FightComponent);

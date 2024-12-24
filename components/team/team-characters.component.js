class TeamCharactersComponent extends HTMLElement {

    characterPFPSize = 80;

    componentStyle = `
    <style>
        .characters__container {
            background-color: #2c2d33;
            padding: 0.5em;
            user-select: none;
        }

        .characters__slider {
        }
    </style>`;

    constructor() {
      super();
    }
  
    connectedCallback() {
        const gameCode = Utils.getGameFromUrl();
        this.innerHTML = this.buildHTML(gameCode);
        
        tns({
            container: '.characters__slider',
            fixedWidth: this.characterPFPSize + 20,
            controls: false,
            navPosition: 'bottom',
            mouseDrag: true,
            loop: false,
        });
    }

    buildHTML(gameCode) {
        return this.componentStyle + this.buildSlider(gameCode);
    }

    buildSlider(gameCode) {
        return `
        <div class="row">
            <div class="col-md-12">
                <div class="content-header">Characters</div>
            </div>
        </div>
        <div class="characters__container">
            <div class="characters__slider draggable">
                ${this.buildSliderItems(gameCode)}
            </div>
        </div>
        `;
    }

    buildSliderItems(gameCode) {
        let content = '';
        const charactrsMap = CharactersRepository.getAllCharacters(gameCode);

        if (charactrsMap != null) {
            const sortedMap = new Map([...charactrsMap.entries()].sort());
            sortedMap.forEach(charmd => {
                content += `
                <character-image 
                    gamecode="${gameCode}"
                    charactername="${charmd.name}"
                    dimensions="${this.characterPFPSize}"
                    styles="margin: 5px 10px;"
                    withbuilddialog="true"
                    withelement="true">
                </character-image>
                `
            })
        }
        return content;
    }
}

customElements.define('app-team-characters', TeamCharactersComponent);

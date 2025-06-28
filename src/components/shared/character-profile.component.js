class CharacterProfileComponent extends HTMLElement {

    gameCode = null;
    character = null;
    characterPFPSize = 125;

    charmd = null;
    raritymd = null;

    componentStyle = `
    <style>
        .character-image {
            border: 2px solid #484950;
            border-radius: 100%; 
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
        this.gameCode = this.getAttribute('gamecode');
        this.character = this.getAttribute('character');
        if (this.hasAttribute('pfpsize')) this.characterPFPSize = Number(this.getAttribute('pfpsize'));

        if (this.character) {
            this.charmd = charactersRepository.getOne(this.gameCode, this.character);
            this.raritymd = rarityRepository.getOne(this.gameCode, this.charmd.rarity);
        }
    }

    buildHTML() {
        return `
        <div>
            <div class="center-content" style="margin-top: 20px;">
                <div class="character-container">
                    <app-character-image 
                        gamecode="${this.gameCode}" 
                        charactername="${this.character}"
                        dimensions="${this.characterPFPSize}"
                        classes="character-image" 
                        styles="border-radius: 100%; overflow: visible;" 
                        withbackgroundclass="true"
                        withelement="true"
                        withrole="true"
                    >
                    </app-character-image>
                </div>
            </div>
            <div class="center-content">
                <h5>${this.character}</h5>
            </div>
            <div class="center-content">
                ${Utils.ngIf(this.charmd.rarity, `<img src="${this.raritymd.imageUrl}" height="30" title="${this.raritymd.label}" style="margin: 0 5px;">`)}
            </div>
        </div>
        `;
    }
}

customElements.define('app-character-profile', CharacterProfileComponent);

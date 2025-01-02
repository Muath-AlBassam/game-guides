class CharacterImageComponent extends HTMLElement {

    // inputs
    gameCode = null;
    characterName = null;
    dimensions = 100;
    styles = '';
    classes = '';
    withBuildDialog = false;
    withBackgroundClass = true;
    withElement = false;
    withAltElement = false;
    withContainer = true;

    charmd = null;
    showBuild = false;
    showElement = false;
    elementImageUrl = '';
    addRarityClass = false;

    componentStyle = `
    <style>
        .character-container {
            position: relative;
            display: inline-block;
        }

        .character-container .pfp {
            display: block;
        }

        .character-container .build-icon {
            position: absolute;
            top: 5px;
            right: 10px;
            padding: 0 0 3px 3px;
            background-color: #ccc;
            border: 1px solid #1c1d21;
            border-radius: 0 0 0 100%;
            cursor: pointer;
        }

        .character-container .build-icon:hover {
            background-color: #999;
        }

        .character-container .element-icon {
            position: absolute;
            bottom: 5px;
            left: 10px;
            padding: 3px 3px 0 0;
            background-color: #36373f;
            border: 1px solid #1c1d21;
            border-radius: 0 100% 0 0;
        }
        .character-container .element-icon-alt {
            position: absolute;
            bottom: 5px;
            left: 10px;
            padding: 3px;
            background-color: #36373f;
            border: 1px solid #1c1d21;
            border-radius: 50%;
        }
    </style>
    `;

    constructor() {
      super();
    }
  
    connectedCallback() {
        this.loadData();
        this.innerHTML = this.componentStyle + this.buildHTML();
    }

    loadData() {
        // required
        this.gameCode = this.getAttribute('gamecode');
        this.characterName = this.getAttribute('charactername');
        // optional
        if (this.hasAttribute('styles')) this.styles = this.getAttribute('styles');
        if (this.hasAttribute('classes')) this.classes = this.getAttribute('classes');
        if (this.hasAttribute('dimensions')) this.dimensions = Number(this.getAttribute('dimensions'));
        if (this.hasAttribute('withbuilddialog')) this.withBuildDialog = this.getAttribute('withbuilddialog') == 'true';
        if (this.hasAttribute('withbackgroundclass')) this.withBackgroundClass = this.getAttribute('withbackgroundclass') == 'true';
        if (this.hasAttribute('withelement')) this.withElement = this.getAttribute('withelement') == 'true';
        if (this.hasAttribute('withaltelement')) this.withAltElement = this.getAttribute('withaltelement') == 'true';
        if (this.hasAttribute('withcontainer')) this.withContainer = this.getAttribute('withcontainer') == 'true';

        this.charmd = CharactersRepository.getCharacterMetadata(this.gameCode, this.characterName);
        this.showBuild = this.withBuildDialog && null != BuildsRepository.getCharacterBuild(this.gameCode, this.charmd.name);
        this.showElement = (this.withElement || this.withAltElement) && this.charmd.element;
        this.elementImageUrl = ElementsRepository.getElement(this.gameCode, this.charmd.element).imageUrl;
        this.addRarityClass = this.withBackgroundClass && this.charmd.rarity;
    }

    buildHTML() {
        if (!this.withContainer) {
            return `
            <img    
                src="${this.charmd.imageUrl ?? 'assets/images/Unknown.png'}" 
                alt="${this.charmd.name ?? '?'}" 
                title="${this.charmd.name ?? '?'}"
                class="pfp ${this.addRarityClass ? this.gameCode+'-rarity-'+this.charmd.rarity : ''} ${this.classes}" 
                style="border-radius: 5px; ${this.showBuild ? 'display: block; height: auto;' : ''} ${this.styles}" 
                width="${this.dimensions}" 
            />
            `
        } else {  
            return `
            <div class="character-container">
                <img    
                    src="${this.charmd.imageUrl ?? 'assets/images/Unknown.png'}" 
                    alt="${this.charmd.name ?? '?'}" 
                    title="${this.charmd.name ?? '?'}"
                    class="pfp ${this.addRarityClass ? this.gameCode+'-rarity-'+this.charmd.rarity : ''} ${this.classes}" 
                    style="border-radius: 5px; ${this.showBuild ? 'display: block; height: auto;' : ''} ${this.styles}" 
                    width="${this.dimensions}" 
                />
                ${Utils.ngIf(this.showBuild, `
                <img 
                    src="assets/svg/armor.svg" 
                    width="26" 
                    height="26" 
                    class="build-icon" 
                    title="View build" 
                    onclick="openBuildDialog('${this.charmd.name}')"/>    
                `)}
                ${Utils.ngIf(this.showElement, `
                <img 
                    src="${this.elementImageUrl}" 
                    width="26" 
                    height="26" 
                    class="element-icon${this.withAltElement ? '-alt' : ''}" 
                    title="${this.charmd.element}"/>
                `)}
            </div>
            `;
        }
    }
}

customElements.define('character-image', CharacterImageComponent);

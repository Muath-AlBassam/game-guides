// used to help with clip-path : https://bennettfeely.com/clippy/
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
    mobileSizeRatio = 1; // default: 1 == no resize
    mobileIconSizeRatio = 1;
    imageStyle = 'pfp'; // pfp, card

    charmd = null;
    showBuild = false;
    showElement = false;
    elementImageUrl = '';
    roleImageUrl = '';
    addRarityClass = false;
    iconSize = 26;

    charCount = 0;
    charmdList = [];

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

        .char-card {
            width: 160px;
            height: 219px;
            transform: scale(1);
            overflow: hidden;
            cursor: pointer;
        }
        .char-card .char-img {
            display: block;
            margin: auto;
            transition: all 0.3s ease-out;
        }
        .char-card .char-img:hover {
            transform: scale(1.1);
        }

        .char-card .ele-img {
            position: absolute;
            background-color: #23242a;
            padding: 2px;
            width: 29px;
            height: 29px;
            z-index: 5;
        }

        .char-card .role-img {
            position: absolute;
            background-color: #23242a;
            padding: 2px;
            width: 29px;
            height: 29px;
            top: 29px;
            z-index: 5;
        }

        .char-card .smoky-overlay {
            position: absolute;
            bottom: 0; /* Position the overlay at the bottom */
            left: 0;
            width: 100%;
            height: 30%; /* Adjust this to control how far up the gradient goes */
            background: linear-gradient(to top, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0));
            /*mix-blend-mode: lighten;*/
            pointer-events: none;
        }

        .GI-rarity-5 {
            background-image: url(assets/images/gi/GI_Rarity5_BG.png);
            background-size: cover;
            background-repeat: no-repeat;
            background-position: 50%;
        }
        .GI-rarity-4 {
            background-image: url(assets/images/gi/GI_Rarity4_BG.png);
            background-size: cover;
            background-repeat: no-repeat;
            background-position: 50%;
        }
        .GI-rarity-3 {
            background-image: url(assets/images/gi/GI_Rarity3_BG.jpg);
            background-size: cover;
            background-repeat: no-repeat;
            background-position: 50%;
        }

        .HSR-rarity-5 {
            background: linear-gradient(180deg, #ac6d5c, #c48c64 53%);
        }
        .HSR-rarity-4 {
            background: linear-gradient(180deg, #404165, #8f5fc6 53%);
        }

        .ZZZ-rarity-S {
            /* background: linear-gradient(0deg, #d7bc57, #d19910); */
            background: linear-gradient(180deg, #f99807, #fb7704);
        }
        .ZZZ-rarity-A {
            /* background: linear-gradient(0deg, #be6fed, #8c37bd); */
            background: linear-gradient(180deg, #c925f8, #9328e9);
        }

        .split-box {
            position: relative;
            overflow: hidden;
            border-radius: 5px;
            text-align: left;
        }

        .split-box .child {
            position: absolute;
            width: 100%;
            height: 100%;
        }

        .split-box-2 > .child:nth-child(1) {
            /* top-left | bottom-left | top-right */
            clip-path: polygon(0% 0%, 0% 97%, 97% 0%);
        }
        .split-box-2 > .child:nth-child(2) {
            /* bottom-right | top-right | bottom-left */
            clip-path: polygon(100% 100%, 100% 3%, 3% 100%);
        }
        .split-box-2 > .child:nth-child(1) img {
            transform: translateX(-25%);
        }
        .split-box-2 > .child:nth-child(2) img {
            transform: translateX(25%);
        }

        .split-box-3 > .child:nth-child(1) {
            /* center | bottom-right | bottom-left */
            clip-path: polygon(50% 33%, 97% 100%, 3% 100%);
        }
        .split-box-3 > .child:nth-child(2) {
            /* top-left | top-center | center | bottom-left */
            clip-path: polygon(0% 0%, 47% 0%, 47% 27%, 0% 97%);
        }
        .split-box-3 > .child:nth-child(3) {
            /* top-right | top-center | center | bottom-right */
            clip-path: polygon(100% 0%, 53% 0%, 53% 27%, 100% 97%);
        }
        .split-box-3 > .child:nth-child(1) img {
            transform: translateY(25%);
        }
        .split-box-3 > .child:nth-child(2) img {
            transform: translate(-25%);
        }
        .split-box-3 > .child:nth-child(3) img {
            transform: translate(25%);
        }
    </style>
    `;

    constructor() {
      super();
    }
  
    connectedCallback() {
        this.loadData();
        this.modifyDataBasedOnMediaSize();
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
        if (this.hasAttribute('mobilesizeratio')) this.mobileSizeRatio = Number(this.getAttribute('mobilesizeratio'));
        if (this.hasAttribute('mobileiconsizeratio')) this.mobileIconSizeRatio = Number(this.getAttribute('mobileiconsizeratio'));
        if (this.hasAttribute('imagestyle')) this.imageStyle = this.getAttribute('imagestyle');

        let charNameList = this.characterName.split(',');
        this.charCount = charNameList.length;
        if (this.charCount == 1) {
            this.charmd = CharactersRepository.getCharacterMetadata(this.gameCode, this.characterName);
            this.showBuild = this.withBuildDialog && null != BuildsRepository.getCharacterBuild(this.gameCode, this.charmd.name);
            this.showElement = (this.withElement || this.withAltElement) && this.charmd.element;
            this.elementImageUrl = ElementsRepository.getElement(this.gameCode, this.charmd.element).imageUrl;
            this.roleImageUrl = RolesRepository.getRole(this.gameCode, this.charmd.role)?.imageUrl;
            this.addRarityClass = this.withBackgroundClass && this.charmd.rarity;
        } else {
            this.charmdList = charNameList.map(c => CharactersRepository.getCharacterMetadata(this.gameCode, c));
            this.addRarityClass = this.withBackgroundClass;
        }
    }

    modifyDataBasedOnMediaSize() {
        if (Utils.isMobile()) {
            this.dimensions = this.dimensions * this.mobileSizeRatio;
            this.iconSize = this.iconSize * this.mobileIconSizeRatio;
        }
    }

    buildHTML() {
        if (this.imageStyle == 'card') {
            return `
            <div class="char-card ${this.addRarityClass ? this.gameCode+'-rarity-'+this.charmd.rarity : ''}">
                <img
                    class="ele-img"
                    src="${this.elementImageUrl ?? Constants.images.transparent}"
                    width="${this.iconSize}"
                    height="${this.iconSize}"
                    title="${this.charmd.element}"
                    loading="lazy"
                />
                <img
                    class="role-img"
                    src="${this.roleImageUrl ?? Constants.images.transparent}"
                    width="${this.iconSize}"
                    height="${this.iconSize}"
                    title="${this.charmd.role}"
                    loading="lazy"
                />
                <img
                    class="char-img"
                    src="${this.charmd.cardImageUrl}" 
                    alt="${this.charmd.name ?? '?'}" 
                    title="${this.charmd.name ?? '?'}"
                    width="${this.dimensions}"
                    ${this.withBuildDialog ? `onclick="openBuildDialog('${this.charmd.name}')"` : ``}
                    loading="lazy"
                />
                <div class="smoky-overlay"></div>
            </div>
            `;
        } if (this.charCount > 1) {
            return `
            <div class="split-box split-box-${this.charCount}" style="height: ${this.dimensions}px; width: ${this.dimensions}px; ${this.styles}">
                ${Utils.ngFor(this.charmdList, char => `
                <div class="child ${this.withBuildDialog ? 'pointer' : ''} ${this.addRarityClass ? this.gameCode+'-rarity-'+char.rarity : ''}"
                    ${this.withBuildDialog ? `onclick="openBuildDialog('${char.name}')"` : ``}>
                    <img    
                        src="${char.imageUrl ?? Constants.images.unknown}"
                        alt="${char.name ?? '?'}"
                        title="${char.name ?? '?'}"
                        class="pfp"
                        width="${this.dimensions}"
                        loading="lazy"
                    />
                </div>
                `)}
            </div>
            `;
        } else {  
            return `
            <div class="character-container">
                <img    
                    src="${this.charmd.imageUrl ?? Constants.images.unknown}" 
                    alt="${this.charmd.name ?? '?'}" 
                    title="${this.charmd.name ?? '?'}"
                    class="pfp ${this.addRarityClass ? this.gameCode+'-rarity-'+this.charmd.rarity : ''} ${this.classes}" 
                    style="border-radius: 5px; display: block; height: auto; ${this.styles}" 
                    width="${this.dimensions}"
                    loading="lazy"
                />
                ${Utils.ngIf(this.showBuild, `
                <img
                    src="assets/svg/armor.svg" 
                    width="${this.iconSize}" 
                    height="${this.iconSize}" 
                    class="build-icon" 
                    title="View build" 
                    onclick="openBuildDialog('${this.charmd.name}')"
                    loading="lazy"
                />    
                `)}
                ${Utils.ngIf(this.showElement, `
                <img
                    src="${this.elementImageUrl ?? Constants.images.transparent}" 
                    width="${this.iconSize}" 
                    height="${this.iconSize}" 
                    class="element-icon${this.withAltElement ? '-alt' : ''}" 
                    title="${this.charmd.element}"
                    loading="lazy"
                />
                `)}
            </div>
            `;
        }
    }
}

customElements.define('app-character-image', CharacterImageComponent);

//------------------------------------------------------------------------------------

function openBuildDialog(character) {
    // trigger attributeChangedCallback & set data
    document.getElementById('build-dialog').setAttribute('character', character);
    // add show class to dialog
    document.getElementById('build-dialog-body').classList.add('dialog-shown');
}

// used to help with clip-path : https://bennettfeely.com/clippy/
class CharacterImageComponent extends HTMLElement {

    // inputs
    gameCode = null;
    characterName = null;
    styles = '';
    classes = '';
    withBuildDialog = false;
    withBackgroundClass = true;
    withElement = false;
    withType = false;
    mobileIconSizeRatio = 1;
    imageStyle = 'pfp'; // pfp, card
    inputDimensions = this.hasAttribute('dimensions') ? Number(this.getAttribute('dimensions')) : 100;
    mobileSizeRatio = this.hasAttribute('mobilesizeratio') ? Number(this.getAttribute('mobilesizeratio')) : 1; // default: 1 == no resize
    mobileIconSizeRatio = this.hasAttribute('mobileiconsizeratio') ? Number(this.getAttribute('mobileiconsizeratio')) : 1; // default: 1 == no resize

    dimensions = Utils.isMobile() ? this.inputDimensions * this.mobileSizeRatio : this.inputDimensions;
    iconSize = Utils.isMobile() ? 26 * this.mobileIconSizeRatio : 26;
    defaultCardDimensions = 219 / 160;

    charmd = null;
    showBuild = false;
    showElement = false;
    showType = false;
    elementImageUrl = '';
    typeImageUrl = '';
    addRarityClass = false;

    charCount = 0;
    charmdList = [];

    componentStyle = `
    <style>
        /* PFP */
        .character-container {
            position: relative;
            display: inline-block;
            overflow: hidden;
            user-select: none;
        }

        .character-container .pfp {
            display: block;
        }

        .character-container .element-icon {
            position: absolute;
            top: 3px;
            left: 3px;
            filter: drop-shadow(0 2px 2px #000);
        }

        .character-container .type-icon {
            position: absolute;
            top: 3px;
            right: 3px;
            filter: drop-shadow(0 2px 2px #000);
        }

        /* CARD */
        .char-card {
            transform: scale(1);
            overflow: hidden;
            user-select: none;
            width: ${this.dimensions}px;
            height: ${this.dimensions * this.defaultCardDimensions}px;
        }
        /**/

        .char-card .char-img {
            display: block;
            margin: auto;
        }

        .char-card .ele-img {
            position: absolute;
            padding: 2px;
            width: 29px;
            height: 29px;
            z-index: 5;
            filter: drop-shadow(0 2px 2px #000);
        }

        .char-card .type-img {
            position: absolute;
            padding: 2px;
            width: 29px;
            height: 29px;
            z-index: 5;
            filter: drop-shadow(0 2px 2px #000);
            top: ${this.iconSize}px;
        }

        .char-card .team-img {
            position: absolute;
            padding: 2px;
            width: 29px;
            height: 29px;
            right: 0;
            z-index: 5;
            filter: drop-shadow(0 2px 2px #000);
            border-radius: 50%;
        }
        .char-card .team-img:hover {
            background-color: rgba(0, 0, 0, 0.2);
        }

        .char-card .char-name {
            position: absolute;
            bottom: 30px;
            z-index: 5;
            color: var(--text-color);
            font-weight: bold;
            font-size: 1em;
            width: 100%;
            text-align: center;
            filter: drop-shadow(0 3px 2px #000);
        }

        .char-card .smoky-overlay {
            position: absolute;
            bottom: 0; /* Position the overlay at the bottom */
            left: 0;
            width: 100%;
            height: 30%; /* Adjust this to control how far up the gradient goes */
            background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0));
            /*mix-blend-mode: lighten;*/
            pointer-events: none;
        }

        /* PFP & CARD */
        .char-img-resize {
            cursor: pointer;
            transition: all 0.3s ease-out;
        }
        .char-img-resize:hover {
            transform: scale(1.1);
        }
        
        /* Split image */
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
            overflow: hidden;
        }

        .split-box .child img {
            transition: all 0.3s ease-out;
        }

        /* Split image - 2 images */
        .split-box-2 > .child:nth-child(1) {
            clip-path: polygon(0% 0%, 0% 97%, 97% 0%);
            & img { transform: translateX(-25%); }
            & img:hover { transform: translateX(-25%) scale(1.1); }
        }
        .split-box-2 > .child:nth-child(2) {
            clip-path: polygon(100% 100%, 100% 3%, 3% 100%);
            & img { transform: translateX(25%); }
            & img:hover { transform: translateX(25%) scale(1.1); }
        }

        /* Split image - 3 images */
        .split-box-3 > .child:nth-child(1) {
            clip-path: polygon(50% 33%, 97% 100%, 3% 100%);
            & img { transform: translateY(25%); }
            & img:hover { transform: translateY(25%) scale(1.1); }
        }
        .split-box-3 > .child:nth-child(2) {
            clip-path: polygon(0% 0%, 47% 0%, 47% 27%, 0% 97%);
            & img { transform: translate(-25%); }
            & img:hover { transform: translate(-25%) scale(1.1); }
        }
        .split-box-3 > .child:nth-child(3) {
            clip-path: polygon(100% 0%, 53% 0%, 53% 27%, 100% 97%);
            & img { transform: translate(25%); }
            & img:hover { transform: translate(25%) scale(1.1); }
        }

        /* Split image - 4 images */
        .split-box-4 .child {
            transition: visibility 0s linear 0.5s, z-index 0s linear 0.5s;
        }
        .split-box-4 > .child:nth-child(1),
        .split-box-4 > .child:nth-child(3) {
            clip-path: polygon(0% 0%, 0% 97%, 97% 0%);
            & img { transform: translateX(-25%); }
            & img:hover { transform: translateX(-25%) scale(1.1); }
        }
        .split-box-4 > .child:nth-child(2),
        .split-box-4 > .child:nth-child(4) {
            clip-path: polygon(100% 100%, 100% 3%, 3% 100%);
            & img { transform: translateX(25%); }
            & img:hover { transform: translateX(25%) scale(1.1); }
        }
        /* Split image - 4 images: Animation */
        .split-box-4 > .child:nth-child(1),
        .split-box-4 > .child:nth-child(2) {
            z-index: 1;
            visibility: visible;
            animation: switch-pairs 3s infinite alternate;
        }
        .split-box-4 > .child:nth-child(3),
        .split-box-4 > .child:nth-child(4) {
            z-index: 0;
            visibility: hidden;
            animation: switch-pairs-reverse 3s infinite alternate;
        }
        @keyframes switch-pairs {
            0%, 49% { z-index: 1; visibility: visible; }
            50%, 100% { z-index: 0; visibility: hidden; }
        }
        @keyframes switch-pairs-reverse {
            0%, 49% { z-index: 0; visibility: hidden; }
            50%, 100% { z-index: 1; visibility: visible; }
        }
    </style>
    `;

    constructor() {
        super();
    }
  
    connectedCallback() {
        this.loadData();
        const shadow = this.attachShadow({ mode: "open" });
        const stylelink = document.createElement("link");
        stylelink.rel = "stylesheet";
        stylelink.href = "style.css";
        shadow.appendChild(stylelink);
        const wrapper = document.createElement("span");
        wrapper.innerHTML = this.componentStyle + this.buildHTML();
        shadow.appendChild(wrapper);
    }

    loadData() {
        // required
        this.gameCode = this.getAttribute('gamecode');
        this.characterName = this.getAttribute('charactername');
        // optional
        if (this.hasAttribute('styles')) this.styles = this.getAttribute('styles');
        if (this.hasAttribute('classes')) this.classes = this.getAttribute('classes');
        if (this.hasAttribute('withbuilddialog')) this.withBuildDialog = this.getAttribute('withbuilddialog') == 'true';
        if (this.hasAttribute('withbackgroundclass')) this.withBackgroundClass = this.getAttribute('withbackgroundclass') == 'true';
        if (this.hasAttribute('withelement')) this.withElement = this.getAttribute('withelement') == 'true';
        if (this.hasAttribute('withtype')) this.withType = this.getAttribute('withtype') == 'true';
        if (this.hasAttribute('imagestyle')) this.imageStyle = this.getAttribute('imagestyle');

        let charNameList = this.characterName.split(',');
        this.charCount = charNameList.length;
        if (this.charCount == 1) {
            this.charmd = charactersRepository.getOne(this.gameCode, this.characterName);
            this.showElement = this.withElement && this.charmd.element;
            this.showType = this.withType && this.charmd.type;
            this.elementImageUrl = elementsRepository.getOne(this.gameCode, this.charmd.element).imageUrl;
            this.typeImageUrl = typesRepository.getOne(this.gameCode, this.charmd.type)?.imageUrl;
            this.addRarityClass = this.withBackgroundClass && this.charmd.rarity;
        } else {
            this.charmdList = charNameList.map(c => charactersRepository.getOne(this.gameCode, c));
            this.addRarityClass = this.withBackgroundClass;
        }
    }

    buildHTML() {
        if (this.imageStyle == 'card') {
            return `
            <div class="char-card ${this.addRarityClass ? this.gameCode+'-rarity-'+this.charmd.rarity : ''} ${this.charmd.enhanced ? 'glow-border' : ''}">
                ${Utils.ngIf(this.showElement, `
                <img
                    class="ele-img"
                    src="${this.elementImageUrl ?? Constants.images.transparent}"
                    width="${this.iconSize}"
                    height="${this.iconSize}"
                    title="${this.charmd.element}"
                    loading="lazy"
                />
                `)}
                ${Utils.ngIf(this.showType, `
                <img
                    class="type-img"
                    src="${this.typeImageUrl ?? Constants.images.transparent}"
                    width="${this.iconSize}"
                    height="${this.iconSize}"
                    title="${this.charmd.type}"
                    loading="lazy"
                />
                `)}
                <img
                    class="char-img ${this.withBuildDialog ? 'char-img-resize pointer' : ''}"
                    src="${this.charmd.cardImageUrl}" 
                    alt="${this.charmd.name ?? '?'}" 
                    title="${this.charmd.name ?? '?'}"
                    width="${this.dimensions}"
                    ${this.withBuildDialog ? `onclick="openBuildDialog('${this.charmd.name}', '${this.gameCode}')"` : ``}
                    loading="lazy"
                />
                <span class="char-name">${this.charmd.name}</span>
                <div class="smoky-overlay"></div>
            </div>
            `;
        } else if (this.charCount > 1) {
            return `
            <div class="split-box split-box-${this.charCount}" style="height: ${this.dimensions}px; width: ${this.dimensions}px; ${this.styles}">
                ${Utils.ngFor(this.charmdList, char => `
                <div class="child ${this.withBuildDialog ? 'pointer' : ''} ${this.addRarityClass ? this.gameCode+'-rarity-'+char.rarity : ''}"
                    ${this.withBuildDialog ? `onclick="openBuildDialog('${char.name}', '${this.gameCode}')"` : ``}>
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
            <div class="character-container ${this.addRarityClass ? this.gameCode+'-rarity-'+this.charmd.rarity : ''}" 
                style="border-radius: 5px; ${this.styles}">
                <img    
                    src="${this.charmd.imageUrl ?? Constants.images.unknown}" 
                    alt="${this.charmd.name ?? '?'}" 
                    title="${this.charmd.name ?? '?'}"
                    class="pfp ${this.withBuildDialog ? 'char-img-resize' : ''} ${this.classes}" 
                    style="display: block; height: auto;" 
                    width="${this.dimensions}"
                    ${this.withBuildDialog ? `onclick="openBuildDialog('${this.charmd.name}', '${this.gameCode}')"` : ``}
                    loading="lazy"
                />
                ${Utils.ngIf(this.showElement, `
                <img
                    src="${this.elementImageUrl ?? Constants.images.transparent}" 
                    width="${this.iconSize}" 
                    height="${this.iconSize}" 
                    class="element-icon" 
                    title="${this.charmd.element}"
                    loading="lazy"
                />
                `)}
                ${Utils.ngIf(this.showType, `
                <img
                    src="${this.typeImageUrl ?? Constants.images.transparent}" 
                    width="${this.iconSize}" 
                    height="${this.iconSize}" 
                    class="type-icon" 
                    title="${this.charmd.type}"
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

function openBuildDialog(character, gameCode) {
    if (null != buildsRepository.getByCharacter(gameCode, character)) {
        closeDialog();
        // trigger attributeChangedCallback & set data
        document.getElementById('character-details-dialog').setAttribute('character', character);
        document.getElementById('character-details-dialog').setAttribute('gamecode', gameCode);
        // add show class to dialog
        document.getElementById('character-details-dialog-body').classList.add('dialog-shown');
    }
}
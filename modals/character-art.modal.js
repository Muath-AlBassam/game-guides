// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal
class CharacterArtModal extends HTMLElement {

    static observedAttributes = ["character"];

    characterPFPSize = 125;
    
    componentStyle = `
    <style>
        .character-art-modal-content {
            width: 50%;
        }

        .close-modal {
            color: #aaaaaa;
            font-size: 28px;
            height: 28px;
            font-weight: bold;
        }
        .close-modal:hover, .close-modal:focus {
            color: #fff;
            text-decoration: none;
            cursor: pointer;
        }
    </style>`;

    constructor() {
      super();
    }
  
    connectedCallback() {
        const gameCode = Utils.getGameFromUrl();
        const character = this.getAttribute('character');

        this.innerHTML = this.buildHTML(gameCode, character);
    }

    attributeChangedCallback(name, oldValue, newValue) {
        const gameCode = Utils.getGameFromUrl();
        const character = this.getAttribute('character');

        this.innerHTML = this.buildHTML(gameCode, character);
    }

    buildHTML(gameCode, character) {
        return this.componentStyle + `
        <div class="gagu-modal" id="character-art-modal-body">
            <div class="gagu-modal-content__transparent character-art-modal-content">
                <div class="close-modal" onclick="closeModal()">${Constants.unicode.times}</div>
                ${this.buildDialogContent(gameCode, character)}
            </div>
        </div>`;
    }

    buildDialogContent(gameCode, character) {
        let charmd = CharactersRepository.getCharacterMetadata(gameCode, character);
        if (charmd.fullImageUrl) {
            return `
            <div class="center-content" >
                <img src="${charmd.fullImageUrl}" style="height: 90vh"/>
            </div>
            `;
        }
        return '';
    }
}

customElements.define('app-character-art-modal', CharacterArtModal);

//------------------------------------------------------------------------------------

function openCharacterArtModal(character) {
    // trigger attributeChangedCallback & set data
    document.getElementById('character-art-modal').setAttribute('character', character);
    // add show class to modal
    document.getElementById('character-art-modal-body').classList.add('modal-shown');
}

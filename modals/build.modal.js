// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal
class BuildModal extends HTMLElement {

    static observedAttributes = ["character"];
    
    componentStyle = `
    <style>
        .build-modal-content {
            /* */
        }

        .build-container {
            background-color: #2c2d33;
            border: 2px solid #484950;
            display: flex;
            flex-direction: column;
            padding: 0;
        }

        .build-container .build-header {
            grid-gap: 0;
            align-items: center;
            background-color: #36373d;
            border-bottom: 1px solid #484950;
            display: grid;
            grid-template-columns: 80px calc(100% - 80px);
            justify-content: space-between;
            width: 100%;
        }

        .build-container .build-header .build-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 70px;
            width: 70px;
        }

        .build-container .build-header .build-info {
            display: flex;
            align-items: center;
            padding-left: 15px;
        }

        .build-container .build-header .build-info .piece-count {
            color: hsla(0, 0%, 100%, .75);
            display: inline;
            padding-right: 5px;
        }

        .close-modal {
            color: #aaaaaa;
            top: 0;
            right: 0;
            float: right;
            font-size: 28px;
            font-weight: bold;
        }
        .close-modal:hover, .close-modal:focus {
            color: #fff;
            text-decoration: none;
            cursor: pointer;
        }

        .empty-dialog {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100px;
        }
    </style>`;

    constructor() {
      super();
    }
  
    connectedCallback() {
        const activeGame = getGame(getGameFromUrl());
        const character = this.getAttribute('character');

        this.innerHTML = this.buildHTML(activeGame, character);
    }

    attributeChangedCallback(name, oldValue, newValue) {
        const activeGame = getGame(getGameFromUrl());
        const character = this.getAttribute('character');

        document.getElementById('modal-body').innerHTML = this.buildDialogContent(activeGame, character);
    }

    buildHTML(activeGame, character) {
        return this.componentStyle + `
        <div class="gagu-modal" id="modal">
            <div class="gagu-modal-content" id="modal-body">
                ${this.buildDialogContent(activeGame, character)}
            </div>
        </div>`;
    }

    buildDialogContent(activeGame, character) {
        let buildContent = '';
        let charmd = getCharacterMetadata(activeGame.code, character);
        buildContent += this.buildModalHeader(charmd);
        if (charmd?.build) {
            buildContent += this.buildWeaponTable(charmd, activeGame.code);
            buildContent += this.buildSetsTable(charmd, activeGame.code);
        } else {
            buildContent += `<h1 class="empty-dialog">...</h1>`
        }
        return buildContent;
    }

    buildModalHeader(charmd) {
        return `
        <div class="close-modal" onclick="closeBuildModal()">&times;</div>
        <div>
            <div class="center-content" style="margin-top: 20px;">
                <!-- <img src="${charmd.imageUrl}" height="70" /> --> 
                <h5 style="margin-left: 10px;">${charmd.name}</h5>
            </div>
        </div>
        `;
    }

    buildWeaponTable(charmd, gameCode) {
        let content = '';
        if (charmd.build.weapon) {
            const weaponmd = getWeaponMetadata(gameCode, charmd.build.weapon.name);
            content = `
            <h5 class="content-header">
                ${getWeaponsLabel(gameCode)}
            </h5>
            <div class="build-container">
                <div class="build-header">
                    <div class="build-icon">
                        <img src="${weaponmd.imageUrl}" class="${gameCode}-rarity-${weaponmd.rarity}" height="70" />
                    </div>
                    <div class="build-info">
                        <h5 style="margin-bottom: 0;">${weaponmd.name}</h5>
                    </div>
                </div>
            </div>`;
        }
        return content;
    }

    buildSetsTable(charmd, gameCode) {
        let content = '';
        if (charmd.build.sets) {
            content += `
            <h5 class="content-header">
                ${getSetsLabel(gameCode)}
            </h5>
            <div class="build-container">`;
            
            charmd.build.sets.forEach(set => {
                const setmd = getSetMetadata(gameCode, set.name);
                content += `
                <div class="build-header">
                    <div class="build-icon">
                        <img src="${setmd.imageUrl}" height="70" />
                    </div>
                    <div class="build-info">
                        <span class="piece-count">(${set.pieceCount})</span>
                        <h5 style="margin-bottom: 0;">${setmd.name}</h5>
                    </div>
                </div>`;
            });
            content += `</div>`
        }
        return content;
    }
}

customElements.define('build-modal', BuildModal);

//------------------------------------------------------------------------------------

function openBuildModal(character) {
    const modalComponent = document.getElementById('build-modal');
    modalComponent.setAttribute('character', character);
    const modal = document.getElementById('modal');
    modal.classList.toggle('modal-shown');
}

function closeBuildModal() {
    const modal = document.getElementById('modal');
    modal.classList.toggle('modal-shown');
}

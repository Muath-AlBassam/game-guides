// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal
class BuildModal extends HTMLElement {

    static observedAttributes = ["character"];
    
    componentStyle = `
    <style>
        .build-modal-content {
            width: 20%;
        }
        
        .build-modal-content .character-image {
            border: 2px solid #484950;
            border-radius: 100%; 
        }

        .build-container {
            background-color: #2c2d33;
            border: 2px solid #484950;
            display: flex;
            flex-direction: column;
            padding: 0;
        }

        .build-container .build-item {
            grid-gap: 0;
            align-items: center;
            background-color: #36373d;
            border-bottom: 1px solid #484950;
            display: grid;
            grid-template-columns: 80px calc(100% - 80px);
            justify-content: space-between;
            width: 100%;
        }

        .build-container .build-item .build-image {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 80px;
            width: 80px;
        }

        .build-container .build-item .build-name {
            display: flex;
            align-items: center;
            padding-left: 15px;
        }

        .build-container .build-item .build-name .piece-count {
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
            <div class="gagu-modal-content build-modal-content" id="modal-body">
                ${this.buildDialogContent(activeGame, character)}
            </div>
        </div>`;
    }

    buildDialogContent(activeGame, character) {
        let buildContent = '';
        let charmd = getCharacterMetadata(activeGame.code, character);
        buildContent += this.buildModalHeader(activeGame.code, charmd);
        if (charmd?.build) {
            buildContent += this.buildWeaponTable(activeGame.code, charmd);
            buildContent += this.buildSetsTable(activeGame.code, charmd);
        } else {
            buildContent += `<h1 class="empty-dialog">...</h1>`
        }
        return buildContent;
    }

    buildModalHeader(gameCode, charmd) {
        return `
        <div class="close-modal" onclick="closeBuildModal()">&times;</div>
        <div>
            <div class="center-content" style="margin-top: 20px;">
                ${createCharacterImage(gameCode, charmd, {classes: 'character-image', withBackgroundClass: false})}
                <h5 style="margin-left: 10px;">${charmd.name}</h5>
            </div>
        </div>
        `;
    }

    buildWeaponTable(gameCode, charmd) {
        let content = '';
        if (charmd.build.weapon) {
            const weaponmd = getWeaponMetadata(gameCode, charmd.build.weapon.name);
            content = `
            <h5 class="content-header">
                ${getWeaponsLabel(gameCode)}
            </h5>
            <div class="build-container">
                <div class="build-item">
                    <div class="build-image">
                        <img src="${weaponmd.imageUrl}" class="${gameCode}-rarity-${weaponmd.rarity}" height="80" />
                    </div>
                    <div class="build-name">
                        <h5 style="margin-bottom: 0;">${weaponmd.name}</h5>
                    </div>
                </div>
            </div>`;
        }
        return content;
    }

    buildSetsTable(gameCode, charmd) {
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
                <div class="build-item">
                    <div class="build-image">
                        <img src="${setmd.imageUrl}" height="70" style="margin: 5px;" />
                    </div>
                    <div class="build-name">
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

function openBuildModal(character, imageUrl) {
    // trigger attributeChangedCallback & set data
    document.getElementById('build-modal').setAttribute('character', character);
    // add show class to modal
    document.getElementById('modal').classList.add('modal-shown');
    document.getElementById('body').classList.add('modal-shown');
}

function closeBuildModal() {
    document.getElementById('modal').classList.remove('modal-shown');
    document.getElementById('body').classList.remove('modal-shown');
}

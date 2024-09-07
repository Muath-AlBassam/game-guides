// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal
class BuildModal extends HTMLElement {

    static observedAttributes = ["character"];

    characterPFPSize = 125;
    
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
        const activeGame = GamesRepository.getGame(Utils.getGameFromUrl());
        const character = this.getAttribute('character');

        this.innerHTML = this.buildHTML(activeGame, character);
    }

    attributeChangedCallback(name, oldValue, newValue) {
        const activeGame = GamesRepository.getGame(Utils.getGameFromUrl());
        const character = this.getAttribute('character');

        document.getElementById('build-modal-content').innerHTML = this.buildDialogContent(activeGame, character);
    }

    buildHTML(activeGame, character) {
        return this.componentStyle + `
        <div class="gagu-modal" id="build-modal-body">
            <div class="gagu-modal-content build-modal-content" id="build-modal-content">
                ${this.buildDialogContent(activeGame, character)}
            </div>
        </div>`;
    }

    buildDialogContent(activeGame, character) {
        let buildContent = '';
        buildContent += this.buildModalHeader(activeGame.code, character);
        let buildmd = BuildsRepository.getCharacterBuild(activeGame.code, character);
        if (buildmd) {
            buildContent += this.buildWeaponTable(activeGame.code, buildmd);
            buildContent += this.buildSetsTable(activeGame.code, buildmd);
        } else {
            buildContent += `<h1 class="empty-dialog">...</h1>`
        }
        return buildContent;
    }

    buildModalHeader(gameCode, character) {
        let charmd = CharactersRepository.getCharacterMetadata(gameCode, character);
        return `
        <div class="close-modal" onclick="closeModal()">${Constants.unicode.times}</div>
        <div>
            <div class="center-content" style="margin-top: 20px;">
                ${Utils.createCharacterImage(gameCode, charmd, 
                    {dimensions: this.characterPFPSize, classes: 'character-image', styles: 'border-radius: 100%;', withBackgroundClass: false})}
                <h5 style="margin-left: 10px;">${charmd.name}</h5>
            </div>
        </div>
        `;
    }

    buildWeaponTable(gameCode, buildmd) {
        let content = '';
        if (buildmd.weapon) {
            const weaponmd = WeaponsRepository.getWeaponMetadata(gameCode, buildmd.weapon.name);
            content = `
            <h5 class="content-header">
                ${this.getWeaponsLabel(gameCode)}
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

    buildSetsTable(gameCode, buildmd) {
        let content = '';
        if (buildmd.sets) {
            content += `
            <h5 class="content-header">
                ${this.getSetsLabel(gameCode)}
            </h5>
            <div class="build-container">`;
            
            buildmd.sets.forEach(set => {
                const setmd = SetsRepository.getSetMetadata(gameCode, set.name);
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

    getWeaponsLabel(gameCode) {
        switch (gameCode) {
            case Constants.games.GI:
                return 'Weapon';
            case Constants.games.HSR:
                return 'Light Cone';
            case Constants.games.ZZZ:
                return 'W-Engine';
            case Constants.games.HI3:
                return 'Weapon';
            default:
                return '';
        }    
    }
    
    getSetsLabel(gameCode) {
        switch (gameCode) {
            case Constants.games.GI:
                return 'Artifacts';
            case Constants.games.HSR:
                return 'Relics & Planar';
            case Constants.games.ZZZ:
                return 'Drive Discs';
            case Constants.games.HI3:
                return 'Stigmata';
            default:
                return '';
        }    
    }
}

customElements.define('build-modal', BuildModal);

//------------------------------------------------------------------------------------

function openBuildModal(character) {
    // trigger attributeChangedCallback & set data
    document.getElementById('build-modal').setAttribute('character', character);
    // add show class to modal
    document.getElementById('build-modal-body').classList.add('modal-shown');
}

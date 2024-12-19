// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal
class TeamCharacterDetailsComponent extends HTMLElement {

    static observedAttributes = ["character"];

    characterPFPSize = 125;
    
    componentStyle = `
    <style>
        .build-dialog-content {
            width: 20%;
        }
        
        .build-dialog-content .character-image {
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

        .close-dialog {
            color: #aaaaaa;
            font-size: 28px;
            height: 28px;
            font-weight: bold;
        }
        .close-dialog:hover, .close-dialog:focus {
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
        <div class="gagu-dialog" style="padding-top: 15vh;" id="build-dialog-body">
            <div class="gagu-dialog-content build-dialog-content">
                <div class="close-dialog" onclick="closeDialog()">${Constants.unicode.times}</div>
                ${this.buildDialogContent(gameCode, character)}
            </div>
        </div>`;
    }

    buildDialogContent(gameCode, character) {
        let buildContent = '';
        buildContent += this.buildDialogHeader(gameCode, character);
        let buildmd = BuildsRepository.getCharacterBuild(gameCode, character);
        if (buildmd) {
            buildContent += this.buildWeaponTable(gameCode, buildmd);
            buildContent += this.buildSetsTable(gameCode, buildmd);
        } else {
            buildContent += `<h1 class="empty-dialog">...</h1>`
        }
        return buildContent;
    }

    buildDialogHeader(gameCode, character) {
        let charmd = CharactersRepository.getCharacterMetadata(gameCode, character);
        let roleImage = '';
        if (charmd.role) {
            const rolemd = RolesRepository.getRole(gameCode, charmd.role);
            roleImage = `<img src="${rolemd.imageUrl}" height="30" title="${rolemd.name}" style="margin-right: 5px;">`;
        }
        let rarity = RarityRepository.getRarity(gameCode, charmd.rarity);
        let rarityImage = '';
        if (rarity) {
            rarityImage = `<img src="${rarity.imageUrl}" height="30" title="${rarity.code}" style="margin: 0 5px;">`;
        }
        return `
        <div>
            <div class="center-content" style="margin-top: 20px;">
                <div class="character-container">
                    ${Utils.createCharacterImage(gameCode, charmd, 
                        {dimensions: this.characterPFPSize, classes: 'character-image', styles: 'border-radius: 100%;', withBackgroundClass: false, withAltElement: true})}
                </div>
            </div>
            <div class="center-content">
                ${roleImage} <h5>${charmd.name}</h5>
            </div>
            <div class="center-content">
                ${rarityImage}
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
                        <img src="${weaponmd.imageUrl ?? 'assets/svg/unknown.svg'}" class="${gameCode}-rarity-${weaponmd.rarity}" height="80" />
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
                    <div class="build-image" style="background-color: #2c2d33;">
                        <img src="${setmd.imageUrl ?? 'assets/svg/unknown.svg'}" height="70" style="margin: 5px;" />
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

customElements.define('app-team-character-details', TeamCharacterDetailsComponent);

//------------------------------------------------------------------------------------

function openBuildDialog(character) {
    // trigger attributeChangedCallback & set data
    document.getElementById('build-dialog').setAttribute('character', character);
    // add show class to dialog
    document.getElementById('build-dialog-body').classList.add('dialog-shown');
}

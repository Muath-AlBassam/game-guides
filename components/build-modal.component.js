// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal
class BuildModal extends HTMLElement {

    static observedAttributes = ["character"];
    
    componentStyle = `
    <style>
       .build-modal {
            display: none;
            position: fixed;
            z-index: 1;
            padding-top: 23vh;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            overflow: auto;
            background-color: rgba(0, 0, 0, 0.6);
        }

        .build-modal-content {
            background-color: var(--background-color);
            margin: auto;
            padding: 20px;
            border: 1px solid #888;
            width: 20%;
        }

        .build-modal-content td {
            color: var(--text-color);
        }
        .build-modal-content .table {
            border: 1px solid #33343a;
            vertical-align: middle;
        }
        .build-modal-content .table.table-striped>tbody>tr:nth-of-type(odd)>* {
            background-color: #2c2d33;
            box-shadow: none;
            color: #fff;
        }
        .build-modal-content .table.table-striped>tbody>tr:nth-of-type(even)>* {
            background-color: transparent;
            box-shadow: none;
            color: #fff;
        }
        .build-modal-content .table.table-striped td {
            align-items: center;
            justify-content: center;
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
        const gameCode = window.location.hash.replace('#', '');
        const character = this.getAttribute('character');

        this.innerHTML = this.buildHTML(gameCode, character);
    }

    attributeChangedCallback(name, oldValue, newValue) {
        const gameCode = window.location.hash.replace('#', '');
        const character = this.getAttribute('character');

        document.getElementById('modal-body').innerHTML = this.buildDialogContent(gameCode, character);
    }

    buildHTML(gameCode, character) {
        return this.componentStyle + `
        <div class="build-modal" id="modal">
            <div class="build-modal-content" id="modal-body">
                ${this.buildDialogContent(gameCode, character)}
            </div>
        </div>`;
    }

    buildDialogContent(gameCode, character) {
        let charmd = getCharacterMetadata(gameCode, character);

        let buildContent = '';
        buildContent += this.buildModalHeader(charmd, gameCode);
        if (charmd?.build) {
            buildContent += this.buildWeaponTable(charmd, gameCode);
            buildContent += this.buildArtifactsTable(charmd);
        } else {
            buildContent += `<h1 class="empty-dialog">...</h1>`
        }
        return buildContent;
    }

    buildModalHeader(charmd, gameCode) {
        return `
        <div class="close-modal" onclick="closeBuildModal()">&times;</div>
        <div>
            <div class="center-content" style="margin-top: 20px;">
            <img src="${charmd.imageUrl}" height="70" /> 
            <h5 style="margin-left: 10px;">${charmd.name}</h5>
            </div>
        </div>
        `;
    }

    buildWeaponTable(charmd, gameCode) {
        let content = '';
        if (charmd.build.weapon) {
            const weapon = charmd.build.weapon;
            content = `
            <h5 class="content-header">
                Weapon
            </h5>
            <table class="table table-striped table-bordered">
                <tbody>
                    <tr>
                        <td style="width: 50px; text-align: center">
                            <img src="${weapon.imageUrl}" class="${gameCode}-rarity-${weapon.rarity}" height="70" />
                        </td>
                        <td>
                            ${weapon.name}
                        </td>
                    </tr>
                </tbody>
            </table>`;
        }
        return content;
    }

    buildArtifactsTable(charmd) {
        let content = '';
        if (charmd.build.artifacts) {
            content += `
            <h5 class="content-header">
                Artifacts
            </h5>
            <table class="table table-striped table-bordered"><tbody>`;
            
            charmd.build.artifacts.forEach(art => {
                content += `
                <tr>
                    <td style="width: 50px; text-align: center">
                        <img src='${art.imageUrl}' height="70" />
                    </td>
                    <td>
                        ${art.name}
                    </td>
                </tr>`;
            });
            content += `</tbody></table>`
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
    modal.style.display = "block";
}

function closeBuildModal() {
    const modal = document.getElementById('modal');
    modal.style.display = "none";
}

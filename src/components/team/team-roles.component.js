class RolesComponent extends HTMLElement {

    // inputs
    gameCode = null;
    teamName = null;

    characterPFPSize = 80;
    currentTeam = null;
    
    componentStyle = `
    <style>
        .roles-container {
            /**/
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
        this.gameCode = this.getAttribute('game');
        this.teamName = this.getAttribute('team');

        this.currentTeam = teamsRepository.getTeam(this.gameCode, this.teamName);
    }

    buildHTML() {
        return `
        <div class="container roles-container">
            <div>
                <h5 class="content-header">
                    <img src="assets/svg/roles.svg" height="20" style="margin-right: 5px;">
                    Roles
                </h5>
            </div>
            <table class="table table-striped table-bordered">
                <tbody>
                    ${Utils.ngFor(this.currentTeam.characters, character => `
                    <tr>
                        <td style="width: 50px; text-align: center">
                            <app-character-image 
                                gamecode="${this.gameCode}"
                                charactername="${character?.name}"
                                dimensions="${this.characterPFPSize}"
                                styles="margin: 5px 10px;"
                                mobilesizeratio="0.5"
                            >
                            </app-character-image>
                        </td>
                        <td style="font-size: 1.2em; font-weight: bold;">
                            ${Utils.ngIf(this.getCharacter(this.gameCode, character.name).role, 
                            `<img 
                                src="${this.getRole(this.gameCode, character.name).imageUrl}" 
                                height="30" 
                                title="${this.getRole(this.gameCode, character.name).name}" 
                                style="margin: 0 5px;">`
                            )}
                            <span style="margin-left: 5px;">${character.role ?? ''}</span>
                        </td>
                    </tr>  
                    `)}
                </tbody>
            </table>
        </div>`;
    }

    // TODO
    getRole(gameCode, characterName) {
        let charmd = charactersRepository.getCharacterMetadata(gameCode, characterName);
        return rolesRepository.getRole(gameCode, charmd.role);
    }

    // TODO
    getCharacter(gameCode, characterName) {
        return charactersRepository.getCharacterMetadata(gameCode, characterName);;
    }
}

customElements.define('app-team-roles', RolesComponent);

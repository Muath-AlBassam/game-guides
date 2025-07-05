class RolesComponent extends HTMLElement {

    // inputs
    gameCode = null;
    currentTeam = null;

    characterPFPSize = 80;
    
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
        this.gameCode = this.getAttribute('gamecode');
        this.currentTeam = Utils.fromJSONString(this.getAttribute('team'));;
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
                    ${Utils.ngFor(this.currentTeam.characters, teamCharacter => `
                    <tr>
                        <td style="width: 50px; text-align: center">
                            <app-character-image 
                                gamecode="${this.gameCode}"
                                charactername="${teamCharacter?.name}"
                                dimensions="${this.characterPFPSize}"
                                styles="margin: 5px 10px;"
                                mobilesizeratio="0.5"
                            >
                            </app-character-image>
                        </td>
                        <td style="font-size: 1.2em; font-weight: bold;">
                            <img 
                                src="${this.getRole(teamCharacter.roleCode).imageUrl}" 
                                height="30" 
                                title="${this.getRole(teamCharacter.roleCode).name}" 
                                style="margin: 0 5px;">
                            <span style="margin-left: 5px;">${teamCharacter.roleDescription ?? ''}</span>
                        </td>
                    </tr>  
                    `)}
                </tbody>
            </table>
        </div>`;
    }

    // TODO
    getRole(roleCode) {
        return rolesRepository.getOne(roleCode);
    }
}

customElements.define('app-team-roles', RolesComponent);

class RolesComponent extends HTMLElement {

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
        const gameCode = this.getAttribute('game');
        const teamName = this.getAttribute('team');
        const activeGame = getGame(gameCode);
        const currentTeam = getTeam(gameCode, teamName);

        this.innerHTML = this.buildHTML(activeGame, currentTeam);
    }

    buildHTML(activeGame, currentTeam) {
        return this.componentStyle + `
        <div class="team-details-container roles-container">
            <div>
                <h5 class="content-header">
                    <img src="assets/svg/roles.svg" height="20" class="action">
                    Roles
                </h5>
            </div>
            <table class="table table-striped table-bordered">
                <tbody>
                ${this.buildRolesContent(activeGame, currentTeam)}
                </tbody>
            </table>
        </div>`;
    }

    // build <tr> for each team member role
    buildRolesContent(activeGame, currentTeam) {
        let rolesContent = '';

        currentTeam.characters.forEach(character => {
            const charmd = getCharacterMetadata(activeGame.code, character?.name);
            let roleImage = '';
            if (charmd.role) {
                const rolemd = getRole(activeGame.code, charmd.role);
                roleImage = `<img src="${rolemd.imageUrl}" height="20" title="${rolemd.name}" style="margin: 0 10px 0 5px;">`;
            }
            rolesContent += `
            <tr>
                <td style="width: 50px; text-align: center">
                    ${createCharacterImage(activeGame.code, charmd, 
                        {dimensions: this.characterPFPSize, styles: 'margin: 5px 10px;'})}
                </td>
                <td style="font-size: 1.2em; font-weight: bold;">
                    ${roleImage}
                    ${character.role ?? ''}
                </td>
            </tr>`;
        });

        return rolesContent;
    }
}

customElements.define('roles-component', RolesComponent);

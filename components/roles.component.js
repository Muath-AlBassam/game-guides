class RolesComponent extends HTMLElement {

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
        const currentTeam = getTeams(gameCode).find(team => team.name == teamName);

        let rolesContent = '';

        currentTeam.characters.forEach(character => {
            const charmd = getCharacterMetadata(activeGame.code, character?.name);
            let roleImage = '';
            if (charmd.role) {
                const rolemd = getRoles(gameCode).find(role => role.name == charmd.role);
                roleImage = `<img src="${rolemd.imageUrl}" height="20" title="${rolemd.name}" style="margin: 0 10px 0 5px;"></img>`;
            }
            rolesContent +=  
                `<tr>
                    <td style="width: 50px; text-align: center">
                       ${createCharacterImage(gameCode, charmd, 60, 'margin: 5px 10px;')}
                    </td>
                    <td>
                        ${roleImage}
                        ${character.role ?? ''}
                    </td>
                </tr>`;
        })

        this.innerHTML = 
            this.componentStyle + 
            `<div class="team-details-container roles-container">
                <div>
                    <h5 class="content-header">
                        <img src="assets/svg/roles.svg" height="20" class="action"></img>
                        Roles
                    </h5>
                </div>
                <table class="table table-striped table-bordered">
                    <tbody>
                    ${rolesContent}
                    </tbody>
                </table>
            </div>`;
    }
}

customElements.define('roles-component', RolesComponent);

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
            rolesContent +=  
                `<tr>
                    <td style="width: 50px; text-align: center">
                        <img 
                            src='${charmd.imageUrl ?? 'assets/Unknown.png'}' alt='${charmd.name}' title='${charmd.name ?? '?'}'
                            class='${activeGame.code}-rarity-${charmd.rarity ?? ''}'
                            width='40' height='40' style='margin: 5px 10px;'
                        />
                        <span>${charmd.name}</span>
                    </td>
                    <td>
                        ${character.role}
                    </td>
                </tr>`;
        })

        this.innerHTML = 
            this.componentStyle + 
            `<div class="roles-container team-details-container">
                <div>
                    <h5 class="content-header">Roles</h5>
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

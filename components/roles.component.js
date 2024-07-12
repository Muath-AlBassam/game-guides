class RolesComponent extends HTMLElement {

    componentStyle = `
        <style>
            .roles-container {
                border: 2px solid #33343a;
                padding: 0 10px;
            }

            .roles-container td {
                color: var(--text-color);
            }

            .table {
                border: 1px solid #33343a;
                vertical-align: middle;
            }

            .table.table-striped>tbody>tr:nth-of-type(odd)>* {
                background-color: #2c2d33;
                box-shadow: none;
                color: #fff;
            }

            .table.table-striped>tbody>tr:nth-of-type(even)>* {
                background-color: transparent;
                box-shadow: none;
                color: #fff;
            }

            .table.table-striped td {
                align-items: center;
                justify-content: center;
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
            `<div class="roles-container">
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

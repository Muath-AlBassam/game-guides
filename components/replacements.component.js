class ReplacementsComponent extends HTMLElement {

    componentStyle = `
        <style>
            .replacements-container {
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

        let replacementsContent = '';

        currentTeam.characters.forEach(character => {
            const charmd = getCharacterMetadata(activeGame.code, character?.name);

            let charReplacements = '';
            if (character.replacedBy) {
                character.replacedBy.forEach(rep => {
                    const repmd = getCharacterMetadata(activeGame.code, rep);
                    charReplacements += createCharacterImage(gameCode, repmd, 40, 'margin: 5px 10px;', true);
                })
            }

            replacementsContent +=  
                `<tr>
                    <td style="width: 50px; text-align: center">
                       ${createCharacterImage(gameCode, charmd, 40, 'margin: 5px 10px;', true)}
                    </td>
                    <td>
                        ${charReplacements}
                    </td>
                </tr>`;
        })

        this.innerHTML = 
            this.componentStyle + 
            `<div class="team-details-container replacements-container">
                <div>
                    <h5 class="content-header">Replacements</h5>
                </div>
                <table class="table table-striped table-bordered">
                    <tbody>
                    ${replacementsContent}
                    </tbody>
                </table>
            </div>`;
    }
}

customElements.define('replacements-component', ReplacementsComponent);

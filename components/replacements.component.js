class ReplacementsComponent extends HTMLElement {

    characterPFPSize = 80;

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
        const currentTeam = getTeam(gameCode, teamName);

        this.innerHTML = this.buildHTML(activeGame, currentTeam);
    }

    buildHTML(activeGame, currentTeam) {
        return this.componentStyle + `
        <div class="team-details-container replacements-container">
            <h5 class="content-header">
                <img src="assets/svg/replacements.svg" height="20" class="action">
                Replacements
            </h5>
            <table class="table table-striped table-bordered">
                <tbody>
                ${this.buildReplacements(activeGame, currentTeam)}
                </tbody>
            </table>
        </div>`;
    }

    // build <tr> for each team member replacement
    buildReplacements(activeGame, currentTeam) {
        let replacementsContent = '';

        currentTeam.characters.forEach(character => {
            const charmd = getCharacterMetadata(activeGame.code, character?.name);

            let charReplacements = '';
            if (character.replacedBy) {
                character.replacedBy.forEach(rep => {
                    const repmd = getCharacterMetadata(activeGame.code, rep);
                    charReplacements += createCharacterImage(activeGame.code, repmd, 
                        {dimensions: this.characterPFPSize, styles: 'margin: 5px 10px;', withBuildModal: true});
                })
            }

            replacementsContent += `
            <tr>
                <td style="width: 50px; text-align: center">
                    ${createCharacterImage(activeGame.code, charmd, 
                        {dimensions: this.characterPFPSize, styles: 'margin: 5px 10px;'})}
                </td>
                <td>
                    ${charReplacements}
                </td>
            </tr>`;
        });

        return replacementsContent;
    }
}

customElements.define('replacements-component', ReplacementsComponent);

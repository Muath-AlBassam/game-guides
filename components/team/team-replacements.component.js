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
        const activeGame = GamesRepository.getGame(gameCode);
        const currentTeam = TeamsRepository.getTeam(gameCode, teamName);

        this.innerHTML = this.buildHTML(activeGame, currentTeam);
    }

    buildHTML(activeGame, currentTeam) {
        return this.componentStyle + `
        <div class="container replacements-container">
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
            const charmd = CharactersRepository.getCharacterMetadata(activeGame.code, character?.name);

            let charReplacements = '';
            if (character.replacedBy) {
                character.replacedBy.forEach(rep => {
                    const repmd = CharactersRepository.getCharacterMetadata(activeGame.code, rep);
                    charReplacements += Utils.createCharacterImage(activeGame.code, repmd, 
                        {dimensions: this.characterPFPSize, styles: 'margin: 5px 10px;', withBuildDialog: true, withElement: true});
                })
            }

            replacementsContent += `
            <tr>
                <td style="width: 50px; text-align: center">
                    ${Utils.createCharacterImage(activeGame.code, charmd, 
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

customElements.define('app-team-replacements', ReplacementsComponent);

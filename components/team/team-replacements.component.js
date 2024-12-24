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
            let charReplacements = this.buildCharacterReplacements(activeGame, character);
            replacementsContent += `
            <tr>
                <td style="width: 50px; text-align: center">
                    <character-image 
                        gamecode="${activeGame.code}"
                        charactername="${character?.name}"
                        dimensions="${this.characterPFPSize}"
                        styles="margin: 5px 10px;">
                    </character-image>
                </td>
                <td>
                    ${charReplacements}
                </td>
            </tr>`;
        });

        return replacementsContent;
    }

    buildCharacterReplacements(activeGame, character) {
        let charReplacements = '';
        if (character.replacements && character.replacements.length > 0) {
            character.replacements.forEach(rep => {
                charReplacements += `
                <character-image 
                    gamecode="${activeGame.code}"
                    charactername="${rep}"
                    dimensions="${this.characterPFPSize}"
                    styles="margin: 5px 10px;"
                    withbuilddialog="true"
                    withelement="true">
                </character-image>
                `
            })
        } else {
            charReplacements = `
                <div style="margin: 5px 10px; width: ${this.characterPFPSize}px; display: flex; justify-content: center;">
                    <h1 class="empty-details" style="color: #000">${Constants.unicode.times}</h1>
                </div>
            `;
        }
        return charReplacements;
    }
}

customElements.define('app-team-replacements', ReplacementsComponent);

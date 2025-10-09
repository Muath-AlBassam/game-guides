class GameGuidesComponent extends HTMLElement {

    gameCode = null;
    gameStyle = null;

    constructor() {
      super();
    }
  
    connectedCallback() {
        this.loadData();
        this.innerHTML = this.buildHTML();
        this.listenToEvents();
        this.restoreDialogState();
    }

    loadData() {
        this.gameCode = RouteUtils.getGame();
        let activeGame = gamesRepository.getOne(this.gameCode);
        this.gameStyle = activeGame ? activeGame.style : Constants.gameStyles.NONE;
    }

    listenToEvents() {
        window.addEventListener('hashchange', () => {
            let updatedGameCode = RouteUtils.getGame();
            if (updatedGameCode != this.gameCode) {
                this.loadData();
                this.render();
            }
        });
    }

    render() {
        this.innerHTML = `<app-loader></app-loader>`;
        setTimeout(() => {
            this.innerHTML = this.buildHTML();
        }, 200);
    }

    restoreDialogState() {
        setTimeout(() => {
            if (getQueryParameter('t') != null) {
                openTeamDetailsDialog(this.gameCode, getQueryParameter('t'));
            } else if (getQueryParameter('c') != null) {
                openCharacterDetailsDialog(this.gameCode, getQueryParameter('c'));
            }
        }, 1000)
    }

    buildHTML() {
        let content = `
            <app-character-details-dialog id="character-details-dialog" gamecode="${this.gameCode}"></app-character-details-dialog>
            <app-team-details-dialog id="team-dialog" gamecode="${this.gameCode}"></app-team-details-dialog>
            <app-game-header gamecode="${this.gameCode}"></app-game-header>
        `;
        switch (this.gameStyle) {
            case Constants.gameStyles.TEAMS:
                content += `<app-team-container gamecode="${this.gameCode}"></app-team-container>`;
                break;
            case Constants.gameStyles.FIGHT:
                content += `<app-fight-list gamecode="${this.gameCode}"></app-fight-list>`;
                break;
            case Constants.gameStyles.LOOTER_SHOOTER:
                content += `<app-ls-character-list gamecode="${this.gameCode}"></app-ls-character-list>`;
                break;
            default:
                return `<app-home></app-home>`;
        }
        return content;
    }
}

customElements.define('app-game-guides', GameGuidesComponent);

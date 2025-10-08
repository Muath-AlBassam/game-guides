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
        }, 500);
    }

    buildHTML() {
        switch (this.gameStyle) {
            case Constants.gameStyles.TEAMS:
                return `
                <app-character-details-dialog id="character-details-dialog" gamecode="${this.gameCode}"></app-character-details-dialog>
                <app-game-header gamecode="${this.gameCode}"></app-game-header>
                <app-team-container gamecode="${this.gameCode}"></app-team-container>
                `;
            case Constants.gameStyles.FIGHT:
                return `
                <app-game-header gamecode="${this.gameCode}"></app-game-header>
                <app-fight-list gamecode="${this.gameCode}"></app-fight-list>
                `;
            case Constants.gameStyles.LOOTER_SHOOTER:
                return `
                <app-character-details-dialog id="character-details-dialog" gamecode="${this.gameCode}"></app-character-details-dialog>
                <app-game-header gamecode="${this.gameCode}"></app-game-header>
                <app-ls-character-list gamecode="${this.gameCode}"></app-ls-character-list>
                `;
            default:
                return `
                <app-home></app-home>`;
        }
    }
}

customElements.define('app-game-guides', GameGuidesComponent);

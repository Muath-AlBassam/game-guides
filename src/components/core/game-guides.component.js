class GameGuidesComponent extends HTMLElement {

    gameStyle = null;

    constructor() {
      super();
    }
  
    connectedCallback() {
        this.loadData();
        this.render();
        this.listenToEvents();
    }

    loadData() {
        let activeGame = gamesRepository.getGame(Utils.getGameFromUrl());
        this.gameStyle = activeGame ? activeGame.style : Constants.gameStyles.NONE;
    }

    listenToEvents() {
        window.addEventListener('hashchange', () => {
            this.loadData();
            this.render();
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
                return `<app-game-header></app-game-header><app-team-container></app-team-container>`;
            case Constants.gameStyles.FIGHT:
                return `<app-game-header></app-game-header><app-fight-list></app-fight-list>`;
            default:
                return `<app-home></app-home>`;
        }
    }
}

customElements.define('app-game-guides', GameGuidesComponent);

class GameGuidesComponent extends HTMLElement {

    activeGame = null;

    constructor() {
      super();
    }
  
    connectedCallback() {
        this.loadData();
        this.render();

        window.addEventListener('hashchange', () => {
            this.render();
        });
    }

    loadData() {
        this.activeGame = GamesRepository.getGame(Utils.getGameFromUrl());
    }

    render() {
        this.innerHTML = `<app-loader></app-loader>`;
        setTimeout(() => {
            this.innerHTML = this.buildHTML();
        }, 500);
    }

    buildHTML() {
        switch (this.activeGame.style) {
            case Constants.gameStyles.TEAMS:
                return `<app-team-container></app-team-container>`;
            case Constants.gameStyles.FIGHT:
                return `<app-fight-list></app-fight-list>`;
            default:
                return `<div class="center-content"><h1>...</h1></div>`;
        }
    }
}

customElements.define('app-game-guides', GameGuidesComponent);

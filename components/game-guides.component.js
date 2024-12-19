class GameGuidesComponent extends HTMLElement {

    // attribute that on change will trigger "attributeChangedCallback"
    // https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements#responding_to_attribute_changes
    static observedAttributes = ["name"];
    
    componentStyle = `
    <style>
        /**/
    </style>`;

    constructor() {
      super();
    }
  
    connectedCallback() {
        this.buildHTML();

        window.addEventListener('hashchange', () => {
            this.buildHTML();
        });
    }

    buildHTML() {
        const activeGame = GamesRepository.getGame(Utils.getGameFromUrl());
        this.innerHTML = this.componentStyle + `
            <app-loader></app-loader>
        `;

        setTimeout(() => {
            this.innerHTML = this.componentStyle + this.getGameComponent(activeGame);
        }, 500);
    }

    getGameComponent(activeGame) {
        switch (activeGame.style) {
            case Constants.gameStyles.TEAMS:
                return `<app-team-container name="${activeGame.code}"></app-team-container>`;
            case Constants.gameStyles.FIGHT:
                return `<app-fight-list name="${activeGame.code}"></app-fight-list>`;
            default:
                return `<div class="center-content"><h1>...</h1></div>`;
        }
    }
}

customElements.define('app-game-guides', GameGuidesComponent);

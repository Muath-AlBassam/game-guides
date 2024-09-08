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
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.buildHTML();
    }

    buildHTML() {
        const activeGame = GamesRepository.getGame(this.getAttribute("name"));
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
                return `<app-team-list name="${activeGame.code}"></app-team-list>`;
            case Constants.gameStyles.FIGHT:
                return `<app-fight-list name="${activeGame.code}"></app-fight-list>`;
            default:
                return `<div class="center-content"><h1>...</h1></div>`;
        }
    }
}

customElements.define('app-game-guides', GameGuidesComponent);

//------------------------------------------------------------------------------------

window.addEventListener('hashchange', () => {
    setPageContent();
});

function setPageContent() {
    const components = document.getElementsByTagName('app-game-guides');
    if (components.length == 1) {
        components[0].setAttribute("name", Utils.getGameFromUrl());
    }
}
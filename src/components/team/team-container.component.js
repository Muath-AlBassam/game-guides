class TeamContainerComponent extends HTMLElement {

    gameCode = null;

    constructor() {
      super();
    }
  
    connectedCallback() {
        this.loadData();
        this.innerHTML = this.buildHTML();
    }

    loadData() {
        this.gameCode = this.getAttribute('gamecode');
    }

    buildHTML() {
        return `
            <app-team-character-details id="build-dialog" gamecode="${this.gameCode}"></app-team-character-details>
            <app-team-character-teams id="teams-dialog" gamecode="${this.gameCode}"></app-team-character-teams>
            <app-team-tabs gamecode="${this.gameCode}"></app-team-tabs>
        `;
    }
}

customElements.define('app-team-container', TeamContainerComponent);

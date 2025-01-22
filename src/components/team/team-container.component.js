class TeamContainerComponent extends HTMLElement {

    constructor() {
      super();
    }
  
    connectedCallback() {
        this.innerHTML = this.buildHTML();
    }

    buildHTML() {
        return `
            <app-team-character-details id="build-dialog"></app-team-character-details>
            <app-team-tabs></app-team-tabs>
        `;
    }
}

customElements.define('app-team-container', TeamContainerComponent);

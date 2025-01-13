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
            <app-team-search></app-team-search>
            <app-team-characters></app-team-characters>
            <app-team-list></app-team-list>
        `;
    }
}

customElements.define('app-team-container', TeamContainerComponent);

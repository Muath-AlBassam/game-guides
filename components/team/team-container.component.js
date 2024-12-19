class TeamContainerComponent extends HTMLElement {

    componentStyle = `
    <style>
        
    </style>`;

    constructor() {
      super();
    }
  
    connectedCallback() {
        this.innerHTML = this.buildHTML();
    }

    buildHTML() {
        return `
            <app-team-character-details id="build-dialog"></app-team-character-details>
            <app-team-characters></app-team-characters>
            <app-team-list></app-team-list>
        `;
    }
}

customElements.define('app-team-container', TeamContainerComponent);

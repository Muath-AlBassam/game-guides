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
            <div class="row">
                <div class="col-md-12">
                    <div class="content-header">Search</div>
                </div>
            </div>
            <app-team-search></app-team-search>
            <app-team-characters></app-team-characters>
            <app-team-list></app-team-list>
        `;
    }
}

customElements.define('app-team-container', TeamContainerComponent);

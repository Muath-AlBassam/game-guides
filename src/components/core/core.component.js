class CoreComponent extends HTMLElement {

    constructor() {
      super();
    }
  
    connectedCallback() {
        this.loadData();
        this.innerHTML = this.buildHTML();
    }

    loadData() {
        //
    }

    buildHTML() {
        return `
        <app-header></app-header>
        <app-nav></app-nav>

        <div class="main-content">
            <app-game-guides></app-game-guides>
        </div>
        `;
    }
}

customElements.define('app-core', CoreComponent);

class TeamTabsComponent extends HTMLElement {

    gameCode = null;

    componentStyle = `
    <style>
        .tabs-header {
            margin-top: 2em;
            display: grid;
            grid-template-columns: 1fr 1fr;
        }

        .tabs-header .tab-item {
            list-style: none;
            text-align: center;
            font-size: 24px;
            font-weight: bold;
            cursor: pointer;
            padding: 8px 0px;
            background-color: #2c2d33;
        }

        .tabs-header .tab-item.active {
            border-bottom: 4px solid #6b6b6b;
            background-color: #33343a;
        }

        .tabs-header .tab-item:not(.active):hover {
            background-color: #33343a;
        }
    </style>`;

    constructor() {
      super();
    }
  
    connectedCallback() {
        this.loadData();
        this.innerHTML = this.componentStyle + this.buildHTML();
    }

    loadData() {
        this.gameCode = this.getAttribute('gamecode');
    }

    buildHTML() {
        return `
        <div class="tabs-header" role="tablist">
            <div role="presentation" data-bs-toggle="tab" data-bs-target="#TeamsTab" class="tab-item active">
                Teams
            </div>
            <div role="presentation" data-bs-toggle="tab" data-bs-target="#CharactersTab" class="tab-item">
                Characters
            </div>
        </div>

        <div class="tab-content">
            <div id="TeamsTab" role="tabpanel" aria-labelledby="Teams" class="tab-pane active">
                <div class="info">
                    <app-team-list gamecode="${this.gameCode}"></app-team-list>
                </div>
            </div>
            <div id="CharactersTab" role="tabpanel" aria-labelledby="Characters" class="tab-pane">
                <div class="info">
                    <app-team-characters gamecode="${this.gameCode}"></app-team-characters>
                </div>
            </div>
        </div>
        `;
    }
}

customElements.define('app-team-tabs', TeamTabsComponent);

class TeamContainerComponent extends HTMLElement {

    gameCode = null;
    activeGame = null;
    activePage = null;

    constructor() {
      super();
    }
  
    connectedCallback() {
        this.loadData();
        this.innerHTML = this.buildHTML();
        this.listenToEvents();
    }

    loadData() {
        this.gameCode = this.getAttribute('gamecode');
        this.activeGame = gamesRepository.getOne(this.gameCode);
        this.activePage = RouteUtils.getCurrentPage() ?? RouteUtils.getDefaultPage(this.activeGame.style);
    }

    listenToEvents() {
        window.addEventListener('hashchange', () => {
            this.loadData();
            this.innerHTML = this.buildHTML();
        });
    }

    buildHTML() {
        return `
            <app-team-character-details id="build-dialog" gamecode="${this.gameCode}"></app-team-character-details>
            <app-team-character-teams id="teams-dialog" gamecode="${this.gameCode}"></app-team-character-teams>

            ${Utils.ngIf(this.activePage == 'teams',
            `<app-team-list gamecode="${this.gameCode}"></app-team-list>`
            )}

            ${Utils.ngIf(this.activePage == 'characters',
            `<app-team-characters gamecode="${this.gameCode}"></app-team-characters>`
            )}

            ${Utils.ngIf(this.activePage == 'weapons',
            `<app-team-weapons gamecode="${this.gameCode}"></app-team-weapons>`
            )}

            ${Utils.ngIf(this.activePage == 'sets',
            `<h1 style="text-align: center; margin-top: 1em;">Coming Soon...</h1>`
            )}
        `;
    }
}

customElements.define('app-team-container', TeamContainerComponent);

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
            <app-character-build id="build-dialog" gamecode="${this.gameCode}"></app-character-build>
            <app-character-teams id="teams-dialog" gamecode="${this.gameCode}"></app-character-teams>

            ${Utils.ngIf(this.activePage == 'teams',
            `<app-team-list gamecode="${this.gameCode}"></app-team-list>`
            )}

            ${Utils.ngIf(this.activePage == 'characters',
            `<app-character-list gamecode="${this.gameCode}"></app-character-list>`
            )}

            ${Utils.ngIf(this.activePage == 'weapons',
            `<app-weapon-list gamecode="${this.gameCode}"></app-weapon-list>`
            )}

            ${Utils.ngIf(this.activePage == 'sets',
            `<app-set-list gamecode="${this.gameCode}"></app-set-list>`
            )}
        `;
    }
}

customElements.define('app-team-container', TeamContainerComponent);

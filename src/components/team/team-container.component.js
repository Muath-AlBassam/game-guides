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
            <app-character-details-dialog id="character-details-dialog" gamecode="${this.gameCode}"></app-character-details-dialog>
            <app-team-details-dialog id="team-dialog" gamecode="${this.gameCode}"></app-team-details-dialog>

            ${Utils.ngIf(this.activePage == 'teams',
            `<app-team-category-list gamecode="${this.gameCode}"></app-team-category-list>`
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

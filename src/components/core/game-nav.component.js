class GameNavComponent extends HTMLElement {

    activeGame = null;
    navButtons = [];

    componentStyle = `
    <style>
        .game-nav {}

        .game-nav .nav-button {
            border-radius: 30px;
            width: 200px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .game-nav .nav-button.active {
            color: white;
            background: #5c636a;
        }
    </style>`;

    constructor() {
      super();
    }
  
    connectedCallback() {
        this.loadData();
        this.innerHTML = this.componentStyle + this.buildHTML();
        this.listenToEvents();
    }

    loadData() {
        this.activeGame = gamesRepository.getOne(this.getAttribute('gamecode'));
        this.generateNavButtons();
    }

    listenToEvents() {
        window.addEventListener('hashchange', () => {
            this.loadData();
            this.innerHTML = this.componentStyle + this.buildHTML();
        });
    }

    buildHTML() {
        return `
        <div class="game-nav row justify-content-center mt-4">
            ${Utils.ngFor(this.navButtons, btn => `
            <div class="col-auto">
                <a class="btn nav-button btn-secondary btn-outline ${this.isPathActive(btn.path) ? 'active' : ''}" href="${btn.path}" role="button" title="${btn.label}">
                    <img style="border-radius: 0;" src="${btn.icon}" alt="${btn.label}" width="20" height="20"/>
                    ${btn.label}
                </a>
            </div>
            `)}
        </div>
        `;
    }

    isPathActive(path) {
        return path == window.location.hash;
    }

    generateNavButtons() {
        let gameStyle = this.activeGame?.style ?? Constants.gameStyles.NONE;
        let code = this.activeGame?.code;
        this.navButtons = [];
        if (gameStyle == Constants.gameStyles.TEAMS) {
            this.navButtons.push({ label: 'Categories', path: `#/${code}/categories`, icon: 'assets/svg/team.svg' });
            this.navButtons.push({ label: 'Teams', path: `#/${code}/teams`, icon: 'assets/svg/team.svg' });
            this.navButtons.push({ label: 'Characters', path: `#/${code}/characters`, icon: 'assets/images/character-front.jpg' });
            this.navButtons.push({ label: GameUtils.getWeaponsLabel(code), path: `#/${code}/weapons`, icon: 'assets/images/sword-double.jpg' });
            this.navButtons.push({ label: GameUtils.getSetsLabel(code), path: `#/${code}/sets`, icon: 'assets/images/artifact.jpg' });
        } else if (gameStyle == Constants.gameStyles.FIGHT) {
            this.navButtons.push({ label: 'Characters', path: `#/${code}/characters`, icon: 'assets/images/character-front.jpg' });
        }
    }
}

customElements.define('app-game-nav', GameNavComponent);

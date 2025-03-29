class GameHeaderComponent extends HTMLElement {

    activeGame = null;

    componentStyle = `
    <style>
        .game-header {
            display: grid;
            grid-template-columns: 1fr 1fr;
        }

        .game-header .title {
            display: flex;
            align-items: center;
            font-family: 'Death Star';
        }

        .game-header .game-background {
            height: 200px;
            border: 2px solid #33343a;
            background-size: cover;
            background-position: center;
            opacity: 0.5;
            margin-top: 1em;
            grid-column: 1 / span 2
        }

        .game-header .guide-url {
            text-decoration: none;
            color: var(--text-color);
            margin-left: 15px;
        }

        @media (max-width: ${Constants.code.mobileMaxWidth}) {
            .game-header {
                margin-top: 3em;
            }

            .game-header .title {
                grid-column: 1 / span 2
            }

            .game-header .logo {
                grid-column: 1 / span 2
            }
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
    }

    listenToEvents() {
        window.addEventListener('hashchange', () => {
            this.loadData();
            this.innerHTML = this.componentStyle + this.buildHTML();
        });
    }

    buildHTML() {
        return Utils.ngIf(this.activeGame,`
        <div class="game-header">
            <div class="title">
                <h1>
                    ${this.activeGame?.label}
                </h1>
                <sup>
                    <a href="${this.activeGame?.guideUrl}" target="_blank" class="guide-url" style="display: ${this.activeGame?.guideUrl ? 'block' : 'none'}">
                        <i class="fa fa-external-link"></i>
                    </a>
                </sup>
            </div>
            <div class="logo d-flex justify-content-end">
                <img height="${Utils.isMobile() ? '50' : '100'}" src="${this.activeGame?.logoUrl}">
            </div>
            <div class="game-background" style="background-image: url(${this.activeGame?.backgroundUrl});"></div>
        </div>`);
    }
}

customElements.define('app-game-header', GameHeaderComponent);

class HeaderComponent extends HTMLElement {

    activeGame = null;

    componentStyle = `
    <style>
        .header .title {
            display: flex;
            align-items: center;
            font-family: 'Death Star';
        }

        .header .game-background {
            height: 200px;
            border: 2px solid #33343a;
            background-size: cover;
            background-position: center;
            opacity: 0.5;
            margin-top: 1em;
        }

        #guide-url {
            text-decoration: none;
            color: var(--text-color);
            margin-left: 15px;
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
        this.activeGame = GamesRepository.getGame(Utils.getGameFromUrl());
    }

    listenToEvents() {
        window.addEventListener('hashchange', () => {
            this.loadData();
            this.innerHTML = this.componentStyle + this.buildHTML();
        });
    }

    buildHTML() {
        return Utils.ngIf(this.activeGame,`
        <div class="header">
            <div class="row">
                <div class="col-md-6 title">
                    <h1>
                        ${this.activeGame?.label}
                    </h1>
                    <sup>
                        <a href="${this.activeGame?.guideUrl}" style="display: ${this.activeGame?.guideUrl ? 'block' : 'none'}" id="guide-url" target="_blank">
                            <i class="fa fa-external-link"></i>
                        </a>
                    </sup>
                </div>
                <div class="col-md-6 d-flex justify-content-end">
                    <img height="100" src="${this.activeGame?.logoUrl}">
                </div>
                <div class="col-md-12 game-background" style="background-image: url(${this.activeGame?.backgroundUrl});"></div>
            </div>
        </div>`);
    }
}

customElements.define('app-header', HeaderComponent);

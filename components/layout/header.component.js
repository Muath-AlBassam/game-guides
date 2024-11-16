class HeaderComponent extends HTMLElement {

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
        this.innerHTML = this.buildHTML();

        window.addEventListener('hashchange', () => {
            this.innerHTML = this.buildHTML();
        });
    }

    buildHTML() {
        const activeGame = GamesRepository.getGame(Utils.getGameFromUrl());
        return this.componentStyle + `
        <div class="header">
            <div class="row">
                <div class="col-md-6 title">
                    <h1 id="header-title">
                        ${activeGame.label}
                    </h1>
                    <a href="${activeGame.guideUrl}" style="display: ${activeGame.guideUrl ? 'block' : 'none'}" id="guide-url" target="_blank">
                        <i class="fa fa-external-link"></i>
                    </a>
                </div>
                <div class="col-md-6 d-flex justify-content-end">
                    <img height="100" src="${activeGame.logoUrl}" id="header-logo">
                </div>
                <div class="col-md-12 game-background" id="header-background" 
                    style="background-image: url(${activeGame.backgroundUrl});">
                </div>
            </div>
        </div>`;
    }
}

customElements.define('app-header', HeaderComponent);

class HomeComponent extends HTMLElement {

    games = new Map([]);

    componentStyle = `
    <style>
        .home .title {
            font-family: 'Death Star';
            text-align: center;
        }

        .home .game-box {
            height: 150px;
            border: 2px solid #33343a;
            background-size: 100%;
            background-position: center;
            background-repeat: no-repeat;
            opacity: 0.8;
            margin-top: 1em;
            display: table;
            transition: background-size 0.3s linear; /* Animation effect */
            color: inherit; 
            text-decoration: none; 
        }
        .home .game-box:hover {
            background-size: 110%;
        }

        .home .game-box .game-title {
            font-family: 'Death Star';
            text-align: center;
            display: table-cell;
            vertical-align: middle;
            text-shadow: 0 0 10px #000, 0 0 10px #000;
        }

        @media (max-width: ${Constants.code.mobileMaxWidth}) {
            .home .game-box {
                height: 80px;
            }
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
        this.games = gamesRepository.getAll();
    }

    buildHTML() {
        return `
        <div class="home">
            <h1 class="title mt-5 mb-5">
                Game Guides
            </h1>

            <hr class="mt-5 mb-5"/>

            <div class="row justify-content-around">
                ${Utils.ngFor(this.games, g => `
                <a href="#/${g.code}" class="col-md-5 game-box pointer mb-4" style="background-image: url(${g.backgroundUrl});">
                    <h4 class="game-title">
                        ${g.label}
                    </h4>
                </a>
                `)}
                <!-- dummy column, otherwise the last item will be in the middle (if items count is odd) -->
                ${Utils.ngIf(this.games?.length % 2 != 0, `<div class="col-md-5"></div>`)}
            </div>
        </div>
        `;
    }
}

customElements.define('app-home', HomeComponent);

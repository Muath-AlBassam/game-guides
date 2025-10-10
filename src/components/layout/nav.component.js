// CSS credits
// https://www.youtube.com/watch?v=uy1tgKOnPB0

class NavComponent extends HTMLElement {

    games = null;
    activeGame = null;
    routesList = [];

    componentStyle = `
    <style>
        .sidebar {
            position: fixed;
            top: 0;
            left: 0;
            height: 100vh;
            width: var(--sidebar-width);
            background-color: var(--sidebar-color);
            padding: 0.4em 0;
            transition: all 0.5s ease;
            z-index: 10;
            user-select: none; 
        }

        .sidebar.active {
            width: var(--sidebar-active-width);
        }

        .sidebar ul li {
            position: relative;
            list-style-type: none;
            height: 45px;
            width: 100%;
            margin: 0.4em auto;
            line-height: 45px;
        }
        .sidebar.active ul li {
            display: list-item;
        }

        .sidebar .sidebar-item {
            color: #fff;
            display: flex;
            align-items: center;
            text-decoration: none;
            white-space: nowrap;
            overflow: hidden;
            padding: 0.2em 0.4em;
        }

        .sidebar .sidebar-item i {
            text-shadow: 2px 2px grey;
        }

        .sidebar .sidebar-item:hover {
            background-color: #36373f;
        }

        .sidebar .sidebar-item.active {
            background-color: #36373f;
        }

        .sidebar .sidebar-item i {
            min-width: 45px;
            text-align: center;
            height: 45px;
            line-height: 45px;
            font-weight: bold;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .sidebar .sidebar-item i img {
            border-radius: 12px;
        }

        .sidebar .nav-text {
            display: none;
            font-family: 'Death Star';
        }
        .sidebar.active .nav-text {
            display: block;
        }
        .sidebar.active .home-item .nav-text {
            display: table-cell;
        }

        .sidebar .home-item {
            height: 100%;
            background-size: cover;
            background-position: center;
            display: flex;
            justify-content: center;
            text-align: center;
            vertical-align: middle;
            text-shadow: 0 0 10px #000, 0 0 10px #000;
        }

        .sidebar .home-item::after {
            content: "";
            position: absolute;
            inset: 0;
            background: black; /* or any color overlay */
            opacity: 0.5;
            z-index: 0;
        }

        @media (max-width: ${Constants.code.mobileMaxWidth}) {
            .sidebar {
                width: var(--sidebar-m-width);
                opacity: 0;
            }
            .sidebar.active {
                width: var(--sidebar-m-active-width);
                opacity: 1;
            }
            .sidebar-container {
                position: absolute;
            }
        }
    </style>`;

    constructor() {
      super();
    }
  
    connectedCallback() {
        this.render();
        this.listenToEvents();
    }

    loadData() {
        this.games = gamesRepository.getAll();
        this.activeGame = gamesRepository.getOne(RouteUtils.getGame());
    }

    listenToEvents() {
        window.addEventListener('hashchange', () => {
            this.render();
        });
    }

    render() {
        this.loadData();
        this.generateRoutesList();
        this.innerHTML = this.componentStyle + this.buildHTML();
        this.updateSidebarState();
    }

    buildHTML() {
        return `
        <div class="sidebar-container">
            <div class="sidebar">
                <ul style="padding-left: 0; margin-top: 45px;">
                    ${Utils.ngIf(this.activeGame != null, `
                    <li>
                        <a class="sidebar-item home-item" style="background-image: url(${this.activeGame?.backgroundUrl});" href="#/Home" title="Home">
                            <span class="nav-text" style="z-index: 1;">${this.activeGame?.label}</span>
                        </a>
                    </li>    
                    `)}
                    ${Utils.ngFor(this.routesList, route => `
                    <li>
                        <a class="sidebar-item ${route.isActive ? 'active' : ''}" href="${route.path}" title="${route.label}">
                            <i>
                                <img src="${route.icon}" alt="${route.label}" width="30" height="30"/>
                            </i>
                            <span class="nav-text">${route.label}</span>
                        </a>
                    </li>
                    `)}
                </ul>
            </div>
        </div>
        `;
    }

    updateSidebarState() {
        // auto open sidebar in a game page
        if (this.activeGame != null) {
            openSidebar();
        }
    }

    generateRoutesList() {
        let gameStyle = this.activeGame?.style ?? Constants.gameStyles.NONE;
        this.routesList = [];
        if (gameStyle == Constants.gameStyles.TEAMS) {
            this.routesList.push(this.getTeamsRoute());
            this.routesList.push(this.getCharactersRoute());
            this.routesList.push(this.getWeaponsRoute());
            this.routesList.push(this.getSetsRoute());
        } else if (gameStyle == Constants.gameStyles.FIGHT) {
            this.routesList.push(this.getCharactersRoute());
        } else if (gameStyle == Constants.gameStyles.LOOTER_SHOOTER) {
            this.routesList.push(this.getCharactersRoute());
        }
    }

    getTeamsRoute() {
        return {
            label: 'Teams',
            path: `#/${this.activeGame.code}/teams`,
            icon: 'assets/svg/team.svg',
            isActive: RouteUtils.getCurrentPage() == 'teams'
        };
    }

    getCharactersRoute() {
        return {
            label: 'Characters',
            path: `#/${this.activeGame.code}/characters`,
            icon: 'assets/images/character-front.jpg',
            isActive: RouteUtils.getCurrentPage() == 'characters'
        };
    }

    getWeaponsRoute() {
        return {
            label: GameUtils.getWeaponsLabel(this.activeGame.code),
            path: `#/${this.activeGame.code}/weapons`,
            icon: 'assets/images/sword-double.jpg',
            isActive: RouteUtils.getCurrentPage() == 'weapons'
        };
    }

    getSetsRoute() {
        return {
            label: GameUtils.getSetsLabel(this.activeGame.code),
            path: `#/${this.activeGame.code}/sets`,
            icon: 'assets/images/artifact.jpg',
            isActive: RouteUtils.getCurrentPage() == 'sets'
        };
    }
}

customElements.define('app-nav', NavComponent);

//------------------------------------------------------------------------------------

function toggleSidebar() {
    document.querySelector('.sidebar').classList.toggle('active');
    document.getElementsByTagName('app-nav')[0].classList.toggle('active');
}

function openSidebar() {
    document.querySelector('.sidebar').classList.add('active');
    document.getElementsByTagName('app-nav')[0].classList.add('active');
}

function closeSidebar() {
    document.querySelector('.sidebar').classList.remove('active');
    document.getElementsByTagName('app-nav')[0].classList.remove('active');
}

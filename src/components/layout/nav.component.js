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
    }

    buildHTML() {
        return `
        <div class="sidebar-container">
            <div class="sidebar">
                <ul style="padding-left: 0; margin-top: 45px;">
                    <li>
                        <a class="sidebar-item ${this.activeGame == null ? 'active' : ''}" href="#/Home" title="Home">
                            <i>
                                <img style="border-radius: 0;" src="assets/svg/home.svg" alt="home" width="20" height="20"/>
                            </i>
                            <span class="nav-text">Home</span>
                        </a>
                    </li>
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

    generateRoutesList() {
        this.routesList = [];
        this.games.forEach((g, code) => {
            this.routesList.push({
                code: code,
                label: g.label,
                path: `#/${code}/${RouteUtils.getDefaultPage(g.style)}`,
                icon: g.iconUrl,
                isActive: this.activeGame?.code == code
            });
        })
    }
}

customElements.define('app-nav', NavComponent);

//------------------------------------------------------------------------------------

function toggleSidebar() {
    document.querySelector('.sidebar').classList.toggle('active');
    document.getElementsByTagName('app-nav')[0].classList.toggle('active');
}

function closeSidebar() {
    document.querySelector('.sidebar').classList.remove('active');
    document.getElementsByTagName('app-nav')[0].classList.remove('active');
}

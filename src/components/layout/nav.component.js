// CSS credits
// https://www.youtube.com/watch?v=uy1tgKOnPB0

class NavComponent extends HTMLElement {

    games = null;

    componentStyle = `
    <style>
        .sidebar {
            position: fixed;
            top: 0;
            left: 0;
            height: 100vh;
            width: var(--sidebar-width);
            background-color: var(--sidebar-color);
            padding: 0.4em 0.4em;
            transition: all 0.5s ease;
            z-index: 10;
        }

        .sidebar.active {
            width: var(--sidebar-active-width);
        }

        .sidebar ul li {
            position: relative;
            list-style-type: none;
            height: 50px;
            width: 90%;
            margin: 0.8em auto;
            line-height: 50px;
            display: flex;
            justify-content: center;
        }
        .sidebar.active ul li {
            position: relative;
            list-style-type: none;
            height: 50px;
            width: 90%;
            margin: 0.8em auto;
            line-height: 50px;
            display: list-item;
        }

        .sidebar .sidebar-item {
            color: #fff;
            display: flex;
            align-items: center;
            text-decoration: none;
            border-radius: 0.8em;
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
            min-width: 50px;
            text-align: center;
            height: 50px;
            line-height: 50px;
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
                width: 0;
                display: none;
            }
            .sidebar.active {
                display: block;
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
        this.loadData();
        this.innerHTML = this.componentStyle + this.buildHTML();
        this.setActiveNav();
        this.listenToEvents();
    }

    loadData() {
        this.games = GamesRepository.getAllGames();
    }

    listenToEvents() {
        window.addEventListener('hashchange', () => {
            this.setActiveNav();
        });
    }

    buildHTML() {
        return `
        <div class="sidebar-container">
            <div class="sidebar">
                <ul style="padding-left: 0; margin-top: 50px;">
                    <li>
                        <a class="sidebar-item" href="#Home" title="Home">
                            <i>
                                <img style="border-radius: 0;" src="assets/svg/home.svg" alt="home" width="20" height="20"/> 
                            </i>
                            <span class="nav-text">Home</span>
                        </a>
                    </li> 
                    ${Utils.ngForMap(this.games, g => `
                    <li>
                        <a class="sidebar-item" href="#${g.code}" title="${g.label}">
                            <i>
                                ${Utils.ngIf(g.iconUrl, 
                                `<img src="${g.iconUrl}" alt="${g.code}" width="30" height="30"/>`, 
                                `${g.code}`)}
                            </i>
                            <span class="nav-text">${g.label}</span>
                        </a>
                    </li> 
                    `)}
                </ul>
            </div>
        </div>
        `;
    }

    setActiveNav() {
        const navs = document.querySelectorAll('.sidebar-item');
        navs.forEach(tab => {
            if (tab.href.includes(Utils.getGameFromUrl())) {
                tab.classList.add('active');
            } else {
                tab.classList.remove('active');
            }
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

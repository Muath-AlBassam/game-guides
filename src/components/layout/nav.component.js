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
            width: 80px;
            background-color: var(--sidebar-color);
            padding: 0.4em 0.8em;
            transition: all 0.5s ease;
        }

        .sidebar.active {
            width: var(--sidebar-active-width);
        }

        .sidebar #sidebarToggle {
            position: absolute;
            color: #fff;
            top: 0.4em;
            left: 50%;
            font-size: 1.2em;
            line-height: 50px;
            transform: translateX(-50%);
            cursor: pointer;
        }

        .sidebar.active #sidebarToggle {
            left: 90%;
        }

        .sidebar .top .logo {
            color: #fff;
            display: flex;
            height: 50px;
            width: 100%;
            align-items: center;
            pointer-events: none;
            opacity: 0;
            font-size: 1.3em;
            font-family: 'Death Star';
        }

        .sidebar.active .top .logo {
            opacity: 1;
        }

        .sidebar ul li {
            position: relative;
            list-style-type: none;
            height: 50px;
            width: 90%;
            margin: 0.8em auto;
            line-height: 50px;
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
        <div class="sidebar">
            <div class="top">
                <div class="logo">
                    <span>Game Guides</span>
                </div>
                <i class="fa fa-bars" id="sidebarToggle" onclick="toggleSidebar()"></i>
            </div>
            <ul style="padding-left: 0">
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
        </div>`;
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

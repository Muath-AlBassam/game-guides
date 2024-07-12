// CSS credits
// https://www.youtube.com/watch?v=uy1tgKOnPB0

class NavComponent extends HTMLElement {

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
                width: 250px;
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
                font-weight: bold;
                font-size: 1.3em;
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

            .sidebar ul li a {
                color: #fff;
                display: flex;
                align-items: center;
                text-decoration: none;
                border-radius: 0.8em;
            }

            .sidebar ul li i {
                text-shadow: 2px 2px grey;
            }

            .sidebar ul li a:hover {
                background-color: #fff;
                color: var(--sidebar-color);
            }

            .sidebar .sidebar-item.active {
                background-color: #fff;
                color: var(--sidebar-color);
            }

            .sidebar ul li a i {
                min-width: 50px;
                text-align: center;
                height: 50px;
                border-radius: 12px;
                line-height: 50px;
                font-weight: bold;
            }

            .sidebar .nav-item {
                cursor: pointer;
                display: none;
            }
            .sidebar.active .nav-item {
                display: block;
            }
        </style>`;

    constructor() {
      super();
    }
  
    connectedCallback() {
        this.innerHTML = this.buildHTML();
    }

    buildHTML() {
        return this.componentStyle +
        `<div class="sidebar">
            <div class="top">
                <div class="logo">
                    <span>Game Guides</span>
                </div>
                <i class="fa fa-bars" id="sidebarToggle" onclick="toggleSidebar()"></i>
            </div>
            <ul style="padding-left: 0">`
            + this.createGamesNav() +
            `</ul>
        </div>`;
        // <ul> style to disable bootstrap effect
    }

    createGamesNav() {
        const games = getAllGames();
        let navContent = '';
        games.forEach(g => {
            navContent +=
                `<li>
                    <a class="sidebar-item" href="#${g.code}">
                        <i class="text-shadow">${g.code}</i>
                        <span class="nav-item">${g.label}</span>
                    </a>
                </li>`;
        });
        return navContent;
    }

}

customElements.define('nav-component', NavComponent);

//------------------------------------------------------------------------------------

function toggleSidebar() {
    document.querySelector('.sidebar').classList.toggle('active');
    document.querySelector('.nav-component').classList.toggle('active');
}

window.addEventListener('hashchange', () => {
    setActiveNav();
});

function setActiveNav() {
    const navs = document.querySelectorAll('.sidebar-item');
    navs.forEach(tab => {
        if (tab.href.includes(window.location.hash)) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    })
}

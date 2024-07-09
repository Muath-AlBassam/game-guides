// credits
// https://www.youtube.com/watch?v=uy1tgKOnPB0

class Nav extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
        this.innerHTML = `
        <style>
            .sidebar {
                position: absolute;
                top: 0;
                left: 0;
                height: 100vh;
                width: 80px;
                background-color: #12171e;
                padding: 0.4em 0.8em;
                transition: all 0.5s ease;
            }

            .sidebar.active ~ .main-content {
                left: 250px;
                width: calc(100% - 250px);
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

            .sidebar ul li a:hover {
                background-color: #fff;
                color: #12171e;
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
        </style>

        <div class="sidebar">
            <div class="top">
                <div class="logo">
                    <span>Game Guides</span>
                </div>
                <i class="fa fa-bars" id="sidebarToggle" onclick="toggleSidebar()"></i>
            </div>
            <ul style="padding-left: 0">`
            + this.createGamesNav() +
            `</ul>
        </div>
      `;
      // ul style to disable bootstrap effect
    }

    createGamesNav() {
        const games = getAllGames();
        let navContent = '';

        games.forEach(g => {
            const a = createElement('a', 'sidebar-item');
            a.setAttribute('href', `#${g.code}`);

            a.appendChild(createElement('i', null, null, g.code));
            a.appendChild(createElement('span', 'nav-item', null, g.label));

            const li = createElement('li');
            li.appendChild(a);

            navContent += li.outerHTML;
        });

        return navContent;
    }


}

customElements.define('nav-component', Nav);

function toggleSidebar() {
    document.querySelector('.sidebar').classList.toggle('active');
}
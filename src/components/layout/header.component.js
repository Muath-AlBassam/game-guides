class HeaderComponent extends HTMLElement {

    componentStyle = `
    <style>
        .header {
            background-color: var(--sidebar-color);
            width: 100%;
            height: 50px;
            position: fixed;
            z-index: 15;
            user-select: none;
        }

        .header .header-text {
            color: #fff;
            height: 50px;
            width: 100%;
            align-items: center;
            font-size: 1.3em;
            font-family: 'Death Star';
            text-decoration: none;
        }

        .header #sidebarToggle {
            color: #fff;
            top: 0.4em;
            font-size: 1.2em;
            line-height: 50px;
            cursor: pointer;
            padding: 0 1em;
        }
    </style>`;

    constructor() {
      super();
    }
  
    connectedCallback() {
        this.innerHTML = this.componentStyle + this.buildHTML();
    }

    buildHTML() {
        return `
        <div class="header">
            <i class="fa fa-bars" id="sidebarToggle" onclick="toggleSidebar()"></i>
            <a class="header-text" href="#/Home">Game Guides</span>
        </div>`;
    }
}

customElements.define('app-header', HeaderComponent);

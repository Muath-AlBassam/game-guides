class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
        this.innerHTML = `
        <style>
        .header .title {
            display: flex;
            align-items: center;
        }

        .header .game-background {
            height: 200px;
            border: 2px solid #33343a;
            background-image: url(assets/gi/GI_BG.png);
            background-size: cover;
            background-position: center;
            opacity: 0.5;
        }
        </style>

        <div class="header">
            <div class="row">
                <div class="col-md-6 title">
                    <h1 id="header-title">Genshin Impact</h1>
                </div>
                <div class="col-md-6 d-flex justify-content-end">
                    <img height="100" src="assets/gi/GI_Logo.png" id="header-logo"></img>
                </div>
                <div class="col-md-12 game-background" id="header-background">
                </div>
            </div>
        </div>
        `;
    }
}

customElements.define('header-component', Header);

window.addEventListener('hashchange', () => {
    setGameDetails();
});

function setGameDetails() {
    const activeGame = getGame(window.location.hash.replace('#', ''));
    // update header title & images
    document.getElementById('header-title').innerHTML = activeGame.label;
    document.getElementById('header-logo').src = activeGame.logoUrl;
    document.getElementById('header-background').style.backgroundImage = `url(${activeGame.backgroundUrl})`;
}

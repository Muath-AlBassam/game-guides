class HeaderComponent extends HTMLElement {

    componentStyle = `
        <style>
            .header .title {
                display: flex;
                align-items: center;
            }

            .header .game-background {
                height: 200px;
                border: 2px solid #33343a;
                background-size: cover;
                background-position: center;
                opacity: 0.5;
            }
        </style>`;

    constructor() {
      super();
    }
  
    connectedCallback() {
        const activeGame = getGame(null);
        this.innerHTML = 
            this.componentStyle + 
            `<div class="header">
                <div class="row">
                    <div class="col-md-6 title">
                        <h1 id="header-title">
                            ${activeGame.label}
                        </h1>
                    </div>
                    <div class="col-md-6 d-flex justify-content-end">
                        <img height="100" src="${activeGame.logoUrl}" id="header-logo"></img>
                    </div>
                    <div class="col-md-12 game-background" id="header-background" 
                        style="background-image: url(${activeGame.backgroundUrl});">
                    </div>
                </div>
            </div>`;
    }
}

customElements.define('header-component', HeaderComponent);

//------------------------------------------------------------------------------------

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

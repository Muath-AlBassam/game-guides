class GameGuidesComponent extends HTMLElement {

    // attribute that on change will trigger "attributeChangedCallback"
    // https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements#responding_to_attribute_changes
    static observedAttributes = ["name"];
    
    componentStyle = `
    <style>
        /**/
    </style>`;

    constructor() {
      super();
    }
  
    connectedCallback() {
        this.buildHTML();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.buildHTML();
    }

    buildHTML() {
        const activeGame = getGame(this.getAttribute("name"));
        this.innerHTML = this.componentStyle + `
            <loader-component></loader-component>
        `;

        setTimeout(() => {
            this.innerHTML = this.componentStyle + `
                <gagu-teams-component name="${activeGame.code}"></gagu-teams-component>
            `;
        }, 2000);
    }
}

customElements.define('game-guides-component', GameGuidesComponent);

//------------------------------------------------------------------------------------

window.addEventListener('hashchange', () => {
    setPageContent();
});

function setPageContent() {
    const components = document.getElementsByTagName('game-guides-component');
    if (components.length == 1) {
        components[0].setAttribute("name", getGameFromUrl());
    }
}
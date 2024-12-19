class BaseComponent extends HTMLElement {

    componentStyle = `
    <style>
        
    </style>`;

    constructor() {
      super();
    }
  
    connectedCallback() {
        this.innerHTML = this.buildHTML();
    }

    buildHTML() {
        return ``;
    }
}

customElements.define('base-component', BaseComponent);

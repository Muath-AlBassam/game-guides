// CSS credits
// https://www.w3schools.com/howto/howto_css_loader.asp

class LoaderComponent extends HTMLElement {

    componentStyle = `
    <style>
        .loader-container {
            margin-top: 4em;
        }

        .loader {
            border: 16px solid #36373f;
            border-radius: 50%;
            border-top: 16px solid #3498db;
            width: 120px;
            height: 120px;
            -webkit-animation: spin 2s linear infinite; /* Safari */
            animation: spin 2s linear infinite;
        }

        /* Safari */
        @-webkit-keyframes spin {
            0% { -webkit-transform: rotate(0deg); }
            100% { -webkit-transform: rotate(360deg); }
        }

        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
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
        <div class="loader-container center-content">
            <div class="loader"></div>
        </div>
        `;
    }

}

customElements.define('app-loader', LoaderComponent);

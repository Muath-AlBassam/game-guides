class SearchComponent extends HTMLElement {

    // inputs
    query = '';
    eventName = 'search';

    componentStyle = `
    <style>
        .search {
            position: relative;
            display: inline-flex;
            align-items: center;
            width: 30%;
        }
        .search .clear-icon {
            position: absolute;
            display: block;
            right: 10px;
            width: 15px;
            height: 15px;
            border-radius: 50%;
            color: #fff;
            text-align: center;
            line-height: 1em;
            cursor: pointer;
        }
        .search .gagu-form-control {
            padding-right: 18px;
            box-sizing: border-box;
        }

        .gagu-form-control {
            width: 100%;
            padding: 0.375em 0.75em;
            line-height: 2;
            border: 0 solid #000;
            border-bottom: 2px solid #000;
            background-color: transparent;
            color: var(--text-color);
        }

        .gagu-form-control:focus {
            outline: none;
            border-bottom: 2px solid #fff;
        }
    </style>`;

    constructor() {
      super();
    }
  
    connectedCallback() {
        this.loadData();
        this.innerHTML = this.componentStyle + this.buildHTML();
    }

    loadData() {
        if (this.hasAttribute('q')) this.query = this.getAttribute('q');
        if (this.hasAttribute('eventname')) this.eventName = this.getAttribute('eventname');
    }

    buildHTML() {
        return `
        <span class="search">
            <input
                type="text"
                value="${this.query}"
                class="gagu-form-control"
                placeholder="Search"
                onchange="emitSearchEvent('${this.eventName}', this.value)">

            <span class="clear-icon" onclick="this.previousElementSibling.value = ''; emitSearchEvent('${this.eventName}', '')">
                ${Constants.unicode.times}
            </span>
        </span>
        `;
    }
}

customElements.define('app-search', SearchComponent);

//------------------------------------------------------------------------------------

function emitSearchEvent(eventName, value) {
    window.dispatchEvent(new CustomEvent(eventName, { detail: value }));
}

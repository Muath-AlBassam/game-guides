class SearchComponent extends HTMLElement {

    // inputs
    query = '';
    eventName = 'search';
    placeholder = 'Search';

    componentStyle = `
    <style>
        .search {
            position: relative;
            display: inline-flex;
            align-items: center;
            width: 100%;
            margin: 0 1em 0 0;
        }
        .search .clear-icon {
            color: #1c1d21;
            cursor: pointer;
            font-size: 24px;
            font-weight: 700;
            line-height: 1em;
            padding: 0 .2em;
            position: absolute;
            right: 9px;
            top: 6px;
        }

        @media (max-width: ${Constants.code.mobileMaxWidth}) {
            .search {
                margin: 0.5em 0;
            }
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
        if (this.hasAttribute('placeholder')) this.placeholder = this.getAttribute('placeholder');
    }

    buildHTML() {
        return `
        <div class="search">
            <input
                type="text"
                value="${this.query}"
                class="gagu-form-control"
                placeholder="${this.placeholder}"
                onchange="emitEvent('${this.eventName}', this.value)">

            <span class="clear-icon" role="button" onclick="this.previousElementSibling.value = ''; emitEvent('${this.eventName}', '')">
                ${Constants.unicode.times}
            </span>
        </div>
        `;
    }
}

customElements.define('app-search', SearchComponent);

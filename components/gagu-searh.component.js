class SearchComponent extends HTMLElement {

    componentStyle = `
    <style>
        .search-clear {
            position: relative;
            display: inline-flex;
            align-items: center;
            width: 30%;
        }
        .search-clear .clear-icon {
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
        .search-clear .gagu-form-control {
            padding-right: 18px;
            box-sizing: border-box;
        }

        .gagu-form-control {
            width: 100%;
            padding: 0.375em 0.75em;
            line-height: 2;
            border: 0 solid #000;
            border-bottom: 2px solid #000;
            background-color: var(--background-color);
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
        this.innerHTML = this.buildHTML();
    }

    buildHTML() {
        return this.componentStyle + `
        <span class="search-clear">
            <input type="text" class="gagu-form-control" placeholder="Search" onchange="emitSearchEvent(this.value)">
            <span class="clear-icon" onclick="this.previousElementSibling.value = ''; emitSearchEvent('')">
                ${Constants.unicode.times}
            </span>
        </span>
        `;
    }
}

customElements.define('gagu-search-component', SearchComponent);

//------------------------------------------------------------------------------------

function emitSearchEvent(value) {
    window.dispatchEvent(new CustomEvent("search", { detail: value }));
}

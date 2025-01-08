class TeamSearchComponent extends HTMLElement {

    gameCode = null;
    rarities = null;

    searchTerm = '';
    searchRarity = '';

    componentStyle = `
    <style>
        /* */
        .btn-group {
            border-radius: 0;
        }

        .btn-secondary {
            border-radius: 0;
            border: 1px solid #484950;
            background-color: #36373d;
        }
    </style>`;

    constructor() {
      super();
    }
  
    connectedCallback() {
        this.loadData();
        this.innerHTML = this.componentStyle + this.buildHTML();

        window.addEventListener('search-team', (event) => {
            this.searchTerm = event.detail;
        });
        window.addEventListener('search-rarity', (event) => {
            this.searchRarity = event.detail;
            this.setActiveRarity(event.detail);
        });
    }

    loadData() {
        this.gameCode = Utils.getGameFromUrl();
        this.rarities = RarityRepository.getAllRarities(this.gameCode);
    }

    buildHTML() {
        return `
        <div>
            <app-search eventname="search-team"></app-search>

            ${Utils.ngIf(this.rarities?.size > 0, `                
            <span class="btn-group" style="margin: 0.5em">
                <button 
                    class="btn btn-secondary rarity-btn active" 
                    value=""
                    title="All" 
                    onclick="emitEvent('search-rarity','');"
                >
                    <span style="color: #fff;">${Constants.unicode.star}</span>
                </button>
                ${Utils.ngForMap(this.rarities, rarity => `
                <button 
                    class="btn btn-secondary rarity-btn"
                    value="${rarity.code}"
                    title="${rarity.label}"
                    onclick="emitEvent('search-rarity','${rarity.code}')"
                >
                    <img src="${rarity.imageUrl}" alt="${rarity.code}" height="20"/>
                </button>
                `)}
            </span>    
            `)}
        </div>
        `;
    }

    setActiveRarity(rarity) {
        const btns = document.querySelectorAll('.rarity-btn');
        btns.forEach(btn => {
            if (btn.value == rarity) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        })
    }
}

customElements.define('app-team-search', TeamSearchComponent);

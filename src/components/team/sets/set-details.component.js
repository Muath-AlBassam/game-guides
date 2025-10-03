class SetDetailsComponent extends HTMLElement {

    gameCode = null;
    setName = null;
    pieceCount = null;

    set = null;

    componentStyle = `
    <style>
        .set-container {
            background-color: #36373d;
            border: 2px solid #484950;
            align-items: center;
            display: grid;
            grid-template-columns: 90px calc(100% - 90px);
            grid-template-rows: auto auto;
        }

        .set-container .set-image {
            background-color: #2c2d33;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 80px;
            width: 80px;
            grid-row: 1;
            grid-column: 1;
        }

        .set-container .set-image img {
            width: 90%;
            height: 90%;
            object-fit: contain;
        }

        .set-container .set-info {
            align-items: center;
            display: flex;
            grid-row: 1;
            grid-column: 2;
        }

        .set-container .set-info .set-name {
            /**/
        }

        .set-container .set-info .piece-count {
            color: hsla(0, 0%, 100%, .75);
            display: inline;
            margin-left: 5px;
            padding-right: 5px;
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
        this.gameCode = this.getAttribute('gamecode');
        this.setName = this.getAttribute('setname');
        if (this.hasAttribute('piececount')) this.pieceCount = this.getAttribute('piececount');

        this.set = setsRepository.getOne(this.gameCode, this.setName);
    }

    buildHTML() {
        return `
        <div class="set-container">
            <div class="set-image ${this.gameCode}-rarity-${this.set.rarity}">
                <img src="${this.set.imageUrl ?? 'assets/svg/unknown.svg'}" height="70" />
            </div>
            <div class="set-info">
                ${Utils.ngIf(this.pieceCount && this.pieceCount != 'null', `
                <span class="piece-count">(${this.pieceCount})</span>
                `)}
                <h5 class="set-name">
                    ${this.set.name}
                </h5>
            </div>
        </div>
        `;
    }
}

customElements.define('app-set-details', SetDetailsComponent);

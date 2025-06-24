class TeamWeaponDetailsComponent extends HTMLElement {

    gameCode = null;
    weaponName = null;
    showAdditionalInfo = true;

    weapon = null;
    rarity = null;
    type = null;


    componentStyle = `
    <style>
        .weapon-container {
            background-color: #36373d;
            border: 2px solid #484950;
            align-items: center;
            display: grid;
            grid-template-columns: 90px calc(100% - 90px);
            grid-template-rows: auto auto;
        }

        .weapon-container .weapon-image {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 80px;
            width: 80px;
            grid-row: 1;
            grid-column: 1;
        }

        .weapon-container .weapon-info {
            align-items: center;
            display: flex;
            grid-row: 1;
            grid-column: 2;
        }

        .weapon-container .weapon-info .weapon-name {
            margin-bottom: 5px;
        }

        .weapon-container .weapon-info .weapon-metadata {
            font-size: 15px;
            line-height: 25px;
            margin-top: 5px;
            margin-bottom: 0;
        }

        .weapon-container .weapon-stat {
            background-color: #484950;
            border-top: 2px solid #484950;
            padding: 2px 5px;
            width: 100%;
            grid-row: 2;
            grid-column: 1 / span 2;
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
        this.weaponName = this.getAttribute('weaponname');
        if (this.hasAttribute('showadditionalinfo')) this.showAdditionalInfo = this.getAttribute('showadditionalinfo') == 'true';

        this.weapon = weaponsRepository.getOne(this.gameCode, this.weaponName);
        this.rarity = rarityRepository.getOne(this.gameCode, this.weapon.rarity);
        this.type = weaponsTypesRepository.getOne(this.gameCode, this.weapon.type);
    }

    buildHTML() {
        return `
        <div class="weapon-container">
            <div class="weapon-image">
                <img src="${this.weapon.imageUrl ?? 'assets/svg/unknown.svg'}" class="${this.gameCode}-rarity-${this.weapon.rarity}" height="80" />
            </div>
            <div class="weapon-info">
                <div>
                    <h5 class="weapon-name">
                        ${this.weapon.name}
                    </h5>
                    ${Utils.ngIf(this.showAdditionalInfo, `
                    <p class="weapon-metadata">
                        <img src="${this.rarity.imageUrl}" alt="${this.rarity.label}" title="${this.rarity.label}" height="24"/>
                        |
                        <img src="${this.type.imageUrl}" alt="${this.type.name}" title="${this.type.name}" height="24"/>
                    </p>    
                    `)}
                </div>
            </div>
            ${Utils.ngIf(this.showAdditionalInfo && this.weapon.secondaryStat, `
            <div class="weapon-stat">
                <b>${this.weapon.secondaryStat}</b>
            </div>    
            `)}
        </div>
        `;
    }
}

customElements.define('app-team-weapon-details', TeamWeaponDetailsComponent);

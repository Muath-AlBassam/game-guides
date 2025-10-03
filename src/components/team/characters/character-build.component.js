class CharacterBuildComponent extends HTMLElement {

    static observedAttributes = ["character"];

    // inputs
    gameCode = null;
    character = null;

    buildmd = null;

    componentStyle = `
    <style>
        /**/
    </style>`;

    constructor() {
        super();
    }
  
    connectedCallback() {
        this.loadData()
        this.innerHTML = this.componentStyle + this.buildHTML();
    }

    loadData() {
        this.gameCode = this.getAttribute('gamecode');
        this.character = this.getAttribute('character');
        this.buildmd = buildsRepository.getByCharacter(this.gameCode, this.character);
    }

    buildHTML() {
        return `
        <div class="gagu-box-shadow p-3" style="width: 100%; height: 100%;">
            ${Utils.ngIf(this.buildmd, `
            <h5 class="content-header" style="margin-top: 0;">
                ${GameUtils.getWeaponsLabel(this.gameCode)}
            </h5>
            <div class="row">
                ${Utils.ngFor(this.buildmd?.weapons, weapon => `
                <div class="${!Utils.isMobile() && this.buildmd?.weapons?.length > 1 ? 'col-md-6' : 'col-md-12'}">
                    <app-weapon-details gamecode="${this.gameCode}" weaponname="${weapon.name}" showadditionalinfo="false"></app-weapon-details>
                </div>
                `)}
            </div>
            
            <h5 class="content-header">
                ${GameUtils.getSetsLabel(this.gameCode)}
            </h5>
            <div class="row">
                ${Utils.ngFor(this.buildmd?.sets, set => `
                <div class="${!Utils.isMobile() && this.buildmd?.sets?.length > 2 ? 'col-md-6' : 'col-md-12'}">
                    <app-set-details gamecode="${this.gameCode}" setname="${set.name}" piececount="${set.pieceCount}"></app-set-details>
                </div>
                `)}
            </div>
            `)}
        </div>`;
    }
}

customElements.define('app-character-build', CharacterBuildComponent);

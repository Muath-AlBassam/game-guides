class TeamCategoryListComponent extends HTMLElement {

    // inputs
    gameCode = null;

    characterPFPSize = 160;
    categories = [];

    componentStyle = `
    <style>
        .category-container {
            /**/
        }

        .category-container .category-name {
            text-transform: uppercase;
            font-weight: bold;
            font-size: 1.5em;
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
        this.categories = categoryRepository.getAll(this.gameCode);
        this.categories.forEach(cat => cat.teams = teamsRepository.getAllByCategory(this.gameCode, cat.code));
    }

    buildHTML() {
        return `
        <div class="row" id="team-category-list-header">
            <div class="col-md-12">
                <div class="content-header">
                    Teams
                </div>
            </div>
        </div>

        <div class="category-container" id="category">
            ${Utils.ngFor(this.categories, category => `
            <div class="category-name line-text mb-1">
                ${category.label}
            </div>
            <div class="row" style="margin: auto;">
                ${Utils.ngFor(category.teams, team => `
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 mb-3">
                    <div style="overflow: hidden;">
                        <app-team-info gamecode="${this.gameCode}" teamcode="${team.code}"></app-team-info>
                    </div>
                </div>
                `)}
            </div>
            `)}
        </div>`;
    }
}

customElements.define('app-team-category-list', TeamCategoryListComponent);

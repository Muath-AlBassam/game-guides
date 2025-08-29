class TeamCategoryListComponent extends HTMLElement {

    // inputs
    gameCode = null;

    characterPFPSize = 160;
    categories = [];

    componentStyle = `
    <style>
        .category__container {
            border: 1px solid #33343a;
            border-radius: 0;
            display: flex;
            margin: 20px 0 0 0;
            width: 100%;
            height: 100px;
        }

        .category__container .number {
            align-items: center;
            background-color: #36373f;
            color: #ffffff;
            display: flex;
            font-size: 22px;
            font-weight: 700;
            justify-content: center;
            width: 65px;
        }

        .category__container .item {
            grid-gap: 0;
            background-color: #2c2d33;
            border-radius: 0;
            display: grid;
            grid-template-columns: 100%;
            justify-content: space-between;
            position: relative;
            width: 100%;
        }

        .category__container .item .name {
            font-size: 30px;
            font-weight: bold;
            display: grid;
            grid-template-columns: 100%;
            align-items: center;
            justify-items: center;
        }

        .category__teams {
            border: 2px solid #33343a;
        }

        .collapsing .table-responsive {
            /* remove table-responsive style that's affecting bootstrap accordion, but only during open/close animation */
            overflow: visible !important;
        }

        @media (max-width: ${Constants.code.mobileMaxWidth}) {
            .category__container {
                display: grid;
                grid-template-columns: 1fr;
                height: 100px;
            }

            .category__container .item {
                grid-template-columns: 1fr;
            }

            .category__container .number {
                width: 100%;
            }

            .category__container .item .name {
                grid-template-columns: 1fr;
                padding: 10px 0;
            }
        }
    </style>`;

    constructor() {
      super();
    }

    connectedCallback() {
        this.loadData();
        this.innerHTML = this.componentStyle + this.buildHTML();
        this.listenToEvents();
    }

    loadData() {
        this.gameCode = this.getAttribute('gamecode');
        this.categories = categoryRepository.getAll(this.gameCode);
        this.listenToEvents();
    }

    listenToEvents() {
        document.addEventListener('shown.bs.collapse', function (event) {
            if (!Utils.isMobile()) {
                event.target.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        });
    }

    buildHTML() {
        return `
        <div class="row" id="team-category-list-header">
            <div class="col-md-12">
                <div class="content-header">
                    Teams Categories
                </div>
            </div>
        </div>

        <div id="category">
            ${Utils.ngFor(this.categories, category => `
            <div class="category__container">
                <div class="number">${category.order}</div>
                <div class="item">
                    <div class="name collapsed pointer" data-bs-toggle="collapse" data-bs-target="#${category.code}">
                        <span>
                            ${category.label}
                        </span>
                    </div>
                </div>
            </div>
            <div class="category__teams collapse" data-bs-parent="#category" id="${category.code}">
                <app-category-teams gameCode="${this.gameCode}" categoryCode="${category.code}"></app-category-teams>
            </div>
            `)}
        </div>`;
    }
}

customElements.define('app-team-category-list', TeamCategoryListComponent);

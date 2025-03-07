class TeamDetailsComponent extends HTMLElement {

    // inputs
    teamName = null;
    teamIndex = null;

    characterPFPSize = 160;
    petPFPSize = 80;
    activeGame = null;
    team = null;
    teamId = null;
    petmd = null;

    componentStyle = `
    <style>
        .teams__container {
            border: 1px solid #33343a;
            border-radius: 0;
            display: flex;
            margin: 20px 0 0 0;
            width: 100%;
            height: ${this.characterPFPSize + 50}px;
        }

        .teams__container .number {
            align-items: center;
            background-color: #ef5350;
            color: #191817;
            display: flex;
            font-size: 22px;
            font-weight: 700;
            justify-content: center;
            width: 65px;
        }

        .teams__container .item {
            grid-gap: 0;
            background-color: #2c2d33;
            border-radius: 0;
            display: grid;
            grid-template-columns: 25% 50% 25%;
            justify-content: space-between;
            position: relative;
            width: 100%;
        }

        .teams__container .item div:nth-child(even) {
            background-color: #36373f;
        }

        .teams__container .item .name {
            font-size: 30px;
            font-weight: bold;
            display: grid;
            grid-template-columns: 20% 80%;
            align-items: center;
            justify-items: center;
        }

        .teams__container .item .members {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .teams__container .item .pet {
            border-radius: 50%;
            margin-left: 20px;
            border: 5px solid black;
        }

        .teams__container .item .actions {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .teams__container .item .actions img {
            transition: all 0.3s ease-out;
        }
        .actions:not(.collapsed) img {
            transform: rotate(-180deg);
        }
        .actions.collapsed img {
            transform: rotate(0deg);
        }

        .teams__details {
            display: grid;
            grid-template-columns: 25% 25% 25% 25%;
            border: 2px solid #33343a;
        }

        @media (min-width: ${Constants.code.mobileMaxWidth}) {
            /* none mobile view only */
            .teams__details {
                /* 
                    split container into 4 vertical sections separated by lines (3 lines) 
                    https://stackoverflow.com/questions/43628280/create-a-div-with-7-dividing-vertical-lines
                */
                background:linear-gradient(
                    to right, 
                    transparent, transparent calc(100% / 4 * 1 - 3px), #33343a, transparent calc(100% / 4 * 1), 
                    transparent, transparent calc(100% / 4 * 2 - 3px), #33343a, transparent calc(100% / 4 * 2), 
                    transparent, transparent calc(100% / 4 * 3 - 3px), #33343a, transparent calc(100% / 4 * 3)
                );
            }
        }

        /* Style for accoridon content ----------------------------------------------- */
        .teams__details .container {
            padding: 0 15px;
        }

        .teams__details .container td {
            color: var(--text-color);
        }
        .teams__details .container .table {
            border: 1px solid #33343a;
            vertical-align: middle;
        }
        .teams__details .container .table.table-striped>tbody>tr:nth-of-type(odd)>* {
            background-color: #2c2d33;
            box-shadow: none;
            color: #fff;
        }
        .teams__details .container .table.table-striped>tbody>tr:nth-of-type(even)>* {
            background-color: transparent;
            box-shadow: none;
            color: #fff;
        }
        .teams__details .container .table.table-striped td {
            align-items: center;
            justify-content: center;
        }

        .empty-details {
            display: flex;
            align-items: center;
            justify-content: center;
            height: calc(100% - 70px); /* 70px is total height of details title (height + border + padding + margin) (63px) + extra */
            user-select: none;
        }

        .collapsing .table-responsive {
            /* remove table-responsive style that's affecting bootstrap accordion, but only during open/close animation */
            overflow: visible !important;
        }

        @media (max-width: ${Constants.code.mobileMaxWidth}) {
            .teams__container {
                display: grid;
                grid-template-columns: 1fr;
                height: ${this.characterPFPSize * 2 + 100}px;
            }

            .teams__container .item {
                grid-template-columns: 1fr;
            }

            .teams__container .number {
                width: 100%;
            }

            .teams__container .item .name {
                grid-template-columns: 1fr;
                padding: 10px 0;
            }

            .teams__container .item .members {
                display: grid;
                grid-template-columns: 1fr 1fr;
                justify-items: center;
                padding: 10px 0;
            }

            .teams__container .item .pet {
                margin-left: 0;
            }

            .teams__details {
                grid-template-columns: 1fr;
            }

            /* Style for accoridon content ----------------------------------------------- */
            .teams__details .container {
                border-top: 2px solid #33343a;
            }
        }
    </style>`;
    
    constructor() {
      super();
    }

    connectedCallback() {
        this.loadData();
        this.modifyDataBasedOnMediaSize();
        this.innerHTML = this.componentStyle + this.buildHTML();
        this.listenToEvents();
    }

    loadData() {
        this.teamName = this.getAttribute('teamname');
        this.teamIndex = this.getAttribute('teamindex');
        
        this.activeGame = gamesRepository.getGame(Utils.getGameFromUrl());
        this.team = teamsRepository.getTeam(this.activeGame.code, this.teamName);
        this.petmd = petsRepository.getPet(this.activeGame.code, this.team.pet);
        this.teamId = `${this.activeGame.code}-${this.team.name.replaceAll(' ', '-')}`;
    }

    modifyDataBasedOnMediaSize() {
        if (Utils.isMobile()) {
            this.petPFPSize = this.petPFPSize * 0.7;
        }
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
        <div>
            <div class="teams__container">
                <div class="number">${this.teamIndex}</div>
                <div class="item">
                    <div class="name collapsed pointer" data-bs-toggle="collapse" data-bs-target="#${this.teamId}">
                        <img src="${this.team.iconUrl ?? Constants.images.transparent}" height="${Utils.isMobile() ? '30' : '40'}">
                        <span>
                            ${this.team.name}
                            <app-notes-popover teamname="${this.teamName}"></app-notes-popover>
                        </span>
                    </div>
                    <div class="members">
                        ${Utils.ngFor(Array.from({length: this.activeGame.teamSize}), (char, index) => `
                        <app-character-image 
                            gamecode="${this.activeGame.code}"
                            charactername="${this.team.characters[index]?.name}"
                            dimensions="${this.characterPFPSize}"
                            styles="margin: 5px 10px;"
                            withbuilddialog="true"
                            withelement="true"
                            mobilesizeratio="0.6"
                        >
                        </app-character-image>
                        `)}

                        ${Utils.ngIf(this.activeGame.hasPet, `
                        <img 
                            src="${this.petmd.imageUrl ?? Constants.images.unknown}" 
                            height="${this.petPFPSize}" 
                            class="pet ${this.activeGame.code+'-rarity-'+this.petmd.rarity}"
                            title="${this.petmd.name}"
                        >
                        `)}
                    </div>
                    <div class="actions collapsed pointer" data-bs-toggle="collapse" data-bs-target="#${this.teamId}">
                        <img src="assets/svg/arrow-down.svg" height="60" title="Details" class="action">
                    </div>
                </div>
            </div>
            <div class="teams__details collapse" data-bs-parent="#teams" id="${this.teamId}">
                <app-team-roles game="${this.activeGame.code}" team="${this.team.name}" class="table-responsive"></app-team-roles>
                <app-team-variations game="${this.activeGame.code}" team="${this.team.name}" class="table-responsive"></app-team-variations>
                <app-team-replacements game="${this.activeGame.code}" team="${this.team.name}" class="table-responsive"></app-team-replacements>
                <app-team-rotations game="${this.activeGame.code}" team="${this.team.name}" class="table-responsive"></app-team-rotations>
            </div>
        </div>`;
    }
}

customElements.define('app-team-details', TeamDetailsComponent);


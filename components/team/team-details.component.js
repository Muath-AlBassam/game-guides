class TeamDetailsComponent extends HTMLElement {

    characterPFPSize = 160;
    petPFPSize = 80;

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
            transition: all 0.5s ease-out;
        }
        .actions:not(.collapsed) img {
            transform: rotate(-180deg);
        }
        .actions.collapsed img {
            transform: rotate(0deg);
        }
        
        .pointer {
            cursor: pointer;
        }

        .teams__details {
            display: grid;
            grid-template-columns: 25% 25% 25% 25%;
            border: 2px solid #33343a;
        }

        .accordion-content {
            display: none;
            transition: all 0.5s ease;
        }

        @media (min-width: 769px) {
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

        @media (max-width: 768px) {
            /* not complete */
            .teams__container .item {
                grid-template-columns: 1fr;
            }

            .teams__details {
                grid-template-columns: 1fr;
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
            height: calc(100% - 63px); /* 63px is total height of details title (height + border + padding + margin) */
        }
    </style>`;
    
    constructor() {
      super();
    }

    connectedCallback() {
        const teamName = this.getAttribute('teamName');
        const teamIndex = this.getAttribute('teamIndex');

        const activeGame = GamesRepository.getGame(Utils.getGameFromUrl());
        const team = TeamsRepository.getTeam(activeGame.code, teamName);

        this.innerHTML = this.buildHTML(activeGame, team, teamIndex);
    }

    buildHTML(activeGame, team, teamIndex) {
        const teamId = `${activeGame.code}-${team.name.replaceAll(' ', '-')}`;

        return this.componentStyle + `
        <div>
            ${this.buildTeamContainer(activeGame, team, teamId, teamIndex)}
            ${this.buildTeamDetails(activeGame, team, teamId)}
        </div>`;
    }

    // team index + name + members
    buildTeamContainer(activeGame, team, teamId, teamIndex) {
        return `
        <div class="teams__container">
            ${teamIndex > 0 ? `<div class="number">${teamIndex}</div>` : ''}
            <div class="item">
                <div class="name collapsed pointer" data-bs-toggle="collapse" data-bs-target="#${teamId}">
                    <img src="${team.iconUrl ?? 'assets/Placeholder_Logo.png'}" height="40">
                    <span>${team.name}</span>
                </div>
                <div class="members">
                    ${this.buildMemebersImages(activeGame, team)}
                    ${this.buildPetImage(activeGame, team)}
                </div>
                <div class="actions collapsed pointer" data-bs-toggle="collapse" data-bs-target="#${teamId}">
                    <img src="assets/svg/arrow-down.svg" height="60" title="Details" class="action">
                </div>
            </div>
        </div>`;
    }

    buildMemebersImages(activeGame, team) {
        let membersImages = ``;
        for (let i = 0; i < activeGame.teamSize; i++) {
            const character = team.characters[i]
            const charmd = CharactersRepository.getCharacterMetadata(activeGame.code, character?.name);
            membersImages += Utils.createCharacterImage(activeGame.code, charmd, 
                {dimensions: this.characterPFPSize, styles: 'margin: 5px 10px;', withBuildDialog: true, withElement: true});
        }
        return membersImages;
    }

    buildPetImage(activeGame, team) {
        let petImage = ``;
        if (team.pet) {
            const pet = PetsRepository.getPet(activeGame.code, team.pet);
            petImage = `
            <img 
                src="${pet.imageUrl}" 
                height="${this.petPFPSize}" 
                class="pet ${activeGame.code+'-rarity-'+pet.rarity}"
                title="${pet.name}"
            >`;
        }
        return petImage;
    }

    // team details (collapsable/accordion content)
    buildTeamDetails(activeGame, team, teamId) {
        return `
        <div class="teams__details collapse" data-bs-parent="#teams" id="${teamId}">
            <app-team-roles game="${activeGame.code}" team="${team.name}"></app-team-roles>
            <app-team-variations game="${activeGame.code}" team="${team.name}"></app-team-variations>
            <app-team-replacements game="${activeGame.code}" team="${team.name}"></app-team-replacements>
            <app-team-rotations game="${activeGame.code}" team="${team.name}"></app-team-rotations>
        </div>`;
    }
}

customElements.define('app-team-details', TeamDetailsComponent);

//------------------------------------------------------------------------------------

document.addEventListener('shown.bs.collapse', function (event) {
    event.target.scrollIntoView({ behavior: 'smooth', block: 'center' });
});
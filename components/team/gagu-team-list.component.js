class TeamListComponent extends HTMLElement {

    characterPFPSize = 160;

    componentStyle = `
    <style>
        /**/
    </style>`;
    
    constructor() {
      super();
    }

    connectedCallback() {
        const activeGame = getGame(getGameFromUrl());
        const teams = getAllTeams(activeGame.code);

        this.innerHTML = this.buildHTML(teams);
    }

    buildHTML(teams) {
        return this.componentStyle + `
        <build-modal id="build-modal"></build-modal>
        <div class="row">
            <div class="col-md-12">
                <div class="content-header">Teams</div>
            </div>
        </div>
        <div id="teams">
            ${this.buildTeams(teams)}
        </div>`;
    }

    buildTeams(teams) {
        let teamsListHTML = '';
        let index = 1;
        teams.forEach((team, key) => {
            teamsListHTML += `
            <gagu-team-details-component teamName="${team.name}" teamIndex="${index}">
            </gagu-team-details-component>`;

            index++;
        });

        return teamsListHTML;
    }
}

customElements.define('gagu-team-list-component', TeamListComponent);

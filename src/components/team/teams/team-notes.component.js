class TeamNotesComponent extends HTMLElement {

    // inputs
    gameCode = null;
    teamCode = null;

    notes = [];
    formattedNotes = [];

    componentStyle = `
    <style>
        .notes-container {
            /**/
        }

        .notes-container ul.team-notes {
            font-size: 1.2em;
            list-style-type: disc;
            padding-left: 20px;
        }

        .notes-container .team-notes .note-content {
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
        this.teamCode = this.getAttribute('teamcode');

        this.notes = notesRepository.getAllByTeam(this.gameCode, this.teamCode);
        this.formatNotes();
    }

    buildHTML() {
        return `
        <div class="container notes-container">
            <h5 class="content-header">
                <img src="assets/svg/notes.svg" height="20" style="margin-right: 5px;">
                Notes
            </h5>
            <div>
                ${Utils.ngIf(this.formattedNotes?.length > 0, `
                <ul class="team-notes">
                    ${Utils.ngFor(this.formattedNotes, note => `
                        <li>
                            <span class="note-content">
                                ${note}
                            </span>
                        </li>
                    `)}
                </ul>
                `)}
            </div>
        </div>
        `;
    }


    formatNotes() {
        if (this.notes && this.notes?.length > 0) {
            this.formattedNotes = this.notes.map(n => NotesUtils.formatNotes(n.text, this.gameCode));
        }
    }
}

customElements.define('app-team-notes', TeamNotesComponent);

class NotesPopoverComponent extends HTMLElement {

    // inputs
    gameCode = null;
    teamName = null;
    iconSize = 25;
    position = 'superscript'; // inline, superscript

    notes = [];

    componentStyle = `
    <style>
        .notes-icon {
            padding: 5px;
            border-radius: 50%;
            cursor: pointer;
        }
        .notes-icon:hover {
            background-color: #36373f;
        }

        .notes-inline {
            height: 100%;
            display: grid;
            justify-content: center;
            align-items: center;
        }

        .notes-superscript {
            height: 100%;
            vertical-align: super;
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
        this.gameCode = Utils.getGameFromUrl();
        this.teamName = this.getAttribute('teamname');
        if (this.hasAttribute('position')) this.position = this.getAttribute('position');
        if (this.hasAttribute('iconsize')) this.iconSize = this.getAttribute('iconsize');

        this.notes = NotesRepository.getTeamNotes(this.gameCode, this.teamName);
    }

    buildHTML() {
        return Utils.ngIf(this.notes && this.notes.length > 0, `
        <span class="notes-${this.position}">
            <img class="notes-icon" src="assets/svg/info.svg" height="${this.iconSize}" class="notes" data-bs-trigger="hover"
                data-bs-toggle="popover" data-bs-custom-class="notes-popover" data-bs-html="true"
                data-bs-title="Team Notes" data-bs-content="${this.getFormattedNotes()}">
        </span>
        `);
    }

    getFormattedNotes() {
        let formatted = '';
        if (this.notes) {
            let fromattedList = this.notes.map(n => `<li>${n.text}</li>`);
            formatted = `<ul>${fromattedList.join('')}</ul>`
        }
        return formatted;
    }
}

customElements.define('notes-popover', NotesPopoverComponent);

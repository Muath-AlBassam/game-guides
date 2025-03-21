class NotesPopoverComponent extends HTMLElement {

    // inputs
    gameCode = null;
    teamCode = null;
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
        this.teamCode = this.getAttribute('teamcode');
        if (this.hasAttribute('position')) this.position = this.getAttribute('position');
        if (this.hasAttribute('iconsize')) this.iconSize = this.getAttribute('iconsize');

        this.notes = this.formatNotes(notesRepository.getAllByTeam(this.gameCode, this.teamCode));
    }

    buildHTML() {
        return Utils.ngIf(this.notes && this.notes?.length > 0, `
        <span class="notes-${this.position}">
            <img class="notes-icon" src="assets/svg/info.svg" height="${this.iconSize}"
                data-bs-trigger="hover" data-bs-toggle="popover" data-bs-custom-class="gagu-popover"
                data-bs-html="true" data-bs-container="body" data-bs-placement="bottom"
                data-bs-title="Notes" data-bs-content="${this.notes}">
        </span>
        `);
    }

    formatNotes(notesList) {
        let formatted = null;
        if (notesList && notesList?.length > 0) {
            let fromattedList = notesList.map(n => {
                return `<li>${this.formatText(n.text)}</li>`;
            });
            formatted = `<ul>${fromattedList.join('')}</ul>`
        }
        return formatted;
    }

    formatText(text) {
        if (text == null) {
            return text;
        }
        // img_***_img => image
        return String(text)
            .replace(/img_(.*?)_img/g, (match, capture) => `<img src='${DataUtils.getImageUrl(capture)}' width='20' />`);
    }
}

customElements.define('app-notes-popover', NotesPopoverComponent);

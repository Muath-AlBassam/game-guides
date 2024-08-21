// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal
class TeamDetailsModal extends HTMLElement {

    static observedAttributes = ["team"];

    componentStyle = `
    <style>
        .team-details-modal-content {
            width: 60%;
        }

        .close-modal {
            color: #aaaaaa;
            top: 0;
            right: 0;
            float: right;
            font-size: 28px;
            font-weight: bold;
        }
        .close-modal:hover, .close-modal:focus {
            color: #fff;
            text-decoration: none;
            cursor: pointer;
        }
    </style>`;

    constructor() {
      super();
    }
  
    connectedCallback() {
        const teamName = this.getAttribute('team');

        this.innerHTML = this.buildHTML(teamName);
    }

    attributeChangedCallback(name, oldValue, newValue) {
        const teamName = this.getAttribute('team');

        document.getElementById('team-details-modal-content').innerHTML = this.buildDialogContent(teamName);
    }

    buildHTML(teamName) {
        return this.componentStyle + `
        <div class="gagu-modal" id="team-details-modal-body">
            <div class="gagu-modal-content team-details-modal-content" id="team-details-modal-content">
                ${this.buildDialogContent(teamName)}
            </div>
        </div>`;
    }

    buildDialogContent(teamName) {
        let content = '';
        content += this.buildModalHeader(teamName);
        if (teamName != null) {
            content += `<gagu-team-details-component teamName="${teamName}" teamIndex="${0}"></gagu-team-details-component>`;
        }
        return content;
    }

    buildModalHeader(teamName) {
        return `
        <div class="close-modal" onclick="closeModal()">${Constants.unicode.times}</div>
        <div>
            <div class="center-content" style="margin-top: 20px;">
                <h2 style="margin-left: 10px;">${teamName}</h2>
            </div>
        </div>
        `;
    }
}

customElements.define('team-details-modal', TeamDetailsModal);

//------------------------------------------------------------------------------------

function openTeamDetailsModal(teamName) {
    // trigger attributeChangedCallback & set data
    document.getElementById('team-details-modal').setAttribute('team', teamName);
    // add show class to modal
    document.getElementById('team-details-modal-body').classList.add('modal-shown');
}

class ButtonGroupComponent extends HTMLElement {

    buttonList = [];
    imageLabel = 'imageUrl';
    valueLabel = 'code';
    titleLabel = 'name';
    changeEventName = '';
    uuid = '';

    activeValue = '';

    componentStyle = `
    <style>
        .btn-group {
            border-radius: 0;
            margin: 0 1em;
        }

        .btn-secondary {
            border-radius: 0;
            border: 1px solid #484950;
            background-color: #36373d;
        }

        @media (max-width: ${Constants.code.mobileMaxWidth}) {
            .btn-group {
                margin: 1em 0 0 0;
                width: 100%;
            }
            
            .btn-group .btn {
                flex: 1;
                text-align: center;
                padding-left: 0;
                padding-right: 0;
            }
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
        if (this.hasAttribute('imagelabel')) this.imageLabel = this.getAttribute('imagelabel');
        if (this.hasAttribute('valuelabel')) this.valueLabel = this.getAttribute('valuelabel');
        if (this.hasAttribute('titlelabel')) this.titleLabel = this.getAttribute('titlelabel');
        if (this.hasAttribute('changeeventname')) this.changeEventName = this.getAttribute('changeeventname');
        this.buttonList =  Utils.fromJSONString(this.getAttribute('buttonlist'));

        this.uuid = Utils.generateUUID();
    }

    buildHTML() {
        return `
        <span class="btn-group" id="${this.uuid}">
            <button 
                class="btn btn-secondary active" 
                value=""
                title="All" 
                onclick="emitEvent('${this.changeEventName}',''); onBtnGroupChange('${this.uuid}', '')"
            >
                <span style="color: #fff;">${Constants.unicode.star}</span>
            </button>
            ${Utils.ngFor(this.buttonList, btn => `
            <button 
                class="btn btn-secondary"
                value="${btn[this.valueLabel]}"
                title="${btn[this.titleLabel]}"
                onclick="emitEvent('${this.changeEventName}', '${btn[this.valueLabel]}'); 
                        onBtnGroupChange('${this.uuid}', '${btn[this.valueLabel]}')"
            >
                <img src="${btn[this.imageLabel]}" alt="${btn[this.titleLabel]}" height="20"/>
            </button>
            `)}
        </span>
        `;
    }
}

customElements.define('app-button-group', ButtonGroupComponent);

//------------------------------------------------------------------------------------

function onBtnGroupChange(uuid, value) {
    const btns = document.getElementById(uuid).querySelectorAll('button');
    btns.forEach(btn => {
        if (btn.value == value) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    })
}
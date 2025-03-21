class ButtonGroupComponent extends HTMLElement {

    buttonList = [];
    imageLabel = 'imageUrl';
    valueLabel = 'code';
    titleLabel = 'name';
    changeEventName = '';
    showAllButton = true;

    activeValue = '';
    uuid = '';

    componentStyle = `
    <style>
        .btn-group {
            border-radius: 0;
            margin: 0 1em 0 0;
            width: 100%;
        }

        .btn.active {
            background-color: var(--border-color);
        }
        .btn.active img {
            filter: brightness(0) invert(1);
        }

        @media (max-width: ${Constants.code.mobileMaxWidth}) {
            .btn-group {
                margin: 0.5em 0;
            }
            
            .btn-group .btn {
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
        if (this.hasAttribute('buttonlist')) this.buttonList =  Utils.fromJSONString(this.getAttribute('buttonlist'));
        if (this.hasAttribute('imagelabel')) this.imageLabel = this.getAttribute('imagelabel');
        if (this.hasAttribute('valuelabel')) this.valueLabel = this.getAttribute('valuelabel');
        if (this.hasAttribute('titlelabel')) this.titleLabel = this.getAttribute('titlelabel');
        if (this.hasAttribute('changeeventname')) this.changeEventName = this.getAttribute('changeeventname');
        if (this.hasAttribute('showallbutton')) this.showAllButton = this.getAttribute('showallbutton') == 'true';

        this.uuid = Utils.generateUUID();
    }

    buildHTML() {
        return `
        <div class="btn-group" id="${this.uuid}">
            ${Utils.ngIf(this.showAllButton, `
            <button 
                class="btn btn-secondary active" 
                value=""
                title="All" 
                onclick="emitEvent('${this.changeEventName}',''); onBtnGroupChange('${this.uuid}', '')"
            >
                <span style="color: #fff;">${Constants.unicode.star}</span>
            </button>    
            `)}

            ${Utils.ngFor(this.buttonList, btn => `
            <button 
                class="btn btn-secondary"
                value="${btn[this.valueLabel]}"
                title="${btn[this.titleLabel]}"
                onclick="emitEvent('${this.changeEventName}', '${btn[this.valueLabel]}'); 
                        onBtnGroupChange('${this.uuid}', '${btn[this.valueLabel]}')"
            >
                <img src="${btn[this.imageLabel]}" alt="${btn[this.titleLabel]}" height="24"/>
            </button>
            `)}
        </div>
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
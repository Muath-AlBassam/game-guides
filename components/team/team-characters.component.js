class TeamCharactersComponent extends HTMLElement {

    characterPFPSize = 80;

    componentStyle = `<style>
        .owl-carousel {
            background-color: #2c2d33;
            padding: 0.5em;
        }
    </style>`;

    constructor() {
      super();
    }
  
    connectedCallback() {
        const gameCode = Utils.getGameFromUrl();
        this.innerHTML = this.buildHTML(gameCode);

        $(document).ready(function() {
            $(".owl-carousel").owlCarousel({
                items : 20,
                // navigation: true,
                // pagination: false,
                paginationNumbers: true
            });
        });
    }

    buildHTML(gameCode) {
        return this.componentStyle + this.buildOwlCarousel(gameCode);
    }

    buildOwlCarousel(gameCode) {
        return `
        <div class="row">
            <div class="col-md-12">
                <div class="content-header">Characters</div>
            </div>
        </div>
        <div class="owl-carousel owl-theme">
            ${this.buildOwlCarouselItems(gameCode)}
        </div>
        `;
    }

    buildOwlCarouselItems(gameCode) {
        let content = '';
        let charactrsList = CharactersRepository.getAllCharacters(gameCode);

        if (charactrsList != null) {
            charactrsList.forEach(charmd => {
                content += Utils.createCharacterImage(gameCode, charmd, 
                    {dimensions: this.characterPFPSize, styles: 'margin: 5px 10px;', withBuildDialog: true, withElement: true});
            })
        }
        return content;
    }
}

customElements.define('team-characters', TeamCharactersComponent);

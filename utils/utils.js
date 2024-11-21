class Utils {
    static getGameFromUrl() {
        return window.location.hash.replace('#', '');
    }
    
    // create character image tag
    static createCharacterImage(
        gameCode, 
        charmd, 
        {
            dimensions = 100, 
            styles = '', 
            classes = '', 
            withBuildDialog = false, 
            withBackgroundClass = true,
            withElement = false,
            withContainer = true
        } = {}
    ) {
        let showBuild = false;
        if (withBuildDialog) {
            showBuild = null != BuildsRepository.getCharacterBuild(gameCode, charmd.name);
        }
        const showElement = withElement && charmd.element;
        const addRarityClass = withBackgroundClass && charmd.rarity;
    
        let styleVal = 'border-radius: 5px;';
        styleVal += ` ${showBuild ? 'display: block; height: auto;' : ''} ${styles}`;
        let classVal = `pfp ${addRarityClass ? gameCode+'-rarity-'+charmd.rarity : ''} ${classes}`;
        let imgSrc = `${charmd.imageUrl ?? 'assets/images/Unknown.png'}`;
        let imgTag = `<img    
                    src="${imgSrc}" alt="${charmd.name ?? '?'}" title="${charmd.name ?? '?'}"
                    class="${classVal}" style="${styleVal}" width="${dimensions}" 
                />`;
        
        if (!withContainer) {
            return imgTag;
        }
    
        let buildIcon = showBuild ? `
            <img src="assets/svg/armor.svg" width="26" height="26" class="build-icon" 
            title="View build" onclick="openBuildDialog('${charmd.name}')"/>` 
            : '';
    
        let elementImgUrl = ElementsRepository.getElement(gameCode, charmd.element).imageUrl;
        let elementIcon = showElement ? `
            <img src="${elementImgUrl}" width="26" height="26" class="element-icon" title="${charmd.element}"/>`
            : '';
    
        return `
            <div class="character-container">
                ${imgTag}
                ${buildIcon}
                ${elementIcon}
            </div>
        `;
    }
}

// JS Utils -------------------------------------------------------------------

function createElement(tag, classes = null, styles = null, content = null, id = null) {
    let ele = document.createElement(tag);
    if (classes != null) {
        ele.setAttribute('class', classes);
    }
    if (styles != null) {
        ele.setAttribute('style', styles);
    }
    if (content != null) {
        ele.innerHTML = content;
    }
    if (id != null) {
        ele.setAttribute('id', id);
    }
    return ele;
}

function appendAll(parent, children) {
    if (children != null) {
        children.forEach(c => parent.appendChild(c));
    }
    return parent;
}

// GaGu Utils -----------------------------------------------------------------

function getGameFromUrl() {
    return window.location.hash.replace('#', '');
}

// create character image tag
function createCharacterImage(
    gameCode, 
    charmd, 
    {
        dimensions = 100, 
        styles = '', 
        classes = '', 
        withBuildModal = false, 
        withBackgroundClass = true
    } = {}
) {
    const showBuild = withBuildModal && charmd.build;

    let styleVal = 'border-radius: 5px;';
    styleVal += ` ${showBuild ? 'display: block; height: auto;' : ''} ${styles}`;
    let classVal = `pfp ${withBackgroundClass ? gameCode+'-rarity-'+charmd.rarity : ''} ${classes}`;
    let imgSrc = `${charmd.imageUrl ?? 'assets/Unknown.png'}`;
    let imgTag = `<img    
                src="${imgSrc}" alt="${charmd.name}" title="${charmd.name ?? '?'}"
                class="${classVal}" style="${styleVal}" width="${dimensions}" height="${dimensions}" 
            />`;

    if (showBuild) {
        imgTag = `
            <div class="character-container">
                ${imgTag}
                <img src="assets/svg/armor.svg" width="26" height="26" class="build-icon" 
                    title="View build" onclick="openBuildModal('${charmd.name}')"/>
            </div>
        `;
    }

    return imgTag;
}

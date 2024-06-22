// JS Utils -----------------------------------------------

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

// TeamBuilds Utils ---------------------------------------

function getGame(gameCode) {
    const games = GamesData.games;
    return games.find(g => g.code ==  gameCode);
}

function getAllGames() {
    return GamesData.games;
}

function getTeams(gameCode) {
    switch(gameCode) {
        case 'GI':
            return GamesData.GITeams;
        case 'HSR':
            return GamesData.HSRTeams;
        case 'HI3':
            return GamesData.HI3Teams;
        default:
            return null;
    }
}

function getCharacterMetadata(gameCode, characterName) {
    switch(gameCode) {
        case 'GI':
            return GamesData.GICharacters.get(characterName) ?? { name: characterName };
        case 'HSR':
            return GamesData.HSRCharacters.get(characterName) ?? { name: characterName };
        case 'HI3':
            return GamesData.HI3Characters.get(characterName) ?? { name: characterName };
        default:
            return { name: characterName };
    }
}

// create character image tag
function createCharacterImage(charmd, dimenstion = 105, asString = false) {
    if (asString) {
        return `<img    
                    src='${charmd.imageUrl ?? ''}' alt='${charmd.name}' title='${charmd.name}'
                    class='${gameCode}-rarity-${charmd.rarity ?? ''}'
                    width'${dimenstion}' height='${dimenstion}' 
                />`;
    } else {
        let img = createElement('img', `${gameCode}-rarity-${charmd.rarity ?? ''}`);
        img.setAttribute('src', charmd.imageUrl ?? '');
        img.setAttribute('alt', charmd.name);
        img.setAttribute('title', charmd.name);
        img.setAttribute('width', dimenstion);
        img.setAttribute('height', dimenstion);
        return img;
    }
}

// create characters' name tag + image tooltip
function createCharacterNameAndTooltipTag(gameCode, chars, imgDimenstion = 90) {
    let imgs = '';
    // create images tage
    chars.forEach(charname => {
        const charmd = getCharacterMetadata(gameCode, charname);
        imgs += createCharacterImage(charmd, imgDimenstion, true);
    });
    // add images as tooltip
    const charTag = createElement('span', null, null, chars.join(' - '));
    charTag.setAttribute('data-bs-toggle', 'tooltip');
    charTag.setAttribute('data-bs-placement', 'right');
    charTag.setAttribute('data-bs-container', 'body');
    charTag.setAttribute('data-bs-html', 'true');
    charTag.setAttribute('data-bs-title', imgs.length == 0 ? '...' : imgs);
    return charTag;
}

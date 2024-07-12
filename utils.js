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

// TeamBuilds Utils -----------------------------------------------------------

function getAllGames() {
    return GamesData.games;
}

function getGame(gameCode) {
    const games = getAllGames();
    const game = games.find(g => g.code == gameCode);
    // return default game if not found
    return game ?? games.find(g => g.code == 'GI');
}

function getTeams(gameCode) {
    switch (gameCode) {
        case 'GI':
            return GamesData.GITeams;
        case 'HSR':
            return GamesData.HSRTeams;
        case 'ZZZ':
            return GamesData.ZZZTeams;
        case 'HI3':
            return GamesData.HI3Teams;
        default:
            return null;
    }
}

function getCharacterMetadata(gameCode, characterName) {
    let data;
    switch (gameCode) {
        case 'GI':
            data = GamesData.GICharacters.get(characterName);
            break;
        case 'HSR':
            data = GamesData.HSRCharacters.get(characterName);
            break;
        case 'ZZZ':
            data = GamesData.ZZZCharacters.get(characterName);
            break;
        case 'HI3':
            data = GamesData.HI3Characters.get(characterName);
            break;
    }
    return data ?? { name: characterName }
}

function getRoles(gameCode) {
    switch (gameCode) {
        case 'HSR':
            return GamesData.HSRRoles;
        case 'ZZZ':
            return GamesData.ZZZRoles;
        default:
            return null;
    }
}

// create character image tag
function createCharacterImage(gameCode, charmd, dimenstion = 100, style = '') {
    return `<img    
                src='${charmd.imageUrl ?? 'assets/Unknown.png'}' alt='${charmd.name}' title='${charmd.name ?? '?'}'
                class='${gameCode}-rarity-${charmd.rarity ?? ''}'
                width'${dimenstion}' height='${dimenstion}' style='${style}'
            />`;
}
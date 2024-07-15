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

// Other Utils ----------------------------------------------------------------

function getGameFromUrl() {
    return window.location.hash.replace('#', '');
}

// 

function getWeaponsLabel(gameCode) {
    switch (gameCode) {
        case Constants.games.GI:
            return 'Weapon';
        case Constants.games.HSR:
            return 'Light Cone';
        case Constants.games.ZZZ:
            return 'W-Engine';
        case Constants.games.HI3:
            return 'Weapon';
        default:
            return '';
    }    
}

function getSetsLabel(gameCode) {
    switch (gameCode) {
        case Constants.games.GI:
            return 'Artifacts';
        case Constants.games.HSR:
            return 'Relics & Planar';
        case Constants.games.ZZZ:
            return 'Drive Discs';
        case Constants.games.HI3:
            return 'Stigmata';
        default:
            return '';
    }    
}

// Game Data Utils ------------------------------------------------------------

function getAllGames() {
    return GamesData.games;
}

function getGame(gameCode) {
    const games = getAllGames();
    const game = games.find(g => g.code == gameCode);
    // return default game if not found
    return game ?? games.find(g => g.code == Constants.games.GI);
}

function getAllTeams(gameCode) {
    switch (gameCode) {
        case Constants.games.GI:
            return GIData.GITeams;
        case Constants.games.HSR:
            return HSRData.HSRTeams;
        case Constants.games.ZZZ:
            return ZZZData.ZZZTeams;
        case Constants.games.HI3:
            return HI3Data.HI3Teams;
        default:
            return [];
    }
}

function getTeam(gameCode, teamName) {
    let teams = getAllTeams(gameCode);
    return teams.find(team => team.name == teamName);
}

function getAllRoles(gameCode) {
    switch (gameCode) {
        case Constants.games.HSR:
            return HSRData.HSRRoles;
        case Constants.games.ZZZ:
            return ZZZData.ZZZRoles;
        default:
            return null;
    }
}

function getRole(gameCode, roleName) {
    let roles = getAllRoles(gameCode);
    return roles.find(role => role.name == roleName);
}

function getCharacterMetadata(gameCode, characterName) {
    let data;
    switch (gameCode) {
        case Constants.games.GI:
            data = GIData.GICharacters.get(characterName);
            break;
        case Constants.games.HSR:
            data = HSRData.HSRCharacters.get(characterName);
            break;
        case Constants.games.ZZZ:
            data = ZZZData.ZZZCharacters.get(characterName);
            break;
        case Constants.games.HI3:
            data = HI3Data.HI3Characters.get(characterName);
            break;
    }
    return data ?? { name: characterName }
}

function getWeaponMetadata(gameCode, weaponName) {
    let data;
    switch (gameCode) {
        case Constants.games.GI:
            data = GIData.GIWeapons.get(weaponName);
            break;
        case Constants.games.HSR:
            data = HSRData.HSRLightCones.get(weaponName);
            break;
        case Constants.games.ZZZ:
            data = ZZZData.ZZZWEngines.get(weaponName);
            break;
    }
    return data ?? { name: weaponName }
}

function getSetMetadata(gameCode, setName) {
    let data;
    switch (gameCode) {
        case Constants.games.GI:
            data = GIData.GISets.get(setName);
            break;
        case Constants.games.HSR:
            data = HSRData.HSRSets.get(setName);
            break;
    }
    return data ?? { name: setName }
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
    return `<img    
                src="${charmd.imageUrl ?? 'assets/Unknown.png'}" alt="${charmd.name}" title="${charmd.name ?? '?'}"
                class="${withBackgroundClass ? gameCode+'-rarity-'+charmd.rarity : ''} ${classes}"
                width="${dimensions}" height="${dimensions}" style="${withBuildModal && charmd.build ? 'cursor: pointer;' : ''} ${styles}"
                ${(withBuildModal && charmd.build) ? 'onclick="openBuildModal(\'' + charmd.name + '\', \'' + charmd.imageUrl + '\')"' : ''}
            />`;
}

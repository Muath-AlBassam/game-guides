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

// Game Data Utils ------------------------------------------------------------

function getAllGames() {
    return GamesData.games;
}

function getGame(gameCode) {
    gameCode = gameCode == '' || gameCode == null ? Constants.games.GI : gameCode; 
    return getAllGames().get(gameCode);
}

function getAllTeams(gameCode) {
    switch (gameCode) {
        case Constants.games.GI:
            return TeamsRepository.GITeams;
        case Constants.games.HSR:
            return TeamsRepository.HSRTeams;
        case Constants.games.ZZZ:
            return TeamsRepository.ZZZTeams;
        case Constants.games.HI3:
            return TeamsRepository.HI3Teams;
        default:
            return new Map([]);
    }
}

function getTeam(gameCode, teamName) {
    let team = getAllTeams(gameCode).get(teamName);
    return team ?? { name: teamName }
}

function getAllRoles(gameCode) {
    switch (gameCode) {
        case Constants.games.HSR:
            return RolesRepository.HSRRoles;
        case Constants.games.ZZZ:
            return RolesRepository.ZZZRoles;
        default:
            return new Map([]);
    }
}

function getRole(gameCode, roleName) {
    let role = getAllRoles(gameCode).get(roleName);
    return role ?? { name: roleName }
}

function getCharacterMetadata(gameCode, characterName) {
    let data;
    switch (gameCode) {
        case Constants.games.GI:
            data = CharactersRepository.GICharacters.get(characterName);
            break;
        case Constants.games.HSR:
            data = CharactersRepository.HSRCharacters.get(characterName);
            break;
        case Constants.games.ZZZ:
            data = CharactersRepository.ZZZCharacters.get(characterName);
            break;
        case Constants.games.HI3:
            data = CharactersRepository.HI3Characters.get(characterName);
            break;
    }
    return data ?? { name: characterName }
}

function getWeaponMetadata(gameCode, weaponName) {
    let data;
    switch (gameCode) {
        case Constants.games.GI:
            data = WeaponsRepository.GIWeapons.get(weaponName);
            break;
        case Constants.games.HSR:
            data = WeaponsRepository.HSRLightCones.get(weaponName);
            break;
        case Constants.games.ZZZ:
            data = WeaponsRepository.ZZZWEngines.get(weaponName);
            break;
    }
    return data ?? { name: weaponName }
}

function getSetMetadata(gameCode, setName) {
    let data;
    switch (gameCode) {
        case Constants.games.GI:
            data = SetsRepository.GISets.get(setName);
            break;
        case Constants.games.HSR:
            data = SetsRepository.HSRSets.get(setName);
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

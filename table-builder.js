let gameCode = '';

// build table content
function loadTeamsTable(activeGame) {
    gameCode = activeGame.code;
    
    // set Team Members header col size
    document.getElementById('membersHeader').colSpan = activeGame.teamSize;

    const tablebody = document.getElementById('tablebody');
    tablebody.innerHTML = '';
   
    let tableData = getTeams(gameCode);
    // build table rows & cells
    if (tableData) {
        tableData.forEach((team, index) => {
            let tableRow = createElement('tr');
            appendAll(tableRow, [
                generateTeamNumberCell(index),
                ...generateTeamNameCell(team),
                ...generateTeamMembersCell(team),
                generateTeamRolesCell(team),
                generateTeamReplacementsCell(team),
                generateTeamRotationsCell(team)
            ])
            tablebody.appendChild(tableRow);
        })
    }
}

// Number cell
function generateTeamNumberCell(index) {
    return createElement('th', 'h-center v-center', null, index + 1);
}

// Team name + icon
function generateTeamNameCell(team) {
    // team icon
    const iconCell = createElement('th', 'h-center v-center team-icon', 'padding: 0 1em;');
    const img = createElement('img');
    img.setAttribute('src', team.iconUrl ?? Constants.images.transparent);
    img.setAttribute('alt', team.name);
    img.setAttribute('title', team.name);
    img.setAttribute('width', '35px');
    img.setAttribute('height', '35px');
    iconCell.appendChild(img);

    // team name + description
    const nameCell = createElement('th', 'h-center v-center team-name');
    const nameSpan = createElement('span', null, 'font-size: 35px', team.name);
    const br = createElement('br');
    // description of team => names of main team members
    const teamMainMembers = team.characters.filter(c => c.isMain);
    const description = teamMainMembers.length > 0 ? teamMainMembers.map(c => c.name).join(' + ') : '...';
    const descSpan = createElement('span', null, 'font-size: 15px', `${description}`);
    appendAll(nameCell, [nameSpan, br, descSpan]);

    return [iconCell, nameCell];
}

// Team members (images)
function generateTeamMembersCell(team) {
    let cells = []
    const teamSize = getGame(gameCode).teamSize;
    for (let i = 0; i < teamSize; i++) {
        let td = createElement('td', 'h-center v-center character d-table-cell');
        const character = team.characters[i]
        const charmd = getCharacterMetadata(gameCode, character?.name);
        if (charmd?.imageUrl) {
            // print character image + name
            td.appendChild(createCharacterImage(charmd));
            td.appendChild(createElement('br'))
            td.appendChild(createElement('span', null, null, character.name))
        } else if (character) {
            // print character name
            let nameSpan = createElement('span', null, null, character.name);
            td.appendChild(nameSpan);
        } else {
            // print empty cell
            let emptySpan = createElement('span', null, null, '...');
            td.appendChild(emptySpan);
        }
        cells.push(td);
    }
    return cells;
}

// Roles of team members
function generateTeamRolesCell(team) {
    let characterRoles = '';
    team.characters.forEach(character => {
        if (character.role != null) {
            const parsedRole = character.role.replaceAll('[', '<b>[').replaceAll(']', ']</b>');
            characterRoles += `<u>${character.name}</u> - ${parsedRole}<br/>`;
        }
    });
    return createElement('td', 'v-center', 'padding-left: 1em', characterRoles)
}

// Replacements of each team member
function generateTeamReplacementsCell(team) {
    const cell = createElement('td', 'v-center', 'padding-left: 1em');

    team.characters.forEach(character => {
        if (character.replacedBy != null && character.replacedBy.length > 0) {
            let charTag = createElement('u', null, null, character.name); // member in team
            if (character.isMain) { 
                // add bold if main team member
                const bTag = createElement('b');
                bTag.appendChild(charTag);
                charTag = bTag;
            }
            
            // split current team member from their replacements
            const separatorTag = createElement('span', null, null, ` ${Constants.unicode.arrow} `);
            appendAll(cell, [charTag, separatorTag]);
            
            // add repalcements' names with tooltip image
            character.replacedBy.forEach((replacement, index) => {
                const splitterTag = createElement('span', null, null, ' / ');
                let repTag = createCharacterNameAndTooltipTag(gameCode, [replacement]);
                if (index === (character.replacedBy.length - 1)) {
                    appendAll(cell, [repTag])
                } else {
                    appendAll(cell, [repTag, splitterTag])
                }
            })
            // break to line for next team member
            const breakTag = createElement('br');
            cell.appendChild(breakTag);
        }
    });
    
    cell.appendChild(generateTeamVariatons(team))
    return cell;
}

// Team variations
function generateTeamVariatons(team) {
    if (team.variations != null && team.variations.length > 0) {
        const ulTag = createElement('ul', null, 'padding-top: 0.5rem;');
        team.variations.forEach(variation => {
            const variationTag = createElement('li');
            variationTag.appendChild(createCharacterNameAndTooltipTag(gameCode, variation, 70));
            ulTag.appendChild(variationTag);
        });
        return ulTag;
    }
    return createElement('span');
}

// Team rotations
function generateTeamRotationsCell(team) {
    let content = '';
    if (team.rotations) {
        team.rotations.forEach(step => {
            content += step[0];
            content += ' ';
            content += `<b>${step[1]}</b>`;
            content += '<br>';
        })
    }
    return createElement('td', 'v-center', 'padding: 0 1em;', content);
}
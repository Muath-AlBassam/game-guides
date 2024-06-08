let gameCode = '';

// build table content
function loadTeamsTable(gcode) {
    gameCode = gcode;

    const tablebody = document.getElementById('tablebody');
    tablebody.innerHTML = '';
   
    let tableData = null;
    if (gameCode == 'HSR') {
        tableData = TeamBuildsData.HSRTeams;
    } else {
        tableData = TeamBuildsData.GITeams;
    }
    // build table rows & cells
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

// 1st cell : number
function generateTeamNumberCell(index) {
    return createElement('th', 'h-center v-center', null, index + 1);
}

// 2nd cell : team name + icon
function generateTeamNameCell(team) {
    // team image/icon ()
    const iconCell = createElement('th', 'h-center v-center team-icon');
    if (team.iconUrl != null) {
        const img = createElement('img');
        img.setAttribute('src', team.iconUrl);
        img.setAttribute('alt', team.name);
        img.setAttribute('title', team.name);
        img.setAttribute('width', '35px');
        img.setAttribute('height', '35px');
        iconCell.appendChild(img);
    }

    // team name + description
    const nameCell = createElement('th', 'h-center v-center team-name');
    const nameSpan = createElement('span', null, 'font-size: 35px', team.name);
    const br = createElement('br');
    // description of team => names of main team members
    const teamMainMembers = team.characters.filter(c => c.isMain);
    const description = teamMainMembers.length > 0 ? teamMainMembers.map(c => c.name).join(' + ') : '...';
    const descSpan = createElement('span', null, 'font-size: 15px', `(${description})`);
    appendAll(nameCell, [nameSpan, br, descSpan]);

    return [iconCell, nameCell];
}

// 3rd cell : team members (images)
function generateTeamMembersCell(team) {
    let cells = []
    team.characters.forEach(character => {
        let td = createElement('td', 'h-center v-center character d-table-cell');
        const charmd = getCharacterMetadata(gameCode, character.name);
        if (charmd?.imageUrl != null) {
            td.appendChild(createCharacterImage(charmd));
            // add character name under image
            td.appendChild(createElement('br'))
            td.appendChild(createElement('span', null, null, character.name))
        } else {
            let nameSpan = createElement('span', null, null, character.name ?? '...');
            td.appendChild(nameSpan);
        }
        cells.push(td);
    })
    return cells;
}

// 4th cell : roles of team members
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

// 5th cell (part 1) : replacements of each cell
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
            const separatorTag = createElement('span', null, null, ` ${TeamBuildsConstants.arrow} `);
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

// 5th cell (part 2) : team variations
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

// 6th cell : team rotations
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
    // use character index in team instead of team
    // if (team.rotations && team.name == 'Pyro') {
    //     team.rotations.forEach(step => {
    //         content += team.characters[step[0]].name;
    //         content += ' ';
    //         content += `<b>${step[1]}</b>`;
    //         content += '<br>';
    //     })
    // }
    return createElement('td', 'v-center', 'padding-left: 1em', content);
}
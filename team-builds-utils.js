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

// get character details
function getCharacterMetadata(gameCode, characterName) {
    switch(gameCode) {
        case 'GI':
            return getGICharacters().get(characterName) ?? { name: characterName };
        case 'HSR':
            return getHSRCharacters().get(characterName) ?? { name: characterName };
        default:
            return { name: characterName };
    }
}


// create character image tag
function createCharacterImage(charmd, dimenstion = 105, asString = false) {
    if (asString) {
        return `<img    
                    src='${charmd.imageUrl ?? ''}' alt='${charmd.name}' title='${charmd.name}'
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
    chars.forEach(charname => {
        const charmd = getCharacterMetadata(gameCode, charname);
        imgs += createCharacterImage(charmd, imgDimenstion, true);
    });
    const charTag = createElement('span', null, null, chars.join(' - '));
    charTag.setAttribute('data-bs-toggle', 'tooltip');
    charTag.setAttribute('data-bs-placement', 'right');
    charTag.setAttribute('data-bs-container', 'body');
    charTag.setAttribute('data-bs-html', 'true');
    charTag.setAttribute('data-bs-title', imgs.length == 0 ? '...' : imgs);
    return charTag;
}

// Expirement:
// Keep characters in csv file instead of map
// function readCSV() {
//     const text = csvCharacters;
//     const lines = text.trim().split('\n');
//     const headers = lines.shift().split(',');
//     const hsr = [];
//     const gi = [];
//     lines.forEach(line => {
//         const values = line.split(',');
//         const obj = {};
//         headers.forEach((header, index) => {
//             obj[header.trim()] = values[index].trim();
//         });
//         if (line.startsWith("HSR,")) {
//             hsr.push(obj);
//         } else {
//             gi.push(obj);
//         }
//     });
//     console.log(hsr);
//     console.log(gi);
// }
// function exportCSV() {
//     let HSR_chars = getHSRCharacters();
//     let GI_chars = getGICharacters();
//     let all_chars = [];
//     for (let item of HSR_chars) {
//         all_chars.push({gameCode: "HSR", ...item[1]});
//     }
//     for (let item of GI_chars) {
//         all_chars.push({gameCode: "GI", ...item[1]});
//     }
//     let converted_chars = all_chars.map(char => {
//         return [char.gameCode, char.name, char.imageUrl, char.rarity];
//     })
//     let csvContent = "data:text/csv;charset=utf-8,";
//     let header = "gameCode,name,imageUrl,rarity\n"
//     let data = "";
//     converted_chars.forEach(rowArray => {
//         data += (rowArray.join(",") + "\n");
//     });
//     var encodedUri = encodeURI(csvContent + header + data);
//     var link = document.createElement("a");
//     link.setAttribute("href", encodedUri);
//     link.setAttribute("download", "characters.csv");
//     document.body.appendChild(link);
//     link.click();
// }
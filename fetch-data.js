

async function loadData(sheetName) {
    console.log('fetching data for', sheetName);
    const sheet = await fetch('Game Guides DB.xlsx');
    const arrayBuffer = await sheet.arrayBuffer();
    const workbook = XLSX.read(arrayBuffer, { type: 'array' });
    const worksheet = workbook.Sheets[sheetName];
    // Convert to array of objects
    return XLSX.utils.sheet_to_json(worksheet);
}

async function loadFormattedData(sheetName, mapObjectCallback, uniqueKey = 'CODE', groupingLevels = 2) {
    const array = await loadData(sheetName);
    if (groupingLevels == 2) {
        return arrayToMapOfMapsLevel2(array, mapObjectCallback, uniqueKey);
    } else { // 1
        return arrayToMapOfMapsLevel1(array, mapObjectCallback, uniqueKey);
    }
}

// groups array to map by 2 levels: GAME_CODE then @uniqueKey
function arrayToMapOfMapsLevel2(array, mapObjectCallback, uniqueKey = 'CODE') {
    let groupedByGame = arrayToGroupedMap(array, 'GAME_CODE');
    groupedByGame.forEach((gv, gk) => {
        let groupedByCode = arrayToGroupedMap(gv, uniqueKey)
        groupedByCode.forEach((cv, ck) => {
            groupedByCode.set(ck, mapObjectCallback(cv))
        });
        groupedByGame.set(gk, groupedByCode);
    });
    return groupedByGame;
}

// groups array to map by 1 level: @uniqueKey
function arrayToMapOfMapsLevel1(array, mapObjectCallback, uniqueKey = 'CODE') {
    let groupedByCode = arrayToGroupedMap(array, uniqueKey);
    groupedByCode.forEach((cv, ck) => {
        groupedByCode.set(ck, mapObjectCallback(cv))
    });
    return groupedByCode;
}

// groups array to map using a key
function arrayToGroupedMap(array, keyAttr) {
    const map = new Map();
    array.forEach(item => {
      const key = item[keyAttr];
      if (!map.has(key)) {
        map.set(key, []);
      }
      map.get(key).push(item);
    });
    return map;
}
class DataClient {
    
    async loadData(sheetName) {
        console.log('fetching data for', sheetName);
        const sheet = await fetch('Game Guides DB.xlsx');
        const arrayBuffer = await sheet.arrayBuffer();
        const workbook = XLSX.read(arrayBuffer, { type: 'array' });
        if (sheetName instanceof Array) {
            let resMap = new Map([]);
            sheetName.forEach(name => {
                const worksheet = workbook.Sheets[name];
                resMap.set(name, XLSX.utils.sheet_to_json(worksheet));
            });
            return resMap;
        } else {
            const worksheet = workbook.Sheets[sheetName];
            return XLSX.utils.sheet_to_json(worksheet);
        }
    }

    // groups array to map by 2 levels: GAME_CODE then @uniqueKey
    arrayTo2LevelMap(array, mapObjectCallback, uniqueKey = 'CODE') {
        let groupedByGame = this.groupBy(array, 'GAME_CODE');
        groupedByGame.forEach((gv, gk) => {
            let groupedByCode = this.groupBy(gv, uniqueKey)
            groupedByCode.forEach((cv, ck) => {
                groupedByCode.set(ck, mapObjectCallback(cv))
            });
            groupedByGame.set(gk, groupedByCode);
        });
        return groupedByGame;
    }

    // groups array to map by 1 level: @uniqueKey
    arrayTo1LevelMap(array, mapObjectCallback, uniqueKey = 'CODE') {
        let groupedByCode = this.groupBy(array, uniqueKey);
        groupedByCode.forEach((cv, ck) => {
            groupedByCode.set(ck, mapObjectCallback(cv))
        });
        return groupedByCode;
    }

    // groups array to map using a key
    groupBy(array, keyAttr) {
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
}

const dataClient = new DataClient();
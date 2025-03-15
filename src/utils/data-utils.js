class DataUtils {

    static getImageUrl(imageUrl) {
        if (imageUrl) {
            return environment.imagesRepositoryURL + imageUrl;
        }
        return null;
    }

   // groups array to map by 2 levels: GAME_CODE then @uniqueKey
    static arrayTo2LevelMap(array, objectMappingCallback, uniqueKey = 'CODE') {
        let groupedByGame = this.groupBy(array, 'GAME_CODE');
        groupedByGame.forEach((gv, gk) => {
            let groupedByCode = this.arrayTo1LevelMap(gv, objectMappingCallback, uniqueKey)
            groupedByGame.set(gk, groupedByCode);
        });
        return groupedByGame;
    }

    // groups array to map by 1 level: @uniqueKey
    static arrayTo1LevelMap(array, objectMappingCallback, uniqueKey = 'CODE') {
        let groupedByCode = this.groupBy(array, uniqueKey);
        groupedByCode.forEach((cv, ck) => {
            groupedByCode.set(ck, objectMappingCallback(cv))
        });
        return groupedByCode;
    }

    // groups array to map using a key
    static groupBy(array, keyAttr) {
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
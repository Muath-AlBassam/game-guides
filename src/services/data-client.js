
class DataClient {
    
    // workbook is loaded in mainjs
    async loadData(sheetName) {
        if (sheetName instanceof Array) {
            let resMap = new Map([]);
            sheetName.forEach(name => {
                resMap.set(name, this.getSheetData(name));
            });
            return resMap;
        } else {
            return this.getSheetData(sheetName);
        }
    }

    getSheetData(sheetName) {
        if (storeService.get("remoteWorkbookMap") != null) {
            console.log('fetching data from remote sheet', sheetName);
            return storeService.get("remoteWorkbookMap").get(sheetName);
        } else {
            console.log('fetching data from local sheet', sheetName);
            const worksheet = storeService.get("localWorkbook").Sheets[sheetName];
            return XLSX.utils.sheet_to_json(worksheet);
        }
    }
}

const dataClient = new DataClient();

//-----------------------------------------------------------------------------

async function loadWorkbook() {
    console.log('fetching workbook');
    await loadRemoteWorkbook();
    if (storeService.get("remoteWorkbookMap") == null) {
        await loadLocalWorkbook();
    }
}

async function loadLocalWorkbook() {
    const sheet = await fetch('assets/Game Guides DB.xlsx');
    const arrayBuffer = await sheet.arrayBuffer();
    storeService.set("localWorkbook", XLSX.read(arrayBuffer, { type: 'array' }));
}

async function loadRemoteWorkbook() {
    try {
        const url = environment.googleSheetApiURL;
        const response = await fetch(url);
        const data = await response.json();
        
        let remoteWorkbookMap = new Map([]);
        data.sheets.forEach(sheet => {
            const sheetName = sheet.properties.title;
            const sheetData = sheet.data[0].rowData || [];
            const jsonData = convertSheetDataToJSON(sheetData);
            remoteWorkbookMap.set(sheetName, jsonData);
        });
        storeService.set("remoteWorkbookMap", remoteWorkbookMap);
    } catch (error) {
        console.error("Error fetching data:", error);
        remoteWorkbookMap = null;
    }
}

function convertSheetDataToJSON(rowData) {
    if (!rowData || rowData.length === 0) {
        return [];
    }
    // Extract headers (first row)
    const headers = rowData[0].values.map(cell => cell.effectiveValue?.stringValue || "");
    // Map remaining rows into objects
    return rowData.slice(1).map(row => {
        let obj = {};
        row.values.forEach((cell, index) => {
            obj[headers[index]] = cell.effectiveValue?.stringValue ?? 
                                  cell.effectiveValue?.numberValue ?? 
                                  cell.effectiveValue?.boolValue ?? 
                                  null;
        });
        return obj;
    });
}
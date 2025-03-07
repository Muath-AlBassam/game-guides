
sheet = null;
async function loadSheetData(sheetName) {
    const sheet = await fetch('Game Guides DB.xlsx');
    const arrayBuffer = await sheet.arrayBuffer();
    const workbook = XLSX.read(arrayBuffer, { type: 'array' });
    const worksheet = workbook.Sheets[sheetName];
    // Convert to array of objects
    return XLSX.utils.sheet_to_json(worksheet);
}
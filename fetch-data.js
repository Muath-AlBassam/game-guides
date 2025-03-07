async function loadExcel() {
    const response = await fetch('GameGuidesDB.xlsx');
    const arrayBuffer = await response.arrayBuffer();

    const workbook = XLSX.read(arrayBuffer, { type: 'array' });
    const worksheet = workbook.Sheets['ROLES'];

    // Convert to array of objects
    const data = XLSX.utils.sheet_to_json(worksheet);

    console.log('Excel data:', data);

    // Optional: Convert to Map if needed
    const dataMap = new Map();
    data.forEach((row, index) => {
      dataMap.set(index, row);
    });

    console.log('Data Map:', dataMap);
}
// Expirement:
// Keep characters in csv file instead of map

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

// function readXLSXFromDrive() {
//     fetch('url')
//         .then(response => {
//             console.log('response', response);
//             if (!response.ok)  {
//                 throw new Error('Network response was not ok')
//             };
//             return response.arrayBuffer();
//         })
//         .then(data => {
//             console.log('data', data);
//             const workbook = XLSX.read(data, { type: 'array' });
//             const firstSheetName = workbook.SheetNames[0];
//             const worksheet = workbook.Sheets[firstSheetName];
//             const sheetData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
//             console.log(sheetData); // Log the array to the console
//         })
//         .catch(error => {
//             console.error('Error fetching or processing the file:', error);
//         });
// }
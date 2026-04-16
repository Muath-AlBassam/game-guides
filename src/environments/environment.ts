const SHEET_ID = '1TTxIyex6wElkeuqkQWT-ja5YsGbjJWPUJ_k4NfvMmuc';
const G_API_KEY = 'AIzaSyCvDWfzC-bF_qJqV0H_bxKYvkX2CMANVSU';

export const environment = {
    production: true,
    name: "Game Guides",
    googleSheetApiURL: `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}?includeGridData=true&key=${G_API_KEY}`,
    imagesRepositoryURL: "https://raw.githubusercontent.com/Muath-AlBassam/game-guides-assets/main/",
    // imagesRepositoryURL: "http://localhost:8001/",
}
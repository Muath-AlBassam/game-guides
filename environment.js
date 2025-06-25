const environment = {};

environment.production = true;
environment.name = "Game Guides";
environment.googleApiKey = "AIzaSyCvDWfzC-bF_qJqV0H_bxKYvkX2CMANVSU";
environment.gaguSpreadsheetId = "1UD57k1cChp-3MnpTUWLz2RHCZc5LkyPvhEj7C6G_MWU";
environment.googleSheetApiURL = `https://sheets.googleapis.com/v4/spreadsheets/${environment.gaguSpreadsheetId}?includeGridData=true&key=${environment.googleApiKey}`;
environment.imagesRepositoryURL = "https://raw.githubusercontent.com/Muath-AlBassam/game-guides-assets/main/";
// environment.imagesRepositoryURL = "http://localhost:8001/";

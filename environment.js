const environment = {
    GOOGLE_API_KEY: "AIzaSyCvDWfzC-bF_qJqV0H_bxKYvkX2CMANVSU",
    GAGU_SPREADSHEET_ID: "1UD57k1cChp-3MnpTUWLz2RHCZc5LkyPvhEj7C6G_MWU",

    get GOOGLE_SHEET_API_URL() {
        return `https://sheets.googleapis.com/v4/spreadsheets/${this.GAGU_SPREADSHEET_ID}?includeGridData=true&key=${this.GOOGLE_API_KEY}`;
    }
}
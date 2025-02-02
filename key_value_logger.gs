function doGet() {
  return HtmlService.createHtmlOutputFromFile('index');
}

function logData(key, value) {
  var sheet = SpreadsheetApp.openById('YOUR_SHEET_ID').getActiveSheet();
  sheet.appendRow([new Date(), key, value]);
  return 'Success';
}

function doGet() {
  return HtmlService.createHtmlOutputFromFile('index');
}

function logData(key, value) {
  const KEY_VALUE_LOG_SHEET_ID = getSheetIdFromDrive();
  const sheet = SpreadsheetApp.openById(KEY_VALUE_LOG_SHEET_ID).getActiveSheet();
  sheet.appendRow([new Date(), key, value]);
  return 'Success';
}

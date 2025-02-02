function doGet() {
  return HtmlService.createHtmlOutputFromFile('index');
}

function logData(key, value) {
  var KEY_VALUE_LOG_SHEET_ID=getSheetIdFromDrive()
  var sheet = SpreadsheetApp.openById(KEY_VALUE_LOG_SHEET_ID).getActiveSheet();
  sheet.appendRow([new Date(), key, value]);
  return 'Success';
}

function getSheetIdFromDrive() {
  sheet="Key Value Log"
  return "lsifvns"
}

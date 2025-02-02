function getSheetIdFromDrive() {
    const folderId = '16Ijt3xyams_B3uOlpCLIIF-D1UbTBU2l';
    const fileName = 'key_value_log_sheet_id.txt';
  
    try {
      const folder = DriveApp.getFolderById(folderId);
      const files = folder.getFilesByName(fileName);
  
      if (files.hasNext()) {
        const file = files.next();
        // Check MIME type (optional but good practice)
        if (file.getMimeType() === MimeType.PLAIN_TEXT) { // Or MimeType.JSON
           return file.getBlob().getDataAsString().trim(); // .trim() removes whitespace
        } else {
          Logger.log(`Incorrect MIME type: ${file.getMimeType()}`);
          return null;
        }
  
      } else {
        Logger.log(`File not found: ${fileName}`);
        return null;
      }
    } catch (error) {
      Logger.log(`Error retrieving sheet ID: ${error}`);
      return null;
    }
  }
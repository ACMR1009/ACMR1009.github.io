function downloadFile(fileUrl, fileName) {
  var file = document.createElement("a");
  file.href = fileUrl;
  file.setAttribute("download", fileName);
  file.click();
}
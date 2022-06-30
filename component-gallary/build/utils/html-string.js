function HTMLTransferToString(htmlCode) {
  let s = "";
  if (htmlCode.length == 0) return "";
  s = htmlCode.replace(/&/g, "&amp;");
  s = s.replace(/</g, "&lt;");
  s = s.replace(/>/g, "&gt;");
  s = s.replace(/ /g, "&nbsp;");
  s = s.replace(/'/g, "&#39;");
  s = s.replace(/"/g, "&quot;");
  return s;
}

module.exports = {
  HTMLTransferToString
}

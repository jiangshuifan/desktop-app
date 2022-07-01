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

function stripTemplate(content) {
  content = content.trim()
  if (!content) {
    return content
  }
  return content.replace(/<(script|style)[\s\S]+<\/\1>/g, '').trim()
}

function getTemplateContent(){

}

function getScriptContent(){

}

function getStyleContent(){

}
module.exports = {
  HTMLTransferToString,stripTemplate
}
